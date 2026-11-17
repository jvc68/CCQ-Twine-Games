
let gameWon = false;

const STORAGE_KEY = "medicalBingoSave";

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

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function generateBoardNumbers() {
    const numbers = [];

    while (numbers.length < 24) {
        const number = Math.floor(
            Math.random() * 99
        ) + 1;

        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }

    const shuffled = shuffleArray(numbers);

    shuffled.splice(12, 0, null);

    return shuffled;
}
// Find the current game day.
// A new game day begins at 5 AM local time.
function getGameDay() {
    const now = new Date();

    if (now.getHours() < 5) {
        now.setDate(now.getDate() - 1);
    }

    return now.getFullYear() + "-" +
        (now.getMonth() + 1) + "-" +
        now.getDate();
}

// Keep only custom tasks that haven't been completed yet.
function getUncompletedCustomTasks(customTasks, completedTasks) {
    const done = Array.isArray(completedTasks) ? completedTasks : [];

    return (Array.isArray(customTasks) ? customTasks : [])
        .filter(task => !done.includes(task.id));
}

function createDefaultState(customTasks = []) {
    return {
        gameDay: getGameDay(),
        markedPositions: [],
        usedQuestions: [],
        completedTasks: [],
        recentCompletedTasks: [],
        customTasks: customTasks,
        boardNumbers: generateBoardNumbers(),
        bingoMessageShown: false
    };
}

function saveState() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(gameState)
    );
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        try {
            const data = JSON.parse(saved);

            // Preserve custom tasks across daily resets.
            const customTasks = Array.isArray(data.customTasks)
                ? data.customTasks
                : [];

            if (data.gameDay === getGameDay()) {
                gameState = {
                    ...createDefaultState(customTasks),
                    ...data
                };

                if (!Array.isArray(gameState.boardNumbers) ||
                    gameState.boardNumbers.length !== 25) {
                    gameState.boardNumbers = generateBoardNumbers();
                }
            } else {
                gameState = createDefaultState(customTasks);
                saveState();
            }
        } catch (error) {
            gameState = createDefaultState(
                getUncompletedCustomTasks(customTasks, data.completedTasks)
            );
            saveState();
        }
    } else {
        gameState = createDefaultState();
        saveState();
    }
}

let gameState;

loadState();

