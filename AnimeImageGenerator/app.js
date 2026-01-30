let getAnimeBtn = document.querySelector("#btn") ;
let animeContainer = document.querySelector(".animeContainer") ; 
let container = document.querySelector(".container") ; 
let animeImg = document.querySelector(".animeContainer img") ; 
let animeName = document.querySelector(".animeContainer p") ;


getAnimeBtn.addEventListener("click" , async ()=> {
    animeContainer.classList.add("show") ;
     container.classList.add("hide") ; 
     try {
        getAnimeBtn.disabled = true ; 
        getAnimeBtn.innerText = "Loading..." ; 
        let response = await fetch("https://api.nekosia.cat/api/v1/images/catgirl") ;
        let data = await response.json() ;
        getAnimeBtn.disabled = false ; 
        getAnimeBtn.innerText = "Get Anime";
        animeImg.src = data.image.original.url ; 
        animeName.innerText = data.attribution.artist.username ; 
     }
     catch (error) {
        alert("This Device does not support the API responce") ; 
     }
}) ; 