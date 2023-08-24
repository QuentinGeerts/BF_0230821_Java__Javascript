const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', getResults);

function getResults () {

    // Création d'un objet XHR
    const xhr = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");

    console.log(xhr);

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };

    xhr.open('get', 'demo.txt');
    xhr.send();


}