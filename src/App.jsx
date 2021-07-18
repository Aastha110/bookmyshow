import { Route } from "react-router-dom";

import DefaultHOC from "./HOC/Default.HOC";

//components
import Temp from "./Components/temp";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component = {Temp} /> 
    </>
  );
}

export default App;


