import Link from "next/link";

const superLeagueHome = () => {
  return (
    <div>
      <h1>Super League</h1>
      <p>Some chit chat about the top division in England.</p>
      <Link href="/rugby-league/super-league/2026">Season 2026</Link>
    </div>
  );
};

export default superLeagueHome;
