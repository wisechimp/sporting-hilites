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
      <p>
        Will anyone be promoted or relagated this season? Your guess is as good
        as mine. Super League status is dependent on a series of grading
        criteria with the 9 grade A club currently guaranteed Super League
        status pretty much regardless of their league position. Meanwhile the 5
        Grade B sides would be looking over their shoulders and hoping none of
        their nearest competitors in the Championship put together a dazzling
        run of form on the pitch, or presumably a smart, viral, social media
        campaign off it...
      </p>
      <div className="flexList">
        <NewsList data={roundsList} />
      </div>
    </div>
  );
};

export default sl2026LandingPage;
