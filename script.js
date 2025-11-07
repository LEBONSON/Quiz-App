const { handle } = require("express/lib/application"); // Importer le module 'handle' d'Express
const { reset } = require("nodemon"); // Importer le module 'reset' de Nodemon


/* Définir les questions du quiz */
const questions =[
    {
        question: "Which is larget animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
            
        ]
    },
    {
         question: "Which is larget animal in the world?",
        answers: [
            {text: "Shark", correct: true},
            {text: "Blue Whale", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
            
        ]  
    },
     {
         question: "Which is larget animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: false},
            {text: "Elephant", correct: true},
            {text: "Giraffe", correct: false}
            
        ]  
    },
     {
         question: "Which is larget animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: true}
            
        ]  
    }
];

const questionElement = document.getElementById("question"); // Récupérer l'élément de la question
const answerButtons = document.getElementById("answer-buttons"); // Récupérer les boutons de réponse
const nextButton = document.getElementById("next-btn"); // Récupérer le bouton suivant

let currentQuestionIndex = 0; // Index de la question actuelle
let score = 0;  // Score du quiz

/* fonction pour démarrer le quiz */
function startQuiz() {
    currentQuestionIndex = 0; // Réinitialiser l'index de la question
    score = 0; // Réinitialiser le score
    nextButton.innerHTML = "Next"; //Réinitialiser le texte du bouton
    showQuestion(); // Afficher la première question
} 

/* fonction pour afficher la question suivante */
function showQuestion() {
    resetState(); // Réinitialiser l'état des boutons
    let currentQuestion = questions[currentQuestionIndex]; // Obtenir la question actuelle
    let questionNo = currentQuestionIndex + 1;  // Numéro de la question actuelle
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Afficher la question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // Créer un bouton pour chaque réponse
        button.innerHTML = answer.text; // Définir le texte du bouton
        button.classList.add("btn"); // Ajouter la classe CSS "btn"
        answerButtons.appendChild(button); // Ajouter le bouton aux boutons de réponse
        if (answer.correct) {
            button.dataset.correct = answer.correct; // Marquer le bouton comme correct
        }
        button.addEventListener("click", selectAnswer); // Ajouter un écouteur d'événement pour la sélection de la réponse
        });
}

/* fonction pour réinitialiser l'état des boutons */
function resetState() {
    nextButton.style.display = "none"; // Cacher le bouton suivant
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Supprimer tous les boutons de réponse existants
    }

}


function selectAnswer(e) {
    const selectedBtn = e.target; // Obtenir le bouton sélectionné
    const isCorrect = selectedBtn.dataset.correct === "true"; // Vérifier si la réponse est correcte
    if (isCorrect) {
        selectedBtn.classList.add("correct"); // Ajouter la classe CSS "correct"
        score++; // Incrémenter le score
    } else {
        selectedBtn.classList.add("incorrect"); // Ajouter la classe CSS "incorrect"
       }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Marquer la bonne réponse
        }
        button.disabled = true; // Désactiver tous les boutons après la sélection
    });
    nextButton.style.display = "block"; // Afficher le bouton suivant
}

/* fonction pour afficher le score final */
function showScore() {
    resetState();   // Réinitialiser l'état des boutons
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // Afficher le score final
    nextButton.innerHTML = "Play Again"; // Changer le texte du bouton en "Play Again"
    nextButton.style.display = "block"; // Afficher le bouton
}

/* fonction pour gérer le bouton suivant */
function handleNextButton() {
    currentQuestionIndex++; // Passer à la question suivante
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Afficher la question suivante
    }else {
        showScore(); // Afficher le score final
    }
}


/* Ajouter un écouteur d'événement au bouton suivant */
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
});

startQuiz(); // Démarrer le quiz lors du chargement de la page
