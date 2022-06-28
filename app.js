



const myButtons = document.querySelectorAll('button')
const myInput = document.querySelector('input')

function clear() {
   myInput.value = "";
}

myButtons[0].addEventListener('click', function () {
   myInput.value = "";
})

myButtons[1].addEventListener('click', function () {
   myInput.value = myInput.value.slice(0, -1);
})

myButtons[2].addEventListener('click', function () {
   myInput.value = myInput.value / 100;
})

myButtons[3].addEventListener('click', function () {
   myInput.value += "/";
})

myButtons[4].addEventListener('click', function () {
   myInput.value += 7;
})

myButtons[5].addEventListener('click', function () {
   myInput.value += 8;
})
myButtons[6].addEventListener('click', function () {
   myInput.value += 9;
})
myButtons[7].addEventListener('click', function () {
   myInput.value += "*";
})
myButtons[8].addEventListener('click', function () {
   myInput.value += 4;
})
myButtons[9].addEventListener('click', function () {
   myInput.value += 5;
})
myButtons[10].addEventListener('click', function () {
   myInput.value += 6;
})
myButtons[11].addEventListener('click', function () {
   myInput.value += "-";
})
myButtons[12].addEventListener('click', function () {
   myInput.value += 1;
})
myButtons[13].addEventListener('click', function () {
   myInput.value += 2;
})
myButtons[14].addEventListener('click', function () {
   myInput.value += 3;
})
myButtons[15].addEventListener('click', function () {
   myInput.value += '+';
})
myButtons[16].addEventListener('click', function () {

   let myVal = myInput.value.split('');
   console.log(myVal)
   if (myVal[0] != '-') {
      myVal.unshift('-');
   } else {
      myVal.shift();
   }
   myInput.value = myVal.join('');
})
myButtons[17].addEventListener('click', function () {
   myInput.value += 0;
})
myButtons[18].addEventListener('click', function () {
   myInput.value += '.';
})

myButtons[19].addEventListener('click', function () {
   myInput.value = (eval(myInput.value))
})