const correctAnswers = {
    q1: 'a', // Question 1
    q2: 'a', // Question 2
    q3: 'a', // Question 3
    q4: 'a', // Question 4
    q5: 'a', // Question 5
    q6: 'a', // Question 6
    q7: 'a', // Question 7
    q8: 'a', // Question 8
    q9: 'a', // Question 9
    q10: 'a', // Question 10
    q11: 'a', // Question 11
    q12: 'd', // Question 12
    q13: 'a', // Question 13
    q14: 'a', // Question 14
    q15: 'a', // Question 15
    q16: 'a', // Question 16
    q17: 'a', // Question 17
    q18: 'a', // Question 18
    q19: 'a', // Question 19
    q20: 'a', // Question 20
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
