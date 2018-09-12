var frage = ["tun", "gehen", "haben", "sein", "sitzen", "verstehen", "lesen"]
var antwort = ["DO DID DONE", "GO WENT GONE", "HAVE HAD HAD", "BE WAS BEEN", "SIT SAT SAT", "UNDERSTAND UNDERSTOOD UNDERSTOOD", "READ READ READ"]
var zahl = 0;
var richtig;
var ant;
var wort;
function taste(event) {
    var taste = event.which || event.keycode;
    //wenn enter dann aufgabe()
    if (taste == "13") {
        aufgabe();
    }
    // taste neben Pfeiltase Hoch(die Taste mit dem Krokodilmund)
    if (taste == "60") {
        abbrechen();
    }
}
function aufgabe() {
    
    richtig = antwort[zahl];
    ant = document.getElementById("ant").value;
    ant = ant.toUpperCase();
    document.getElementById("ant").select();
    if (ant == richtig) {
        frage.splice(zahl, 1)
        antwort.splice(zahl, 1)
        document.getElementById("voc").style.backgroundColor="green";


    } else {
        console.log("No")
        document.getElementById("voc").style.backgroundColor="red";

    }
    zufall();
    wort = frage[zahl];
    document.getElementById("frage").innerHTML = wort;
}
function zufall() {
    zahl = Math.round(Math.random() * (frage.length - 1));
    if (frage.length == 0) {
        abbrechen()
    }
    console.log(zahl + "," + frage)
}
function abbrechen() {
    window.location.assign("file:///C:/Users/mikar/Documents/coding/schule/voc/index.html")
}