import NewsList from "@/components/News-List/news-list";
import { getPosts } from "@/functions";

const sl2026LandingPage = async () => {
  const roundsList = await getPosts("rugby-league/super-league/2026");

  return (
    <div>
      <h1>Super League Season 2026</h1>
      <p>
        This was the umpteenth running on the top tier of English rugby league
        in it`&apos`s various guises. This would be the first season since 2014
        that 14 teams would be in the top tier, meaning everyone would meet the
        other sides in the league twice and there would now be just the single
        loop fixture for Magic Weekend.
      </p>
      <p>
        At the top end of the table Hull KR were looking to repeat their success
        of the previous season while the usual suspects had worked to upgrade
        their squads.
      </p>
      <p>Something about the middling clubs.</p>
      <p>
        Bottom clubs, who was looking in trouble after the last IMG rankings,
        and can include link to them.
      </p>
      <NewsList data={roundsList} />
    </div>
  );
};

export default sl2026LandingPage;
