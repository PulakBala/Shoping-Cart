/*
1. add event listener to the case plus button
2. get the value inside the3 case number field (input field) 
3. convert the number to an integer
5. calculate the new case number
6. set the value to the case number field

*/

function getButtonPlusClick(isIncrase){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrase === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}
// function getButtonPlusClick(plusNumber){
//     const caseNumberField = document.getElementById(plusNumber);
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);
//     const newCaseNumber = previousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;
// }

document.getElementById('btn-case-plus').addEventListener('click', function(){
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberString);
    // const newCaseNumber = previousCaseNumber + 1;
    // caseNumberField.value = newCaseNumber;
    const newCaseNumber = getButtonPlusClick(true);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;


});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    // const minusNumberField = document.getElementById('case-number-field');
    // const minusNumberString = minusNumberField.value;
    // const previousMinusNumber = parseInt(minusNumberString);

    // const newMinusNumber = previousMinusNumber - 1;
    // minusNumberField.value = newMinusNumber;
    getButtonPlusClick(false)
})