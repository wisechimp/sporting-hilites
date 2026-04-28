import Link from "next/link";

const footballHome = () => {
  return (
    <div>
      <h1>Football!</h1>
      <p>
        The beautiful game! Known internationally as football, apart from the
        United States where it's called soccer to differentiate from the
        American sport where people pass the ball using their hands and hardly
        ever kick the ball.... Such idiosyncracies lead the English to deride
        their American brothers, even though the term Soccer originates in the
        UK and was used to tell the difference between Association Football
        (Soccer) and Rugby Football (Rugger).
      </p>
      <div className="flexList">
        <Link className="flexListItem" href="./football/premier-league">
          Premier League
        </Link>
      </div>
    </div>
  );
};

export default footballHome;
