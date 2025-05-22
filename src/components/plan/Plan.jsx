import "./Plan.css";
import advanced from "../../assets/img/advenced.svg";
import arcade from "../../assets/img/arcade.svg";
import pro from "../../assets/img/pro.svg";
import DivBouton from "../divBouton/divBouton";
import Titre from "../titre/Titre";
import { useState } from "react";

function Plan(props) {
  const [valide, setValide] = useState(false);
  // check si le form est rempli
  function handleValide(plan) {
    if (plan.trim() !== "") {
      setValide(true);
    } else {
      setValide(false);
    }
  }
  return (
    <>
      <div className="plan">
        <Titre titre={"Select your plan"} paragraphe={"You have the option of monthly or yearly billing."} />
        <div className="planOptions">
          <div
            className={props.plan === "Arcade" ? "planChoice planChoiceSelected" : "planChoice"}
            onClick={() => {
              props.setPlan("Arcade");
              handleValide("Arcade");
            }}>
            <img src={arcade} alt="" />
            <div className="planChoiceTitle">
              <h4>Arcade</h4>
              <p>{props.monthly ? "$9/mo" : "$90/yr"}</p>
            </div>
          </div>
          <div
            className={props.plan === "Advanced" ? "planChoice planChoiceSelected" : "planChoice"}
            onClick={() => {
              props.setPlan("Advanced");
              handleValide("Advanced");
            }}>
            <img src={advanced} alt="" />
            <div className="planChoiceTitle">
              <h4>Advanced</h4>
              <p>{props.monthly ? "$12/mo" : "$120/yr"}</p>
            </div>
          </div>
          <div
            className={props.plan === "Pro" ? "planChoice planChoiceSelected" : "planChoice"}
            onClick={() => {
              props.setPlan("Pro");
              handleValide("Pro");
            }}>
            <img src={pro} alt="" />
            <div className="planChoiceTitle">
              <h4>Pro</h4>
              <p>{props.monthly ? "$15/mo" : "$150/yr"}</p>
            </div>
          </div>
        </div>
        <div className="monthlyYearly">
          <p className={props.monthly ? "selected" : ""}>Monthly</p>
          <div
            className="switch"
            onClick={() => {
              props.setMonthly(!props.monthly);
            }}>
            <div className={props.monthly ? "slider monthly" : "slider yearly"}></div>
          </div>
          <p className={!props.monthly ? "selected" : ""}>Yearly</p>
        </div>
        <DivBouton etape={props.etape} setEtape={props.setEtape} valide={valide} />
      </div>
    </>
  );
}

export default Plan;
