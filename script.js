 function main() {
    const state = {};
    initState(state);
    prepareNumbers(state);
    prepareActions(state);
    prepareEqual(state);

 };

function render(screenValue) {
    const input = document.querySelector('#screen-value');
    input.value = screenValue;
};

function prepareNumbers(state) {
    const numbers = document.querySelectorAll('.numbers');
    for (let i = 0; i < numbers.length; i++ ) {
        numbers[i].addEventListener("click", function() {
            const value = Number(numbers[i].value);
            if (state.action === null) {
                state.firstValue = state.firstValue * 10 + value;
                render(state.firstValue);
            } else {
                state.secondValue = state.secondValue * 10 + value;
                render(state.secondValue);
            }
            console.log(state);
        })
    }
};

function prepareActions(state) {
    const actions = document.querySelectorAll('.actions');
    for (let i = 0; i < actions.length; i++ ) {
        actions[i].addEventListener("click", function() {
            const action = actions[i].value;
            state.action = action;
            highlightButton(state);
        })
    }
};
function prepareEqual(state) {
    const equal = document.querySelector('.equal');
    equal.addEventListener("click", function() {
        const result = calculate(state.firstValue, state.secondValue, state.action);
        render(result);
        initState(state);
        highlightButton(state);
    })
};

function initState(state) {
    state.firstValue = 0;
    state.secondValue = 0;
    state.action = null;
}
const calculate = (firstNumber, secondNumber, operator) => {
    switch (operator) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case '/': 
        return firstNumber / secondNumber;
      default:
        return firstNumber * secondNumber;
    }
  };

function highlightButton(state) {
    const actions = document.querySelectorAll('.actions');

    for (let i = 0; i < actions.length; i++ ) {
        if (actions[i].value === state.action) {
           actions[i].classList.add('activated');
        } else {
            actions[i].classList.remove('activated');
        }
    }    
};

 main();
