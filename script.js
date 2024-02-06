document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a#pageLink").forEach(function (link) {
    link.addEventListener("click", function () {
      document.querySelectorAll("a#pageLink").forEach(function (link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  document.querySelectorAll(".btn-show-left-area").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll(".left-area").forEach(function (area) {
        area.classList.add("show");
      });
    });
  });

  document.querySelectorAll(".btn-show-right-area").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll(".right-area").forEach(function (area) {
        area.classList.add("show");
      });
    });
  });

  document.querySelectorAll(".btn-close-right").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll(".right-area").forEach(function (area) {
        area.classList.remove("show");
      });
    });
  });

  document.querySelectorAll(".btn-close-left").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll(".left-area").forEach(function (area) {
        area.classList.remove("show");
      });
    });
  });
});

document.querySelector('.main-area').addEventListener('scroll', function () {
  if (this.scrollTop >= 88) {
    document.querySelector('div.main-area-header').classList.add('fixed');
  } else {
    document.querySelector('div.main-area-header').classList.remove('fixed');
  }
});

