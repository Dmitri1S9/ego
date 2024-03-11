function makeTeilReady(kol, row) {
    // Создаем новый элемент div
    let teil_ = document.createElement('div');

    // Устанавливаем содержимое div
    teil_.innerHTML = `<img src='static\\img\\mapPieces\\p${kol}${row}.jpg' />`;
    // Добавляем div в body документа
    document.getElementById("worldMap").appendChild(teil_);
}

function makeRow(kol) {
    // Создаем новый элемент div
    let teil_ = document.createElement('div');

    var imgRow = `<img src='static\\img\\mapPieces\\p0${kol}.jpg' />`;
    for (let i = 1; i < amountOfColumns; i++) {
         imgRow += `<img src='static\\img\\mapPieces\\p${i}${kol}.jpg' />`;
    }
    // Устанавливаем содержимое div
    teil_.classList.add("imgRow");
    teil_.innerHTML = imgRow;
    // Добавляем div в body документа
    document.getElementById("worldMap").appendChild(teil_);
}

const amoutOfRows = 5;
const amountOfColumns = 8;

for (let j = 0; j < amoutOfRows; j++) {
    makeRow(j); 
}


