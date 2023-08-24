const btn = document.getElementById('addElementBtn');
// btn.onclick = function (e) { addElement(e) };
btn.onclick = (e) => addElement(e);

function addElement (event) {

    console.log(event);
    
    // Création d'un élément LI
    const li = document.createElement('li');
    
    // Paramétrer l'élément
    li.innerText = "item";
    
    // Ajouter l'élément à la liste
    const itemList = document.getElementById('itemList');
    itemList.appendChild(li);
}