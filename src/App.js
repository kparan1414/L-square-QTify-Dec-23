// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [searchData, setSearchData] = useState("");
  return (
    <>
      <Navbar searchData={searchData} />
      <HeroSection />
    </>
  );
}

export default App;
