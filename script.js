const result = document.querySelector('.output')
const input = document.querySelector('.history');
const numbers = document.querySelector('.calculator-buttons')


result.innerHTML = '';    
input.innerHTML = '';

numbers.addEventListener('click', function(e) {
    const button = e.target;
    if(button.id === 'dltall')
    {
        input.innerHTML = '';
        result.innerHTML = '';
    }

    else if(button.id === 'dlt')
    {
        input.innerHTML = input.innerHTML.slice(0, -1);
    }

    else if(button.classList.contains('equals'))
    {
        result.innerHTML = eval(input.innerHTML)
    }

    else if(button.classList.contains('btn'))
    {
        input.innerHTML += button.innerHTML
    }
    
})



