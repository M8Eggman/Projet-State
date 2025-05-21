import { useState } from "react";
import "./Info.css";
import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DivBouton from "../divBouton/divBouton";
import Titre from "../titre/Titre";

function Info(props) {
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <div className="info">
        <Titre titre={"Personal Info"} paragraphe={"Please provide your name, email address, and phone number."} />
        <form className="infoForm" action="">
          <label htmlFor="infoName">Your name is: {name}</label>
          <div>
            <input
              type="text"
              name=""
              id="infoName"
              placeholder="Vingt-Six"
              onFocus={() => setFocus("infoName")}
              onBlur={() => setFocus("")}
              onChange={(e) => {
                setName(e.target.value);
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
          <label htmlFor="infoEmail">Your email is: {email}</label>
          <div>
            <input
              type="text"
              name=""
              id="infoEmail"
              placeholder="vingt_six@email.com"
              onFocus={() => setFocus("infoEmail")}
              onBlur={() => setFocus("")}
              onChange={(e) => {
                setEmail(e.target.value);
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
          <label htmlFor="infoPhone">Your phone number is: {phone}</label>
          <div>
            <input
              type="number"
              name=""
              id="infoPhone"
              min={0}
              placeholder="e.g.+1 234 567 890"
              onFocus={() => setFocus("infoPhone")}
              onBlur={() => setFocus("")}
              onChange={(e) => {
                setPhone(e.target.value);
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
