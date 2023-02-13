let body = document.querySelector("body");
let blame = document.querySelectorAll(".blamePerson");
let popup;
let button;
let button2;
let popupContainer;
let text;

for (let i = 0; i < blame.length; i++) {
  blame[i].addEventListener("click", (event) => {
      addBlame(event);
    });
}

function addBlame(event) {
  let target = event.target;
  popup = document.createElement("div");
  popup.classList.add("popup");
  body.appendChild(popup);
  popupContainer = document.createElement("div");
  popupContainer.classList.add("popupContainer");
  popup.appendChild(popupContainer);
  text = document.createElement('p')
  popupContainer.appendChild(text)
  text.innerHTML = "Êtes-vous sûr(e)?"
  button = document.createElement("a");
  button.classList.add("button");
  button.innerHTML = "Oui";
  button.href = `/addBlame/${target.value}`;
  popupContainer.appendChild(button);

  button2 = document.createElement("a");
  button2.classList.add("button");
  button2.innerHTML = "Non";
  button2.href = `/main`;
  popupContainer.appendChild(button2);
}

