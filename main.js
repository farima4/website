let c = 0;

function update()
{
    document.getElementById('c').innerHTML = c;

}

update();

document.getElementById("down").onclick = function()
{
    c -= 1;
    update();
}

document.getElementById("up").onclick = function()
{
    c += 1;
    update();
}

document.getElementById("reset").onclick = function()
{
    c = 0;
    update();
}
