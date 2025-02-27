import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import {
  currentLocation,
  fetchGlobalMapdata,
  isMobile,
  satelliteStyle,
} from "./Utils";

// replace with your own access token from Mapbox.
mapboxgl.accessToken =
  "pk.eyJ1IjoiZW13ZWJhemUiLCJhIjoiY2w2OHRpMzI5MGJhNDNkcGUycjVoYmZoNiJ9.XngKi9j4uHqN0iiJSlMyhQ";

const MapInterface = (props: any) => {
  useEffect(() => {
    // start new Mapbox Instance
    const map = new mapboxgl.Map({
      container: document.getElementById("map"),
      style: localStorage.mapStyle ? localStorage.mapStyle : satelliteStyle,
      center: [32.702, 3.508],
      zoom: 9,
      minZoom: 6,
      maxPitch: 65, // pitch in degrees
      maxBearing: -65, // bearing in degrees
    });

    map.on("load", () => {
      map.addSource("lamwo_villages", {
        type: "geojson",
        data: "/geojson_maps/lamwo_villages.geojson",
      });

      map.addSource("lamwo_buildings", {
        type: "geojson",
        data: "/geojson_maps/lamwo_buildings.json",
      });

      map.addSource('grid', {
        'type': 'geojson',
        'data': '/geojson_maps/grid-existing.geojson'
      });

      map.addSource('candidate-MGs', {
        'type': 'geojson',
        'data': '/geojson_maps/Candidate-MGs.geojson'
      });

      map.addSource('Existing-MGs', {
        'type': 'geojson',
        'data': '/geojson_maps/Existing-MGs.geojson'
      });

      // Add Lamwo villages to map.
      map.addLayer({
        'id': 'id_villages',
        'type': 'fill',
        'source': 'lamwo_villages', // reference the data source
        'layout': {},
        'paint': {
          'fill-color': '#ECF87F', // olive green
          'fill-opacity': 0.2
        }
      });

      // Add Lamwo building outlines.
      map.addLayer({
        'id': 'outline_buildings',
        'type': 'line',
        'source': 'lamwo_buildings',
        'layout': {},
        'paint': {
          'line-color': '#59981A',
          'line-width': 2
        }
      });

      // Add Lamwo village outlines.
      map.addLayer({
        'id': 'outline_villages',
        'type': 'line',
        'source': 'lamwo_villages',
        'layout': {},
        'paint': {
          'line-color': '#3D550C',
          'line-width': 1
        }
      });

      // Add electricity grid.
      map.addLayer({
        'id': 'electricity_grid',
        'type': 'line',
        'source': 'grid',
        'layout': {},
        'paint': {
          'line-color': '#0000FF',
          'line-width': 1
        }
      });

      // Add candidate MG
      // Icons from https://github.com/mapbox/mapbox-gl-styles
      map.addLayer({
        'id': 'candidate-mgs',
        'type': 'symbol',
        'source': 'candidate-MGs',
        'layout': {
          'icon-image': 'monument-15', //school
          'icon-allow-overlap': true,
          'icon-size': 1
        },
      });

      map.addLayer({
        'id': 'existing-mgs',
        'type': 'symbol',
        'source': 'Existing-MGs',
        'layout': {
          'icon-image': 'school-15',
          'icon-allow-overlap': true,
          'icon-size': 1
        },
      });

      let popup = new mapboxgl.Popup({
        pointerEvents: "none",
      });

      // create pop up on click
      map.on("mouseenter", "candidate-mgs", function (e: any) {
        const coordinates = e.features[0].geometry.coordinates.slice();

        const description = `
            <div class="map-marker 
                suggested-area active-marker">
            <div class="marker-info">
            <div class="marker-info-content">
            <div class="content">
            <span>Name: ${e.features[0].properties.Name}</span>
            <small><strong>Pop to Serve:</strong> ${e.features[0].properties.Population}</small>
            </div>

            <small class="badge badge-info">
            CANDIDATE MINI-GRID
            </small>
            </div></div></div>`


        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates);

        popup.setHTML(description);
        popup.addTo(map);

      });

      map.on("mouseenter", "existing-mgs", function (e: any) {
        const coordinates = e.features[0].geometry.coordinates.slice();

        const description = `
            <div class="map-marker 
                suggested-area active-marker">
            <div class="marker-info">
            <div class="marker-info-content">
            <div class="content">
            <span class="mb-1">Name: ${e.features[0].properties.Village_Na}</span>
            <small><strong>Category:</strong> ${e.features[0].properties.Category}</small>
            <small><strong>Capacity:</strong> ${e.features[0].properties.Capacity}</small>
            <small><strong>Implementation Partner:</strong> 
            ${e.features[0].properties.Developer === 'GIZ/REA' ? 'MEMD-EU-GIZ' : e.features[0].properties.Developer}</small>
            <small><strong>Details:</strong> ${e.features[0].properties.Remarks}</small>
            </div>

            <small class="badge badge-success">
            EXISTING MINI-GRID
            </small>
            </div></div></div>`


        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates);

        popup.setHTML(description);
        popup.addTo(map);

      });

      map.on('mouseenter', ['candidate-mgs', 'existing-mgs'], () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', ['candidate-mgs', 'existing-mgs'], () => {
        map.getCanvas().style.cursor = '';
      });

    });

    const flytoLocation = () => {
      // console.log("dest=>", props.coordinates);
      map.flyTo({
        center: [currentLocation().lng, currentLocation().lat],
        // zoom: map.getZoom(),
        zoom: 15,
        speed: 1.25,
        essential: true,
      });
    };

    const renderMarkers = () => {
      let markersData: any = fetchGlobalMapdata();
      let existingMarker = document.querySelector(".map-marker");

      if (!existingMarker) {
        markersData.forEach((nmarker: any, index: number) => {
          var elx = document.createElement("div");
          elx.className = `marker-location-update lu-${index}`;
          elx.onclick = () => {
            props.selectArea(nmarker);
          };

          elx.onmouseenter = () => {
            map.getCanvas().style.cursor = 'pointer';
          };
          elx.onmouseleave = () => {
            map.getCanvas().style.cursor = '';
          };

          elx.innerHTML = `

          <div class="map-marker suggested-area area-marker" id="mk-${nmarker.ID}">
          <div class="marker-info suggested-area area-marker">
          <div class="marker-info-content">
          <div class="content">
          <span>Village: ${nmarker.village}</span>
          <small><strong>Parish:</strong> ${nmarker.parish}</small>
          </div>

          <small class="badge badge-info m-2">
          VILLAGE MARKER
          </small>
           </div>
           <div class="info-point"></div>
           </div>
          <div class="marker suggested-area"></div>
           </div></div></div>
          `;
          new mapboxgl.Marker(elx)
            .setLngLat([nmarker.longitude, nmarker.latitude])
            .addTo(map);
        });
      }

      // ease map

      if (!isMobile()) {
        map.easeTo({
          padding: { left: 320 },
          duration: 1000,
        });
      }
    };

    const changeMapStyle = () => {
      map.setStyle("mapbox://styles/mapbox/satellite-v9");
    };

    // bind events to trigger buttons
    let mapJump: any = document.getElementById("mapJump");
    let markerTrigger: any = document.getElementById("load-markers");
    let styleChangeTrigger: any = document.getElementById("change-map-style");

    mapJump.onclick = () => {
      console.log("Map fly triggered");
      flytoLocation();
    };

    markerTrigger.onclick = () => {
      console.log("Marker triggered");
      renderMarkers();
    };

    styleChangeTrigger.onclick = () => {
      changeMapStyle();
    };
  }, []);

  // fly to location when the coordinates props are set
  useEffect(() => {
    let mapJump: any = document.getElementById("mapJump");
    mapJump.click();
  }, [props.coordinates]);

  return (
    <>
      <>
        <button id="mapJump" className="d-none" />

        <button id="load-markers" className="d-none" />

        <button id="change-map-style" className="d-none" />

        <div>
          <div id="map" className="absolute top right left" />
        </div>
      </>
    </>
  );
};

export default MapInterface;
