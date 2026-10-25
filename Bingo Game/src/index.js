let gameWon = false;

const winningLines = [
        // Rows
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],

        // Columns
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],

        // Diagonals
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ];

window.BingoGame = {

    checkBingo: function (board) {
        const cells = Array.from(
            board.querySelectorAll(".bingo-cell")
        );

        const status = document.querySelector(".bingo-status");

        const hasWinningLine = winningLines.some(function (line) {
            return line.every(function (index) {
                return cells[index].classList.contains("marked");
            });
        });

        if (hasWinningLine) {
            gameWon = true;
            status.textContent = "BINGO! You won!";
        } else {
            status.textContent = "Keep going!";
        }
    },

    markPosition: function(position) {
        const index = State.variables.unmarkedPositions.indexOf(position);
        if (!State.variables.markedPositions.includes(position)) {
            State.variables.markedPositions.push(position);
            State.variables.unmarkedPositions.splice(index, 1);
        }
    },

    resetBoard: function() {
        const resetButton = event.target.closest(".bingo-reset");

        if (resetButton) {
            const board = document.querySelector(".bingo-board");
            const status = document.querySelector(".bingo-status");

            if (!board || !status) {
                return;
            }

            board.querySelectorAll(".bingo-cell").forEach(
                function (cell) {
                    if (!cell.classList.contains("free")) {
                        cell.classList.remove("marked");
                    }
                }
            );

            gameWon = false;
            status.textContent = "Good Luck!";
            State.variables.markedPositions = [];
            State.variables.unmarkedPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        }
    },

    getRandomElement: function(array) {
        const randomElement = array[Math.floor(Math.random() * array.length)];
        return randomElement;
    }
}