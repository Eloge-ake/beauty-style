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



btnAfficherForm.addEventListener("click", () => {
  modalForm.classList.add("active");
});

btnFermerForm.addEventListener("click", () => {
  modalForm.classList.remove("active");
});



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









let produitSelectionne = null;
const numeroWhatsApp = "22892252525";



// ================================
// ELEMENTS HTML
// ================================

const modal = document.querySelector(".modal");

const fermerModal = document.querySelector(".fermer-modal");

const modalImage = document.querySelector(".modal-image");

const modalNom = document.querySelector(".modal-nom");

const modalPrix = document.querySelector(".modal-prix");

const modalCategorie = document.querySelector(".modal-categorie");

const commandeForm = document.querySelector(".commande-form");

const nomClient = document.querySelector("#nom-client");

const container = document.querySelector(".bestsellers-container");




function afficherProduits() {

    container.innerHTML = "";


    for (
        let i = 0;
        i < 4;
        i++
    ) {

        const produit = produits[i];


        const card = document.createElement("div");

        card.classList.add("produit-card");


        card.innerHTML = `

            <div
                class="img-produit"
                style="background-image: url('${produit.image}')"
                role="img"
                aria-label="${produit.nom}, ${produit.genre}, ${produit.forme}, ${produit.type}, ${produit.rim}"
            ><i class="fa-solid fa-glasses"></i></div>
            

            <h2><i class="fa-solid fa-tag"></i>${produit.prix} FCFA</h2>
            <p>${produit.genre}, ${produit.forme}, ${produit.type}</p>



            

        `;


        container.appendChild(card);


        // Bouton commander

        const boutonCommander =
            card.querySelector(".btnCommander");


        card.addEventListener("click", () => {

            ouvrirModal(produit);

        });

    }


    

}







// ================================
// OUVRIR MODAL
// ================================

function ouvrirModal(produit) {


    produitSelectionne = produit;


    modalImage.src = produit.image;

    const produitAlt = produit.nom + ", " + produit.genre + ", " + produit.forme + ", " + produit.type + ", " + produit.rim;

    modalImage.alt = produitAlt;


    modalNom.textContent =
        produit.nom;

    modalPrix.innerHTML = '<i class="fa-solid fa-tag"></i>'+ produit.prix + " FCFA";


    modalCategorie.textContent =
        `${produit.genre} • ${produit.forme} • ${produit.type}`;


    modal.classList.add("active");

}


// ================================
// FERMER MODAL
// ================================

fermerModal.addEventListener("click", () => {

    modal.classList.remove("active");

});








// ================================
// COMMANDER SUR WHATSAPP
// ================================

commandeForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const nom = nomClient.value;


    // URL complète de l'image

    const imageUrl = new URL(
        produitSelectionne.image,
        window.location.href
    ).href;


    // Message WhatsApp

    const message = `
    Bonjour Beauty & Style 👋

    Nom du client : ${nom}


    Je souhaite commander :

    Produit : ${produitSelectionne.nom}
    Caractéristique : ${produitSelectionne.genre}, ${produitSelectionne.forme}, ${produitSelectionne.type}
    Prix : ${produitSelectionne.prix} FCFA


    Nom du client : ${nom}

    Photo du produit :
    ${imageUrl}
    `;


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;


    window.open(url, "_blank");


    // ================================
    // MODAL THANKS
    // ================================

    const modalThanks = document.querySelector(".thanks-modal");
    modalThanks.classList.add("active");

    const fermerThanks = document.querySelector(".fermer-modal-thanks");
    fermerThanks.addEventListener("click", () => {
        modalThanks.classList.remove("active");
    });

    const thanksText = document.querySelector(".thanks-text");
    thanksText.textContent = `Merci ${nom} pour votre commande ! Nous vous contacterons bientôt via WhatsApp.`;

});



// ================================
// MODAL FULL IMAGE
// ================================

const modalFullImage = document.querySelector(".modal-full-image")
const fullImage = document.querySelector(".full-image")
const closeFullImage = document.querySelector(".fermer-modal-full-image")



modalImage.addEventListener("click", () => {
    fullImage.src = modalImage.src;
    modalFullImage.classList.add("active");
});

closeFullImage.addEventListener("click", () => {
    modalFullImage.classList.remove("active");
})

// ================================
// AFFICHAGE INITIAL
// ================================

afficherProduits();

window.addEventListener("load", () => {

    const transition = document.querySelector(".transition");

    setTimeout(() => {
        transition.classList.add("hide");
    }, 1500);

});