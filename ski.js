const correctAnswers = {
    q1: "a",
    q2: "a",
    q3: "a",
    q4: "a",
    q5: "a",
    q6: "a",
    q7: "e",
    q8: "a",
    q9: "c",
    q10: "a",
    q11: "a",
    q12: "a",
    q13: "a",
    q14: "a",
    q15: "a",
    q16: "b",
    q17: "e",
    q18: "e",
    q19: "a",
    q20: "d",
};

// Fonction pour vérifier les réponses
function checkAnswers() {
    let score = 0;
    for (const question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }
    alert(`Vous avez obtenu ${score} bonnes réponses sur ${Object.keys(correctAnswers).length} questions.`);
}

// Écouteur d'événement pour le bouton de vérification
document.getElementById('check-answers').addEventListener('click', checkAnswers);

// Fonction pour afficher les réponses
function showAnswers() {
    let answers = "Réponses correctes :\n";
    for (const question in correctAnswers) {
        answers += `Question ${question.substr(1)} : ${correctAnswers[question]}\n`;
    }
    alert(answers);
}

// Écouteur d'événement pour le bouton "Voir les réponses"
document.getElementById('show-answers').addEventListener('click', showAnswers);