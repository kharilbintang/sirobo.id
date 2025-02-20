// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Redirect ke Shopee ketika tombol "Beli Sekarang" diklik
const beliSekarang = document.querySelector(".cta");
beliSekarang.addEventListener("click", function (e) {
  e.preventDefault();
  window.open(
    "https://shopee.co.id/Robot-Edukasi-Anak-IOT-Sirobo-i.220155359.5415357209?sp_atk=75958d4d-b174-4034-9d1f-4a76a67f36a2",
    "_blank"
  );
});
