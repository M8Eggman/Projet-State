import Titre from "../titre/Titre";
import "./ThankYou.css";
import thankYou from "../../assets/img/thankyou.svg";

function ThankYou() {
  return (
    <>
      <div className="thankYou">
        <img src={thankYou} alt="" />
        <Titre
          titre={"Thank you!"}
          paragraphe={
            "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
          }
          style={{ marginBottom: "40px" }}
        />
      </div>
    </>
  );
}

export default ThankYou;
