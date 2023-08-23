const pElement = document.getElementById("paragraph");

console.dir(pElement);

const maClasseElements = document.getElementsByClassName('maClasse');

console.log(maClasseElements);

const pElements = document.getElementsByTagName('p');
console.log(pElements);


const firstElementMaDiv = document.querySelector("div > :first-child");
console.log(firstElementMaDiv);

const firstElementsMaDiv = document.querySelectorAll("div > :first-child");
console.log(firstElementsMaDiv);


const h3Element = document.createElement('h3');
h3Element.innerText = sayHello();
// h3Element.innerText = sayHello();
h3Element.id = "myH3Title";
console.log(h3Element);

const contentDiv = document.getElementById('content');
contentDiv.appendChild(h3Element);

contentDiv.innerHTML = "<h5>COUCOu</h5>";
contentDiv.innerText = "<h5>COUCOu</h5>";
contentDiv.textContent = "<h5>COUCOu</h5>";


function sayHello () { return "Hello World !"; }

const p3Element = document.getElementById('p3');
console.log(p3Element.attributes);

const maDiv = document.getElementById('madiv');
console.log(maDiv.children);
console.log(maDiv.children[1].children);


function deleteRow (event) {
    event.target.parentNode.parentNode.remove()
}