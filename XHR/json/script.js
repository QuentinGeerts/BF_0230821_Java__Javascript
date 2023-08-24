const xhr = new XMLHttpRequest();

xhr.onload = function () {

    const objectJSON = JSON.parse(xhr.responseText);
    const objectString = JSON.stringify(objectJSON);

    document.getElementById('lastname').innerText = objectJSON.lastname;
    document.getElementById('firstname').innerText = objectJSON.firstname;

    console.log('objectJSON :>> ', objectJSON);
    console.log('objectString :>> ', objectString);

}

xhr.open('get', 'demoJSON.json');
xhr.send();