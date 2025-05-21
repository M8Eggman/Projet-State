import "./SideBar.css";

function SideBar(props) {
  return (
    <>
      <div className="sideBar">
        <div className="step">
          <div className={props.etape === 1 ? "stepNombre stepNombreChoisi" : "stepNombre"}>
            <p>1</p>
          </div>
          <div className="stepNom">
            <p>STEP 1</p>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="step">
          <div className={props.etape === 2 ? "stepNombre stepNombreChoisi" : "stepNombre"}>
            <p>2</p>
          </div>
          <div className="stepNom">
            <p>STEP 2</p>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className="step">
          <div className={props.etape === 3 ? "stepNombre stepNombreChoisi" : "stepNombre"}>
            <p>3</p>
          </div>
          <div className="stepNom">
            <p>STEP 3</p>
            <p>ADD-ONS</p>
          </div>
        </div>
        <div className="step">
          <div className={props.etape === 4 ? "stepNombre stepNombreChoisi" : "stepNombre"}>
            <p>4</p>
          </div>
          <div className="stepNom">
            <p>STEP 4</p>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
