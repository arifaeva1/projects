const btmEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "5dgs64n7uGtcF9ZrPRTwMg==iwhrauZzAao3gYup";



const opitons={
    method: 'GET',
    headers: {
         'X-Api-Key': apiKey
        },

  
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

 function getJoke(){
    const response = fetch (apiURL,opitons)  ;
//const data=  response.json();

  jokeEl.innerText= response[0];
}


btmEl.addEventListener("click",getJoke);