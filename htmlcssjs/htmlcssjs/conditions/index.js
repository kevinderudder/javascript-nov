const age = 42;
const leeftijd = "42";

// equality operator --> == of !=
// strict equality operator
if(age === leeftijd){
    console.log("ze zijn allebei gelijk");
}
else{
    console.log("ze zijn allebei verschillend");
}

if(age !== leeftijd){
    console.log("ze zijn allebei verschillend");
}
else{
    console.log("ze zijn allebei gelijk");
}

const input = "X";

switch(input){
    case "Y": console.log("Y");break;
    case "X": console.log("X");break;
    default: console.log("?"); 
}

input == "X" ? console.log("X"):console.log("Y");

let iets;

iets?console.log(iets):console.log("bestaat niet");
