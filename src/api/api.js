import axios from "axios";

let endpoint = "https://qtify-backend-labs.crio.do";

// functional like the service layer in backend

export const fetchTopAlbums = async () => {
  try {
    let res = await axios.get(`${endpoint}/albums/top`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log("Error during fetching of top albums", err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    let res = await axios.get(`${endpoint}/albums/new`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log("Error during fetching of albums", err);
  }
};

export const fetchSongs = async () => {
  try {
    let res = await axios.get(`${endpoint}/songs`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log("Error during fetching of songs", err);
  }
};

export const fetchGenres = async () => {
  try {
    let res = await axios.get(`${endpoint}/albums/genres`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log("Error during fetching of albums", err);
  }
};