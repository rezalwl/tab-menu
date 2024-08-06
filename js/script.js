const buttonWrapper = document.querySelector(".buttonWrapper");
const tabButtons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

buttonWrapper.addEventListener("click", (e) => {
  const mainContentID = e.target.dataset.id;
  const mainContent = document.querySelector(`#${mainContentID}`);

  tabButtons.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");

  contents.forEach((content) => content.classList.remove("active"));
  mainContent.classList.add("active");
});
