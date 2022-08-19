/*
1. add event listener to the case plus button
2. get the value inside the3 case number field (input field) 
3. convert the number to an integer
5. calculate the new case number
6. set the value to the case number field

*/


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = getButtonPlusClick(true);
    updateCaseTotalNumber(newCaseNumber);

    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){  
    const newCaseNumber = getButtonPlusClick(false);
   updateCaseTotalNumber(newCaseNumber);  

   calculateSubTotal()
})