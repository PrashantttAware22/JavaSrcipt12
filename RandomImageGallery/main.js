let btn = document.querySelector(".btn") ;
const imageContainer = document.querySelector(".imageContainer")

btn.addEventListener("click" , ()=> {
    imageNum = 12 ; 
    addNewImages() ; 
})


function addNewImages() {
    for(let index = 0 ; index < imageNum ; index++) {
    let newImg = document.createElement("img") ;
    newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * (2000 - 13 + 1)) + 13}` ; 
    imageContainer.appendChild(newImg) ; 
    }
}