let grid = document.querySelector("#grid");

let numbers = [1,2,3,4,5,6,7,8,9,"+",0,"-","/","*","="];
let screen = document.querySelector("#numbers");

numbers.forEach((e)=>{
    let nums = document.createElement('button');
    nums.innerText = e;
    nums.addEventListener('click',()=>{
        screen.value += e;
    })
    grid.appendChild(nums);
    
})

