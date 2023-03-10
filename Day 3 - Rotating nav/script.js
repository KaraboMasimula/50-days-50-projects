let navBtn = document.getElementById("navBtn");

navBtn.addEventListener("click", function () {
  let section = document.getElementById("section");

  let rotated = section.classList[0];

  if (rotated == "rotate") {
    section.classList.remove("rotate");
  } else {
    section.classList.add("rotate");
    document.getElementById(
        "navBtn"
      ).innerHTML = `<i class="fa-solid fa-x"></i>`;
  }
  ƒ;
});
