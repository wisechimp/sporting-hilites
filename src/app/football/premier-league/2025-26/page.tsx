import NewsList from "@/components/News-List/news-list";
import { getPosts } from "@/functions";

const pl202526LandingPage = async () => {
  const matchweeksList = await getPosts("football/premier-league/2025-26");

  return (
    <div>
      <h1>Premier League Season 2025/26</h1>
      <p>
        This was the umpteenth running on the top tier of English football in
        it`&apos`s various guises.
      </p>
      <p>
        At the top end of the table Arsenal were hoping to finally break their
        drought having come close in recent years while Man City had
        streangthened with an eye on regaining their crown. Liverpool had also
        massively strengthened, on paper at least, make som ereference to the
        Isak saga.
      </p>
      <p>Something about the middling clubs.</p>
      <p>
        Clubs had come up and were favourites to go down, but Wolves and West
        Ham were probably looking over their shoulder after a poor finish to the
        preious season and a lack of quality looking signings over the summer.
      </p>
      <NewsList data={matchweeksList} />
    </div>
  );
};

export default pl202526LandingPage;
