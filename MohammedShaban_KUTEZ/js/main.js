function onChangeInputNumber(){
    document.getElementById("productnumber").addEventListener('input', function (evt) {
        if(document.getElementById("productnumber").value >= 100){
            document.getElementById("productnumber").value = 100;
        }else if(document.getElementById("productnumber").value < 0){
            document.getElementById("productnumber").value = 0;
        }
    });
}
onChangeInputNumber();
Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};
let date = document.getElementById('datepicker');
const form = document.getElementById('form');
date.min = new Date().toISOString().split("T")[0];
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let date = document.getElementById('datepicker');
    let productNumber = document.getElementById('productnumber');
    let productStyle = document.getElementById('productstyle');
    let estimatedContent = document.querySelector('.estimated-content');
    let errorMessage = document.querySelector('.error-message');
    let message = '';
    let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if(date.value && productStyle.value && productNumber.value) {
        let someDate = new Date(date.value)
        if(productStyle.value === 'Cotton' && productNumber.value < 50) {
            someDate.setDate(someDate.getDate() + 2);
            someDate.toISOString().substr(0,12);
            message += '<p>Your Estimated Shipping Time Is</p> ' + `<h3>${someDate.getUTCDate()} ${monthsArray[someDate.getUTCMonth()]} ${someDate.getUTCFullYear()}</h3>`;
            estimatedContent.innerHTML = message;
        }else if(productStyle.value === 'Cotton' && productNumber.value >= 50){
            someDate.setDate(someDate.getDate() + 3);
            someDate.toISOString().substr(0,12);
            message += '<p>Your Estimated Shipping Time Is</p> ' + `<h3>${someDate.getUTCDate()} ${monthsArray[someDate.getUTCMonth()]} ${someDate.getUTCFullYear()}</h3>`;
            estimatedContent.innerHTML = message;
        }
        if(productStyle.value === 'Linen' && productNumber.value < 50) {
            someDate.setDate(someDate.getDate() + 4);
            someDate.toISOString().substr(0,12);
            message += '<p>Your Estimated Shipping Time Is</p> ' + `<h3>${someDate.getUTCDate()} ${monthsArray[someDate.getUTCMonth()]} ${someDate.getUTCFullYear()}</h3>`;
            estimatedContent.innerHTML = message;
        }else if(productStyle.value === 'Linen' && productNumber.value >= 50){
            someDate.setDate(someDate.getDate() + 5);
            someDate.toISOString().substr(0,12);
            message += '<p>Your Estimated Shipping Time Is</p> ' + `<h3>${someDate.getUTCDate()} ${monthsArray[someDate.getUTCMonth()]} ${someDate.getUTCFullYear()}</h3>`;
            estimatedContent.innerHTML = message;
        }
    }else {
        errorMessage.classList.add('active');
        setTimeout(() => {
            errorMessage.classList.remove('active');
        },2200)
    }
}, false);
