const btnEl= document.getElementById("btn");
const emojinameEl =document.getElementById("emoji-name");
const emoji =[];

async function getEmoji(){
 let response = await fetch("https://emoji-api.com/emojis?access_key=c7674a6b45c7643dd8a6f0a836c93f5083be9d0b") ;
data = await response.json()


for(let i=0;i<1500;i++){
    emoji.push({
        emojiName :data[i].character,
        emojiCode :data[i].unicodeName,
    });
}


}
getEmoji();



btnEl.addEventListener("click",()=>{
  const  randomNumber =Math.floor( Math.random()*emoji.length);
  btnEl.innerText=emoji[randomNumber].emojiName;
emojinameEl.innerText=emoji[randomNumber].emojiCode

});