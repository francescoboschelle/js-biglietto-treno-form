const form = document.querySelector("form");
const cancelBtn = document.getElementById("cancelBtn");
const ticket = document.getElementById("ticket");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("nameInput").value;
  const distance = Number(document.getElementById("distanceInput").value);
  const age = Number(document.getElementById("ageInput").value);

  if (
    !name ||
    !distance ||
    isNaN(distance) ||
    distance < 1 ||
    distance > 1000000 ||
    !age ||
    isNaN(age) ||
    age < 1 ||
    age > 100
  ) {
    alert("Input non valido! Riprova.");
    return;
  }

  document.getElementById("nameTicket").innerHTML = name;
  document.getElementById("offer").innerHTML = "Biglietto Standard";
  document.getElementById("cabinNumber").innerHTML = "5";
  document.getElementById("cpCode").innerHTML = "92911";

  let costPerKm = distance * 0.21;

  if (age < 18) {
    costPerKm = costPerKm * 0.8;
  } else if (age > 65) {
    costPerKm = costPerKm * 0.6;
  }

  document.getElementById("cost").innerHTML = `${costPerKm.toFixed(2)}&euro;`;

  if (ticket.className === "d-none") {
    ticket.className = "";
  }
});

cancelBtn.addEventListener("click", () => {
  document.getElementById("nameInput").value = "";
  document.getElementById("distanceInput").value = "";
  document.getElementById("ageInput").value = "";

  document.getElementById("nameTicket").innerHTML = "Unknown";
  document.getElementById("offer").innerHTML = "Unknown";
  document.getElementById("cabinNumber").innerHTML = "Unknown";
  document.getElementById("cpCode").innerHTML = "Unknown";
  document.getElementById("cost").innerHTML = "Unknown";

  if (ticket.className !== "d-none") {
    ticket.className = "d-none";
  }
});
