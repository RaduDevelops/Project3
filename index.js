
// Declaring the vars
let error = document.getElementById("email-error");
let button = document.getElementById("input-button");
let emailInput = document.getElementById("email-input");
let regex =/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
// the validation function
const validateEmail = () => {
  if(!regex.test(emailInput.value)){
     error.classList.remove("hidden")
  }
  console.log(regex.test(emailInput.value));
};
// adding the event listeners 
button.addEventListener("click",(e)=>{
  validateEmail();
});
emailInput.addEventListener("input",() => 
 error.classList.add("hidden")
);