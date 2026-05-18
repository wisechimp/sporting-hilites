import { FaHome } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { LiaFootballBallSolid } from "react-icons/lia";

const sportsMenuData = [
  {
    id: "home01",
    title: "Home",
    slug: "/",
    Icon: FaHome,
  },
  {
    id: "football01",
    title: "Football",
    slug: "/football",
    Icon: GiSoccerBall,
  },
  {
    id: "rugbyLeague01",
    title: "Rugby League",
    slug: "/rugby-league",
    Icon: LiaFootballBallSolid,
  },
];

export default sportsMenuData;
