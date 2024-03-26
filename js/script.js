let textBox=document.querySelector(".textBox");
let numberCount=document.querySelector(".count");
let textElement=document.querySelector(".text");
let resetBtn=document.querySelector(".text")
textBox.addEventListener("input",count);

function count(){
    let number=textBox.value.length;
    numberCount.textContent=number;
    if(number>=100){
        textElement.classList.add("active");
    }
    else{
        textElement.classList.remove("active");
    }
}

resetBtn.addEventListener("click",function(){
    textBox.value=""
})