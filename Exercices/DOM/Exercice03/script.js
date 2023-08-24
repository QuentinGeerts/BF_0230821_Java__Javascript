// 4. Reprenez le programme du panier.
// Ajoutez la possibilité de supprimer un article du panier.
// Il faudra bien sûr recalculer le total.

const products = [
    { name: 'Chaise', price: 25 },
    { name: 'Table', price: 150 },
    { name: 'Meuble TV', price: 250 },
    { name: 'Plante', price: 15 },
];

window.onload = () => {

    const total = document.getElementById('total');
    const catalogue = document.getElementById('catalogue');

    total.innerText = 0;

    products.forEach(product => {
        // Création des éléments HTML
        const productRow = document.createElement('tr');
        const productName = document.createElement('td');
        const productPrice = document.createElement('td');
        const productAdd = document.createElement('td');
        const productAddBtn = document.createElement('button');

        // Paramétrer les éléments
        productName.innerText = product.name;
        productPrice.innerText = product.price;
        productAddBtn.innerText = '🛒';

        productAddBtn.addEventListener('click', addProduct);

        // Ajouter les éléments aux parents
        productAdd.appendChild(productAddBtn);
        productRow.appendChild(productName);
        productRow.appendChild(productPrice);
        productRow.appendChild(productAdd);
        catalogue.appendChild(productRow);
    });

};

function addProduct (event) {
    // this fonctionnel aussi
    const cart = document.getElementById('panier');
    const total = document.getElementById('total');

    let productFound = false;

    const selectedProduct = event.target.parentNode.parentNode;
    // Extraction des données
    const name = selectedProduct.children[0].textContent;
    const price = selectedProduct.children[1].textContent;

    // Vérifier si le produit est dans le panier

    const productsInCart = cart.children;

    for (const product of productsInCart) {
        const productName = product.children[0].innerText;
        const productPrice = product.children[2].innerText;

        if (productName === name && productPrice === price) {
            productFound = true;
            product.children[1].innerText = +product.children[1].innerText + 1;
            break;
        }
    }

    if (!productFound) {

        // Création de ligne du panier
        // Création des éléments HTML
        const productRow = document.createElement('tr');
        const productName = document.createElement('td');
        const productQuantity = document.createElement('td');
        const productPrice = document.createElement('td');
        const productRemove = document.createElement('td');
        const productRemoveBtn = document.createElement('button');

        // Paramétrer les éléments
        productName.innerText = name;
        productQuantity.innerText = 1;
        productPrice.innerText = price;
        productRemoveBtn.innerText = '❌';

        productRemoveBtn.addEventListener('click', removeProduct);

        // Ajouter les éléments aux parents
        productRemove.appendChild(productRemoveBtn);
        productRow.appendChild(productName);
        productRow.appendChild(productQuantity);
        productRow.appendChild(productPrice);
        productRow.appendChild(productRemove);
        cart.appendChild(productRow);
    }

    // Mettre à jour le total
    total.innerText = +total.innerText + +price;

}

function removeProduct () {
    const total = document.getElementById('total');
    const productRowToRemove = this.parentNode.parentNode;

    const productQuantity = productRowToRemove.children[1];
    
    // Mettre à jour le total
    total.innerText = +total.innerText - +productRowToRemove.children[2].innerText;

    // Vérifier si la quantité est supérieure à 1 :
    // - Vrai => Réduire la quantité
    // - Faux => Supprime la ligne
    
    if (productQuantity.innerText > 1) {
        productRowToRemove.children[1].innerText = +productRowToRemove.children[1].innerText - 1;
    }
    else {
        productRowToRemove.remove();
    }

}