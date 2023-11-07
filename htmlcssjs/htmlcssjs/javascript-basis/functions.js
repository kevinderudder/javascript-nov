// simpele function
function naamVanDeFunctie(params){ //<-- geen return type
    //console.log(params);
}
var uitkomst = naamVanDeFunctie("parameter"); // <-- undefined

// simpele function die geen parameters verwacht maar ik geef er toch mee
function functieZonderParameters(){
    //console.log(arguments);
    //console.log(` > ${arguments[0]}`);
}
functieZonderParameters("elmos");

function som(v1, v2, v3){
    return v1+v2+v3;
}

let resultaat = som(4,6);
//console.log(`resultaat = ${resultaat}`);
resultaat = som(4,6,5);
//console.log(`resultaat = ${resultaat}`);

function somEverything(){
    let som = 0;
    for(let i = 0 ; i < arguments.length ; i++){
        //som = som + arguments[i];
        som += arguments[i];
    }
    return som;
}

resultaat = somEverything(4,6);
//console.log(`resultaat = ${resultaat}`);
resultaat = somEverything(4,6,5);
//console.log(`resultaat = ${resultaat}`);

// spread operator
function somEverythingWithParams(...params){
    let som = 0;
    for(let i = 0 ; i < params.length ; i++){
        //som = som + arguments[i];
        som += params[i];
    }
    return som;
}

resultaat = somEverythingWithParams(4,6.5);
//console.log(`resultaat = ${resultaat}`);
resultaat = somEverythingWithParams(4,6,5);
//console.log(`resultaat = ${resultaat}`);

function somEverythingWithParamsAndOutput(output, multiplyer, ...hupperdepup){
    let som = 0;
    for(let i = 0 ; i < hupperdepup.length ; i++){
        //som = som + arguments[i];
        som += hupperdepup[i];
    }
    return `${output} ${som *  multiplyer}`;
}

resultaat = somEverythingWithParamsAndOutput("som is", 4,6.8);
//console.log(`resultaat = ${resultaat}`);
resultaat = somEverythingWithParamsAndOutput("som is", 4,6,5);
//console.log(`resultaat = ${resultaat}`);

// self invoking function

(function(){
    console.log("> application starts");
})();

// waarom zou ik dit ooit gebruiken

(function(){
    "use strict";

    console.log("> application starts");
    let naam = "kevin";


})();


// opslaan
function save(){
    const voorNaamTextbox = document.getElementById("voornaamTextbox");
    const naamTextbox = document.getElementById("naamTextbox");

    console.log(`> opslaan gegevens -> ${voorNaamTextbox.value} ${naamTextbox.value} `);

}

const txtTest = document.getElementById("voornaamTextbox");
txtTest.value = "dit is een test";

