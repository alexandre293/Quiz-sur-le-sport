const correctAnswers = {
    q1: 'b', // James Naismith
    q2: 'b', // Roger Federer
    q3: 'a', // Real Madrid
    q4: 'b', // 42.195 km
    q5: 'a', // Muhammad Ali
    q6: 'b', // Eddy Merckx
    q7: 'a', // Sergey Bubka
    q8: 'a', // Roger Bannister
    q9: 'a', // 100 mètres
    q10: 'c', // 50 mètres
    q11: 'c', // Roger Federer
    q12: 'a', // Brésil
    q13: 'a', // Eliud Kipchoge
    q14: 'e', // 9,29 mètres
    q15: 'a', // Javier Sotomayor
    q16: 'a', // 9,58 secondes
    q17: 'c', // Michael Phelps
    q18: 'a', // Norvège
    q19: 'b', // Armand Duplantis
    q20: 'b', // Ashton Eaton
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