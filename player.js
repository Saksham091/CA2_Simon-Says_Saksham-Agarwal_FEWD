const button = document.getElementById("play");
const user = document.getElementById("user");

play.onclick=()=>{
    localStorage.setItem("Player Name",user.value)
    if(user.value==""){
        alert("Pls Fill you Name")
    }
    else{
        window.location.href="game.html";
    }
}
