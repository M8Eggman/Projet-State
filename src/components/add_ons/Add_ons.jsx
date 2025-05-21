import DivBouton from "../divBouton/divBouton";
import Titre from "../titre/Titre";
import "./Add_ons.css";

function Add_ons(props) {
  return (
    <>
      <div className="add-ons">
        <Titre titre={"Pick add-ons"} paragraphe={"Add-ons help enhance your gaming experience."} style={{ marginBottom: "40px" }} />
        <div className="add-onsOptions">
          <div className="add-onsChoice">
            <div className="add-onsChoiceJSP">
              <input type="checkbox" name="" id="" />
              <div className="add-onsChoiceDescription">
                <h4>Online service</h4>
                <p>Access to multiplayer games</p>
              </div>
            </div>
            <p>+$10/yr</p>
          </div>
          <div className="add-onsChoice">
            <div className="add-onsChoiceJSP">
              <input type="checkbox" name="" id="" />
              <div className="add-onsChoiceDescription">
                <h4>Larger storage</h4>
                <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p>+$20/yr</p>
          </div>
          <div className="add-onsChoice">
            <div className="add-onsChoiceJSP">
              <input type="checkbox" name="" id="" />
              <div className="add-onsChoiceDescription">
                <h4>Customizable Profile</h4>
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <p>+$20/yr</p>
          </div>
        </div>
        <DivBouton etape={props.etape} />
      </div>
    </>
  );
}

export default Add_ons;
