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

let currentQuestionIndex = 0;
let score = 0;

/* fonction pour démarrer le quiz */
function startQuiz() {
    currentQuestionIndex = 0; // Réinitialiser l'index de la question
    score = 0; // Réinitialiser le score
    nextButton.innerHTML = "Next"; //Réinitialiser le texte du bouton
    showQuestion(); // Afficher la première question
} 

/* fonction pour afficher la question suivante */
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex]; // Obtenir la question actuelle
    let questionNo = currentQuestionIndex + 1;  // Numéro de la question actuelle
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Afficher la question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // Créer un bouton pour chaque réponse
        button.innerHTML = answer.text; // Définir le texte du bouton
        button.classList.add("btn"); // Ajouter la classe CSS "btn"
        answerButtons.appendChild(button); // Ajouter le bouton aux boutons de réponse
    });
}

