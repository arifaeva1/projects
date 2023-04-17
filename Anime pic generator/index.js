const btnEl =document.getElementById("btn");
const animecontainerEl=document.querySelector(".anime-conatiner");
const animeingEl=document.querySelector(".anime-img");
const animenameEl=document.querySelector(".anime-name");






btnEl.addEventListener("click",async function(){

    try {
        btnEl.disable =true;
        btnEl.innerText="loading....";
        animenameEl.innerText="updating...";

        const response =await fetch ("https://api.catboys.com/img")
        const data = await response.json();
        btnEl.disable =false;
        btnEl.innerText="Get Anime";
        animecontainerEl.style.display="block";
        animeingEl.src =data.url;
        animenameEl.innerText = data.artist;







        
    } catch (error) {
        console.log(error);
        
    }



});












