const button = document.querySelector("#btn");
const input = document.querySelector("#input");
const prNum = document.querySelector("#p6")

button.addEventListener("click", function(){
    let num = +input.value;
    input.value = null;
    let numList = [];
    for(let i = 2 ; i <= num ; i++){
        if((i!==2) && (i % 2 === 0)){
            continue;
        }   
        for(let j = 2 ; j <= i ; j++){
            if((i % j === 0) && (i !== j)){
                break;
            }
            if(i === j) {
                numList.push(i);
            }
        }
    }
    console.log(numList);
    prNum.innerHTML = `<p>${numList}</p>`;
});