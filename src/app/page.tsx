import { getLatestNews } from "@/sanity/sanity-utils";

import NewsList from "./components/News-List/news-list";
import styles from "./page.module.css";

const Home = async () => {
  const latestNews = await getLatestNews();
  console.log(JSON.stringify(latestNews));

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Match of the Day Free!</h1>
          <p>
            All the hightlight from the latest Premier League gameweek, plus
            bonus content...
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
