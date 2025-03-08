let darbuotojas = {
  vardas: "Vardenis",
  pavarde: "Pavardenis",
  atlyginimas: 1000,
  etatas: 1,
  atlygio_skaiciavimas: function (procentas) {
    return this.atlyginimas * (procentas / 100 + 1);
  },
  atlikis_kitu_etatu: function (etatas) {
    return this.atlyginimas * etatas;
  },
};

console.log("Atlyginimas pakeitus %:", darbuotojas.atlygio_skaiciavimas(20));
console.log("Atlyginimas pakeitus etata:", darbuotojas.atlikis_kitu_etatu(0.8));

function darbuotojas_factory(vardas, pareigos, amzius, pradejo_dirbti) {
  return {
    vardas,
    pareigos,
    amzius,
    pradejo_dirbti,
    isspausdinti: function () {
      console.log(this.vardas, this.pareigos, this.amzius, this.pradejo_dirbti);
    },
    stazas: function () {
      return 2025 - this.pradejo_dirbti;
    },
  };
}

const darbuotojai = [];

darbuotojai.push(darbuotojas_factory("varden", "directorius", 30, 2020));
