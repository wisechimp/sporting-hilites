import Link from "next/link";

const superLeagueHome = () => {
  return (
    <div>
      <h1>Super League</h1>
      <p>
        The Super League, formerly the Rugby Football League Championship First
        Division (phew, what a mouthful!) is the top tier of rugby league in
        England. It has recently expended to 14 sides for the 2026 season, from
        12 previously. The side who tops the table at the end of the regular
        season wins the League Leaders Shield while the top six sides go into a
        play off, with the final 2 sides coming through this meeting in the
        Grand Final at Old Trafford as the season's climax.
      </p>
      <div className="flexList">
        <Link className="flexListItem" href="/rugby-league/super-league/2026">
          Season 2026
        </Link>
      </div>
    </div>
  );
};

export default superLeagueHome;
