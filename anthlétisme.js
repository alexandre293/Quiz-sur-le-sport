const correctAnswers = {
    q1: 'e',
    q2: 'c',
    q3: 'c',
    q4: 'c',
    q5: 'e',
    q6: 'c',
    q7: 'b',
    q8: 'e',
    q9: 'b',
    q10: 'b',
    q11: 'e',
    q12: 'e',
    q13: 'd',
    q14: 'e',
    q15: 'e',
    q16: 'e',
    q17: 'e',
    q18: 'e',
    q19: 'e',
    q20: 'e',
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
