import { useState } from "react";
import "./App.css";
import Add_ons from "./components/add_ons/Add_ons";
import Info from "./components/info/Info";
import Plan from "./components/plan/Plan";
import SideBar from "./components/sideBar/SideBar";
import Summary from "./components/summary/Summary";
import ThankYou from "./components/thankYou/thankYou";

function App() {
  const [etape, setEtape] = useState(2);
  return (
    <>
      <SideBar etape={etape} />
      <div className="divSteps">
        {etape === 1 && <Info etape={etape} setEtape={setEtape} />}
        {etape === 2 && <Plan etape={etape} setEtape={setEtape} />}
        {etape === 3 && <Add_ons etape={etape} setEtape={setEtape} />}
        {etape === 4 && <Summary etape={etape} setEtape={setEtape} />}
        {etape === 5 && <ThankYou etape={etape} setEtape={setEtape} />}
      </div>
    </>
  );
}

export default App;
