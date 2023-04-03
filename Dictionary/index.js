const inputEl = document.getElementById("input")
const infotextEl =document.getElementById("info-text")
const meaningconEl =document.getElementById("meaning-con")
const titleEl =document.getElementById("title")
const meaningEl =document.getElementById("meaning")
const audioEl= document.getElementById("audio")


async function fetchAPI(word){

    try{
        infotextEl.style.display ="block";
        meaningconEl.style.display="none"; 



infotextEl.innerText =`searching the meaning of "${word}"`

const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
const result =await fetch(url).then((res)=>res.json());

infotextEl.style.display="none";
meaningconEl.style.display="block"; 

 titleEl.innerText = result[0].word;
 meaningEl.innerText =result[0].meanings[0].definitions[0].definition;
audioEl.src =result[0].phonetics[0].audio;

    }catch(data){
        console.log(data);
    }
   
}



inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key =="Enter" ){
        fetchAPI(e.target.value)
    }

})