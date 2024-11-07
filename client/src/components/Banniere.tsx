import ban from "../assets/ban.png";

const Banniere = () => {
  return (
    <>
      <div className="imgban">
        <img src={ban} alt="banniere" />
      </div>
      <div className="">
        <h2>Nos Bouquets</h2>
        <button type="button" className="buttonDecouvrir">
          Découvrir
        </button>
      </div>
    </>
  );
};
export default Banniere;
