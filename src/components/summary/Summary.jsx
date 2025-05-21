import DivBouton from "../divBouton/divBouton";
import Titre from "../titre/Titre";
import "./Summary.css";

function Summary(props) {
  return (
    <>
      <div className="summary">
        <Titre titre={"Finishing up"} paragraphe={"Double-check everything looks OK before confirming."} />
        <div className="summaryChoice">
          <div className="summaryPlan">
            <div className="symmaryPlanTitle">
              <h4>
                {}({})
              </h4>
              <p>Change</p>
            </div>
            <p>${}/{}</p>
          </div>
          <div className="summaryAdd-ons">
            {}
            {}
            {}
          </div>
        </div>
        <div className="summaryTotal">
            <p>Total (per {})</p>
            <p>${}/{}</p>
        </div>
        <DivBouton etape={props.etape} />
      </div>
    </>
  );
}

export default Summary;
