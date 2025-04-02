const Komp3 = () => {
  const studentas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    mokykla: "VCS",
    vidurkis: 8,
    kursas: 2,
  };

  return (
    <div>
      <h1>Komp3</h1>
      <div className="studentas">
        <h2>Studento info</h2>
        <p>
          <strong>Studentas:</strong> {studentas.vardas} {studentas.pavarde}
        </p>
        <p>
          <strong>Mokosi: </strong> {studentas.mokykla}
        </p>
        <p>
          <strong>Vidurkis: </strong> {studentas.vidurkis}
        </p>
        <p>
          <strong>Kursas: </strong> {studentas.kursas}
        </p>
      </div>
    </div>
  );
};

export default Komp3;
