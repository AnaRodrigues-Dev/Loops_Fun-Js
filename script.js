const exercises = [
    {
        id: 1,
        title: '1. For – Contar de 1 a 10',
        description: 'Use um loop for para imprimir os números de 1 a 10.',
        needsInput: false,
        execute: () => {
            let result = '';
            for (let i = 1; i <= 10; i++) {
                result += i + '\n';
            }
            return result;
        }
    },

    {
        id: 2,
        title: '2. While – Soma de 1 a 50',
        description: 'Some todos os números de 1 até 50 usando while.',
        needsInput: false,
        execute: () => {
            let sum = 0;
            let current = 1;

            while (current <= 50) {
                sum += current;
                current++;
            }

            return 'A soma de 1 a 50 é: ' + sum;
        }
    },

    {
        id: 3,
        title: '3. For – Contagem regressiva',
        description: 'Digite um número para fazer contagem regressiva até 0.',
        needsInput: true,
        inputs: [{ label: 'Digite um número:', type: 'number' }],
        execute: (num) => {
            const number = parseInt(num);

            if (isNaN(number) || number < 0) {
                return 'Por favor, digite um número válido maior ou igual a 0!';
            }

            let result = 'Contagem regressiva:\n';

            for (let i = number; i >= 0; i--) {
                result += i + '\n';
            }

            return result;
        }
    },

    {
        id: 4,
        title: '4. Do...While – Repetir até digitar "ok"',
        description: 'Digite palavras. Quando digitar "ok", o loop para.',
        needsInput: true,
        multipleInputs: true,
        inputs: [{ label: 'Digite algo (digite "ok" para parar):', type: 'text' }],
        execute: (text, words = []) => {
            if (!text || text.trim() === '') {
                return 'Por favor, digite algo!';
            }

            const newWords = Array.isArray(words) ? [...words, text] : [text];

            if (text.toLowerCase() === 'ok') {
                return (
                    'Loop finalizado!\n' +
                    'Você digitou ' +
                    newWords.length +
                    ' vezes:\n' +
                    newWords.join('\n')
                );
            }

            return {
                continue: true,
                history: newWords,
                message: 'Digite novamente (tentativa ' + (newWords.length + 1) + '):'
            };
        }
    },

    {
        id: 5,
        title: '5. Função + For – Tabuada',
        description: 'Digite um número para ver sua tabuada de 1 a 10.',
        needsInput: true,
        inputs: [{ label: 'Digite um número:', type: 'number' }],
        execute: (num) => {
            const number = parseInt(num);

            if (isNaN(number)) {
                return 'Por favor, digite um número válido!';
            }

            function multiplicationTable(n) {
                let result = 'Tabuada do ' + n + ':\n';
                for (let i = 1; i <= 10; i++) {
                    result += n + ' x ' + i + ' = ' + (n * i) + '\n';
                }
                return result;
            }

            return multiplicationTable(number);
        }
    },

    {
        id: 6,
        title: '6. While – Contar números pares até 100',
        description: 'Conte quantos números pares existem de 1 a 100.',
        needsInput: false,
        execute: () => {
            let totalEven = 0;
            let current = 1;

            while (current <= 100) {
                if (current % 2 === 0) {
                    totalEven++;
                }
                current++;
            }

            return 'Existem ' + totalEven + ' números pares entre 1 e 100.';
        }
    },

    {
        id: 7,
        title: '7. For – Mostrar cada caractere',
        description: 'Digite uma palavra para ver cada caractere separadamente.',
        needsInput: true,
        inputs: [{ label: 'Digite uma palavra:', type: 'text' }],
        execute: (word) => {
            if (!word) {
                return 'Por favor, digite uma palavra!';
            }

            let result = 'Palavra: "' + word + '"\n';
            result += 'Caracteres:\n';

            for (let i = 0; i < word.length; i++) {
                result += 'Posição ' + i + ': ' + word[i] + '\n';
            }

            return result;
        }
    },

    {
        id: 8,
        title: '8. Função – Calcular o quadrado',
        description: 'Digite um número para calcular seu quadrado.',
        needsInput: true,
        inputs: [{ label: 'Digite um número:', type: 'number' }],
        execute: (num) => {
            const number = parseFloat(num);

            if (isNaN(number)) {
                return 'Por favor, digite um número válido!';
            }

            function square(n) {
                return n * n;
            }

            return 'O quadrado de ' + number + ' é: ' + square(number);
        }
    },

    {
        id: 9,
        title: '9. For – Repetir frase N vezes',
        description: 'Digite uma frase e quantas vezes quer repeti-la.',
        needsInput: true,
        twoInputs: true,
        inputs: [
            { label: 'Digite uma frase:', type: 'text' },
            { label: 'Quantas vezes repetir?', type: 'number' }
        ],
        execute: (phrase, times) => {
            const n = parseInt(times);

            if (!phrase) {
                return 'Por favor, digite uma frase!';
            }

            if (isNaN(n) || n <= 0) {
                return 'Por favor, digite um número válido maior que 0!';
            }

            if (n > 50) {
                return 'Limite máximo: 50 repetições!';
            }

            let result = '';

            for (let i = 1; i <= n; i++) {
                result += i + '. ' + phrase + '\n';
            }

            return result;
        }
    },

    {
        id: 10,
        title: '10. While – Sistema de senha',
        description: 'Tente adivinhar a senha. Você tem 3 tentativas! (Dica: "Está no título")',
        needsInput: true,
        multipleInputs: true,
        inputs: [{ label: 'Digite a senha:', type: 'password' }],
        execute: (password, attempts = 0) => {
            const correctPassword = 'javascript';
            const newAttempts = attempts + 1;

            if (password.toLowerCase() === correctPassword) {
                return 'Senha correta! Você acertou na tentativa ' + newAttempts + '.';
            }

            if (newAttempts >= 3) {
                return (
                    'Acesso bloqueado! Você errou 3 vezes.\n' +
                    'A senha era: "' + correctPassword + '"'
                );
            }

            return {
                continue: true,
                tentativas: newAttempts,
                message: 'Senha incorreta! Tentativa ' + newAttempts + '/3. Tente novamente:'
            };
        }
    }
];

