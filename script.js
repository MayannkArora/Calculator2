let grid = document.querySelector("#grid");
let screen = document.querySelector("#numbers");
let numbers = [1,2,3,4,5,6,7,8,9,"+",0,"-","/","*","="];
let count = 1;
let calculate = [];
let eval = false;
let num1 = document.querySelector("#num1");
num1.value="";
let num2 = document.querySelector("#num2");
num2.value="";
let sign = document.querySelector("#sign");
sign.value="";



const operate = (num1,num2,sign) =>{
    if (sign=="+"){
        return num1+num2
    } else if (sign=="-"){
        return num1-num2
    } else if (sign=="*"){
        return num1*num2
    } else if (sign=="/"){
        return num1/num2
    }
}

const reset = (e) =>{
    e.value="";
} 

const updateNum1 = (e) => {
        num1.innerText += e;
}

const updateNum2 = (e) =>{
    num2.innerText += e;
}


numbers.forEach((e)=>{
    let nums = document.createElement('button');
    nums.innerText = e;
    grid.appendChild(nums);
    nums.addEventListener('click',()=>{
        updateNum1(e);
    });
})

