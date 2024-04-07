const correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'c',
        q4: 'c',
        q5: 'a',
        q6: 'b',
        q7: 'b',
        q8: 'a',
        q9: 'c',
        q10: 'b',
        q11: 'c',
        q12: 'b',
        q13: 'a',
        q14: 'd',
        q15: 'c',
        q16: 'c',
        q17: 'c',
        q18: 'a',
        q19: 'e',
        q20: 'd'
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

