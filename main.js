function changeColor(){

document.getElementById("text").style.color = "red";
}
//document.getElementById("text").style.color = "red";
//これは、ドキュメントの中の(text)というIDを持っている
//タグのスタイルの色を赤にしてください。
let count = 0;
function increaseCount(){
   
    count++;
    document.getElementById("counter").innerText = count;
    if(count>=5){
        count = 0;
    }

}
function decreaseCount(){
    count--;
    document.getElementById("counter").innerText = count;
}


