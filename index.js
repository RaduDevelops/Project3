let error = document.getElementById("email-error");
let button = document.getElementById("input-button");
let value = document.getElementById("email-input").value;
let regex =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
button.addEventListener("click",()=>{
     if(regex.test(value)){
      error.classList.remove("hidden"); 
    }
});


