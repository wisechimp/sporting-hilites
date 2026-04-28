import Link from "next/link";

const premierLeagueHome = () => {
  return (
    <div>
      <h1>The Premier League</h1>
      <p>
        The top of the pyramid in English football. Formerly known at the First
        Division until a branded breakaway funded by television money launched
        the financial behemoth we know and love (do we!?!) today.
      </p>
      <div className="flexList">
        <Link className="flexListItem" href="/football/premier-league/2025-26">
          Season 2025-26
        </Link>
      </div>
    </div>
  );
};

export default premierLeagueHome;
