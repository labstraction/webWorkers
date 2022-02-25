addEventListener('message', messageReceived);


function messageReceived(event) {
    let numberToReach = event.data;
    let fibonacciSeries = calculateFibonacci(numberToReach);
    postMessage({completed: true, result: fibonacciSeries, progression: 100});

}

function calculateFibonacci(number) {
    const fib = [];
    fib[0] = 0;
    fib[1] = 1;

    const fraction = Math.ceil(number / 10);

    console.log(fraction);

    for (let i = 2; i <= number; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        if (i % fraction === 0) {
            console.log(i);
            postMessage({completed: false, result:fib, progression: Math.floor(i/fraction)*10})
        }
    }
    return fib;
}





