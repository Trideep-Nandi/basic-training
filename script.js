let ROWS, COLS, MAX_NUM;
let player1Card, player2Card;
let gameStarted = false;
let drawnNumbers = [];

function populateCard() {
    const card = [];
    const usedNumber = [];

    while (usedNumber.length < ROWS * COLS) {
        const num = Math.floor(Math.random() * MAX_NUM);
        if (usedNumber.indexOf(num) === -1) {
            usedNumber.push(num);
        }
    }

    for (let i = 0; i < ROWS; i++) {
        card.push(usedNumber.slice(i * COLS, (i + 1) * COLS));
    }
    return card;
}

function setElement(card, number) {
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (card[i][j] === number) {
                card[i][j] = 'X';
                return true;
            }
        }
    }
    return false;
}

function winChecking(card) {
    for (let i = 0; i < ROWS; i++) {
        let rowWin = true;
        let colWin = true;
        for (let j = 0; j < COLS; j++) {
            if (card[i][j] !== 'X') {
                rowWin = false;
            }
            if (card[j][i] !== 'X') {
                colWin = false;
            }
        }

        if (rowWin || colWin)
            return true;
    }

    let diagonalFWin = true;
    let diagonalRWin = true;

    for (let i = 0; i < ROWS; i++) {
        if (card[i][i] !== 'X') {
            diagonalFWin = false;
        }

        if (card[i][COLS - i - 1] !== 'X') {
            diagonalRWin = false;
        }
    }

    if (diagonalFWin || diagonalRWin) {
        return true;
    }

    return false;
}

var player1Table = document.getElementById("player1");
var player2Table = document.getElementById("player2");

function createTable(tableData, playerTable) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    playerTable.appendChild(table);
}

document.getElementById("startGame").addEventListener("click", function () {
    ROWS = parseInt(document.getElementById("inputRows").value);
    COLS = parseInt(document.getElementById("inputCols").value);

    if (isNaN(ROWS) || isNaN(COLS) || ROWS < 1 || COLS < 1) {
        alert("Please enter valid rows and columns.");
        return;
    }

    MAX_NUM = ROWS * COLS + 30;
    player1Card = populateCard();
    player2Card = populateCard();

    gameStarted = true;
    drawnNumbers = [];
    document.getElementById("nextNumber").disabled = false;
    document.getElementById("winner").textContent = "";
    document.getElementById("currentNumber").textContent = "-";
    document.getElementById("inputNumber").value = "";
    resetTables();
});

document.getElementById("nextNumber").addEventListener("click", function () {
    if (!gameStarted) return;

    let num = parseInt(document.getElementById("inputNumber").value);
    if (isNaN(num) || num < 0 || num >= MAX_NUM || drawnNumbers.includes(num)) {
        alert("Please enter a valid number that hasn't been drawn.");
        return;
    }

    drawnNumbers.push(num);
    document.getElementById("currentNumber").textContent = num;
    document.getElementById("inputNumber").value = "";

    if (setElement(player1Card, num)) updateTable(player1Card, "player1");
    if (setElement(player2Card, num)) updateTable(player2Card, "player2");

    if (winChecking(player1Card)) {
        document.getElementById("winner").textContent = "Player 1 Wins!";
        document.getElementById("nextNumber").disabled = true;
    } else if (winChecking(player2Card)) {
        document.getElementById("winner").textContent = "Player 2 Wins!";
        document.getElementById("nextNumber").disabled = true;
    }
});

function updateTable(card, playerId) {
    let table = document.getElementById(playerId).getElementsByTagName("table")[0];
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < ROWS; i++) {
        let cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < COLS; j++) {
            if (card[i][j] === 'X') {
                cells[j].classList.add("marked");
            }
        }
    }
}

function resetTables() {
    document.getElementById("player1").innerHTML = "";
    document.getElementById("player2").innerHTML = "";
    
    createTable(player1Card, player1Table);
    createTable(player2Card, player2Table);
}
