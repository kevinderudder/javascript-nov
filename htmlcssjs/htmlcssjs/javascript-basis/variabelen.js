// ;
let tekst = "dit is een stuk tekst"
console.log(tekst);

// single line //
// loosely typed
let firstName = "Kevin"; 
let age = 42;
//alert(firstName + 20);
//console.log(firstName);

firstName = 55;
//alert(firstName + 20);

// string, number, boolean, array, object, null, undefined

// var <-- aangeraden om niet te gebruiken
//     : function scope variabele
function demoVar(){
    var company = "Elmos";
    console.log(company);

    if(1 == 1){
        var address = "Mechelen";
        console.log(address);
    }

    console.log(address);
}
demoVar();

// let : block scope variabele
function demoLet(){
    let company = "Elmos";
    console.log(company);

    if(1 == 1){
        let address = "Mechelen";
        console.log(address);
    }

    //console.log(address);
}
demoLet();

// const: block scope variabele die niet meer gewijzigd wordt

// Types
let nr = 12;
let txt = "kevin's auto";
let txt2 = 'kevin';
let txt3 = 'kevin\' auto'; // <-- escape single quote
let music = ["beatles", "rolling stones"];

// string concatenatie
let voorNaam = "Kevin";
let naam = "DeRudder";
let leeftijd = 42;
let fullName1 = leeftijd + " " + naam + " (" + leeftijd + ")";
let fullName2 = `${voorNaam}'s ${naam} (${leeftijd})`;

// globale vs lokale variabelen
let ikBenEenGlobalVariabele = "global";

function demoLokaleVariabelen(){
    let ikBenEenLokaleVariabele = "lokaal";
    console.log(ikBenEenLokaleVariabele);
    console.log(ikBenEenGlobalVariabele);
}

//console.log(ikBenEenLokaleVariabele);
console.log(ikBenEenGlobalVariabele);

function letOp(){
    ikBenNogEenLokaleVariabele = "lokaal"; // zonder let, var of const wordt een globale variabele aangemaakt
    console.log(ikBenNogEenLokaleVariabele);
}
letOp();
console.log(ikBenNogEenLokaleVariabele);

function letOpOplossing(){
    'use strict';
    //ikBenNogEenLokaleInEenStrictFunctionVariabele = "lokaal"; // zonder let, var of const wordt een globale variabele aangemaakt
    //console.log(ikBenNogEenLokaleInEenStrictFunctionVariabele);
}
letOpOplossing();
//console.log(ikBenNogEenLokaleInEenStrictFunctionVariabele);


// let op met te veel globale/lokale variabelen
function showBooks(books){
    console.log(books); // console is een globale variabele die de verwijzing naar books zal bijhouden waardoor books altijd zal behouden blijven in het geheugeb
    for(let i = 0 ; i < books.length ; i++){
        console.log(` > ${books[i]}`);
    }
}

showBooks(["hitchikers guid", "Harry Potter"]);

// objecten - JSON objecten (javascript object notation)
let emptyObject = {};
let personObject = {
    firstName : 'Kevin',
    lastName  : 'DeRudder',
    email     : 'kevin.derudder@elmos.be'
};





