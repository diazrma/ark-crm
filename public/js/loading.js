let overlay = document.getElementsByClassName("loading-overlay")[0];

const loading = (time) => {
  overlay.classList.toggle("is-active");
  setTimeout(() => {
    overlay.classList.toggle("is-active");
  }, time);
};

loading(1000);
