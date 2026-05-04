import NewsList from "@/components/News-List/news-list";
import { getPosts } from "@/functions";

const pl202526LandingPage = async () => {
  const matchweeksList = await getPosts("football/premier-league/2025-26");

  return (
    <div>
      <h1>Premier League Season 2025/26</h1>
      <p>
        This was the 127th season of the top tier of English football in its
        various guises.
      </p>
      <p>
        At the top end of the table Arsenal were hoping to finally break their
        drought having come close in recent years while Man City had
        strengthened with an eye on regaining their crown. Liverpool had also
        massively strengthened, on paper at least, including the controversial
        and protracted pursuit of Newcastle's former Local Hero Alexander Isak.
        Meanwhile the "World Champions" Chelsea (yeah, try saying that without
        laughing!) would be looking to join the scrap for the title.
      </p>
      <p>
        As usual the clubs who had experienced the joy of promotion last summer,
        Burnley, Leeds Utd and Sunderland were favourites to go down, while
        Wolves and West Ham were probably looking over their shoulders after a
        poor finish to the previous season and a lack of quality looking
        signings over the summer. Also many were underwhelmed by Brentford
        replacing Manger of the Season nominee, Thomas Frank, with their
        unexperienced set piece coach, Keith Andrews, alongside the loss of key
        players Bryan Mbeumo and Yoane Wissa.
      </p>
      <NewsList data={matchweeksList} />
    </div>
  );
};

export default pl202526LandingPage;
