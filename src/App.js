import AboutRef from "./Hooks/AboutRef";
import ElementDimensions from "./Hooks/ElementDimensions";
import UseRef from "./Hooks/UseRef";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <UseRef />
      <ElementDimensions />
      <AboutRef />
    </div>
  );
}
