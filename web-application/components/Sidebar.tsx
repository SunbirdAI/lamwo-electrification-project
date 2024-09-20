import axios from "axios";
import { useEffect, useState } from "react";
import DetailsScreen from "./DetailsScreen";
import ReasearchTab from "./ResearchTab";
import AboutTab from "./AboutTab";
import SiteDetails from "./SiteDetails";
import { setGlobalMapdata, startPageLoad, stopPageLoad } from "./Utils";
import MapStyleSelector from "../styles/MapStyleSelector";
import LoadingSkeleton from "./LoadingSkeleton";

const Sidebar = (props: any) => {
  const [areas, setAreas] = useState<any>(null);
  const [screen, setScreen] = useState<string>("home");
  const [selectedSite, selectSite] = useState<any>(null);
  const [query, setQuery] = useState<any>("");

  //added
  const [search, setSearch] = useState<boolean>(false);
  const [visibleAreas, setVisibleAreas] = useState(10);

  const loadMore = () => {
    setVisibleAreas((prevCount) => prevCount + 10); // Load 10 more items
  };

  const sidebarScrollTop = () => {
    let sidebarContainer: any = document.querySelector(".sidebar");

    sidebarContainer.scroll({ top: 0 });
  };

  const fetchData = () => {
    startPageLoad();
    axios.get("/api/lamwo_villages").then((res: any) => {
      setAreas(res.data);

      setGlobalMapdata(res.data);

      // trigger marker render
      let markerTrigger: any = document.getElementById("load-markers");
      if (markerTrigger) {
        markerTrigger.click();
      }

      stopPageLoad();
    });
  };

  const viewDetails = (details: any) => {
    if (search) setSearch(false);
    let detailCoordinates = {
      lat: details.latitude,
      lng: details.longitude,
    };

    sidebarScrollTop();

    localStorage.coordinates = JSON.stringify(detailCoordinates);
    props.setCoordinates(detailCoordinates);
    selectSite(details);
    setScreen("details");

    // set the pointer to active state when an event is selected
    let markerItem: any = document.querySelector(`#mk-${details.ID}`);
    let currentActiveMarker: any = document.querySelector(".active-marker");

    currentActiveMarker?.classList.remove("active-marker");

    if (markerItem) {
      markerItem.classList.add("active-marker");
    }
  };

  const searchDataset = (search_query: string) => {
    startPageLoad();
    axios.get(`/api/lamwo_villages?search=${search_query}`).then((res: any) => {
      setAreas(res.data);

      stopPageLoad();
    });
  };

  useEffect(() => {
    fetchData();

    let sidebarThread: any = document.querySelector(".sidebar");
    sidebarThread.onscroll = () => {
      let scroll = sidebarThread.scrollTop;
      if (scroll > 1200 && scroll < 1300) {
      }
    };
  }, []);

  useEffect(() => {
    if (props.selectedArea) {
      viewDetails(props.selectedArea);
    }
  }, [props.selectedArea]);

  return (
    <>
      <div className="sidebar">
        {screen === "details" && (
          <DetailsScreen setScreen={setScreen} title="Location Details">
            <SiteDetails data={selectedSite} setScreen={setScreen} />
          </DetailsScreen>
        )}

        {screen === "research" && (
          <DetailsScreen setScreen={setScreen} title="Project Resources">
            <ReasearchTab />
          </DetailsScreen>
        )}

        {screen === "about" && (
          <DetailsScreen setScreen={setScreen} title="About Sunbird">
            <AboutTab />
          </DetailsScreen>
        )}

        {screen === "home" && (
          <>
            <div className="sidebar-navigation">
              <div className="top-bar">
                {!search && <img src="/images/sunbird-logo.jpg" />}
                {search && (
                  <>
                    <button
                      className="back-btn btn fade-in"
                      onClick={() => {
                        setSearch(false);
                        setQuery("");
                        fetchData();
                      }}
                    >
                      <i className="la la-arrow-circle-left" />
                    </button>
                  </>
                )}
                <div className="mt-1 mr-2 d-flex">
                  <input
                    type="text"
                    placeholder="Search Village.."
                    className="form-control"
                    id="search-input"
                    value={query}
                    onChange={(e: any) => {
                      setSearch(true);
                      setQuery(e.target.value);
                      searchDataset(e.target.value);
                      if (e.key === "Enter") {
                        searchDataset(e.target.value);
                      }
                    }}
                  />
                  <button
                    className="btn btn-default ml-2"
                    onClick={() => {
                      searchDataset(query);
                    }}
                  >
                    <i className="la la-search" />
                  </button>
                </div>
              </div>
              {!search && (
                <div className="nav-links">
                  <span className="active">Villages</span>
                  <span
                    onClick={() => {
                      setScreen("research");
                      sidebarScrollTop();
                    }}
                  >
                    Project resources
               8   </span>

                  <span
                    onClick={() => {
                      setScreen("about");
                      sidebarScrollTop();
                    }}
                  >
                    About Sunbird
                  </span>
                </div>
              )}
            </div>

            <div className="sidebar-content">
              {!search && (
                <>
                  <div className="cover-card fade-in dl-2">
                    <span className="mt-auto">
                      Electrification strategy for Lamwo district
                    </span>
                  </div>

                  <MapStyleSelector />
                </>
              )}
              <h4>
                <i className="la la-list text-primary" />
                Villages in Lamwo
              </h4>
              {areas && areas.length === 0 && query.trim() !== "" && (
                <div className="mt-3 border-top py-3 fade-in-bottom">
                  <h2>No results found.</h2>
                </div>
              )}
              {!areas && <LoadingSkeleton />}
              {areas &&
                areas.slice(0, visibleAreas).map((data: any, index: number) => {
                  return (
                    <div
                      className="card-item"
                      key={index}
                      onClick={() => {
                        viewDetails(data);
                      }}
                    >
                      <div className="card-item-content">
                        <div className="score-card">
                          <span>
                            <i className="la la-sun" />
                          </span>
                        </div>

                        <div className="card-info">
                          <span>
                            <strong>{data.village}</strong>
                          </span>
                          <div className="tag-row mt-1">
                            <small className="badge badge-primary mr-2">
                              Village ID
                            </small>
                            <small className="badge badge-primary">
                              {data.facility_name}
                            </small>
                          </div>
                        </div>
                      </div>
                      <i className="la la-chevron-circle-right la-2x" />
                    </div>
                  );
                })}

              {areas && (
                <div className="load-area">
                  {visibleAreas < areas.length && (
                    <button className="load-btn" onClick={loadMore}>
                      show more . . .
                    </button>
                  )}
                  {areas.length > 0 && visibleAreas > 10 && (
                    <button
                      className="load-btn"
                      onClick={() => setVisibleAreas(10)}
                    >
                      show less
                    </button>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
