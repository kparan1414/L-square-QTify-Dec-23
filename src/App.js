// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// lets import services from api folder
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import { Outlet } from "react-router-dom";

function App() {
  // const [searchData, setSearchData] = useState("");
  const [data, setData] = useState({});
  // below func fetches all api data & stores it in a state
  const generateData = (key, fetch) => {
    fetch().then((data) => {
      setData((currentData) => {
        return {
          ...currentData,
          [key]: data,
        };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  // after the above useEff we'll have
  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  // console.log(data);

  return (
    <div>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
    </div>
  );
}

export default App;

// Info:
// Outlet is a placeholder kind of variable component
// still we need to pass data from App to inside components
// this is done using context
