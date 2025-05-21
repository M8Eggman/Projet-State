import "./Titre.css";

function Titre(props) {
  return (
    <>
      <div>
        <h1 className="h1Recurent">{props.titre}</h1>
        <p className="pRecurent">{props.paragraphe}</p>
      </div>
    </>
  );
}

export default Titre;
