import { sanityFetch } from "@/sanity/lib/live";
import { getLatestNews } from "@/sanity/lib/queries";

import NewsList from "../components/News-List/news-list";
import styles from "./page.module.css";

const Home = async () => {
  const { data: latestNews } = await sanityFetch({
    query: getLatestNews,
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Sporting Hi Lites!</h1>
          <p>
            All the hightlights from the latest Premier League gameweek, plus ad
            hoc bonus content...
          </p>
          <h2>Latest News</h2>
          <NewsList data={latestNews} />
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          <p>Eh up sommat &apos;ere lad.</p>
          <p>Probably have a custom component footer</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
