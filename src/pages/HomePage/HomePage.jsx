import style from "./HomePage.module.css";
import { useOutletContext } from "react-router-dom";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Section from "../../Components/Section/Section";
import { fetchGenres } from "../../api/api";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  console.log(data);

  return (
    <>
      <HeroSection />
      <div className={style.stack}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchGenres}
          type="song"
        />
      </div>
    </>
  );
}

export default HomePage;
