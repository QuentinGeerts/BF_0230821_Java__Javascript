const btn = document.getElementById('addElementBtn');
// btn.onclick = function (e) { addElement(e) };
btn.onclick = (e) => addElement(e);

function addElement (event) {

    const field = document.getElementById('field');
    const value = field.value.trim();

    if (value === '') return;

    console.log(event);
    
    // Création des éléments
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');
    
    // Ajouter l'élément à la liste
    const itemList = document.getElementById('itemList');
    itemList.appendChild(li);
    li.appendChild(button);
    li.appendChild(span);

    // Paramétrer les éléments
    span.innerText = value;
    button.innerText = "❌";

    button.addEventListener('click', () => {
        itemList.removeChild(li);
    })

    field.value = "";
    field.focus();
}