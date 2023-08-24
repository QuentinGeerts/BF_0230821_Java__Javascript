const GENDER_API = `https://api.genderize.io/?name=__name__&country_id=__country__`;
const COUNTRIES_API = `https://restcountries.com/v2/all`;

document.forms.myform.onsubmit = async function (e) {
    e.preventDefault();
    
    let info = await get(
        GENDER_API
            .replace('__name__', this.firstname.value)
            .replace('__country__', this.country.value)
    );

    const results = document.getElementById('results');
    results.innerText = "";
    
    let count = document.createElement('p');
    let country_id = document.createElement('p');
    let gender = document.createElement('p');
    let name = document.createElement('p');
    let probability = document.createElement('p');

    count.innerText = "count : " + info.count;
    country_id.innerText = "country_id : " + info.country_id;
    gender.innerText = "gender : " + info.gender;
    name.innerText = "name : " + info.name;
    probability.innerText = "probability : " + (info.probability * 100) + "%";

    results.appendChild(count);
    results.appendChild(country_id);
    results.appendChild(gender);
    results.appendChild(name);
    results.appendChild(probability);

    
}

window.onload = async () => {
    let countries = [];
    countries = await get(COUNTRIES_API);

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.alpha2Code;
        option.innerText = country.translations.fr;
        document.forms.myform.country.appendChild(option);
    });
};


function get (url) {
    return fetch(url)
        .then(response => response.json());
}
