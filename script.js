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


function calcPrime(params) {
    
}

function calcFactorial(params) {
    
}

function calcFiboncci(params) {
    
}