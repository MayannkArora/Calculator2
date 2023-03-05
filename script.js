let grid = document.querySelector("#grid");
let screen = document.querySelector("#numbers");
let numbers = [1,2,3,4,5,6,7,8,9,"+",0,"-","/","*","="];
let count = 1;
let calculate = [];
let eval = false;

numbers.forEach((e)=>{
    let nums = document.createElement('button');
    nums.innerText = e;
    grid.appendChild(nums);
    nums.addEventListener('click',()=>{
        if(e!="+" && e!="*" && e!="/" && count==1){
            screen.value += e;
        }
    })
})