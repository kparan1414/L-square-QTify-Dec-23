import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// lets import services from api folder
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import { Outlet } from "react-router-dom";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
import FeedbackModal from "./Components/FeedbackModal/FeedbackModal";

import albumData from "./assets/album.json";
import AlbumPage from "./pages/Album Details Page/AlbumPage";
const { title, image, songs, description, follows } = albumData;

function App() {
  // const [searchData, setSearchData] = useState("");
  const [data, setData] = useState({});
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [feedbackFormData, setFeedbackFormData] = useState(null);
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

  const handleOpenFeedbackModal = () => {
    setIsFeedbackModalOpen(true);
  };
  const handleCloseFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };
  const handleFeedbackSubmit = (data) => {
    setFeedbackFormData(data);
    handleCloseFeedbackModal();
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
      <Navbar
        searchData={[...topAlbums, ...newAlbums]}
        handleFeedbackBtn={handleOpenFeedbackModal}
      />
      <AlbumPage albumData={albumData} />
      {/* <Outlet context={{ data: { topAlbums, newAlbums, songs } }} /> */}
      <MusicPlayer />
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={handleCloseFeedbackModal}
        onSubmit={handleFeedbackSubmit}
      />
    </div>
  );
}

export default App;

// Info:
// Outlet is a placeholder kind of variable component
// still we need to pass data from App to inside components
// this is done using context
