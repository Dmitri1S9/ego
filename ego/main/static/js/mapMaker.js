function makeTeilReady(kol, row) {
    // ������� ����� ������� div
    let teil_ = document.createElement('div');

    // ������������� ���������� div
    teil_.innerHTML = `<img src='static\\img\\mapPieces\\p${kol}${row}.jpg' />`;
    // ��������� div � body ���������
    document.getElementById("worldMap").appendChild(teil_);
}

function makeRow(kol) {
    // ������� ����� ������� div
    let teil_ = document.createElement('div');

    var imgRow = `<img src='static\\img\\mapPieces\\p0${kol}.jpg' />`;
    for (let i = 1; i < amountOfColumns; i++) {
         imgRow += `<img src='static\\img\\mapPieces\\p${i}${kol}.jpg' />`;
    }
    // ������������� ���������� div
    teil_.classList.add("imgRow");
    teil_.innerHTML = imgRow;
    // ��������� div � body ���������
    document.getElementById("worldMap").appendChild(teil_);
}

const amoutOfRows = 5;
const amountOfColumns = 8;

for (let j = 0; j < amoutOfRows; j++) {
    makeRow(j); 
}


