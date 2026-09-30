let produitSelectionneMontre = null;


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

const containerC = document.querySelector(".produits-container-montres");




// ================================
// TRI
// ================================

const prixCroissantC =
    document.querySelector(".prix-croissant-montres");

const prixDecroitC =
    document.querySelector(".prix-decroit-montres");

const btnTrisC =
    document.querySelectorAll(".tri-prix-montres button");




// ================================
// AFFICHER LES PRODUITS
// ================================

function afficherProduitsC() {

    containerC.innerHTML = "";


    for (let produit of produitsMontres) {
        const cardC = document.createElement("div");

        cardC.classList.add("produit-card");


        cardC.innerHTML = `

            <div
                class="img-produit"
                style="background-image: url('${produit.image}')"
            ><i class="fa-solid fa-clock"></i></div>

            <h2><i class="fa-solid fa-tag"></i>${produit.prix} FCFA</h2>

            <p>${produit.nom}</p>

        `;


        containerC.appendChild(cardC);


        // Bouton commander

        const boutonCommander =
            cardC.querySelector(".btnCommander");


        cardC.addEventListener("click", () => {

            ouvrirModalC(produit);

        });

    }

}



// ================================
// TRI PRIX CROISSANT
// ================================

prixCroissantC.addEventListener("click", () => {


    // Active

    btnTrisC.forEach((btn) => {

        btn.classList.remove("active");

    });


    prixCroissantC.classList.add("active");


    // Tri

    produitsMontres.sort((a, b) => {

        return a.prix - b.prix;

    });




    afficherProduitsC();

});


// ================================
// TRI PRIX DECROISSANT
// ================================

prixDecroitC.addEventListener("click", () => {


    // Active

    btnTrisC.forEach((btn) => {

        btn.classList.remove("active");

    });


    prixDecroitC.classList.add("active");


    // Tri

    produitsMontres.sort((a, b) => {

        return b.prix - a.prix;

    });




    afficherProduitsC();

});


// ================================
// OUVRIR MODAL
// ================================

function ouvrirModalC(produit) {


    produitSelectionneMontre = produit;


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
        produitSelectionneMontre.image,
        window.location.href
    ).href;


    // Message WhatsApp

    const message = `
Bonjour Beauty & Style 👋

Je souhaite commander :

Produit : ${produitSelectionneMontre.nom}
Prix : ${produitSelectionneMontre.prix} FCFA


Nom du client : ${nom}

Photo du produit :
${imageUrl}
`;


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;


    window.open(url, "_blank");

});


// ================================
// AFFICHAGE INITIAL
// ================================

afficherProduitsC();