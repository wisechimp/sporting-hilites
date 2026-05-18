import Link from "next/link";

const Home = async () => {
  return (
    <div>
      <main>
        <div>
          <h1>Sporting Hi Lites!</h1>
          <p>
            A growing collection of links to hightlights from the sporting
            world, including the Premier League and Rugby League's Super League.
          </p>
          <h2>Choose your Sport!</h2>
          <div className="flexList">
            <Link className="flexListItem" href="/football">
              Football
            </Link>
            <Link className="flexListItem" href="/rugby-league">
              Rugby League
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
