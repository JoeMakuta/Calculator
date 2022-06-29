
const myButtons = document.querySelectorAll('button')
const myInput = document.querySelector('input')


myButtons.forEach(printToScreen)

function printToScreen(elt, index) {
   elt.addEventListener("click", function () {
      if (index == 0) {
         myInput.value = "";
      } else if (index == 1) {
         myInput.value = myInput.value.slice(0, -1);
      } else if (index == 2) {
         myInput.value = myInput.value / 100;
      } else if (index == 16) {
         let myVal = myInput.value.split('');
         console.log(myVal)
         if (myVal[0] != '-') {
            myVal.unshift('-');
         } else {
            myVal.shift();
         }
         myInput.value = myVal.join('');
      } else if (index == 19) {
         while (myInput.value[0] == 0 && /[1-9]/.test(myInput.value[1])) {
            myInput.value = myInput.value.slice(1)
         }
         myInput.value = (eval(myInput.value))
      } else if (index == 7) {
         myInput.value += "*";
      } else {
         myInput.value += elt.innerText;
      }
   })
}



