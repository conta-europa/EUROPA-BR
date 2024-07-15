const questions = [
    // ETAPA 1
    {
        question: "Quer começar?",
        options: ["Sim quero!",]
    },
    // ETAPA 2
    {
        question: "Você importa produtos do exterior?",
        options: ["Sim, importo produtos regularmente" , "Não, não importo produtos", "Às vezes, depende das necessidades" , "Sim, ocasionalmente compro produtos do exterior"]
    },

    {
        question: "Já teve dificuldades em abrir uma conta bancária no exterior antes?",
        options: ["Sim, devido à documentação exigida", "Não, segui as orientações e consegui abrir","Às vezes, depende do país e das regras locais","Sim, principalmente por causa das diferenças nos processos bancários"]
    },

    {
        question: "Já possui um cartão, mas tem limites para depositar dinheiro nele?",
        options: ["Sim, meu cartão possui limites específicos para depósitos", "Não, meu cartão não tem restrições quanto a depósitos", "Às vezes, dependendo do tipo de transação ou do valor", "Sim, geralmente há limites para depósitos em cartões pré-pagos ou de débito"]

    },
    {
        question: "Você está enfrentando desafios para encontrar um banco que aceite não-residentes?",
        options: ["Sim, é difícil encontrar um banco que aceite não-residentes", "Não, já encontrei um banco que aceita não-residentes", "Sim, devido às políticas restritivas de alguns bancos", "Às vezes, depende da documentação exigida pelos bancos"]

    },
    // ETAPA 3
    {
        question: "Como você se sentiria ao abrir uma conta bancária internacional(Europeia)?",
        options: ["Animado(a), pois poderia depositar quanto eu quiser na minha conta", "Empolgado(a) com a possibilidade de realizar investimentos no exterior", "Interessado(a) em fazer compras internacionais sem complicações" , "Motivado(a) pela facilidade de transferências bancárias entre países"]
    },
    {
        question: "Você acha que fazer transferências internacionais seria benéfico para você?",
        options: ["Sim, facilitaria pagamentos e transações comerciais no exterior" , "Sim, seria útil para enviar dinheiro para familiares ou amigos em outros países" , "Não tenho certeza, pois não sei muito sobre as taxas e processos envolvidos."]
    },

    {
        question: "Quantas transferências você gostaria de fazer por mês?",
        options: ["Uma por mês para pagamentos regulares", "Várias mensais para diferentes fins", "Não sei ainda, depende das necessidades", "Conforme necessário, sem um número fixo por mês"]
    },
   
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const questionData = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.textContent = questionData.question;

    const optionsElement = document.createElement('ul');
    optionsElement.className = 'options';

    questionData.options.forEach(option => {
        const optionElement = document.createElement('li');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = 'option';
        optionInput.value = option;
        optionInput.id = option;

        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = option;
        optionLabel.textContent = option;

        optionElement.appendChild(optionInput);
        optionElement.appendChild(optionLabel);
        optionsElement.appendChild(optionElement);
    });

    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        // Store the selected answer (optional)
        const answer = selectedOption.value;
        console.log(`Answer to question ${currentQuestionIndex + 1}: ${answer}`);

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        alert('Por favor, selecione uma opção.');
    }
}

function showResults() {
    window.location.href = 'quiz-final.html'; // Redireciona automaticamente para index.html
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});
