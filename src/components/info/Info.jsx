import { useEffect, useState } from "react";
import "./Info.css";
import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DivBouton from "../divBouton/divBouton";
import Titre from "../titre/Titre";

function Info(props) {
  const [focus, setFocus] = useState("");
  const [valide, setValide] = useState(false);
  // check si le form est rempli
  function handleValide(name, email, phone) {
    if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
      setValide(true);
    } else {
      setValide(false);
    }
  }
  useEffect(() => handleValide(props.name, props.email, props.phone));
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
                handleValide(e.target.value, props.email, props.phone);
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
                handleValide(props.name, e.target.value, props.phone);
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
                handleValide(props.name, props.email, e.target.value);
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
        <DivBouton etape={props.etape} setEtape={props.setEtape} valide={valide} />
      </div>
    </>
  );
}

export default Info;
