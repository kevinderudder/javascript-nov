// meest basis --> snelste --> haalt maar 1 op
const nameTextbox = document.getElementById("nameTextbox");
nameTextbox.value = "gevonden";

// op basis van classes
const txts = document.getElementsByClassName("input");
for(let i = 0 ; i < txts.length ; i++){
    txts[i].value = "gevonden";
}

// HTML 5
// selecteren op id --> css queries
// #: op id
// .: op classes
// []: op attributen
const emailTextbox = document.querySelector("#emailTextbox");
emailTextbox.value = "email gevonden";

const txts2 = document.querySelectorAll(".input.is-valid");
for(let i = 0 ; i < txts2.length ; i++){
    txts2[i].value = "nog eens gevonden";
}

const requiredTxts = document.querySelectorAll("[required]")
for(let i = 0 ; i < requiredTxts.length ; i++){
    requiredTxts[i].value = "verplicht veld gevonden";
}

