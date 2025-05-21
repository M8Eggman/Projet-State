import { useState } from "react";
import "./App.css";
import Add_ons from "./components/add_ons/Add_ons";
import Info from "./components/info/Info";
import Plan from "./components/plan/Plan";
import SideBar from "./components/sideBar/SideBar";
import Summary from "./components/summary/Summary";

function App() {
  const [etape, setEtape] = useState(1);
  return (
    <>
      <SideBar etape={etape} />
      <div className="divSteps">
        {etape === 1 && <Info />}
        {etape === 2 && <Plan />}
        {etape === 3 && <Add_ons />}
        {etape === 4 && <Summary />}
      </div>
    </>
  );
}

export default App;
