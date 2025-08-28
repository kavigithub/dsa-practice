let parent = document.querySelector(".parent");
parent.addEventListener("click", (e) => {
  let getElm = e.target.closest(".child");
  //if click was not on child
  if (!getElm) return;

  //remove class
  parent.querySelectorAll(".child").forEach((element) => {
    element.classList.remove("expandWidth");
  });

  getElm.classList.add("expandWidth");
});
