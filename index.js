var dateOfBirth = document.querySelector("#doBirth");
var luckyNum = document.querySelector("#luckyNum");
var checkBtn = document.querySelector("#checkBtn");
var response = document.querySelector("#response");
response.style.display = "none";
checkBtn.addEventListener("click" , showResponse)
checkBtn.addEventListener("click", checkBirthDateIsLucky)

function compareValues(sum, luckyNumber){
    if(luckyNumber>0){
    if(sum%luckyNumber === 0){
        response.style.color = "red";
        response.innerText = "Hurray! Your Birthday is Lucky! 🚀 ";
    }
    else{
        response.style.color = "blue";
        response.innerText = "Uh!😢 Your Birthday is not a Lucky Number";
    }
}
else{
    response.innerText = "⚠️ Empty input and Negative numbers entry is not allowed!"
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
function showResponse(){
    response.style.display = "block";
}