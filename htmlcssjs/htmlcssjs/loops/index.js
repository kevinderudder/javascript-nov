const songsList = document.getElementById("songsList");

// for

function demoFor(songs){
    var html = "";
    for(let i = 0 ; i < songs.length ; i++){
       //html += `<li>${songs[i]}</li>`;
    }

    for( /* init */  ; /* voorwaarde check */ ; /* bewerking */ ){
        break;
    }

    for(let i = 0 ; i < songs.length ; i = i + 2){
        //html += `<li>${songs[i]}</li>`;
    }
    
    const l = songs.length;
    for(let i = 0 ; i < l ; i++){
        //html += `<li>${songs[i]}</li>`;
    }
  
    for(let i = 0, l = songs.length ; i < l ; i++){
        //html += `<li>${songs[i]}</li>`;
    }

    for(let i = songs.length; i > 0 ; i--){
        html += `<li>${songs[i - 1]}</li>`;
    }

  
    songsList.innerHTML = html;

}

/*
demoFor(["Barry White - The First The Last"
       , "Tina Turner - Simply the best"
       , "Simple Minds - Don't you"]);
*/

// foreach
function demoForeach(songs){
    let html = "";
    
    songs.forEach(element => {
        html  += `<li>${element}</li>`;
    });

    // meerdere functies op array kan je hier vinden:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    
    songsList.innerHTML = html;
}
/*demoForeach(["Barry White - The First The Last"
       , "Tina Turner - Simply the best"
       , "Simple Minds - Don't you"]);*/

// while
function demoWhile(songs){

    let html = "";
    let index = 0;

    while(index <= songs.length){
        html  += `<li>${songs[index]}</li>`;
        index++;
    }

    songsList.innerHTML = html;


}

demoWhile(["Barry White - The First The Last"
       , "Tina Turner - Simply the best"
       , "Simple Minds - Don't you"]);
// do while

function demoWhile(songs){
    let html = "";
    let index = 0;

    do{
        html  += `<li>${songs[index]}</li>`;
        index++;
    }while(index <= songs.length)

    songsList.innerHTML = html;
}

