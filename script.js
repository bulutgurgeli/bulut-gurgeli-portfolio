const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const modal = document.querySelector(".video-modal");
const modalFrame = modal.querySelector("iframe");
const modalClose = document.querySelector(".modal-close");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

function openVideo(url) {
  modalFrame.src = `${url}${url.includes("?") ? "&" : "?"}autoplay=1`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalFrame.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-video]").forEach((button) => {
  button.addEventListener("click", () => openVideo(button.dataset.video));
});

modalClose.addEventListener("click", closeVideo);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeVideo();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeVideo();
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
