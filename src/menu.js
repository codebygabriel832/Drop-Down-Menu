const body = document.querySelector(".content");
const btnContainer = document.querySelector(".btnContainer");

export const buttonEventHandler = function creatingButtonAndEventHanler() {
  const button = document.createElement("button");
  button.textContent = "Menu";
  button.addEventListener("click", () => {
    if (body.innerHTML === "") {
      createContent();
    } else {
      body.innerHTML = "";
    }
  });
  btnContainer.appendChild(button);
};
const createContent = function creatingContentDisplayedOnButtonClick() {
  const contentDiv = document.createElement("div");
  const profile = document.createElement("p");
  const settings = document.createElement("p");
  const support = document.createElement("p");

  profile.textContent = "Profile";
  settings.textContent = "Settings";
  support.textContent = "Support";

  contentDiv.appendChild(profile);
  contentDiv.appendChild(settings);
  contentDiv.appendChild(support);
  body.appendChild(contentDiv);
};