const exerciseStates = {};
const exercisesList = document.getElementById('exercisesList');

function renderExercises() {
    exercises.forEach((exercise) => {
        const li = document.createElement('li');
        li.className = 'exercise-card';
        li.setAttribute('data-exercise-id', exercise.id);

        li.innerHTML =
            '<div class="exercise-card__header">' +
            '<h3 class="exercise-card__title">' + exercise.title + '</h3>' +
            '<p class="exercise-card__description">' + exercise.description + '</p>' +
            '<button class="btn-load" onclick="loadExercise(' + exercise.id + ')">Carregar Exercício</button>' +
            '</div>' +
            '<div class="execution-area" id="execution-' + exercise.id + '">' +
            renderExecutionArea(exercise) +
            '</div>';

        exercisesList.appendChild(li);
    });
}

function renderExecutionArea(exercise) {
    if (exercise.needsInput) {
        return (
            '<form class="execution-form" id="form-' + exercise.id + '" onsubmit="executeExercise(event, ' + exercise.id + ')">' +
            renderInputs(exercise) +
            '<button type="submit" class="btn-execute">Executar</button>' +
            '</form>' +
            '<div class="console" id="console-' + exercise.id + '">' +
            '<p class="console__placeholder">Preencha os campos e clique em "Executar"...</p>' +
            '</div>'
        );
    }

    return (
        '<div class="console" id="console-' + exercise.id + '">' +
        '<p class="console__placeholder">Aguardando execução...</p>' +
        '</div>'
    );
}

function renderInputs(exercise) {
    let html = '';

    if (exercise.inputs) {
        exercise.inputs.forEach((input, index) => {
            html +=
                '<div class="form-group">' +
                '<label for="input-' + exercise.id + '-' + index + '" class="form-group__label" id="label-' + exercise.id + '-' + index + '">' +
                input.label +
                '</label>' +
                '<input type="' +
                (input.type || 'text') +
                '" id="input-' +
                exercise.id +
                '-' +
                index +
                '" class="form-group__input" placeholder="Digite aqui..." ' +
                (index === 0 ? 'required' : '') +
                '>' +
                '</div>';
        });
    }

    return html;
}

function loadExercise(exerciseId) {
    const executionArea = document.getElementById('execution-' + exerciseId);
    const exercise = exercises.find((ex) => ex.id === exerciseId);

    exerciseStates[exerciseId] = {};

    if (executionArea) {
        executionArea.classList.add('execution-area--visible');

        if (!exercise.needsInput) {
            executeExercise(null, exerciseId);
        } else {
            setTimeout(() => {
                const firstInput = document.getElementById('input-' + exerciseId + '-0');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 100);
        }
    }
}

function executeExercise(event, exerciseId) {
    if (event) {
        event.preventDefault();
    }

    const exercise = exercises.find((ex) => ex.id === exerciseId);
    if (!exercise) {
        return;
    }

    let result;

    const input1 = document.getElementById('input-' + exerciseId + '-0');
    const input2 = document.getElementById('input-' + exerciseId + '-1');

    if (exercise.needsInput) {
        if (exercise.twoInputs) {
            result = exercise.execute(input1 ? input1.value : '', input2 ? input2.value : '');
        } else if (exercise.multipleInputs) {
            const state = exerciseStates[exerciseId] || {};
            const history = state.history || [];
            const attempts = state.tentativas || 0;
            const secondParam = history.length > 0 ? history : attempts;
            result = exercise.execute(input1 ? input1.value : '', secondParam);
        } else {
            result = exercise.execute(input1 ? input1.value : '');
        }
    } else {
        result = exercise.execute();
    }

    if (typeof result === 'object' && result.continue) {
        exerciseStates[exerciseId] = result;

        const label = document.getElementById('label-' + exerciseId + '-0');
        if (label) {
            label.textContent = result.message;
        }

        if (input1) {
            input1.value = '';
            input1.focus();
        }

        if (result.history) {
            displayOutput(exerciseId, result.history.join('\n') + '\n---');
        }
    } else {
        displayOutput(exerciseId, result);

        if (exercise.multipleInputs && input1) {
            input1.value = '';
            const label = document.getElementById('label-' + exerciseId + '-0');
            if (label && exercise.inputs[0]) {
                label.textContent = exercise.inputs[0].label;
            }
        }
    }
}

function displayOutput(exerciseId, text) {
    const consoleElement = document.getElementById('console-' + exerciseId);
    if (consoleElement) {
        consoleElement.innerHTML = '<pre class="console__output">' + text + '</pre>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderExercises();
    console.log('Exercícios carregados com sucesso!');
    console.log('Clique em "Carregar Exercício" para começar!');
});
