setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hourDigits = calculateBaseFive(hours);
    const minuteDigits = calculateBaseFive(minutes);
    console.log('\x1Bc'); //clear console
    console.log('-----');
    if(seconds % 2 === 0) {
        console.log(' *');
    } else {
        console.log('');
    }
    displayBaseFiveDigits(hourDigits);
    displayBaseFiveDigits(minuteDigits);
    console.log('-----');
}, 320); // repeat function every 320 milliseconds, so we never skip a second

function calculateBaseFive(baseTenValue) { // g
    const result = [
        Math.floor(baseTenValue / 5), // lights with value 5
        baseTenValue % 5              // lights with value 1
    ]

    return result;
}

function displayBaseFiveDigits(digits) {
    console.log(new Array(digits[0] + 1).join('|')); // first digit
    console.log(new Array(digits[1] + 1).join('|')); // second digit 
}