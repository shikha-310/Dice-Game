document.getElementById("roll").addEventListener( "click", function(){
    music();
    let randomNum1=Math.floor(Math.random()*6)+1;
    let randomNum2=Math.floor(Math.random()*6)+1;
    document.getElementById("p1").src=`image${randomNum1}.png`
    document.getElementById("p2").src=`image${randomNum2}.png`
    

    if (randomNum1>randomNum2){
        document.querySelector("h1").textContent = "🏆Player 1 Wins🎉";
    }
    else if (randomNum1<randomNum2){
        document.querySelector("h1").textContent = "🎉Player 2 Wins🏆";
    }
    else{
        document.querySelector("h1").textContent = "‼️It's a Draw‼️";
    }
})

function music(){
    let audio= new Audio("diceaudio.mp3");
    // audio.playbackRate=2;
    audio.play()
}