import Link from "next/link";

const footballHome = () => {
  return (
    <div>
      <h1>Football!</h1>
      <Link href="./football/premier-league">Premier League</Link>
    </div>
  );
};

export default footballHome;
