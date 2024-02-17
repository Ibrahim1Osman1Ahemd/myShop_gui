const popUp = document.getElementById("pou-up");
const signIn = document.querySelector("#sign-in");
const overlay = document.getElementById("overlay");
const close = document.getElementById("close");
const closeLogIn = document.getElementById("close-login");
const submit = document.getElementById("submit-signUp");
const popUPLogin = document.getElementById("pou-up-login")
const logIN = document.getElementById("login")


function showPopUp(id){
    popUp.classList.add("show")
    overlay.classList.add("overlay")
    console.log(id , "this is the pop up id ")
    if(id === "login"){
        
        popUPLogin.classList.add("show")
        overlay.classList.add("overlay")
        popUp.classList.remove("show");
    }
}
function closePopUp(fromlogin){
    popUp.classList.remove("show");
    overlay.classList.remove("overlay");

    if(fromlogin == "close from login"){
        popUPLogin.classList.remove("show")
        overlay.classList.remove("overlay")
    }
}



function showProfile(click){
    let id = document.getElementById("porflie-nav");

    if(id.attributes.class.nodeValue.includes("show") == false){
        id.classList.add("profile");
        id.classList.add("show");
        return
    }

   

    if(id.attributes.class.nodeValue.includes("show") == true){
        id.classList.remove("profile");
        id.classList.remove("show");
    }
  

  
}


const addNewProdcutBtn = document.getElementById("add-new-prodcut");

const closeNew = document.getElementById("close-new");
const submitNew = document.getElementById("submit-new");


function newProdForm(){
    const popUp = document.getElementById('pou-up-new-prodcut');

    popUp.classList.add("show");
    overlay.classList.add("show");
};


if(closeNew != null | closeNew != undefined){
    closeNew.addEventListener("click" , () => {
        const popUp = document.getElementById('pou-up-new-prodcut');
    
        popUp.classList.remove("show");
        overlay.classList.remove("overlay");
    });
}



if(submitNew != null | submitNew != undefined){
    submitNew.addEventListener("click" , (e) => {

        const popUp = document.getElementById('pou-up-new-prodcut');
    
        e.preventDefault()
    
        popUp.classList.remove("show");
        overlay.classList.remove("overlay");
    });

}
