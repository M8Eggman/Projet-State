import "./Plan.css";
import DivBouton from "../divBouton/divBouton";

function Plan(props) {
  return (
    <>
      <div className="plan">
        <div className="planTitle">
          <h1 className="h1Recurent">Select your plan</h1>
          <p className="pRecurent">You have the option of yearly billing</p>
        </div>
        <DivBouton etape={props.etape} />
      </div>
    </>
  );
}

export default Plan;
