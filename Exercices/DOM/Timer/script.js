// Affichez l’heure actuelle (heure : minutes : secondes) dans le titre de la fenêtre de
// votre navigateur en utilisant setTimeout et ensuite setInterval.
// 2. Affichez la date et l’heure sur votre page web.
// Mardi 25 Avril
//  13:16:32

window.onload = () => {
    displayDate();
    setInterval(displayHours, 100);

    function displayDate () {

        const dateField = document.getElementById('dateField');
        const now = new Date();

        const daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];


        const day = daysOfWeek[now.getDay()];
        const date = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();

        const formattedDate = `${day} ${date} ${month} ${year}`;

        dateField.innerText = formattedDate;

        // dateField.innerText = now.toLocaleDateString('fr-FR', { weekday: 'long', day: '2-digit', month: 'long', year: "numeric" });

    }

    function displayHours () {

        const hourField = document.getElementById('hourField');
        const now = new Date();


        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const milliseconds = now.getMilliseconds();

        if (hours === 0 && minutes === 0 && seconds === 0) displayDate();

        formattedHours = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
        hourField.innerText = formattedHours;

    }
};
