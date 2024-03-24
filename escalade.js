const correctAnswers = {
    q1: 'd', // Question 1
    q2: 'b', // Question 2
    q3: 'e', // Question 3
    q4: 'e', // Question 4
    q5: 'c', // Question 5
    q6: 'b', // Question 6
    q7: 'a', // Question 7
    q8: 'b', // Question 8
    q9: 'e', // Question 9
    q10: 'a', // Question 10
    q11: 'c', // Question 11
    q12: 'e', // Question 12
    q13: 'd', // Question 13
    q14: 'a', // Question 14
    q15: 'a', // Question 15
    q16: 'd', // Question 16
    q17: 'd', // Question 17
    q18: 'd', // Question 18
    q19: 'a', // Question 19
    q20: 'd', // Question 20
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