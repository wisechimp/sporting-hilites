import Link from "next/link";

const premierLeagueHome = () => {
  return (
    <div>
      <h1>The Premier League</h1>
      <p>Some chit chat about the top division in England.</p>
      <Link href="/football/premier-league/2025-26">Season 2025-26</Link>
    </div>
  );
};

export default premierLeagueHome;
