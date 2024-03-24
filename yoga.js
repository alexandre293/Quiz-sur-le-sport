const correctAnswers= {
    q1: 'a', // 🌳 Vrikshasana
    q2: 'b', // 🧘‍♂️ Ujjayi
    q3: 'c', // 🙏 Le divin en moi salue le divin en toi
    q4: 'c', // 🧘‍♀️ Posture ou position
    q5: 'a', // 🕉️ Son cosmique
    q6: 'a', // 🐕 Adho Mukha Svanasana
    q7: 'a', // 🌞 Surya Namaskar
    q8: 'a', // 🧘‍♀️ Hatha Yoga
    q9: 'a', // 🐍 Bhujangasana
    q10: 'b', // 🧘‍♂️ Pose du cadavre
    q11: 'a', // 🪑 Iyengar Yoga
    q12: 'a', // 🌊 Vinyasa
    q13: 'd', // 🧘‍♀️ Vajrasana
    q14: 'a', // 🌬️ Pranayama
    q15: 'a', // 🌊 Vinyasa
    q16: 'a', // 🌳 Vrksasana
    q17: 'a', // 🧘‍♂️ Phalakasana
    q18: 'a', // 🧘‍♀️ Salabhasana
    q19: 'a', // 🧘‍♂️ Adho Mukha Svanasana
    q20: 'a', // 🧘‍♀️ Bhujangasana
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
