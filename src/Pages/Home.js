import BestCharacters from "../Components/BestCharacters";
import Insider from "../Components/Insider/Insider";
import ListLastEvents from "../Components/ListLastEvents";
//import Insider from "../Components/Insider";

export default function Home() {
  return (
    <div>
      <BestCharacters />
      <ListLastEvents />
      <Insider />
    </div>
  );
}
