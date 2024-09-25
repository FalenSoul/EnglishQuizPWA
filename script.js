const questions = [
    {
        question: "She's married and she has three ...........",
        options: ["childs", "children", "child"],
        correctAnswer: "children"
    },
    {
        question: "She is usually in bed by .......... (11.30).",
        options: ["half past eleven", "thirty past eleven", "eleven past thirty"],
        correctAnswer: "half past eleven"
    },
    {
        question: "........... to concerts?",
        options: ["Does Sally go", "Do Sally goes", "Do Sally go"],
        correctAnswer: "Does Sally go"
    },
    {
        question: "We always have snow .......... January.",
        options: ["on", "in", "at"],
        correctAnswer: "in"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const current = questions[currentQuestion];

    questionElement.innerText = current.question;

    optionsElement.innerHTML = '';
    
    current.options.forEach(option => {
        optionsElement.innerHTML += `<label><input type="radio" name="option" value="${option}"> ${option}</label><br>`;
    });
}

function submitAnswer() {
    const options = document.getElementsByName('option');
    let selectedOption = '';

    options.forEach(option => {
        if (option.checked) {
            selectedOption = option.value;
        }
    });

    const feedbackElement = document.getElementById('feedback');

    if (selectedOption === questions[currentQuestion].correctAnswer) {
        score += 10;
        feedbackElement.innerText = 'Correct!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.innerText = 'Wrong answer.';
        feedbackElement.style.color = 'red';
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById('score').innerText = `Quiz finished! Your score: ${score}`;
        document.getElementById('submitBtn').disabled = true;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
});
