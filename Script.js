const tombolBuka = document.getElementById("Buka");
const tombolTutup = document.getElementById("Tutup");
const modal = document.querySelector(".isi-modal");
const overlay = document.querySelector(".overlay");

tombolBuka.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

tombolTutup.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});
