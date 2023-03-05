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
            if(screen.value.length==0){
                screen.value+=e;
            } else if(screen.value.length>=1){
                if(e=="-"){
                calculate[0] = screen.value;
                calculate[1] = e;
                screen.value += e;
                count += 1;
                console.log(calculate);
                } else if (e!="-"){
                    screen.value+=e;
                }
            }
        } else if (count ==1 && screen.value.length>=1 && (e=="-" || e=="+" || e=="/" || e=="*")){
            calculate[0] = screen.value;
            calculate[1] = e;
            screen.value += e;
            count += 1;
            console.log(calculate);
        } else if(count == 2){
            if(e!="+" && e!="*" && e!="/" && e!="-"){
                screen.value+=e;
            } else{
                let sign = calculate[1];
                let divide = screen.value.split(sign);
                if(sign!="-"){
                    calculate[2] = divide[1];
                } else {
                    calculate[2] = divide[2];
                }
                if(sign=="+"){
                    let sum = parseInt(calculate[0]) + parseInt(calculate[2]);
                    screen.value = sum;
                    screen.value += e;
                } else if(sign=="-"){
                    let difference = parseInt(calculate[0])-parseInt(calculate[2]);
                    screen.value = difference;
                    screen.value += e;
                }
            }
            
        }
    })
})