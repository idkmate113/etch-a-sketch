let container = document.querySelector("#container");
let etch = document.createElement("div");
let input = document.querySelector("input");
let button = document.querySelector(".button");
etch.classList.add("etch");

let userInput = prompt("How many grids do you wanna make?", 16);

container.appendChild(etch);

function removeGrid() {
  etch.innerHTML = "";
}

function makingGrid() {
  for (let i = 0; i < userInput * userInput; i++) {
    let divs = document.createElement("div");

    divs.classList.add("divs");
    container.appendChild(divs);
    etch.appendChild(divs);
    divs.style.height = 700 / userInput + "px";
    divs.style.width = 700 / userInput + "px";

    divs.addEventListener("mouseover", () => {
      divs.style.backgroundColor = input.value;
    });
  }
  button.addEventListener("click", () => {
    removeGrid();
    createGrid();
  });

  function createGrid() {
    userInput = prompt("How many grids do you wanna make?", 16);
    if (userInput > 100) {
      userInput = prompt("Can't make more than 100 grids", 16);
    }
    for (let i = 0; i < userInput * userInput; i++) {
      let divs = document.createElement("div");

      divs.classList.add("divs");
      container.appendChild(divs);
      etch.appendChild(divs);
      divs.style.height = 700 / userInput + "px";
      divs.style.width = 700 / userInput + "px";

      divs.addEventListener("mouseover", () => {
        divs.style.backgroundColor = input.value;
      });
    }
  }
}

makingGrid();
//
