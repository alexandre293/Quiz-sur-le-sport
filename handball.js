const correctAnswers = {
    q1: 'c', // Question 1
    q2: 'b', // Question 2
    q3: 'a', // Question 3
    q4: 'b', // Question 4
    q5: 'a', // Question 5
    q6: 'b', // Question 6
    q7: 'b', // Question 7
    q8: 'c', // Question 8
    q9: 'b', // Question 9
    q10: 'a', // Question 10
    q11: 'c', // Question 11
    q12: 'a', // Question 12
    q13: 'd', // Question 13
    q14: 'a', // Question 14
    q15: 'e', // Question 15
    q16: 'b', // Question 16
    q17: 'e', // Question 17
    q18: 'a', // Question 18
    q19: 'b', // Question 19
    q20: 'b', // Question 20
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