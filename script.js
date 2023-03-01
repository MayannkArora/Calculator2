let grid = document.querySelector("#grid");

let numbers = [1,2,3,4,5,6,7,8,9,"+",0,"-","/","*","="];
let screen = document.querySelector("#numbers");

let a = "";
let b = "";

const calculate = (operator) => {
    a = parseInt(a);
    b = parseInt(b);
    if (operator=="+"){
        return a+b;
    } else if (operator == "-"){
        return a-b;
    } else if (operator == "*"){
        return a*b;
    } else {
        return a/b;
    }
}

numbers.forEach((e)=>{
    let nums = document.createElement('button');
    nums.innerText = e;
    // add the numbers and operators to the input screen
    nums.addEventListener('click',()=>{
        screen.value += e;
    })
    grid.appendChild(nums);
})

