var score = 0
var i = 1
var ans = 1
var audio1 = new Audio('soundCorrect.wav');
var audio2 = new Audio('soundWrong.wav');
function correct(){
document.getElementById("B1").style.visibility="visible";
}
function wrong(){
document.getElementById("B2").style.visibility="visible";
}
function hideCorrect(){
document.getElementById("B1").style.visibility="hidden";
}
function hideWrong(){
document.getElementById("B2").style.visibility="hidden";
}
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        audio1.play();
        correct();
        score++
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
	ans++; 
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="Who voiced Dory in the movies Finding Nemo and Finding Dori? \n\na) Kristen Bell \nb) Ellen Degeneres \nc) Jennifer Lawrence \nd) Demi Lovato";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In the movie The Wizard of Oz, what does the tin man want from the wizard? \n\na) A brain \nb) Courage \nc) A home \nd) A heart";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many Star Wars films are there? \n\na) 10 \nb) 12 \nc) 7 \nd) 8";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which actor plays Peeta in the Hunger Games movies? \n\na) Josh Hutcherson \nb) Liam Hemsworth \nc) Woody Harrelson \nd) Donald Sutherland";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What does the evil queen give Snow White that causes her to fall into a deep sleep? \n\na) A poisoned plum \nb) A poisoned rose \nc) A poisoned apple \nd) A spell";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who is the main villain in the movie The Avengers? \n\na) Ronan \nb) Loki \nc) Thanos \nd) Malekith";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the name of Bella's acappella group in the Pitch Perfect movies? \n\na) The Treblemakers \nb) The High Notes \nc) The Barden Bellas \nd) The Tonehangers";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
    else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What year was the first Pirates of the Caribbean movie released? \n\na) 2005 \nb) 2002 \nc) 2006 \nd) 2003";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
    else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In what city does batman live? \n\na) Gotham City \nb) Central City \nc) Keystone City \nd) Metropolis";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
    else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In the movie The Breakfast Club, how many main characters are there? \n\na) 6 \nb) 5 \nc) 2 \nd) 4";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")
    if (score>=8){ document.getElementById("C1").style.visibility="visible";
    }
    else { document.getElementById("C2").style.visibility="visible";
    }
    }
	i++; 
}