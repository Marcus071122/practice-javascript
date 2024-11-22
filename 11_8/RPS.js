function RPS(){
    const choices = ["gu","choki","pa"];
    let handImage = ""
    let select = document.createElement("select");
    select.id = "choices"
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        option.id = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let choiceButton = document.createElement("button")
    choiceButton.textContent = "決定"

    gameContainer.appendChild(choiceButton);

    let image = document.createElement("img");
        image.alt = "Choice";
        image.style.width = "500px";
        image.style.height = "400px";

        let enemyImage = document.createElement("img");
        enemyImage.alt = "Choice";
        enemyImage.style.width = "500px";
        enemyImage.style.height = "400px";

    choiceButton.addEventListener("click",function(){
        

        switch(select.value){
            case "gu":
                image.src = "https://i.ytimg.com/vi/aGx6-0dXyXk/maxresdefault.jpg";
                break;
            case "choki":
                image.src = "https://stat.ameba.jp/user_images/20181212/23/bluelittlemoon-vagetable/d2/ea/j/o1080081014319857174.jpg";
                break;
            case "pa":
                image.src = "https://img.cdn.nimg.jp/s/nicovideo/thumbnails/40881712/40881712.78210005.original/r1280x720l?key=f2abb83e56ae154d97e1af9bd68f81437d34669c6429053c42bc357019de7c8d";
                break;
            default:
                break;
        }
        let enemyHand = choices[Math.floor(Math.random() * choices.length)];
        

        switch(enemyHand){
            case "gu":
                enemyImage.src = "https://i.ytimg.com/vi/aGx6-0dXyXk/maxresdefault.jpg";
                break;
            case "choki":
                enemyImage.src = "https://stat.ameba.jp/user_images/20181212/23/bluelittlemoon-vagetable/d2/ea/j/o1080081014319857174.jpg";
                break;
            case "pa":
                enemyImage.src = "https://img.cdn.nimg.jp/s/nicovideo/thumbnails/40881712/40881712.78210005.original/r1280x720l?key=f2abb83e56ae154d97e1af9bd68f81437d34669c6429053c42bc357019de7c8d";
                break;
            default:
                break;
        }
    })


    
    gameContainer.appendChild(image);
    gameContainer.appendChild(enemyImage);
    //forEach 配列などの複数のデータがあるものに使える。全部やる関数。
    //配列.forEach(配列の中身=>{命令})
}