const result = document.querySelector('.output')
const input = document.querySelector('.history');
const numbers = document.querySelector('.calculator-buttons')

let isCalculated = false;


result.innerHTML = '';    
input.innerHTML = '';

numbers.addEventListener('click', function(e) {
    const button = e.target;

    if(button.id === 'dltall')
    {
        input.innerHTML = '';
        result.innerHTML = '';
        isCalculated = false;
        return;
    }

    else if(button.id === 'dlt')
    {
        input.innerHTML = input.innerHTML.slice(0, -1);
        return;
    }

    if(button.classList.contains('equals'))
    {
        if (input.innerHTML === '') 
            return;

        try {
            result.innerHTML = eval(input.innerHTML);
            isCalculated = true;
        } catch(error)
        {
            result.innerHTML = "Error!";
        }
        return;
    }

    if(button.classList.contains('operator'))
    {
        if(isCalculated)
        {
            input.innerHTML = result.innerHTML + button.innerHTML;
            isCalculated = false;
        }
        else
        {
            if(input.innerHTML === '' && button.innerHTML != '-')
            {
                alert("Enter a number first!");
                return;
            }
            input.innerHTML += button.innerHTML
        }
        return;
    }

    if(button.classList.contains('btn'))
    {
        if(isCalculated)
        {
            input.innerHTML = button.innerHTML;
            result.innerHTML = '';
            isCalculated = false;
        }
        else
        {
            input.innerHTML += button.innerHTML;
        }
    }
})





