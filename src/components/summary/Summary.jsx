import DivBouton from "../divBouton/divBouton";
import Titre from "../titre/Titre";
import "./Summary.css";

function Summary(props) {
  const plans = { Arcade: { monthly: 9, yearly: 90 }, Advanced: { monthly: 12, yearly: 120 }, Pro: { monthly: 15, yearly: 150 } };
  const add_ons = { online: { monthly: 1, yearly: 10 }, storage: { monthly: 2, yearly: 2 }, profile: { monthly: 2, yearly: 2 } };
  return (
    <>
      <div className="summary">
        <Titre titre={"Finishing up"} paragraphe={"Double-check everything looks OK before confirming."} />
        <div className="summaryChoice">
          <div className="summaryPlan">
            <div className="summaryPlanTitle">
              <h4>
                {props.plan}({props.monthly ? "Monthly" : "Yearly"})
              </h4>
              <button onClick={()=>props.setEtape(2)}>Change</button>
            </div>
            <p>
              ${plans[props.plan][props.monthly ? "monthly" : "yearly"]}/{props.monthly ? "mo" : "yr"}
            </p>
          </div>
          <div className="summaryAdd-ons">
            {props.online && (
              <div>
                <p>Online Service</p>
                <p>
                  ${add_ons.online[props.monthly ? "monthly" : "yearly"]}/{props.monthly ? "mo" : "yr"}
                </p>
              </div>
            )}
            {props.storage && (
              <div>
                <p>Large Storage</p>
                <p>
                  ${add_ons.storage[props.monthly ? "monthly" : "yearly"]}/{props.monthly ? "mo" : "yr"}
                </p>
              </div>
            )}
            {props.profile && (
              <div>
                <p>Customizable Profile</p>
                <p>
                  ${add_ons.profile[props.monthly ? "monthly" : "yearly"]}/{props.monthly ? "mo" : "yr"}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="summaryTotal">
          <p>Total (per {props.monthly ? "month" : "year"})</p>
          <p>
            $
            {plans[props.plan][props.monthly ? "monthly" : "yearly"] +
              (props.online ? add_ons.online[props.monthly ? "monthly" : "yearly"] : 0) +
              (props.storage ? add_ons.storage[props.monthly ? "monthly" : "yearly"] : 0) +
              (props.profile ? add_ons.profile[props.monthly ? "monthly" : "yearly"] : 0)}
            /{props.monthly ? "mo" : "yr"}
          </p>
        </div>
        <DivBouton etape={props.etape} setEtape={props.setEtape} />
      </div>
    </>
  );
}

export default Summary;
