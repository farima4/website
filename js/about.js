const srpski = 'Websajt napravio Marko (farima4) koristeci html, css i javascript. Poenta je bila nauciti kako se prave webstranice. Ovdje se mogu naci neki programi koje sam napravio ili se instalirati igrice koje sam napravio sa python-om.';
const engleski = 'Website was made by Marko (farima4) using html, css and javascript. The goal was to learn how to make webpages. Here you can find some programs I made or you can install games I made with python.';

let dateeng = 'April 10th 2022';
let dateserb = 'deseti april 2022';

document.getElementById('par6').innerHTML = 'websajt azuriran: ' + dateserb;
let indicator = 'srpski';

document.getElementById('code').onclick = function() {
    if (indicator == 'srpski') {
        document.getElementById('par').innerHTML = engleski;
        document.getElementById('par2').innerHTML = 'Source code is available on GitHub.';
        document.getElementById('par3').innerHTML = 'Hosted for free on ';
        document.getElementById('par4').innerHTML = 'Creation of the website began on: April 5th 2022';
        document.getElementById('par5').innerHTML = 'Website went online: April 7th 2022';
        document.getElementById('par6').innerHTML = 'Website last updated: ' + dateeng;

        indicator = 'engleski';
    }
    else {
        document.getElementById('par').innerHTML = srpski;
        document.getElementById('par2').innerHTML = 'Source code na git hub-u';
        document.getElementById('par3').innerHTML = 'Besplatno hostovano pomocu ';
        document.getElementById('par4').innerHTML = 'Izrada webstranice zapocela: petog aprila 2022';
        document.getElementById('par5').innerHTML = 'websajt postavljen onlajn: sedmog aprila 2022';
        document.getElementById('par6').innerHTML = 'websajt azuriran: ' + dateserb;
        indicator = 'srpski';
    }
}
