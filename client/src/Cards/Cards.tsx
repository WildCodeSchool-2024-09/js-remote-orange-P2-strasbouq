import "./Cards.css";

const Cards = () => {
  return (
    <>
      <h1 className="cards-title">Nos engagements</h1>
      <div className="container">
        <div className="box">
          <div className="boxtitle">
            <h2>Retrait rapide</h2>
          </div>
          <p>Les réservations sont disponibles sous un délai de 2 heures</p>
        </div>
        <div className="box">
          <div className="boxtitle">
            <h2>Création artisale</h2>
          </div>
          <p>
            Nos créations sont toutes réalisées à la main avec beaucoup de
            passion
          </p>
        </div>
        <div className="box">
          <div className="boxtitle">
            <h2>Écoresponsable</h2>
          </div>
          <p>
            Nous créons des bouquets qui célèbrent la nature, alliant esthétique
            et respect de l’environnement.
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
