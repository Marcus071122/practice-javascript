function errorInput(){

    const month = document.getElementById("month").value;
    const day =document.getElementById("day").value
if(month <1 ||month>12){
    alert("適切な値ではありません");
    return

}
    console.log("month",month,"day:",day)
}

constmonthSelect = document.getElementById("month");
monthSelectList();
function monthSelectList(){
    for (let i=1;i<=12;i++){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i + "月";
        monthSelect.appendChild(option);
    }
    
}






//valueはそのタグの値を示す
// console.log(document.getElementById("month")はタグを確認するだけ
/*
javascriptのプログラムとHTMLファイルはどこで対応しているか
タグについているIDで紐つく
タグの中にある付加情報のことを属性という
*/