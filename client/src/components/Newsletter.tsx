const Newsletter = () => {
  return (
    <div>
      <style>
        {`

        `}
      </style>
      <div>
        <p>
          Strasbouq <br />
          111 rue du Bouquet,
          <br />
          Strasbourg
        </p>
      </div>
      <div className="newsletter">
        <form action="#" id="newsletter_form" className="newsletter_form">
          <input
            type="email"
            className="newsletter_input"
            placeholder="Saisissez votre e-mail"
          />
          <button type="button" className="newsletter_button">
            Je m'inscris
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
