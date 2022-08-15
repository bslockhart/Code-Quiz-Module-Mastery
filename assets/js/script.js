/* -------------------- BEGINS DECLARING GLOBAL CONSTANTS AND VARIABLES -------------------- */
/* ---------- declares the different views/screens to turn them on and off ---------- */
const startQuizScreenEl = document.getElementById("start-quiz-screen");
const quizScreenEl = document.getElementById("quiz-screen");
const resultScreenEl = document.getElementById("result-screen");
const allDoneScreenEl = document.getElementById("all-done-screen");
const highScoresScreenEl = document.getElementById("high-scores-screen");

/* ---------- declares constants to point to the different html elements and buttons needed for this project ---------- */
const headerEl = document.getElementById("header");
const viewHighScoresEl = document.getElementById("view-high-scores");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-quiz-btn");
const goBackBtn = document.getElementById("go-back-btn");
const clearHighScoresBtn = document.getElementById("clear-high-scores-btn");
const questionEl = document.getElementById("question");
const answersListEl = document.getElementById("answers-list");
const resultEl = document.getElementById("result");
const finalScoreEl = document.getElementById("final-score");
const highScoreFormEl = document.getElementById("high-score-form");
const initialsEl = document.getElementById("initials");
const highScoresListEl = document.getElementById("high-scores-list");

// declares timer for quiz
const quizTime = 75;

// declares the array of multiple choice questions (objects): q: questions, a: answers and c: correct answers
const mcq = [
    {
        q: "Commonly used data types DO Not Include:",
        a: ["strings", "booleans", "alerts", "numbers"],
        c: "alerts",
    },
    {
        q: "The condition in an if / else statement is enclosed with ________.",
        a: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        c: "parenthesis",
    },
    {
        q: "Arrays in JavaScript can be used to store _______.",
        a: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        c: "all of the above",
    },
    {
        q:
            "String values must be enclosed within _______ when being assigned to variables.",
        a: ["commas", "curly brackets", "quotes", "parenthesis"],
        c: "quotes",
    },
    {
        q:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        c: "console.log",
    },
];

/* ---------- declares global variables ---------- */
// declares a variable that points to the constant quizTime because it is referenced twice in the file, so we're avoiding error of having to change it twice
var timeLeft = quizTime;
/* declares a global variable to store remaining time to show at end of quiz
also used for clearInterval to stop timer once questions are finished */
var timeInterval;

// tracks current question number
var questionNumber = 0;

// tracks number of anwer choices for current question
var answerChoicesCount;

// keeps score
var score = 0;

// declares an array to store the high score list in local storage, if any
var highScoresLS = [];
/* -------------------- ENDS DECLARING GLOBAL CONSTANTS AND VARIABLES -------------------- */

/* -------------------- BEGINS DISPLAYS -------------------- */
// turns off start quiz screen and turns on quiz screen
var displayQuiz = function () {
    startQuizScreenEl.style.display = "none";
    quizScreenEl.style.display = "initial";
};

// displays result for each question after answer
var displayResult = function () {
    resultScreenEl.style.display = "initial";
};

// hides result for each question before answer
var hideResult = function () {
    resultScreenEl.style.display = "none";
};

// displays all done screen
var displayAllDone = function () {
    headerEl.style.visibility = "visible";
    startQuizScreenEl.style.display = "none";
    quizScreenEl.style.display = "none";
    highScoresScreenEl.style.display = "none";
    allDoneScreenEl.style.display = "initial";
    // writes the final score
    finalScoreEl.textContent = "Your final score is " + score + ".";
};

// displays high scores screen
var displayHighScoresHandler = function () {
    headerEl.style.visibility = "hidden";
    startQuizScreenEl.style.display = "none";
    quizScreenEl.style.display = "none";
    allDoneScreenEl.style.display = "none";
    highScoresScreenEl.style.display = "initial";
    // calls function to get and display updated high scores from localStorage
    getHighScores();
};

/* displays start quiz screen and turns off high scores screen
(responds to "Go back" button in high scores screen) */
var displayStartQuizHandler = function () {
    headerEl.style.visibility = "visible";
    highScoresScreenEl.style.display = "none";
    startQuizScreenEl.style.display = "initial";
    // resets timer
    clearInterval(timeInterval);
    // resets quiz time in seconds
    timeLeft = quizTime;
    // writes quiz time to the corresponding document element
    timerEl.textContent = timeLeft;
};
  /* -------------------- ENDS DISPLAYS -------------------- */