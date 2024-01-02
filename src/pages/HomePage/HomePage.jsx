import styles from "./HomePage.module.css";
import { useOutletContext } from "react-router-dom";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Section from "../../Components/Section/Section";
import { fetchGenres, fetchFAQs } from "../../api/api";
import FAQ from "../../Components/FAQ/FAQ";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  console.log(data);

  return (
    <>
      <HeroSection />
      <div className={styles.stack}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <hr className={styles.border} />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchGenres}
          type="song"
        />
        <hr className={styles.border} />
        <FAQ faqSource={fetchFAQs} />
      </div>
    </>
  );
}

export default HomePage;
