// Variabler til at holde styr på det tilfældige tal og antallet af gæt
let tilfældigtTal = Math.floor(Math.random() * 11); // Tilfældig tal mellem 0 og 10
let antalGæt = 0;

// Funktion, der håndterer brugerens gæt
function lavGæt() {
  // Hent brugerens gæt fra inputfeltet
  const brugerGæt = Number(document.getElementById("tal").value);
  const beskedElement = document.getElementById("besked");

  // Kontroller om input er et gyldigt tal
  if (isNaN(brugerGæt) || brugerGæt < 0 || brugerGæt > 10) {
    beskedElement.textContent = "Indtast venligst et tal mellem 0 og 10.";
    return;
  }

  // Øg tælleren for gæt
  antalGæt++;

  // Sammenlign brugerens gæt med det tilfældige tal
  if (brugerGæt === tilfældigtTal) {
    beskedElement.textContent = `Korrekt! Du gættede det rigtige tal ${tilfældigtTal} på ${antalGæt} gæt.`;
    // Spørg om brugeren vil prøve igen
    if (confirm("Du brugte " + antalGæt + " antal gæt" + "\nVil du prøve igen?")) {
      tilfældigtTal = Math.floor(Math.random() * 11); // Generer et nyt tilfældigt tal
      antalGæt = 0; // Nulstil antallet af gæt
      document.getElementById("tal").value = ""; // Tøm inputfeltet
      beskedElement.textContent = ""; // Ryd beskeder
    }
  } else if (brugerGæt < tilfældigtTal) {
    beskedElement.textContent = "Dit gæt er for lavt. Prøv igen.";
  } else {
    beskedElement.textContent = "Dit gæt er for højt. Prøv igen.";
  }
}
