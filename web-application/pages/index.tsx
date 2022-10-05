import { useState } from "react";
import Layout from "../components/Layout";
import MapInterface from "../components/MapInterface";
import Sidebar from "../components/Sidebar";

const Index = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [selectedArea, selectArea] = useState(null);

  return (
    <>
      <Layout>
        <div className="grid-wrapper fade-in" />
        <Sidebar
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          selectedArea={selectedArea}
        />
        <MapInterface
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          selectArea={selectArea}
        />
      </Layout>
    </>
  );
};

export default Index;
