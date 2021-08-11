const containerForm = document.querySelector("#form-data");
const inputText = document.querySelector(".input-text");
const buttonSubmit = document.querySelector(".submit");
const reference = document.querySelector("#root");

containerForm.addEventListener("submit", function (e) { e.preventDefault(); 

const paragraph = document.createElement("img");
paragraph.style.width = "300px";
paragraph.style.height = "300px";
paragraph.style.padding = "10px";
paragraph.src = inputText.value;

reference.appendChild(paragraph)

inputText.value = "";
});

