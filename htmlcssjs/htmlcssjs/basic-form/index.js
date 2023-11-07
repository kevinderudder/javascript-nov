const subscribersList = document.getElementById("inschrijvingenList");
const saveButton = document.getElementById("saveButton");
const requiredFields = document.querySelectorAll("[verplicht]");
let isValid = true;
let subscribers = [];

function save() {
  validateForm();
  if (isValid) {
    addToList();
    localStorage.setItem("subscribers", JSON.stringify(subscribers));
    updateList();
  }
}

function inputFieldUpdate(){
  validateForm();
  saveButton.disabled = !isValid;
}

function validateForm() {
  isValid = true;

  // alle required velden ophalen
  
  for(let i = 0, l = requiredFields.length ; i < l ; i++){
     let field = requiredFields[i];
     if(field.value === ""){
      field.classList.add("is-invalid");
      isValid = false;
     }
     else{
      field.classList.remove("is-invalid");
     }
  }

  // velden overlopen en kijken of ze ingevuld zijn

  /*if (firstNameTextbox.value == "") {
    firstNameTextbox.classList.add("is-invalid");
    document.getElementById("firstName");
    isValid = false;
  } else {
    firstNameTextbox.classList.remove("is-invalid");
  }

  if (lastNameTextbox.value == "") {
    lastNameTextbox.classList.add("is-invalid");
    isValid = false;
  } else {
    lastNameTextbox.classList.remove("is-invalid");
  }

  if (leeftijdTextbox.value == "") {
    leeftijdTextbox.classList.add("is-invalid");
    isValid = false;
  } else {
    leeftijdTextbox.classList.remove("is-invalid");
  }

  if (emailTextbox.value == "") {
    emailTextbox.classList.add("is-invalid");
    isValid = false;
  } else if (checkIfEmailExists()) {
    emailTextbox.classList.add("is-invalid-email");
    document.getElementsByClassName("repetition-field")[0].classList.add("repetition-is-active");
    isValid = false;
  } else {
    emailTextbox.classList.remove("is-invalid");
  }
  */
}

function checkIfEmailExists() {
  let emailAddress = emailTextbox.value;
  let found = subscribers.find(
    (subscriber) => subscriber.email == emailAddress
  );

  /*for(let i = 0 ; i < subscribers.length ; i++){
        if(subscribers[i].email == emailAddress){
            found = true;
            break;
        }
    }*/

  return found;
}

function addToList() {
  const firstname = firstNameTextbox.value;
  const lastname = lastNameTextbox.value;
  const email = emailTextbox.value;

  const newSubscriber = {
    firstname: firstname,
    lastname: lastname,
    email: email,
  };

  subscribers.push(newSubscriber);
}

function updateList() {
  let subscibersList = "";
  for (let i = 0; i < subscribers.length; i++) {
    subscibersList += `<li>${subscribers[i].firstname} ${subscribers[i].lastname}</li>`;
  }

  subscribersList.innerHTML = subscibersList;
}

function loadSubscribers(){
    if(localStorage.getItem("subscribers")== null) return;
    subscribers = JSON.parse(localStorage.getItem("subscribers"));
    updateList();
}

function init(){

  // alle controls laden die required
  //const requiredFields = document.querySelectorAll("[required]");
  // alle required controls overlopen
  for(let i = 0, l = requiredFields.length ; i < l ; i++){
    let field = requiredFields[i];
    // onchange event aan de control toevoegen
    field.addEventListener("change", inputFieldUpdate);
  }

  

  // onchange event aan de control toevoegen

  loadSubscribers();
}
init();