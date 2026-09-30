const menuBtn = document.querySelector(".menu-b");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const headerC = document.querySelector("header");

// =========================
// MENU MOBILE
// =========================

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// =========================
// HEADER AU SCROLL
// =========================

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerC.classList.add("scrolled");
  } else {
    headerC.classList.remove("scrolled");
  }
});

// =========================
// MODALE CONTACT
// =========================

const btnAfficherForm = document.querySelector(".btnAfficherForm");
const btnFermerForm = document.querySelector(".btnFermerForm");
const modalForm = document.querySelector(".modal-form");

// // Si vous avez un deuxième bouton, déclarez-le ici :
// // const btnContactp = document.querySelector(".btn-contact-p");

btnAfficherForm.addEventListener("click", () => {
  modalForm.classList.add("active");
});

btnFermerForm.addEventListener("click", () => {
  modalForm.classList.remove("active");
});

// /* Décommentez si btnContactp existe dans votre HTML :
// btnContactp.addEventListener("click", () => {
//   modalContact.classList.add("active");
// });
// */

// btnFermerContact.addEventListener("click", () => {
//   modalContact.classList.remove("active");
// });

const btnAfficherContact = document.querySelector(".contact");
const btnFermerContact = document.querySelector(".btnFc");
const modalContact = document.querySelector(".modal-contact");
const btnContactp = document.querySelector(".btn-contact");


btnAfficherContact.addEventListener("click", function(e) {
    e.preventDefault();

    modalContact.classList.add("active");
});

btnContactp.addEventListener("click", function(e) {
    e.preventDefault();

    modalContact.classList.add("active");
});

btnFermerContact.addEventListener("click", function() {
    modalContact.classList.remove("active");
});



let btnEnvoyerComs = document.querySelector("#envoyerComs")

btnEnvoyerComs.addEventListener("click", (e) =>{
    e.preventDefault();

    const nomComs = document.querySelector(".nomComs").value
    const commentaireArea = document.querySelector("#commentaire-area").value

    if (nomComs.trim() === "") {
        return;
    }

    if (commentaireArea.trim() === "") {
        return;
    } 

    const message = `Bonjour Beauty & Style 👋

    Je m'appelle ${nomComs}.

    Avis du client:
    ${commentaireArea}

    Merci.`;

    const numero = "22892252525";

    const lien = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;

    window.open(lien, "_blank");

})

const visibilityFiltres = document.querySelector(".visibility-filtres")
const filtresContainer = document.querySelector(".filtres")
const triContainer = document.querySelector(".tri-prix")


visibilityFiltres.addEventListener("click", ()=>{
  filtresContainer.classList.toggle("active")
  triContainer.classList.toggle("active")

  if(filtresContainer.classList.contains("active")){
    visibilityFiltres.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Cacher filtres et tri'
  }else{
    visibilityFiltres.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Afficher filtres et tri'
  }
})

window.addEventListener("load", () => {

    const transition = document.querySelector(".transition");

    setTimeout(() => {
        transition.classList.add("hide");
    }, 1500);

});