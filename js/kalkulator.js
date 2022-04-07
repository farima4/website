let a;
let b;
let o;
let c = false;
let ca = false;
let cb = false;
let error = false;
let logic;

document.getElementById('butt').onclick = function() {
    let m = document.getElementById('math').value;;

    for (let i = 0; i < m.length; i += 1) {
        logic = m.charAt(i) != '0' && m.charAt(i) != '1' && m.charAt(i) != '2' && m.charAt(i) != '3' && m.charAt(i) != '4' && m.charAt(i) != '5' && m.charAt(i) != '6' && m.charAt(i) != '7' && m.charAt(i) != '8' && m.charAt(i) != '9' && m.charAt(i) != '+' && m.charAt(i) != '-' && m.charAt(i) != '*' && m.charAt(i) != '/';

        if (logic) {
            error = true;
            break;
        } else
        {
            if (m.charAt(i) == '+' || m.charAt(i) == '-' || m.charAt(i) == '*' || m.charAt(i) == '/') {
                o = m.charAt(i);
                c = true;
            } else
            {
                if (c) {
                    if (cb) {

                        b = b + m.charAt(i);
                    } else
                    {
                        cb = true;
                        b = m.charAt(i)
                    }
                } else
                {
                    if (ca) {
                        a = a + m.charAt(i);
                    } else
                    {
                        ca = true;
                        a = m.charAt(i);
                    }
                }
            }
        }
    }

    if (error) {
        window.alert("molim vas unesite samo brojeve i operaciju!");
        location.reload();
    } else
    {
        a = Number(a);
        b = Number(b);
        if (o == '+') {
            n = a + b;
        } else if (o == '-') {
            n = a - b;
        } else if (o == '*') {
            n = a * b;
        } else if (o == '/') {
            if (b == 0) {
                window.alert('ne moguce dijeljenje sa nulom');
            } else
            {
                n = a / b;
            }
        } else
        {
            n = 'Greska';
        }

        if (b != 0 && o != '/') {

            document.getElementById('span').innerHTML = n;
        }


        a = String('');
        b = String('');
        n = 0;
        c = false;
        ca = false;
        cb = false;
        error = false;
    }
}