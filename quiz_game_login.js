function addUser(){
    player1Name=document.getElementById("player1Input").value;
    player2Name=document.getElementById("player2Input").value;

   localStorage.setItem("Player1",player1Name);
   localStorage.setItem("Player2",player2Name);
   
    window.location="quiz_game_page.html";
}