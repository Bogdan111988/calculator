import React, { useState } from "react";
import "./style.css"; // Uvezite CSS datoteku

const Calculator = () => {
  const [iznos, setIznos] = useState("");
  const [postotak, setPostotak] = useState("");
  const [osobe, setOsobe] = useState("");
  const [rezultat, setRezultat] = useState(null);

  const izracunajNapojnicu = () => {
    const brojIznos = parseFloat(iznos);
    const brojPostotak = parseFloat(postotak);
    const brojOsobe = parseInt(osobe);

    if (
      isNaN(brojIznos) ||
      isNaN(brojPostotak) ||
      isNaN(brojOsobe) ||
      brojOsobe <= 0
    ) {
      alert("Molim unesi valjane brojeve.");
      return;
    }

    const napojnica = brojIznos * (brojPostotak / 100);
    const ukupno = brojIznos + napojnica;
    const poOsobi = ukupno / brojOsobe;

    setRezultat({
      napojnica: napojnica.toFixed(2),
      ukupno: ukupno.toFixed(2),
      poOsobi: poOsobi.toFixed(2),
    });
  };

  return (
    <div className="calculator-container">
      <h2>Kalkulator Napojnice</h2>
      <input
        type="number"
        placeholder="Iznos računa (EUR)"
        value={iznos}
        onChange={(e) => setIznos(e.target.value)}
      />
      <input
        type="number"
        placeholder="Postotak napojnice (%)"
        value={postotak}
        onChange={(e) => setPostotak(e.target.value)}
      />
      <input
        type="number"
        placeholder="Broj osoba"
        value={osobe}
        onChange={(e) => setOsobe(e.target.value)}
      />
      <button onClick={izracunajNapojnicu}>Izračunaj</button>
      {rezultat && (
        <div className="results">
          <p>Napojnica: {rezultat.napojnica} €</p>
          <p>Ukupno za platiti: {rezultat.ukupno} €</p>
          <p>Po osobi: {rezultat.poOsobi} €</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
