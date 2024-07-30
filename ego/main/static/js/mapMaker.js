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

document.addEventListener('DOMContentLoaded', function () {
    const draggables = document.getElementsByClassName('worldMap');

    Array.from(draggables).forEach(function(draggable) {
        draggable.addEventListener('mousedown', function (e) {
            const offsetX = e.clientX - draggable.getBoundingClientRect().left;
            const offsetY = e.clientY - draggable.getBoundingClientRect().top;

            function onMouseMove(e) {
                draggable.style.left = e.clientX - offsetX + 'px';
                draggable.style.top = e.clientY - offsetY + 'px';
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
});