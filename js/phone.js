function updatePhoneTotalNumber(isPlus){
    const phoneTotalPrice = document.getElementById('phone-number-field');
    const phoneNumberString = phoneTotalPrice.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newCaseNumber;
    if(isPlus === true) {
        newCaseNumber = previousPhoneNumber + 1;
    }
    else{
        newCaseNumber = previousPhoneNumber - 1;
    }
    phoneTotalPrice.value = newCaseNumber;
    return newCaseNumber;
}
function updatePhoneTotalPrice(newTotalPrice){
    const newTotal = newTotalPrice * 1219;
    const newTotalPhone = document.getElementById('phone-total');
    newTotalPhone.innerText = newTotal;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){ 
  const newTotalPrice = updatePhoneTotalNumber(true);
   updatePhoneTotalPrice(newTotalPrice);
   //calculate total
   calculateSubTotal()
})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
   const newTotalPrice = updatePhoneTotalNumber(false);
    updatePhoneTotalPrice(newTotalPrice);
    //calculate total
    calculateSubTotal()
    
})