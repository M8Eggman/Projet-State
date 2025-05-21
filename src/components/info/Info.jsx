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
        <Titre titre={"Personal Info"} paragraphe={"Please provide your name, email address, and phone number."} />
        <form className="infoForm" action="">
          <label htmlFor="infoName">Your name is: {props.name}</label>
          <div>
            <input
              type="text"
              name=""
              id="infoName"
              placeholder="Vingt-Six"
              defaultValue={props.name}
              onFocus={() => setFocus("infoName")}
              onBlur={() => setFocus("")}
              onChange={(e) => {
                props.setName(e.target.value);
              }}
            />
            {focus === "infoName" && (
              <div className="inputIcon">
                <div className="userIcon">
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: "12px", position: "relative", top: "1px" }} />
                </div>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            )}
          </div>
          <label htmlFor="infoEmail">Your email is: {props.email}</label>
          <div>
            <input
              type="text"
              name=""
              id="infoEmail"
              placeholder="vingt_six@email.com"
              defaultValue={props.email}
              onFocus={() => setFocus("infoEmail")}
              onBlur={() => setFocus("")}
              onChange={(e) => {
                props.setEmail(e.target.value);
              }}
            />
            {focus === "infoEmail" && (
              <div className="inputIcon">
                <div className="userIcon">
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: "12px", position: "relative", top: "1px" }} />
                </div>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            )}
          </div>
          <label htmlFor="infoPhone">Your phone number is: {props.phone}</label>
          <div>
            <input
              type="number"
              name=""
              id="infoPhone"
              min={0}
              placeholder="e.g.+1 234 567 890"
              defaultValue={props.phone}
              onFocus={() => setFocus("infoPhone")}
              onBlur={() => setFocus("")}
              onChange={(e) => {
                props.setPhone(e.target.value);
              }}
            />
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
        <DivBouton etape={props.etape} setEtape={props.setEtape} />
      </div>
    </>
  );
}

export default Info;
