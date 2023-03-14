let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
  let searchInput = document.getElementById("searchInput");

  if (searchInput.classList[0] == 'squished') {
    searchInput.classList.remove("squished");
    searchInput.classList.add("full");
  } else if(searchInput.classList[0] == 'full'){
    searchInput.classList.remove("full");
    searchInput.classList.add("squished");
  }

});
