import "./DivBouton.css";

function DivBouton(props) {
  return (
    <>
      <div className="divBouton">
        {!(props.etape === 1) && (
          <button className="divBoutonBack" onClick={() => props.setEtape(props.etape - 1)}>
            Go Back
          </button>
        )}
        {props.etape === 4 ? (
          <button className="divBoutonConfirm" onClick={() => props.setEtape(props.etape + 1)}>
            Confirm
          </button>
        ) : (
          <button className="divBoutonNext" onClick={() => props.setEtape(props.etape + 1)}>
            Next Step
          </button>
        )}
      </div>
    </>
  );
}

export default DivBouton;
