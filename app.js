var arraySet = [];
var binarySet = [];

function arrayBuilder() {
    let startInput = prompt('Please enter starting integer');
    let startValue = parseInt(startInput);
    let endInput = prompt('Enter ending integer')
    let endValue = parseInt(endInput);
    let stepInput = prompt('Please enter step integer value');
    let stepValue = parseInt(stepInput)

    console.log(startValue), console.log(endValue), console.log(stepValue);

    if (isNaN(startValue)) {
        document.getElementById('array').innerHTML = 'Please refresh and enter a valid starting integer';
    }
    if (isNaN(endValue)) {
        document.getElementById('array').innerHTML = 'Please refresh and enter a valid ending integer';
    }
    if (isNaN(stepValue)) {
        document.getElementById('array').innerHTML = 'Please refresh and enter a valid step integer';
    }
    if (stepValue === 0) {
        document.getElementById('array').innerHTML = 'step cannot be 0, enter a positive or negative integer';
    }

    if (stepValue !== 0) {
        let arrayValue = startValue
        arraySet.push(arrayValue)
        let binaryValue = arrayValue.toString(2);
        binarySet.push(binaryValue)

        let sumValue = startValue

        if (stepValue > 0) {
            for (i = startValue; i < endValue;) {

                arrayValue = arrayValue + stepValue;
                sumValue = sumValue + arrayValue;
                binaryValue = arrayValue.toString(2);

                arraySet.push(arrayValue);
                binarySet.push(binaryValue);
                i = i + stepValue;
            }
        }

        else if (stepValue < 0) {
            for (i = startValue; i > endValue;) {
                arrayValue = arrayValue + stepValue;
                sumValue = sumValue + arrayValue;
                binaryValue = arrayValue.toString(2);

                arraySet.push(arrayValue);
                binarySet.push(binaryValue);
                i = i + stepValue;
            }
        }

        document.getElementById('array').innerHTML = ('The generated array is: ' + arraySet);
        document.getElementById('sum').innerHTML = ('The sum is: ' + sumValue);
        document.getElementById('binary').innerHTML = ('The binary of absolute element values are: ' + binarySet);
    }
}

arrayBuilder();