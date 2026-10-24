 const bands = {
      new: [
        { label: "0–200", from: 0, to: 200, rate: 0 },
        { label: "201–400", from: 200, to: 400, rate: 4.70 },
        { label: "401–500", from: 400, to: 500, rate: 6.30 }
      ],
      existing: [
        { label: "0–100", from: 0, to: 100, rate: 0 },
        { label: "101–400", from: 100, to: 400, rate: 4.70 },
        { label: "401–500", from: 400, to: 500, rate: 6.30 },
        { label: "501–600", from: 500, to: 600, rate: 8.40 },
        { label: "601–800", from: 600, to: 800, rate: 9.45 },
        { label: "801–1,000", from: 800, to: 1000, rate: 10.50 },
        { label: "Above 1,000", from: 1000, to: Infinity, rate: 11.55 }
      ]
    };

    const unitsInput = document.getElementById("units");
    const schemeOutput = document.getElementById("scheme");
    const breakdownOutput = document.getElementById("breakdown");
    const totalOutput = document.getElementById("total");
    const money = value => `₹${value.toFixed(2)}`;

    function calculate() {
      const units = Math.max(0, Number(unitsInput.value) || 0);
      const selected = units <= 500 ? bands.new : bands.existing;
      let total = 0;

      schemeOutput.textContent = units <= 500 ? "New scheme" : "Existing tariff";
      breakdownOutput.replaceChildren();

      for (const band of selected) {
        const chargedUnits = Math.max(0, Math.min(units, band.to) - band.from);
        const charge = chargedUnits * band.rate;
        total += charge;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${band.label}</td>
          <td>${chargedUnits}</td>
          <td>${money(band.rate)}/unit</td>
          <td>${money(charge)}</td>
        `;
        breakdownOutput.appendChild(row);
      }

      totalOutput.textContent = money(total);
    }

    unitsInput.addEventListener("input", calculate);
    calculate();