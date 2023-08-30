let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > Input')
let kelvinInput = document.querySelector('#kelvin > Input')

let btn = document.querySelector('.button button')

 function roundNumber(number){
   return Math.round(number*100)/100
 }
/* celcius to fahrenheit and kelvin*/
celsiusInput.addEventListener('input', function(){
 let cTemp = parseFloat(celsiusInput.value)
 let fTemp = (cTemp*(9/5)) + 32
 let kTemp = cTemp + 273.15

 fahrenheitInput.value = roundNumber(fTemp)
 kelvinInput.value = roundNumber(kTemp)
})

/* fahrenheit to celcius and kelvin*/
fahrenheitInput.addEventListener('input',function(){
 let fTemp = parseFloat(fahrenheitInput.value)
 let cTemp = (fTemp = 32) * (5/9)
 let kTemp = (fTemp -32) * (5/9) + 273.15

 celsiusInput.value = roundNumber(cTemp)
 kelvinInput.value = roundNumber(kTemp)
})

/* kelvin to celcius and fahrenheit*/
kelvinInput.addEventListener('input',function(){
 let kTemp = parseFloat(kelvinInput.value)
 let cTemp = kTemp - 273.15
 let fTemp = (kTemp - 273.15) * (9/5)+ 32

 celsiusInput.value = roundNumber(cTemp)
 fahrenheitInput.value = roundNumber(fTemp)
})

btn.addEventListener('click',()=>{
 celsiusInput.value = ""
 fahrenheitInput.value =""
 kelvinInput.value = ""
})













