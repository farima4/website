document.getElementById('butt').onclick = function () {
    math = document.getElementById('math').value;

    let n1 = math.slice(0, math.indexOf(' '));
    let o = math.slice(math.indexOf(' ') + 1, math.lastIndexOf(' '));
    let n2 = math.slice(math.lastIndexOf(' ') + 1);

    if (n1 == undefined || n2 == undefined || o == undefined) {
        alert('Please enter a valid math expression');
    } else {
        switch (o) {
            case '+':
                document.getElementById('span').innerHTML = Number(n1) + Number(n2);
                break;
            case '-':
                document.getElementById('span').innerHTML = Number(n1) - Number(n2);
                break;
            case '*':
                document.getElementById('span').innerHTML = Number(n1) * Number(n2);
                break;
            case '/':
                
                if (n2 == 0) {
                    alert('ne mozes da dejliš s nulom');
                } else {
                    document.getElementById('span').innerHTML = Number(n1) / Number(n2);
                }
                break;
            default:
                alert('Molim vas unesite validan izraz');   
        }

    }
}