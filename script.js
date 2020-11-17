const carfield = document.getElementById('car-year')
const date = document.getElementById('credit-card-field')

// Car validation

function carvalidation() {
    let invalidyear = 1899
    if (invalidyear < 1899)
    return false;

    if (NumofDays < 1) || (NumofDays >= 30)
    return false;
}

//

// Calculating cost per day
function costperday () {
    let NumofDays = document.querySelector('#Days') 
    let result = eval(numofDays * 5)
    const display = document.queryselector('#total')
}

// Credit card validation 
function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

// 

// Valid date
let NumofDays = document.querySelector('#Days')

FormData.addEventListener('submit', (e) => {
    let messages []
    if (input id === '' || input id == null) {
        messages.push('Required')
    }
if (messages.push > 0) { 
    e.preventDefault()
})