let input=document.getElementById("input")
let btn=document.getElementById("btn")
let uppercase=document.getElementById("Uppercase")
let lowercase=document.getElementById("lowercase")
let numbercontain=document.getElementById("number")
let specialcharacter=document.getElementById("Special character")
let Contain8=document.getElementById("Contain8")

input.onkeyup=()=>{
  var lowerletter= /[a-z]/g;
  var Upperletter= /[A-Z]/g;
  var Numbers= /[0-9]/g;
  var special= /[$&+,:;=?@#|'<>.^*()%!-]/;
  var userinput = input.value
 
  if(userinput.match(lowerletter)){
    lowercase.style.color="green"
  }else{
       lowercase.style.color="red"
        
  }
  if(userinput.match(Upperletter)){
    uppercase.style.color="green"
  }else{
       uppercase.style.color="red"
  }
  if(userinput.match(Numbers)){
    numbercontain.style.color="green"
  }else{
       numbercontain.style.color="red"
  }
  if(userinput.match(special)){
    specialcharacter.style.color="green"

  }else{
       specialcharacter.style.color="red"
  }
   if(userinput.length>=8){
    Contain8.style.color="green"
      
  }else{
    Contain8.style.color="red"
    
  }
  var h2 = document.getElementById("h2")
  if(userinput.length>=8 && userinput.match(special) && userinput.match(Numbers)&&userinput.match(Upperletter)&& userinput.match(lowerletter)){
input.style.backgroundColor="lightgreen"
btn.style.display="inline-block"
h2.style.color="green"
  }else{
    input.style.backgroundColor="rgb(255, 170, 170)"
btn.style.display="none"
h2.style.color="red"
  }
}