prompt("What's your name ? ");
prompt("What's her name ? ");

let loveScore = Math.random() * 100 + 1;
loveScore = Math.floor(loveScore);

if(loveScore >= 80 ){
    alert("You love each other like Romiyo Juliet, Your love score is " + loveScore);

}
else if(loveScore >= 60){
    alert("You love each other like Sirin Forhad, Your love score is " + loveScore);

}
else if (loveScore >= 40){
    alert("You love each other very much, your love score is " + loveScore);

}else{
    alert("Your partner loves you so much, Your love score is " + loveScore);
}
