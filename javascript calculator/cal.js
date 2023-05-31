let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue='';
for(item of buttons){
    item.addEventListener("click", (e) =>{
        buttonText=e.target.innerText;
        /*console.log('Button text is', buttonText);*/
        if (buttonText=='X'){
            buttonText='*';
            screenValue +=  buttonText;
            screen.value =screenValue;
        }else if (buttonText=='C'){
            screen.value = "";
            screen.value =screenValue;
        }else if (buttonText =='='){
            var result;
            try{
                result=eval(screenValue);
            }catch(error){
                result="error"
            }
            screen.value = result;
        }else {
            screenValue +=  buttonText;
            screen.value = screenValue;
        }

    });

}