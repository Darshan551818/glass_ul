let result = document.querySelector("#result");
let ageinput = document.querySelector("#ageinput");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let refresh = document.querySelector("#refresh");
let dispresult = document.querySelector("#dispresult");
let mytimer;
let age;

btn1.addEventListener('click',function(){
    age = ageinput.value.trim();
    if (age == ""){
        clearInterval(mytimer)
        let alert = document.querySelector(".alert");
        alert.classList.add('active');

        mytimer =setInterval(function(){
            alert.classList.remove('active');
        },2000)

    }else if(isNaN(age) == true){
        clearInterval(mytimer)
        let alert2 = document.querySelector(".alert2");
        alert2.classList.add('active');
        mytimer =setInterval(function(){
            alert2.classList.remove('active');
        },2000)

    }else{
        let ans = document.querySelector(".ans");
        ans.classList.add('active');

        let remaining_yrs = 90 - age;
        let remaining_weeks = remaining_yrs * 52;
        result.innerHTML = remaining_weeks;
        ageinput.value = "";
    }
})
btn2.addEventListener('click', function(){
    refresh.click();
});