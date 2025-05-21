import "./DivBouton.css";

function DivBouton(props) {
  return (
    <>
      <div className="divBouton">
        {!(props.etape === 1) && <button className="divBoutonBack">Go Back</button>}
        {props.etape === 4 ? <button className="divBoutonConfirm">Confirm</button> : <button className="divBoutonNext">Next Step</button>}
      </div>
    </>
  );
}

export default DivBouton;
