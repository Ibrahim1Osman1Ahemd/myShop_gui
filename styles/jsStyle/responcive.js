const resNavBtn = document.getElementById("nav-brg");
let temp = 1 ;

resNavBtn.addEventListener("click" , () => {
    const nav = document.getElementById("nav");


    if(temp){
        nav.classList.add("show-nav");

        temp = 0;
    }else{
        nav.classList.remove("show-nav");
        temp = 1;
    }

})


function filterResponcive(id) {
    if(innerWidth >= 767) return
    if(document.getElementById(id).style.display !== "block"){
        document.getElementById(id).style.display = "block";
    }else{
        document.getElementById(id).style.display = "none";
    }
}
