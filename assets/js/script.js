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