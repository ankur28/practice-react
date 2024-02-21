import "./App.css";
import Accordian from "./components/Accordian";
import RandomColorGenerator from "./components/RandomColor";
import StarRating from "./components/star-rating";
import Stepper from "./components/stepper";

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColorGenerator />
      <StarRating numOfStar={5} />
      <Stepper />
    </div>
  );
}

export default App;
