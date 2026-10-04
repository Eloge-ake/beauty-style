let produitSelectionneBrume = null;



// ================================
// ELEMENTS HTML
// ================================

// const modal = document.querySelector("#modal");

// const fermerModal = document.querySelector("#fermer-modal");

// const modalImage = document.querySelector("#modal-image");

// const modalNom = document.querySelector("#modal-nom");

// const modalPrix = document.querySelector("#modal-prix");

// const modalCategorie = document.querySelector("#modal-categorie");

// const commandeForm = document.querySelector("#commande-form");

// const nomClient = document.querySelector("#nom-client");

const containerB = document.querySelector(".produits-container-brumes");




// ================================
// TRI
// ================================

const prixCroissantb =
    document.querySelector(".prix-croissant-brumes");

const prixDecroitb =
    document.querySelector(".prix-decroit-brumes");

const btnTrisb =
    document.querySelectorAll(".tri-prix-brumes button");



// ================================
// AFFICHER LES PRODUITS
// ================================

function afficherProduitsB() {

    containerB.innerHTML = "";


    for (let produit of produitsBrumes) {
        const cardB = document.createElement("div");

        cardB.classList.add("produit-card");


        cardB.innerHTML = `

            <div
                class="img-produit"
                style="background-image: url('${produit.image}')"
            ><i class="fa-solid fa-spray-can-sparkles"></i></div>

            

            <h2><i class="fa-solid fa-tag"></i>${produit.prix} FCFA</h2>

            <p>${produit.nom}</p>

        `;


        containerB.appendChild(cardB);


        // Bouton commander

        const boutonCommander =
            cardB.querySelector(".btnCommander");


        cardB.addEventListener("click", () => {

            ouvrirModalB(produit);

        });

    }

}



// ================================
// TRI PRIX CROISSANT
// ================================

prixCroissantb.addEventListener("click", () => {


    // Active

    btnTrisb.forEach((btn) => {

        btn.classList.remove("active");

    });


    prixCroissantb.classList.add("active");


    // Tri

    produitsBrumes.sort((a, b) => {

        return a.prix - b.prix;

    });




    afficherProduitsB();

});


// ================================
// TRI PRIX DECROISSANT
// ================================

prixDecroitb.addEventListener("click", () => {


    // Active

    btnTrisb.forEach((btn) => {

        btn.classList.remove("active");

    });


    prixDecroitb.classList.add("active");


    // Tri

    produitsBrumes.sort((a, b) => {

        return b.prix - a.prix;

    });




    afficherProduitsB();

});


// ================================
// OUVRIR MODAL
// ================================

function ouvrirModalB(produit) {


    produitSelectionneBrume = produit;


    modalImage.src = produit.image;

    modalImage.alt = produit.nom;


    modalNom.textContent =
        produit.nom;


    modalPrix.innerHTML =
       '<i class="fa-solid fa-tag"></i>'+produit.prix + " FCFA";


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
        produitSelectionneBrume.image,
        window.location.href
    ).href;


    // Message WhatsApp

    const message = `
Bonjour Beauty & Style 👋

Nom du client : ${nom}


Je souhaite commander :

Produit : ${produitSelectionneBrume.nom}
Prix : ${produitSelectionneBrume.prix} FCFA

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
// AFFICHAGE INITIAL
// ================================

afficherProduitsB();