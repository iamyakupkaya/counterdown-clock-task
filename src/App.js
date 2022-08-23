import "./assets/css/global.css";
import Bitcoin from "./Pages/Bitcoin/Bitcoin";
import Clock from "./Pages/Clock/Clock";

function App() {
  return (
    <div className="App">
      <Clock />
      <hr></hr>
      <hr></hr>
      <Bitcoin />
    </div>
  );
}

export default App;
