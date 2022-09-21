
let form = document.getElementById("input-button");
let email = document.getElementById("email-input").value;
let error = document.getElementById("error");
let regex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
function validation(){
    error.classList.remove('hidden');
};

form.addEventListener("click",()=>{
 preventDefault();
 validation();
 console.log("hello");
})