const gameSelctor = document.getElementById("game-select");
const gameContainer = document.getElementById("game-select");
gameSelctor.addEventListener("change",fuction() {
    gameContainer.innerHTML = "";

    switch(gameSelctor.value) {
        case "number-guess";
        startNumberGuessGame();
        break;
        case "clicker";
        ClikCounterGame();
        break;


    }
});














function ClikCounterGame(){
    let count =0 ;
    const gameContainer =document.getElementById("game-container");

    let button1=document.createElement("button");
    button1.textContent ="+1ボタン"

    let button2=document.createElement("button");
    button2.textContent="+10ボタン"

    let button3=document.createElement("button");
    button3.textContent="リセット"


    let counter =document.createElement("p")
    counter.textContent =count;

    button1.addEventListener("click",function(){
if(count<=99){
        count++
}
counter.textContent=count;
})

button2.addEventListener("click",function(){
if(count<=90){
    count=count+10
}
counter.textContent=count
})

button3.addEventListener("click",function(){
    count=0
    counter.textContent=count
    })


 


gameContainer.appendChild(button1);
gameContainer.appendChild(button2);
gameContainer.appendChild(button3);
gameContainer.appendChild(counter);
}


function startNumberGuessGame() {
    const gameContainer =document.getElementById("game-container");
const randomNumber=Math.floor(Math.random()*100)+1;
let message= document.createElement("p");
message.textContent=randomNumber;
let input=document.createElement("input");
input.type="number";
input.placeholder="好きな数字を入力してください(1-100)";
textContent=""
gameContainer.appendChild(message)
gameContainer.appendChild(input)

let button4=document.createElement("button")
button4.textContent="確認"
button4.addEventListener("click",function(){
    const val =parseInt(input.value);
if(randomNumber==val){
message.textContent="正解"
    } else if(randomNumber>=val){
message.textContent="小さい"
    }
else{
    message.textContent="大きい"
}
count++

countDisplay.textContent=`試行回数： ${count}`


})



gameContainer.appendChild(button4)


let count = 0
const countDisplay=document.createElement("p")
countDisplay.textContent=`試行回数： ${count}`
gameContainer.appendChild(countDisplay)

}