window.BingoGame = {

    // Restore saved information into SugarCube.
    syncToStory: function () {
        State.variables.markedPositions =
            [...gameState.markedPositions];

        State.variables.unmarkedPositions =
            Array.from({ length: 25 }, (_, i) => i)
                .filter(i =>
                    i !== 12 &&
                    !gameState.markedPositions.includes(i)
                );

        State.variables.customTasks =
            gameState.customTasks;

        State.variables.bingoNumbers =
            [...gameState.boardNumbers];

        State.variables.recentCompletedTasks =
            [...gameState.recentCompletedTasks];
    },


    // Mark a bingo position.
    markPosition: function (position) {
        if (
            position === 12 ||
            position < 0 ||
            position > 24 ||
            gameState.markedPositions.includes(position)
        ) {
            return;
        }

        gameState.markedPositions.push(position);

        saveState();
        this.syncToStory();
    },

    
    // Move the selected bingo number to a random
    // unmarked position on the board.
    movePosition: function (position) {

        if (
            position === 12 ||
            position < 0 ||
            position > 24 ||
            gameState.markedPositions.includes(position)
        ) {
            return position;
        }

        // Find all available destination positions.
        const availablePositions = Array.from(
            { length: 25 },
            (_, i) => i
        ).filter(i =>
            i !== 12 &&
            i !== position &&
            !gameState.markedPositions.includes(i)
        );

        if (availablePositions.length === 0) {
            return position;
        }

        // Choose a random destination.
        const newPosition = this.getRandomElement(
            availablePositions
        );

        // Swap the numbers.
        // This preserves all numbers on the board.
        const temp = gameState.boardNumbers[position];

        gameState.boardNumbers[position] =
            gameState.boardNumbers[newPosition];

        gameState.boardNumbers[newPosition] = temp;

        saveState();
        this.syncToStory();

        return newPosition;
    },

    // Get the bingo letter and number for a position.
    getPositionLabel: function (position) {

        const columns = ["B", "I", "N", "G", "O"];

        if (position < 0 || position > 24 || position === 12) {
            return "FREE";
        }

        const column = columns[position % 5];
        const number = gameState.boardNumbers[position];

        return column + " " + number;
    },


    // Check for a winning combination.
    checkBingoBoard: function () {
        const marked = new Set([
            ...gameState.markedPositions,
            12
        ]);

        const hasWinningLine = winningLines.some(line =>
            line.every(position => marked.has(position))
        );

        return hasWinningLine;
    },

    // Check the board and display the result.
    checkBingo: function () {
        if (
            this.checkBingoBoard() &&
            !gameState.bingoMessageShown
        ) {
            gameState.bingoMessageShown = true;
            gameWon = true;
            saveState();
            return true;
        }

        return false;
    },

    // Select a random unused question.
    getRandomQuestion: function (questions) {
        const available = questions
            .map((question, index) => ({
                question: question,
                index: index
            }))
            .filter(item =>
                !gameState.usedQuestions.includes(item.index)
            );

        if (available.length === 0) {
            return null;
        }

        const selected = this.getRandomElement(available);

        gameState.usedQuestions.push(selected.index);
        saveState();

        return selected.question;
    },

    // Return available built-in and custom tasks.
    getAvailableTasks: function (tasks) {
        const allTasks = tasks.map((task, index) => ({
            id: "builtin-" + index,
            task: task.task
        }));

        gameState.customTasks.forEach(task => {
            allTasks.push({
                id: task.id,
                task: task.task
            });
        });

        return allTasks.filter(task =>
            !gameState.completedTasks.includes(task.id)
        );
    },

    // Complete a task.
    completeTask: function (taskId, taskText) {
        if (!gameState.completedTasks.includes(taskId)) {
            gameState.completedTasks.push(taskId);

            // Add the completed task to the beginning of the history.
            gameState.recentCompletedTasks.unshift(taskText);

            // Keep only the three most recent tasks.
            gameState.recentCompletedTasks =
                gameState.recentCompletedTasks.slice(0, 3);

            saveState();
            this.syncToStory();
        }
    },

    // Add a custom task.
    addCustomTask: function (taskText) {
        const text = taskText.trim();

        if (!text) {
            return false;
        }

        gameState.customTasks.push({
            id: "custom-" + Date.now(),
            task: text
        });

        saveState();
        this.syncToStory();

        return true;
    },

    // Get a random element from an array.
    getRandomElement: function (array) {
        if (!array || array.length === 0) {
            return null;
        }

        return array[
            Math.floor(Math.random() * array.length)
        ];
    },

    // Reset daily game progress.
    resetBoard: function () {

        // Keep only custom tasks that were never completed.
        const customTasks = getUncompletedCustomTasks(
            gameState.customTasks,
            gameState.completedTasks
        );

        // Generate a completely new game state and board.
        gameState = createDefaultState(customTasks);
        // ...rest unchanged

        gameWon = false;

        saveState();

        // Update SugarCube variables.
        this.syncToStory();

        State.variables.selectedPosition = -1;
        State.variables.randomQuestion = null;
        State.variables.userAnswer = null;

        // Return to the board.
        Engine.play("BingoBoard");
    },


    // Schedule the next 5 AM reset.
    scheduleDailyReset: function () {
        const now = new Date();
        const nextReset = new Date(now);

        nextReset.setHours(5, 0, 0, 0);

        if (now >= nextReset) {
            nextReset.setDate(nextReset.getDate() + 1);
        }

        const delay = nextReset.getTime() - now.getTime();

        setTimeout(() => {
            if (getGameDay() !== gameState.gameDay) {
                this.resetBoard();
            }

            this.scheduleDailyReset();
        }, delay);
    }
};

gameWon = BingoGame.checkBingoBoard();

// Load saved game progress when the story starts.
BingoGame.syncToStory();

// Start the daily reset timer.
BingoGame.scheduleDailyReset();

// Clicking an unmarked bingo cell opens the Tasks passage.
document.addEventListener("click", function (event) {

    const cell = event.target.closest(".bingo-cell");

    if (!cell || cell.classList.contains("free")) {
        return;
    }

    const position = Number(cell.dataset.index);

    if (
        gameState.markedPositions.includes(position)
    ) {
        return;
    }

    // Move the clicked number to a random position.
    const newPosition = BingoGame.movePosition(position);

    // Store its new location.
    State.variables.selectedPosition = newPosition;

    // Open the tasks passage.
    Engine.play("Tasks");
});

