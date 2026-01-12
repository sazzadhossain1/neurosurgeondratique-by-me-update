import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="App">
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iure eos
        beatae iste voluptas cum ex corporis nesciunt excepturi quos.
      </h1>
      <FontAwesomeIcon icon={faHouse} />
    </div>
  );
}

export default App;
