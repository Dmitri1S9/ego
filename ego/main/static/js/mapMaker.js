const amountOfRows = 5;
const amountOfColumns = 8;

function makeRow(kol) {
    let teil_ = document.createElement('div');

    let imgRow = `<img class='TeilDesMap' draggable="true" src='static/img/mapPieces/p0${kol}.jpg' />`;
    for (let i = 1; i < amountOfColumns; i++) {
        imgRow += `<img class='TeilDesMap' draggable="true" src='static/img/mapPieces/p${i}${kol}.jpg' />`;
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
    const festung1 = document.getElementById('festung_1');
    const worldMap = document.getElementById('worldMap');
    let coordinateX = 0;
    let coordinateY = 0;
    let dragging;

    worldMap.addEventListener("dragstart", function (e ) {
        let shiftX = e.clientX;
        let shiftY = e.clientY;

        // Функция для перемещения элемента
        function moveAt(pageX, pageY) {
            worldMap.style.left = coordinateX + pageX - shiftX + 'px';
            worldMap.style.top = coordinateY + pageY - shiftY + 'px';
            console.log(e.clientX, shiftX, e.clientY, shiftY);
        }

        // Обработчик движения мыши
        function onDrag(e) {
            moveAt(e.clientX, e.clientY);
        }

        function ondragend(e){
            coordinateX = e.clientX - shiftX;
            coordinateY = e.clientY - shiftY;
        }

        document.addEventListener('drag', onDrag);
        document.addEventListener('dragend', ondragend);

    });

    festung1.addEventListener("dblclick", function () {
        alert('Double-clicked!');
    });
});