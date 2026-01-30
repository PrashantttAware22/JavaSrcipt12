let btn = document.querySelector("button") ;
let input = document.querySelector("input") ; 
let cpyIcon = document.querySelector("i") ; 

btn.addEventListener("click" , ()=> {
  createPassword() ; 
})

cpyIcon.addEventListener("click" , ()=> {
  copyPassword() ;
})

function createPassword() {
  let chars = "0123489abcdef!@#&*()ghijklmnop567qrstuvwxyz_+:{}[]ABCDE$%^FGHIJKLMNOPQRS012TUVWXYZ" ; 
  let passwordLength = 14 ;
  let password = "" ;
  
  for(let i = 0 ; i < passwordLength ; i++) {
      let randNum = Math.floor(Math.random() * chars.length); 
      password += chars.substring(randNum , randNum + 1) ;
  }
  input.value = password ; 
}

function copyPassword() {
  input.select() ;
  input.setSelectionRange(0,9999) ;
  navigator.clipboard.writeText(input.value) ; 
}