let weights =document.querySelector('#weight-input');
let height =document.querySelector('#height-input');
let calculateBtn =document.querySelector('#btn-success');
let resetBtn =document.querySelector('#btn-reset');
let result=document.querySelector('#bmi_text')
let showmsg=document.querySelector("#dynamic__bmi")


function calculations(){

    if(Number(weights.value)&&Number(height.value)){
        let weightInput,heightinput;
 weightInput=Number(weights.value);
 heightinput=Number(height.value);

  let bmi=weightInput / (heightinput * 0.0254 * heightinput * 0.0254);
  showmsg.innerHTML=bmi.toFixed('2')
  let msg=showMessage(bmi)
  result.innerHTML=msg
    }else{
        alert('Please enter the valid number');
        resetcalculate();
    }
 
}
function showMessage(bmiValue){
    if(bmiValue < 16){
        return "You are Severe Thin"
    } else if(bmiValue >= 16 && bmiValue <= 17){
        return "You are Moderate Thin"
    } else if(bmiValue > 17 && bmiValue <= 18.5){
        return "You are Mid Thin"
    } else if(bmiValue > 18.5 && bmiValue <= 25){
        return "You are Normal"
    } else if(bmiValue > 25){
        return "You are Overweight"
    }
}

function resetcalculate(){
    weights.value=""
height.value=""
showmsg.innerHTML='______';
result.innerHTML=""

}

calculateBtn.addEventListener('click',calculations)
resetBtn.addEventListener('click',resetcalculate)