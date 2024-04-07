const correctAnswers = {
    q1: 'e',
    q2: 'a',
    q3: 'c',
    q4: 'e',
    q5: 'b',
    q6: 'e',
    q7: 'e',
    q8: 'a',
    q9: 'c',
    q10: 'c',
    q11: 'e',
    q12: 'a',
    q13: 'e',
    q14: 'b',
    q15: 'c',
    q16: 'b',
    q17: 'd',
    q18: 'd',
    q19: 'a',
    q20: 'a',
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

