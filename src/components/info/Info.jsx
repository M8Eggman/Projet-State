import { useState } from "react";
import "./Info.css";
import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DivBouton from "../divBouton/divBouton";
import Titre from "../titre/Titre";

function Info(props) {
  const [focus, setFocus] = useState("");
  return (
    <>
      <div className="info">
        <Titre titre={"Personal Info"} paragraphe={"Please provide your name, email address, and phone number."} style={{ marginBottom: "40px" }} />
        <form className="infoForm" action="">
          <label htmlFor="infoName">Your name is: {}</label>
          <div>
            <input type="text" name="" id="infoName" placeholder="Vingt-Six" onFocus={() => setFocus("infoName")} onBlur={() => setFocus("")} />
            {focus === "infoName" && (
              <div className="inputIcon">
                <div className="userIcon">
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: "12px", position: "relative", top: "1px" }} />
                </div>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            )}
          </div>
          <label htmlFor="infoEmail">Your email is: {}</label>
          <div>
            <input type="text" name="" id="infoEmail" placeholder="vingt_six@email.com" onFocus={() => setFocus("infoEmail")} onBlur={() => setFocus("")} />
            {focus === "infoEmail" && (
              <div className="inputIcon">
                <div className="userIcon">
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: "12px", position: "relative", top: "1px" }} />
                </div>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            )}
          </div>
          <label htmlFor="infoPhone">Your phone number is: {}</label>
          <div>
            <input type="number" name="" id="infoPhone" min={0} placeholder="e.g.+1 234 567 890" onFocus={() => setFocus("infoPhone")} onBlur={() => setFocus("")} />
            {focus === "infoPhone" && (
              <div className="inputIcon">
                <div className="userIcon">
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: "12px", position: "relative", top: "1px" }} />
                </div>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            )}
          </div>
        </form>
        <DivBouton etape={props.etape} />
      </div>
    </>
  );
}

export default Info;
