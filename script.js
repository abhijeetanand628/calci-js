const result = document.querySelector('.output')
const input = document.querySelector('.history');
const buttons = document.querySelector('.calculator-buttons')


result.innerHTML = ''
input.innerHTML = ''

const add = () => {
    input.innerHTML
}

buttons.addEventListener('click', function(e) {
    const button = e.target;
    
    if(button.id === 'dltall'){
        result.innerHTML  = ''
        input.innerHTML = ''
        return;
    }

    else if(button.id === 'dlt') {
        input.innerHTML = input.innerHTML.slice(0, -1);
        return;
    }

    if(button.classList.contains('equals')) {
        const expression = input.innerHTML;

        let operator;
        if(expression.includes('+')) operator = '+'
        else if (expression.includes('-')) operator = '-';
        else if (expression.includes('*')) operator = '*';
        else if (expression.includes('/')) operator = '/';
        else return;

        const [left, right] = expression.split(operator);
        const num1 = parseFloat(left);
        const num2 = parseFloat(right);

        if (isNaN(num1) || isNaN(num2)) {
            alert('Invalid input');
            return;
        }

        let resultValue;
            switch (operator) {
            case '+':
                resultValue = num1 + num2;
                break;
            case '-':
                resultValue = num1 - num2;
                break;
            case '*':
                resultValue = num1 * num2;
                break;
            case '/':
                resultValue = num2 !== 0 ? num1 / num2 : 'Error';
                break;
            }

            result.innerHTML = resultValue;
            input.innerHTML = resultValue; 
            return;
        }
    
        if(button.classList.contains('btn')) {
            input.innerHTML += button.innerHTML;
        }
})


// let isCalculated = false;


// result.innerHTML = '';    
// input.innerHTML = '';

// buttons.addEventListener('click', function(e) {
//     const button = e.target;

//     if(button.id === 'dltall')
//     {
//         input.innerHTML = '';
//         result.innerHTML = '';
//         isCalculated = false;
//         return;
//     }

//     else if(button.id === 'dlt')
//     {
//         input.innerHTML = input.innerHTML.slice(0, -1);
//         return;
//     }

//     if(button.classList.contains('equals'))
//     {
//         if (input.innerHTML === '') 
//             return;

//         try {
//             result.innerHTML = eval(input.innerHTML);
//             isCalculated = true;
//         } catch(error)
//         {
//             result.innerHTML = "Error!";
//         }
//         return;
//     }

//     if(button.classList.contains('operator'))
//     {
//         if(isCalculated)
//         {
//             input.innerHTML = result.innerHTML + button.innerHTML;
//             isCalculated = false;
//         }
//         else
//         {
//             if(input.innerHTML === '' && button.innerHTML != '-')
//             {
//                 alert("Enter a number first!");
//                 return;
//             }
//             input.innerHTML += button.innerHTML
//         }
//         return;
//     }

//     if(button.classList.contains('btn'))
//     {
//         if(isCalculated)
//         {
//             input.innerHTML = button.innerHTML;
//             result.innerHTML = '';
//             isCalculated = false;
//         }
//         else
//         {
//             input.innerHTML += button.innerHTML;
//         }
//     }
// })





