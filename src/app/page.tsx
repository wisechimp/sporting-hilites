import Link from "next/link";

import Footer from "@/components/Footer";

import styles from "./page.module.css";

const Home = async () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Sporting Hi Lites!</h1>
          <p>
            All the hightlights from the latest Premier League gameweek, plus ad
            hoc bonus content...
          </p>
          <h2>Choose your Sport!</h2>
          <Link href="/football">Football</Link>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
