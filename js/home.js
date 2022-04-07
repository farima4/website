let goofy = new Audio('Audio/Goofy.m4a');
let timestop = new Audio('Audio/timestop.m4a');
let rickroll = new Audio('Audio/rickroll.m4a');

document.getElementById('code').onclick = function() {

    let code = window.prompt('unesi kod:').toLowerCase();

    switch (code) {
        case 'rick':
            rickroll.play();
            break;

        case 'ninas':
            window.open('https://youtu.be/LH3oW6O9zDQ');
            break;

        case 'clock':
            window.open('https://humanclock.com/');
            break;

        case 'quandale':
            window.open('https://youtu.be/xgAB5Q7jlvM');
            break;

        case 'quandale dingle':
            window.open('https://youtu.be/xgAB5Q7jlvM');
            break;
            
        case 'goofy':
            goofy.play();
            break;
            
        case 'zawarudo':
            timestop.play();
            break;
        

        default:
            window.alert('ovaj kod ne postoji!');
            break;
    }
}