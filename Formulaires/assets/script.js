

document.addEventListener("DOMContentLoaded", function() {
    const connecter = document.querySelector(".Connecter");
    

    const Bienvenue=document.querySelector(".Bienvenue");
    Bienvenue.classList.add("disparition");


    const Suivant=document.querySelector(".Suivant");
    Suivant.addEventListener("click",()=>{
        connecter.classList.add("disparition");
        Bienvenue.classList.remove("disparition");
    })





    const motDePasseOublié=document.querySelector(".motDePasseOublié");
    motDePasseOublié.classList.add("disparition");
  });