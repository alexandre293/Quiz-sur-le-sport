const correctAnswers = {
    q1: 'a', // Question 1
    q2: 'b', // Question 2
    q3: 'd', // Question 3
    q4: 'a', // Question 4
    q5: 'b', // Question 5
    q6: 'b', // Question 6
    q7: 'd', // Question 7
    q8: 'a', // Question 8
    q9: 'a', // Question 9
    q10: 'b', // Question 10
    q11: 'a', // Question 11
    q12: 'b', // Question 12
    q13: 'b', // Question 13
    q14: 'c', // Question 14
    q15: 'b', // Question 15
    q16: 'b', // Question 16
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
