// Initial Data
let currentQuestion = 0;
let correctAnswers = 0;
showQuestion();

// Events
document.querySelector('.scoreArea button').addEventListener('click', resetQuestions);

// Functions
function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];
        let progress = Math.floor((currentQuestion / questions.length) * 100);

        document.querySelector('.progress--bar').style.width = `${progress}%`;

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });
    } else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }

    currentQuestion++;
    showQuestion();
}

function finishQuiz(){
    let correctPercentage = Math.floor((correctAnswers / currentQuestion) * 100);

    if(correctPercentage < 30){
        document.querySelector('.scoreText1').innerHTML = 'Tá mal, hein? Frango!';
        document.querySelector('.scorePct').innerHTML = `Acertou ${correctPercentage}%`;
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${correctAnswers}.`;
        document.querySelector('.scorePct').style.color = 'red';
    } else if (correctPercentage >= 30 && correctPercentage <= 55){
        document.querySelector('.scoreText1').innerHTML = 'Rato de academia iniciante...';
        document.querySelector('.scorePct').innerHTML = `Acertou ${correctPercentage}%`;
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${correctAnswers}.`;
        document.querySelector('.scorePct').style.color = 'orange';
    } else if (correctPercentage > 55 && correctPercentage <= 70){
        document.querySelector('.scoreText1').innerHTML = 'Temos um Tadala Fellas! ';
        document.querySelector('.scorePct').innerHTML = `Acertou ${correctPercentage}%`;
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${correctAnswers}.`;
        document.querySelector('.scorePct').style.color = 'gold';
    } else if (correctPercentage > 70){
        document.querySelector('.scoreText1').innerHTML = 'Paulo Muzy?!';
        document.querySelector('.scorePct').innerHTML = `Acertou ${correctPercentage}%`;
        document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${correctAnswers}.`;
        document.querySelector('.scorePct').style.color = '#0d630d';
    }

    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.progress--bar').style.width = '100%';
}

function resetQuestions(){
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion();
}

