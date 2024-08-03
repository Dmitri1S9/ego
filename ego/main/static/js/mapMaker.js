const amountOfRows = 5;
const amountOfColumns = 8;

function makeRow(kol) {
    let teil_ = document.createElement('div');

    let imgRow = `<img src='static/img/mapPieces/p0${kol}.jpg' />`;
    for (let i = 1; i < amountOfColumns; i++) {
        imgRow += `<img class='TeilDesMap' src='static/img/mapPieces/p${i}${kol}.jpg' />`;
    }
    teil_.classList.add("imgRow");
    teil_.innerHTML = imgRow;
    document.getElementById("worldMap").appendChild(teil_);
}

for (let j = 0; j < amountOfRows; j++) {
    makeRow(j);
}
let mapObject_ = document.createElement('figure');
let festung = '<img class="mapObject" id="festung_1" src="static/img/buttons/festung.jpg" />';
mapObject_.innerHTML = festung;
document.getElementById('worldMap').appendChild(mapObject_);

document.addEventListener('DOMContentLoaded', function () {
    const festung1 = document.getElementById('festung_1')
    const worldMap = document.getElementById('worldMap');
    const mainArea = document.querySelector('#mainArea');
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    mainArea.addEventListener('mousedown', function (e) {
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = worldMap.offsetLeft;
        initialTop = worldMap.offsetTop;
        isDragging = true;
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);
    });

    festung1.addEventListener("dblclick", function (e){
        alert();
    });

    function onMouseMove(e) {
        if (isDragging) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            worldMap.style.left = initialLeft + deltaX + 'px';
            worldMap.style.top = initialTop + deltaY + 'px';
        }
    }
    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
});


