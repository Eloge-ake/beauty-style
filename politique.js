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

const btnAfficherContact = document.querySelector(".contact");
const btnFermerContact = document.querySelector(".btnFc");
const modalContact = document.querySelector(".modal-contact");
const btnSContact = document.querySelector(".btn-contact");

// Si vous avez un deuxième bouton, déclarez-le ici :
// const btnContactp = document.querySelector(".btn-contact-p");

btnAfficherContact.addEventListener("click", () => {
  modalContact.classList.add("active");
});

btnSContact.addEventListener("click", () => {
  modalContact.classList.add("active");
});

/* Décommentez si btnContactp existe dans votre HTML :
btnContactp.addEventListener("click", () => {
  modalContact.classList.add("active");
});
*/

btnFermerContact.addEventListener("click", () => {
  modalContact.classList.remove("active");
});

window.addEventListener("load", () => {

    const transition = document.querySelector(".transition");

    setTimeout(() => {
        transition.classList.add("hide");
    }, 1500);

});