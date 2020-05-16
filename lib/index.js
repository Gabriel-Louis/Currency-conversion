

function func() {

    var amt = document.getElementById('amount'); 
    var current_currency = document.getElementById('currency-1'); 
    var exchange_currency = document.getElementById('currency-2'); 


    //where to display 
    var span_1 = document.querySelector('.given-amount'); 
    var span_2 = document.querySelector('.base-currency'); 
    var span_3 = document.querySelector('.second-currency');

   var currency = {

        "EUR": {
            'NGN':2.30, 
            'USD':3.00, 
            'YUAN': 1.90, 
            'CIDI': 0.70, 
            'PND': 4.50
        }, 
        "NGN": {
            'EUR':2.30, 
            'USD':3.00, 
            'YUAN': 1.90, 
            'CIDI': 0.70, 
            'PND': 4.50
        }, 
        "USD": {
            'NGN':2.30, 
            'EUR':3.00, 
            'YUAN': 1.90, 
            'CIDI': 0.70, 
            'PND': 4.50
        }, 
        "YUAN": {
            'NGN':2.30, 
            'USD':3.00, 
            'EUR': 1.90, 
            'CIDI': 0.70, 
            'PND': 4.50
        }, 
        "PND": {
            'NGN':2.30, 
            'USD':3.00, 
            'YUAN': 1.90, 
            'CIDI': 0.70, 
            'EUR': 4.50
        }, 
        "CIDI": {
            'NGN':2.30, 
            'USD':3.00, 
            'YUAN': 1.90, 
            'PND': 4.50, 
            'EUR': 4.50
        }
    }   

    var result;



    try {

        if(current_currency.value == exchange_currency.value) {
            var equal = result = amt.value;
            console.log(equal) 

        }else {

            result = amt.value * currency[current_currency.value][exchange_currency.value];
            
            var round_result = Math.round(result)
            console.log(round_result); 

        }
    } catch (error) {

        result = amt.value * (1 / currency[current_currency.value][exchange_currency.value]); 
        console.log(result)
    };  

   //var first_span = span_1.innerHTML = `${amt.value}${current_currency.value}`; 

    span_1.textContent = `${current_currency.value}${amt.value}`; 
    span_3.textContent = `${exchange_currency.value}${round_result}`; 

    //Round the value to the nearest value; 

    
}


var btn = document.getElementById('convert').addEventListener('click', () => { func() }); 
 