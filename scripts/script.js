let combination1 = [],
    combination2 = [],
    combination3 = [],
    combination4 = [],
    combination5 = [],
    combination6 = [],
    combination7 = [],
    combination8 = [];

let select = document.getElementById('how-many-tickets');
let button = document.getElementById('send');

let combos = document.getElementById('numbers-display');
let numbers = document.createElement('h2');
combos.appendChild(numbers);

button.addEventListener('click', (e) => {
    e.preventDefault();
    if(select.selectedIndex == 0){
        fillingInCombo(combination1);
        numbers.innerHTML = `${combination1}`;
    }else if(select.selectedIndex == 1){
        fillingInCombo(combination1);
        fillingInCombo(combination2);
        numbers.innerHTML = `${combination1}\n ${combination2}`
    }else if(select.selectedIndex == 2){
        fillingInCombo(combination1);
        fillingInCombo(combination2);
        fillingInCombo(combination3);
        numbers.innerText = `${combination1}\n ${combination2}\n ${combination3}`
    }else if(select.selectedIndex == 3){
        fillingInCombo(combination1);
        fillingInCombo(combination2);
        fillingInCombo(combination3);
        fillingInCombo(combination4);
        numbers.innerText = `${combination1}\n ${combination2}\n ${combination3}\n ${combination4}`
    }else if(select.selectedIndex == 4){
        fillingInCombo(combination1);
        fillingInCombo(combination2);
        fillingInCombo(combination3);
        fillingInCombo(combination4);
        fillingInCombo(combination5);
        numbers.innerText = `${combination1}\n ${combination2}\n ${combination3}\n ${combination4}\n ${combination5}`
    }else if(select.selectedIndex == 5){
        fillingInCombo(combination1);
        fillingInCombo(combination2);
        fillingInCombo(combination3);
        fillingInCombo(combination4);
        fillingInCombo(combination5);
        fillingInCombo(combination6);
        numbers.innerText = `${combination1}\n ${combination2}\n ${combination3}\n ${combination4}\n ${combination5}\n ${combination6}`
    }else if(select.selectedIndex == 6){
        fillingInCombo(combination1);
        fillingInCombo(combination2);
        fillingInCombo(combination3);
        fillingInCombo(combination4);
        fillingInCombo(combination5);
        fillingInCombo(combination6);
        fillingInCombo(combination7);
        numbers.innerText = `${combination1}\n ${combination2}\n ${combination3}\n ${combination4}\n ${combination5}\n ${combination6}\n ${combination7}`
    }else if(select.selectedIndex == 7){
        fillingInCombo(combination1);
        fillingInCombo(combination2);
        fillingInCombo(combination3);
        fillingInCombo(combination4);
        fillingInCombo(combination5);
        fillingInCombo(combination6);
        fillingInCombo(combination7);
        fillingInCombo(combination8);
        numbers.innerText = `${combination1}\n ${combination2}\n ${combination3}\n ${combination4}\n ${combination5}\n ${combination6}\n ${combination7}\n ${combination8}`
    }
});

function fillingInCombo(combo){
    for(let i = 0; i < 6; i++){
        combo.push(generatingRandomNumbers());
    }
    return combo.sort((a, b) => {return a - b; });
}

function generatingRandomNumbers(){
    return Math.floor((Math.random() * (48 - 1 + 1)) + 1);
}

function makingCombosWithoutRepetition(combo){
    if(select.value == '0'){
        printedNums.innerHTML += combo;
    }else if(select.value == '1'){
        let combo2 = checkWhetherNumRepeat(combo);
        printedNums.innerHTML += combo + combo2;
    }
}