const button = document.getElementById("play");
const user = document.getElementById("user");

play.onclick=()=>{
    localStorage.setItem("Player Name",user.value)
    window.location.href="game.html";
}