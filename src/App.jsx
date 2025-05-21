import { useState } from "react";
import "./App.css";
import Add_ons from "./components/add_ons/Add_ons";
import Info from "./components/info/Info";
import Plan from "./components/plan/Plan";
import SideBar from "./components/sideBar/SideBar";
import Summary from "./components/summary/Summary";
import ThankYou from "./components/thankYou/thankYou";

function App() {
  const [etape, setEtape] = useState(1);
  const [plan, setPlan] = useState("Arcade");
  const [monthly, setMonthly] = useState(true);
  const [online, setOnline] = useState(false);
  const [storage, setStorage] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <>
      <SideBar etape={etape} />
      <div className="divSteps">
        {etape === 1 && <Info etape={etape} setEtape={setEtape} />}
        {etape === 2 && <Plan etape={etape} setEtape={setEtape} plan={plan} setPlan={setPlan} monthly={monthly} setMonthly={setMonthly} />}
        {etape === 3 && (
          <Add_ons etape={etape} setEtape={setEtape} monthly={monthly} online={online} setOnline={setOnline} storage={storage} setStorage={setStorage} profile={profile} setProfile={setProfile} />
        )}
        {etape === 4 && <Summary etape={etape} setEtape={setEtape} plan={plan} monthly={monthly} online={online} storage={storage} profile={profile} />}
        {etape === 5 && <ThankYou />}
      </div>
    </>
  );
}

export default App;
