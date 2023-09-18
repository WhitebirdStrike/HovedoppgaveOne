function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    closeAllDropdowns();
    dropdown.style.display = "block";
  }
}

function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll(
    ".dropdown-content, .dropdown-content2"
  );
  dropdowns.forEach(function (dropdown) {
    dropdown.style.display = "none";
  });
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (event) {
  if (
    !event.target.matches(".bossButton") &&
    !event.target.matches(".bossButton2")
  ) {
    closeAllDropdowns();
  }
};
