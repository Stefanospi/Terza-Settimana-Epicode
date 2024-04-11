
const tabellone = function () {
    const tabellone = document.querySelector('#Tabellone');
    let numero = 1;
    for(let i = 1; i<=76;i++){
        const numCellDiv = document.createElement('div');
        numCellDiv.classList.add('numeri');
        numCellDiv.textContent = numero;
        tabellone.appendChild(numCellDiv);
        numero++;
    }
}

tabellone();


const fillArray = function () {
    // inserire in un array
    const arr = []
    for (let i = 0; i < 76; i++) {
      arr.push(i + 1)
    }
    return arr
}
fillArray();




const generatoreRandomNum = function () {
    // generare un numero random
   return Math.floor(Math.random()* 76)+ 1;
}
console.log(generatoreRandomNum());
const numCas = generatoreRandomNum();


const generatoreRandom = function (num) {
    // stampare il numero  
    // associare la classe...
    const random = generatoreRandomNum(num);
    const button = document.getElementById("buttonGen");
    const casellaGen = document.getElementById("numRand");
    button.addEventListener('click',function(){
        casellaGen.innerText = 'Numero: ' +  random;
    });
    
}

generatoreRandom();


const generateUserBoards = function () {
    // genera e gestisce le tabelline
}


const handleFormSubmit = function (e) {
    e.preventDefault();
}

const form = document.querySelector('form');
form.addEventListener('submit',handleFormSubmit);
