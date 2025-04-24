const Preke = (props) => {
  return (
    <div>
      <h3>{props.pavadinimas}</h3>
      <p>
        Prekyboje turime <strong>{props.kiekis}</strong> vnt.
      </p>
      <p>
        Kaina <strong>{props.kaina}</strong>&euro;
      </p>
    </div>
  );
};

export default Preke;
