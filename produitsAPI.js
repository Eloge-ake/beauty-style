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

const container = document.querySelector(".produits-container");

const btnVoirPlus = document.querySelector(".btnAfficherPlus");


// ================================
// FILTRES
// ================================

const boutonsGenre =
    document.querySelectorAll(".filtres-genre button");

const boutonsForme =
    document.querySelectorAll(".filtres-forme button");

const boutonsType =
    document.querySelectorAll(".filtres-type button");

const boutonsRim =
    document.querySelectorAll(".filtres-rim button");


// ================================
// TRI
// ================================

const prixCroissant =
    document.querySelector(".prix-croissant");

const prixDecroit =
    document.querySelector(".prix-decroit");

const btnTris =
    document.querySelectorAll(".tri-prix button");


// ================================
// VARIABLES
// ================================

let nbreAffiche = 8;

let nbreParClic = 8;


// Produits actuellement affichés
let produitsFiltres = produits;


// Filtres sélectionnés
let genreChoisi = "tous";

let formeChoisie = "toutes";

let typeChoisi = "tous";

let rimChoisi = "tous";

 
// ================================
// AFFICHER LES PRODUITS
// ================================

function afficherProduits() {

    container.innerHTML = "";


    for (
        let i = 0;
        i < nbreAffiche && i < produitsFiltres.length;
        i++
    ) {

        const produit = produitsFiltres[i];


        const card = document.createElement("div");

        card.classList.add("produit-card");


        card.innerHTML = `

            <div
                class="img-produit"
                style="background-image: url('${produit.image}')"
            ><i class="fa-solid fa-glasses"></i></div>

            <h2><i class="fa-solid fa-tag"></i>${produit.prix} FCFA</h2>
            <p>${produit.genre}, ${produit.forme}, ${produit.type}</p>



            <button class="btnCommander" style="display:none"></button>

        `;


        container.appendChild(card);


        // Bouton commander

        const boutonCommander =
            card.querySelector(".btnCommander");


        card.addEventListener("click", () => {

            ouvrirModal(produit);

        });

    }


    // ================================
    // BOUTON AFFICHER PLUS / MOINS
    // ================================

    if (nbreAffiche >= produitsFiltres.length) {

        btnVoirPlus.textContent = "Afficher moins";

    } else {

        btnVoirPlus.textContent = "Afficher plus";

    }

}


// ================================
// FILTRE GENERAL
// ================================

function appliquerFiltres() {

    produitsFiltres = produits.filter((produit) => {


        // Vérification genre

        const correspondGenre =
            genreChoisi === "tous" ||
            produit.genre === genreChoisi || produit.genre === "unisexe";



        // Vérification forme

        const correspondForme =
            formeChoisie === "toutes" ||
            produit.forme === formeChoisie;


        // Vérification type

        const correspondType =
            typeChoisi === "tous" ||
            produit.type === typeChoisi;


        const correspondRim =
            rimChoisi === "tous" ||
            produit.rim === rimChoisi;


        // Le produit doit respecter
        // TOUS les filtres

        return (
            correspondGenre &&
            correspondForme &&
            correspondType &&
            correspondRim
        );

    });


    nbreAffiche = 8;

    afficherProduits();

}


// ================================
// FILTRE GENRE
// ================================

boutonsGenre.forEach((bouton) => {

    bouton.addEventListener("click", () => {


        genreChoisi =
            bouton.dataset.genre;


        // Gestion active

        boutonsGenre.forEach((btn) => {

            btn.classList.remove("active");

        });


        bouton.classList.add("active");


        appliquerFiltres();

    });

});


// ================================
// FILTRE FORME
// ================================

boutonsForme.forEach((bouton) => {

    bouton.addEventListener("click", () => {


        formeChoisie =
            bouton.dataset.forme;


        // Gestion active

        boutonsForme.forEach((btn) => {

            btn.classList.remove("active");

        });


        bouton.classList.add("active");


        appliquerFiltres();

    });

});


// ================================
// FILTRE TYPE
// ================================

boutonsType.forEach((bouton) => {

    bouton.addEventListener("click", () => {


        typeChoisi =
            bouton.dataset.type;


        // Gestion active

        boutonsType.forEach((btn) => {

            btn.classList.remove("active");

        });


        bouton.classList.add("active");


        appliquerFiltres();

    });

});

// ================================
// FILTRE RIM
// ================================

boutonsRim.forEach((bouton) => {

    bouton.addEventListener("click", () => {


        rimChoisi =
            bouton.dataset.rim;


        // Gestion active

        boutonsRim.forEach((btn) => {

            btn.classList.remove("active");

        });


        bouton.classList.add("active");


        appliquerFiltres();

    });

});


// ================================
// AFFICHER PLUS / MOINS
// ================================

btnVoirPlus.addEventListener("click", () => {


    if (nbreAffiche >= produitsFiltres.length) {

        // Revenir au début

        nbreAffiche = 8;

    } else {

        // Ajouter 2 produits

        nbreAffiche += nbreParClic;

    }


    afficherProduits();

});


// ================================
// TRI PRIX CROISSANT
// ================================

prixCroissant.addEventListener("click", () => {


    // Active

    btnTris.forEach((btn) => {

        btn.classList.remove("active");

    });


    prixCroissant.classList.add("active");


    // Tri

    produitsFiltres.sort((a, b) => {

        return a.prix - b.prix;

    });


    nbreAffiche = 8;


    afficherProduits();

});


// ================================
// TRI PRIX DECROISSANT
// ================================

prixDecroit.addEventListener("click", () => {


    // Active

    btnTris.forEach((btn) => {

        btn.classList.remove("active");

    });


    prixDecroit.classList.add("active");


    // Tri

    produitsFiltres.sort((a, b) => {

        return b.prix - a.prix;

    });


    nbreAffiche = 8;


    afficherProduits();

});


// ================================
// OUVRIR MODAL
// ================================

function ouvrirModal(produit) {


    produitSelectionne = produit;


    modalImage.src = produit.image;

    modalImage.alt = produit.nom;


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

    modalCategorie.innerHTML = ""
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
Prix : ${produitSelectionne.prix} FCFA

Genre : ${produitSelectionne.genre}
Forme : ${produitSelectionne.forme}
Type : ${produitSelectionne.type}


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

afficherProduits();