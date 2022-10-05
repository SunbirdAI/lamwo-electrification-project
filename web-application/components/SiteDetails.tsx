import { useEffect } from "react";
import {
  fetchGlobalMapdata,
  measureCoordDistance,
} from "./Utils";
import {
  BarChart,
  RadialAreaChart,
  RadialAxis,
  PieChart,
  PieArcSeries,
} from "reaviz";
import { useState } from "react";

const SiteDetails = (props: any) => {
  const data = props.data;

  const [NESCategoryData, setNESCategory] = useState<any>([]);
  const [nearbyAreas, setNearbyAreas] = useState<any>([]);


  let nesData: any = [];
  let totalEmissions = 0;
  let nearAreas: any = [];

  useEffect(() => {
    let sidebarContainer: any = document.querySelector(".sidebar");
    setTimeout(() => {
      sidebarContainer.scroll({ top: 0, behavior: "smooth" });
    }, 200);

    // plot NES electrification strategy
    fetchGlobalMapdata()
      .forEach((x: any) => {
        let psInstance = nesData.find((y: any) => y.key === x.NES_category);

        if (psInstance) {
          psInstance.data += 1;
        } else {
          nesData.push({
            key: x.NES_category,
            data: 1,
          });
        }

        totalEmissions += 1;
      });


    nesData.forEach((x: any) => {
      if (x.data !== 0) {
        x.data = (x.data / totalEmissions) * 100;
      } else {
        x.data = 0;
      }
    });

    nesData = nesData.sort((a: any, b: any) => b.data - a.data);

    setNESCategory(nesData);

    // produce data for the nearby areas to explore
    fetchGlobalMapdata()
      .forEach((x: any) => {
        x.distanceFromArea = measureCoordDistance(
          data.latitude,
          data.longitude,
          x.latitude,
          x.longitude,
          "k"
        );
        nearAreas.push(x);
      });

    nearAreas = nearAreas.sort(
      (a: any, b: any) => a.distanceFromArea - b.distanceFromArea
    );

    setNearbyAreas(nearAreas);

  }, [props.data]);

  return (
    <>
      <div className="banner-image">
        <span className="mt-auto">{data.village}</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="research-tab px-1 mt-5 pt-5">
        <h2 className="mt-0">Electrification of {data.village}</h2>
        <p>
          <span className="text-primary">{data.village}</span> is a village located in {" "}
          <span className="text-primary">{data.parish}</span> parish and {" "}
          <span className="text-primary">{data.subcounty}</span> sub county in Lamwo.
        </p>

        <p>
          <h3 className="text-primary mt-2">
            Proposed NES strategy: {data.NES_category}
          </h3>
        </p>

        <p>
          For this particular village our analysis from current data sources is as follows:
        </p><p>
          <ol className="list-item mt--3 pl-4">
            <li> <strong>Number of buildings</strong> - {data.num_buildings} </li>
            <li> <strong>Num of permanent buildings</strong> - {data.num_permanent_buildings} </li>
            <li> <strong>Num of buildings in 1 Km radius</strong> - {data.max_num_buildings_in_1km_radius} </li>
            <li> <strong>Mean wind speed</strong> - {data.mean_wind_speed} m/s </li>
            <li> <strong>Vegetation percentile</strong> - {data.vegetation_percentile} </li>
          </ol>
        </p>

        <div className="pl-3 mt-4">
            <BarChart
              height={180}
              width={320}
              data={[
                { key: "# Buildings", data: data.num_buildings },
                { key: "# Permanent Buildings", data: data.num_permanent_buildings },
                { key: "# Buildings(1Km)", data: data.max_num_buildings_in_1km_radius },
              ]}
            />
          </div>

        <h2 className="mt-4">Potential for renewable energy</h2>
        <img
          src="https://images.unsplash.com/photo-1592833159117-ac790d4066e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=20"
          className="img-fluid my-2"
        />
        <p>
          <div>

            {data.power_demand_analysis.map((element: any, index: number) => {
              return (
                <div key={index}>
                  <h4 className="text-primary mt-2">Power demand analysis for {element.source}</h4>

                  {element.detail}<br />
                  <span><strong>{element.factor_in_favour ? "HIGH POTENTIAL" : "LOW POTENTIAL"}</strong></span>
                </div>
              );

            })}

          </div>

        </p>

        <p>
          <div>

            {data.power_supply_analysis.map((element: any, index: number) => {
              return (
                <div className="content" key={index}>
                  <h4 className="text-primary mt-2">Power supply analysis for {element.source}</h4>
                  {element.detail}<br />
                  <span><strong>{element.factor_in_favour ? "HIGH POTENTIAL" : "LOW POTENTIAL"}</strong></span>
                </div>
              );

            })}

          </div>

        </p>

        <h3 className="mt-4">
          <i className="la la-map text-primary mr-1" />
          Explore Nearby Areas:
        </h3>

        <div className="area-explorer">
          {nearbyAreas.slice(1, 100).map((item: any, index: number) => {
            return (
              <div
                className="area-item"
                key={index}
                onClick={() => {
                  let markerItem: any = document.querySelector(
                    `#mk-${item.ID}`
                  );
                  if (markerItem) {
                    markerItem.click();
                  }
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1536481046830-9b11bb07e8b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=10"
                  alt="area image"
                />
                <span>
                  <strong>{item.village}</strong>
                </span>
                <span className="text-primary">
                  {item.distanceFromArea.toFixed(3)} km
                </span>
              </div>
            );
          })}
        </div>

        <hr />

        <h2 className="mt-4">Overall electrification outlook for Lamwo</h2>

        <p>
          Based on the National Electrification Strategy, the current
          electrification options for villages in Lamwo looks like this:
        </p>
        <div className="mt--5">
          <RadialAreaChart
            data={NESCategoryData}
            height={330}
            width={330}
            axis={<RadialAxis type="category" />}
          />
        </div>
        <p className="mt--5">
          This chart shows us that the district is predominantly targetted
          for Solar Home Systems with large emphasis on grid extension as the
          electrification options. A large portion of the districts no
          provision is offered by the NES. This dashboard provides options
          based on the available data sources.
        </p>

        <p>
          A more detailed depiction of the electrification options for Lamwo
          district is provided here as well.
        </p>

        <div className="ml-3">
          <PieChart
            width={300}
            height={230}
            data={NESCategoryData}
            series={
              <PieArcSeries
                cornerRadius={3}
                padAngle={0.02}
                padRadius={200}
                doughnut={true}
                colorScheme={["#bc5090", "#ff6361", "#ffa600"]}
              />
            }
          />
        </div>

        <ol className="list-item mt--3 pl-4">
          {NESCategoryData.map((x: any) => {
            return (
              <li>
                <strong>{x.key}</strong> - {x.data.toFixed(3)}%
              </li>
            );
          })}
        </ol>


      </div>
    </>
  );
};

export default SiteDetails;
