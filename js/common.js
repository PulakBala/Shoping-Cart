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
function updateCaseTotalNumber(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}




function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
   subTotalElement.innerText = value;
}
//calculate subtotal
function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
   const currentCaseTotal = getTextElementValueById('case-total');

   const currentSubTotal = currentPhoneTotal + currentCaseTotal;
   setTextElementValueById('sub-total', currentSubTotal);

   //calculate tax
   const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
   const taxAmount = parseFloat(taxAmountString);
   setTextElementValueById('tax-amount', taxAmount);

   const finalAmount = currentSubTotal + taxAmount;
   setTextElementValueById('final-total',finalAmount);

}