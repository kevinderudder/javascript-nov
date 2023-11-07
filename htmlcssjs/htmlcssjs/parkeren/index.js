let loadedData;
const parkingSpotsList = document.querySelector(".parking-spots");
const subtitleText = document.querySelector(".subtitle");

async function init(){
    await loadDataFromApi();
    showData();
    showTime();
}
init();

function showTime(){
    subtitleText.innerHTML = `parking data geladen op ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
}

async function loadDataFromApi(){
    const url = "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records";

    // xmlhttprequest
    // fetch

    let response   =  await fetch(url);
    loadedData     =  await response.json();
}

function showData(){
    let html = "";
    for(let i = 0, l = loadedData.results.length ; i < l ; i++){
        let p = loadedData.results[i];
        html += `
        <div class="parking-spot">
            <span class="parking-spot__icon">P</span>
            <span class="parking-spot__title">${p.name}</span>
            <div class="parking-spot__info">${p.availablecapacity} / ${p.totalcapacity}</div>
        </div>
        `;

    }

    parkingSpotsList.innerHTML = html;
}