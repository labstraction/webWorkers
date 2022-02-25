addEventListener('message', messageReceived);


function messageReceived(event) {
    let numberToReach = event.data;
    let factorial = calculateFactorial(numberToReach);
    postMessage([factorial]);

}

function calculateFactorial(n) {

    if (n == 0 || n == 1) {
        return 1;
    } else {
        return calculateFactorial(n - 1) * n;
    }

}







