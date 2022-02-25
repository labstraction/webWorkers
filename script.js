// // function calculatePrimeNumbersTo(number) {
// //     let array = Array.from({length: number - 1}, (v, i) => i + 2);
// //     return array.reduce((p, c) => p.some(e => c % e === 0) ? p : [...p, c],[]);
// // }


// // let primeTo100 = calculatePrimeNumbersTo(1000000);

// // let par = document.getElementById('prime-numbers');

// // for (const prime of primeTo100) {
// //     const node = document.createTextNode(prime + " ");
// //     par.appendChild(node);
// // }

// const primeWorker = new Worker("./worker.js");
// primeWorker.addEventListener('message', messageReceived)


// let message = {operation:"prime", numberToReach:300000};
// let message2 = {operation:"sum", numberToReach:100000};
// primeWorker.postMessage(message);
// let loader = document.getElementById('loader');
// loader.style.display = "inline-block";


// function messageReceived(event) {
//     loader.style.display = "none";
//     if (event.data.operation === "prime") {
//         let primeToNumber = event.data.result;
//         let par = document.getElementById('prime-numbers');

//         for (const prime of primeToNumber) {
//             const node = document.createTextNode(prime + " ");
//             par.appendChild(node);
//         }
//     } else {
//         let par = document.getElementById('prime-numbers');
//         let sum = event.data.result;
//         const node = document.createTextNode(sum);
//         par.appendChild(node);
//     }

// }

function getNumberFromInput(inputId) {
    const inputValue = document.getElementById(inputId).value;
    if (!isNaN(inputValue)) {
        const number = parseInt(inputValue);
        return number;
    } else {
        return NaN;
    }

}




function calcPrime() {
    const numb = getNumberFromInput('input');
    if (!isNaN(numb)) {
        const primeWorker = new Worker('./worker.js');
        primeWorker.addEventListener('message', (event) => {
            writeResultInPar(event.data, "result-prime");
            stopLoader('loader-prime')
        });
        startLoader('loader-prime');
        primeWorker.postMessage(numb);

    }
}

function calcFactorial() {
    const numb = getNumberFromInput('input');
    if (!isNaN(numb)) {
        const factWorker = new Worker('./factworker.js');
        factWorker.addEventListener('message', (event) => {
            writeResultInPar(event.data, "result-factorial");
            stopLoader('loader-factorial');
        });
        factWorker.addEventListener('error', (event)=>{
            stopLoader('loader-factorial');
            writeErrorInPar(event, "result-factorial")
        })
        startLoader('loader-factorial');
        factWorker.postMessage(numb);

    }
}

function calcFibonacci() {
    const numb = getNumberFromInput('input');
    if (!isNaN(numb)) {
        const fibWorker = new Worker('./fibworker.js');
        fibWorker.addEventListener('message', (event) => {
            showProgress(event.data.progression)
            if (event.data.completed) {
                console.log("completo")
                writeResultInPar(event.data.result, "result-fibonacci");
            }
        });
        fibWorker.postMessage(numb);

    }
}


function writeResultInPar(result, parId) {
    const par = document.getElementById(parId);
    par.innerHTML = "";
    for (const num of result) {
        const textNode = document.createTextNode(num + " ");
        par.appendChild(textNode)
    }
}

function writeErrorInPar(event, parId) {
    const par = document.getElementById(parId);
    par.innerHTML = "";
    const message = event.message;
    const textNode = document.createTextNode(message);
    par.appendChild(textNode)
}

function startLoader(loaderId) {
    const loader = document.getElementById(loaderId);
    loader.style.display = 'inline-block'
}

function stopLoader(loaderId) {
    const loader = document.getElementById(loaderId);
    loader.style.display = 'none'
}

function showProgress(progressLevel){
    console.log(progressLevel);
    const div = document.getElementById('progress-bar');
    div.style.width = progressLevel+"px";
}