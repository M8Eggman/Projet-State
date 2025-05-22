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
  const [plan, setPlan] = useState("");
  const [monthly, setMonthly] = useState(true);
  const [online, setOnline] = useState(false);
  const [storage, setStorage] = useState(false);
  const [profile, setProfile] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [valideInfo, setValideInfo] = useState(false);
  const [validePlan, setValidePlan] = useState(false);
  return (
    <>
      <SideBar etape={etape} setEtape={setEtape} valideInfo={valideInfo} validePlan={validePlan} />
      <div className="divSteps">
        {etape === 1 && (
          <Info
            etape={etape}
            setEtape={setEtape}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            valideInfo={valideInfo}
            setValideInfo={setValideInfo}
          />
        )}
        {etape === 2 && (
          <Plan etape={etape} setEtape={setEtape} plan={plan} setPlan={setPlan} monthly={monthly} setMonthly={setMonthly} validePlan={validePlan} setValidePlan={setValidePlan} />
        )}
        {etape === 3 && (
          <Add_ons
            etape={etape}
            setEtape={setEtape}
            monthly={monthly}
            online={online}
            setOnline={setOnline}
            storage={storage}
            setStorage={setStorage}
            profile={profile}
            setProfile={setProfile}
          />
        )}
        {etape === 4 && <Summary etape={etape} setEtape={setEtape} plan={plan} monthly={monthly} online={online} storage={storage} profile={profile} />}
        {etape === 5 && <ThankYou />}
      </div>
    </>
  );
}

export default App;
