const correctAnswers = {
    q1: "a", // Belgique
    q2: "e", // Chris Hoy
    q3: "a", // Tour de France
    q4: "a", // Paris-Roubaix
    q5: "a", // Eddy Merckx
    q6: "a", // Tour de France
    q7: "a", // Eddy Merckx
    q8: "a", // Tour de Flandres
    q9: "a", // Eddy Merckx
    q10: "a", // Lance Armstrong
    q11: "a", // Maurice Garin
    q12: "a", // Mont Ventoux
    q13: "a", // Tour de Californie
    q14: "a", // Critérium du Dauphiné
    q15: "a", // Flèche Wallonne
    q16: "a", // Giro d'Italia
    q17: "a", // 3 414 km
    q18: "a", // Tour de France
    q19: "a", // Trouée d'Arenberg
    q20: "b"  // Alto de l'Angliru
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

