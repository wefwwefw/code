async function ladefilme() {
  const filme = await fetch("filme.json");
  return await filme.json();
}

function zeigefilmkacheln() {
  const uesicht = document.getElementById("kacheln");
  uesicht.innerHTML = "";

  filme.forEach((film) => {
    const kachel = document.createElement("sl-card");
    kachel.className = "card-overview";
    kachel.innerHTML = `
      <img
        slot="image"
        src="${film.bild}"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />

      <strong>Marvel Studios</strong><br />
      Spider-man Far From Home<br />
      <small>${film.zeit}</small>

      <div slot="footer">
        <sl-button id="more-${film.titel}">More Info!</sl-button
        >
        <sl-rating></sl-rating>
      </div>
     `;
    uesicht.appendChild(kachel);

    const mehrInfos = kachel.querySelector("sl-button");
    mehrInfos.addEventListener("click", ()=>detailszeigenSeite(film));
  });
}

function detailszeigenSeite(film) {
 const uesicht = document.getElementById("kacheln");
  uesicht.innerHTML = `
  <div><sl-button>Homepage</sl-button></div>
  <h1>${film.titel}</h1>
<img src="${film.bild}" alt="Beschreibung des Bildes">
<p> Beschreibung</p>
<div><u>Far from Home</u> geht <u>Peter Parker</u> alias <u>Spider-man</u>  mit seinen Freunden auf Klassenfahrt nach <u>Europa</u>.</div>
<div>Doch der entspannte Urlaub wird schnell unterbrochen, als er von <u>Nick Furry</u>  gerufen wird,</div>
<div>um bei der Untersuchung von mysteriösen Elementar-Angriffen zu helfen. </div>
<div>Gemeinsam mit dem vermeintlichen Helden <u> Mysterio,</u>der sich später als Bösewicht entpuppt.</div>
</h2>
<p> Eigenschaft</p>
<ol>

<Li> <strong>Sprachen:
</strong> Deutsch, Englisch, Französisch und Türkisch</Li>
<li> <strong>Veröffentlicht:</strong> 3. Juli 2019</li>
<li><strong>Dauer:</strong> 2 Stunden 10 Minuten</li>
</ol>
<p> Warum schauen?</p>
Er bietet eine gute Mischung aus Action, Humor und überraschenden Wendungen und vertieft die übersicht von Peter Parker. 
  `;
const back= uesicht.querySelector("sl-button");
back.addEventListener("click",()=>zeigefilmkacheln());

 
}

function detailszeigen(film) {
    alert(`Details anzeigen von ${film.titel}`);
}

const filme = await ladefilme();
zeigefilmkacheln(filme);
