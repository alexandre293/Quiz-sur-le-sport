const correctAnswers = {
    q1: 'a',
    q2: 'c',
    q3: 'd',
    q4: 'a',
    q5: 'a',
    q6: 'c',
    q7: 'c',
    q8: 'b',
    q9: 'c',
    q10: 'e',
    q11: 'c',
    q12: 'c',
    q13: 'e',
    q14: 'd',
    q15: 'e',
    q16: 'a',
    q17: 'c',
    q18: 'e',
    q19: 'c',
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

