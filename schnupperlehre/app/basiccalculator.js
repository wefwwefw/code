console.log("123");
function fügeZahlZuDisplay(zahl) {
  document.getElementById("display").innerText =
    document.getElementById("display").innerText + zahl;
}
function löscheAlleZahlenImDisplay() {
  document.getElementById("display").innerText = "";
}
function löscheEineZahlimDisplay() {
  document.getElementById("display").innerText = document
    .getElementById("display")
    .innerText.slice(0, -1);
}
function rechnezahlenzusammen() {
  document.getElementById("display").innerText = eval(
    document.getElementById("display").innerText
  );
}
