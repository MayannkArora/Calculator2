let grid = document.querySelector("#grid");

let numbers = [1,2,3,4,5,6,7,8,9,"+",0,"-","/","*","="];
let screen = document.querySelector("#numbers");
let count = 0;
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
        if(e!="="){
        screen.value += e;
        }
        if (e == "+"){
            count+=1;
        }
        if (count>=2){
            let problem = screen.value.split("+");
            a = Number(problem[0]);
            b = Number(problem[1]);
            screen.value = calculate("+");
            
        }

    })

    grid.appendChild(nums);
})

