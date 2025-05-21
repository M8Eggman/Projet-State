import DivBouton from "../divBouton/divBouton";
import Titre from "../titre/Titre";
import "./Add_ons.css";

function Add_ons(props) {
  return (
    <>
      <div className="add-ons">
        <Titre titre={"Pick add-ons"} paragraphe={"Add-ons help enhance your gaming experience."} />
        <div className="add-onsOptions">
          <div className={props.online ? "add-onsChoice add-onsChoiceSelected" : "add-onsChoice"} onClick={() => props.setOnline(!props.online)}>
            <div className="add-onsChoiceJSP">
              <input type="checkbox" name="" id="" checked={props.online} readOnly/>
              <div className="add-onsChoiceDescription">
                <h4>Online service</h4>
                <p>Access to multiplayer games</p>
              </div>
            </div>
            <p>{props.monthly ? "+$1/mo" : "+$10/yr"}</p>
          </div>
          <div className={props.storage ? "add-onsChoice add-onsChoiceSelected" : "add-onsChoice"} onClick={() => props.setStorage(!props.storage)}>
            <div className="add-onsChoiceJSP">
              <input type="checkbox" name="" id="" checked={props.storage} readOnly/>
              <div className="add-onsChoiceDescription">
                <h4>Larger storage</h4>
                <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p>{props.monthly ? "+$2/mo" : "+$20/yr"}</p>
          </div>
          <div className={props.profile ? "add-onsChoice add-onsChoiceSelected" : "add-onsChoice"} onClick={() => props.setProfile(!props.profile)}>
            <div className="add-onsChoiceJSP">
              <input type="checkbox" name="" id="" checked={props.profile} readOnly/>
              <div className="add-onsChoiceDescription">
                <h4>Customizable Profile</h4>
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <p>{props.monthly ? "+$2/mo" : "+$20/yr"}</p>
          </div>
        </div>
        <DivBouton etape={props.etape} setEtape={props.setEtape} />
      </div>
    </>
  );
}

export default Add_ons;
