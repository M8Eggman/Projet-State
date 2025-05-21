import "./Plan.css";
import advanced from "../../assets/img/advenced.svg";
import arcade from "../../assets/img/arcade.svg";
import pro from "../../assets/img/pro.svg";
import DivBouton from "../divBouton/divBouton";
import Titre from "../titre/Titre";
import { useState } from "react";

function Plan(props) {
  const [monthly, setMonthly] = useState(true);
  const [plan, setPlan] = useState("");
  return (
    <>
      <div className="plan">
        <Titre titre={"Select your plan"} paragraphe={"You have the option of monthly or yearly billing."} style={{ marginBottom: "40px" }} />
        <div className="planOptions">
          <div className={plan === "arcade" ? "planChoice planChoiceSelected" : "planChoice"}>
            <img src={arcade} alt="" />
            <div className="planChoiceTitle">
              <h4>Arcade</h4>
              <p>{monthly ? "$9/mo" : "$90/yr"}</p>
            </div>
          </div>
          <div className="planChoice">
            <img src={advanced} alt="" />
            <div className="planChoiceTitle">
              <h4>Advanced</h4>
              <p>{monthly ? "$12/mo" : "$120/yr"}</p>
            </div>
          </div>
          <div className="planChoice">
            <img src={pro} alt="" />
            <div className="planChoiceTitle">
              <h4>Pro</h4>
              <p>{monthly ? "$15/mo" : "$150/yr"}</p>
            </div>
          </div>
        </div>
        <div className="monthlyYearly">
          <p className={monthly ? "selected" : ""}>Monthly</p>
          <div className="switch">
            <div className="slider"></div>
          </div>
          <p className={!monthly ? "selected" : ""}>Yearly</p>
        </div>
        <DivBouton etape={props.etape} />
      </div>
    </>
  );
}

export default Plan;
