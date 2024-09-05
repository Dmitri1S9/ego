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
    const worldMap = document.getElementById('worldMap');
    let coordinateX = 0;
    let coordinateY = 0;
    let dragging = false;
    let shiftX, shiftY;

// Function for moving the map
    function moveAt(pageX, pageY) {
        worldMap.style.left = coordinateX + pageX - shiftX + 'px';
        worldMap.style.top = coordinateY + pageY - shiftY + 'px';
    }

// When the mouse button is pressed down
    worldMap.addEventListener("mousedown", function (e) {
        dragging = true;
        shiftX = e.clientX;
        shiftY = e.clientY;

        // When the mouse is moving
        function onMouseMove(e) {
            if (dragging) {
                moveAt(e.clientX, e.clientY);
            }
        }

        // When the mouse button is released
        function onMouseUp(e) {
            dragging = false;
            coordinateX += e.clientX - shiftX;
            coordinateY += e.clientY - shiftY;

            // Cleanup event listeners
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        // Attach listeners for mousemove and mouseup
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

// Prevent default drag behavior
    worldMap.ondragstart = function() {
        return false;
    };

});