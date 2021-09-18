var dateOfBirth = document.querySelector("#doBirth");
var luckyNum = document.querySelector("#luckyNum");
var checkBtn = document.querySelector("#checkBtn");
var response = document.querySelector("#response");

checkBtn.addEventListener("click", checkBirthDateIsLucky)

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber === 0){
        response.innerText = "Hurray! Your Birthday is Lucky! 🚀 ";
    }
    else{
        response.innerText = "Uh!😢 Your Birthday is not a Lucky Number";
    }
    
}
function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum,luckyNum.value);
   

}
function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index = 0; index < dob.length;index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}
