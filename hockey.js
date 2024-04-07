const correctAnswers = {
    q1: 'b',
    q2: 'b',
    q3: 'c',
    q4: 'b',
    q5: 'c',
    q6: 'a',
    q7: 'e',
    q8: 'b',
    q9: 'c',
    q10: 'c',
    q11: 'e',
    q12: 'a',
    q13: 'd',
    q14: 'a',
    q15: 'b',
    q16: 'a',
    q17: 'b',
    q18: 'b',
    q19: 'd',
    q20: 'e',
}

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

