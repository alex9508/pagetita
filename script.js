let num1, num2, correctAnswer;
let questionCount = 1;
let correctCount = 0;
let incorrectCount = 0;
const maxQuestions = 10;

// Función para generar una pregunta aleatoria
function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1; // Número del 1 al 10
    num2 = Math.floor(Math.random() * 10) + 1; // Número del 1 al 10
    correctAnswer = num1 * num2;

    // Mostrar la nueva pregunta
    document.getElementById("question").textContent = `¿Cuánto es ${num1} x ${num2}?`;
    document.getElementById("answer").value = ""; // Limpiar el input de respuesta
    updateScore();
}

// Función para actualizar el marcador
function updateScore() {
    document.getElementById("score").textContent = `Pregunta: ${questionCount}/${maxQuestions} | Aciertos: ${correctCount} | Errores: ${incorrectCount}`;
}

// Función para verificar la respuesta
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");

    if (userAnswer === correctAnswer) {
        popupText.textContent = "¡Respuesta correcta! ✔️";
        popup.classList.remove("incorrect");
        correctCount++;
    } else {
        popupText.textContent = "Respuesta incorrecta ❌";
        popup.classList.add("incorrect");
        incorrectCount++;
    }

    // Mostrar el pop-up
    popup.style.display = "block";
}

// Función para cerrar el pop-up y continuar con la siguiente pregunta
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";

    questionCount++;

    // Verificar si se completaron las 10 preguntas
    if (questionCount > maxQuestions) {
        showResults();
    } else {
        generateQuestion();
    }
}

// Función para mostrar los resultados finales
function showResults() {
    const resultScreen = document.getElementById("result-screen");
    const finalScore = document.getElementById("final-score");

    finalScore.textContent = `Aciertos: ${correctCount} | Errores: ${incorrectCount}`;
    resultScreen.style.display = "block";

    // Aplicar el efecto blur al contenedor del juego
    document.querySelector(".game-container").classList.add("blurred");
}

// Función para reiniciar el juego
function resetGame() {
    questionCount = 1;
    correctCount = 0;
    incorrectCount = 0;

    document.getElementById("result-screen").style.display = "none";
    document.querySelector(".game-container").classList.remove("blurred"); // Quitar el efecto blur
    generateQuestion();
}

// Inicializar el juego con la primera pregunta al cargar la página
window.onload = generateQuestion;
