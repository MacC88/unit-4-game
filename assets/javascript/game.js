var winningNumber = Math.floor((Math.random() * 146) + 30 );
var wins = 0;
var losses = 0;
var crystal1 = Math.floor((Math.random() * 9) + 1);
var crystal2 = Math.floor((Math.random() * 21) + 1);
var crystal3 = Math.floor((Math.random() * 16) + 1);
var crystal4 = Math.floor((Math.random() * 29) + 1);
var scoreBoard = 0;

{

$("#crystal1").on("click", function(){
    scoreBoard += crystal1;

    if (scoreBoard === winningNumber){
        wins++;   
    }

    if (scoreBoard > winningNumber){
        losses++;  
    }
    document.getElementById('scoreBoard').innerHTML = scoreBoard;
    document.getElementById('wins').innerHTML = ('Win = ' + wins);
    document.getElementById('losses').innerHTML = ('Losses = ' + losses);
});
$('#crystal2').on('click', function(){ 
    scoreBoard += crystal2;

    if (scoreBoard === winningNumber){
        wins++;   
    }

    if (scoreBoard > winningNumber){
        losses++;  
    }
    document.getElementById('scoreBoard').innerHTML = scoreBoard;
    document.getElementById('wins').innerHTML = ('Win = ' + wins);
    document.getElementById('losses').innerHTML = ('Losses = ' + losses);
});

$('#crystal3').on('click', function(){ 
    scoreBoard += crystal3;
    
    if (scoreBoard === winningNumber){
        wins++;   
    }

    if (scoreBoard > winningNumber){
        losses++;  
    }
    document.getElementById('scoreBoard').innerHTML = scoreBoard;
    document.getElementById('wins').innerHTML = ('Win = ' + wins);
    document.getElementById('losses').innerHTML = ('Losses = ' + losses);
});

$('#crystal4').on('click', function(){ 
    scoreBoard += crystal4;

    if (scoreBoard === winningNumber){
        wins++;   
    }

    if (scoreBoard > winningNumber){
        losses++;  
    }
    document.getElementById('scoreBoard').innerHTML = scoreBoard;
    document.getElementById('wins').innerHTML = ('Win = ' + wins);
    document.getElementById('losses').innerHTML = ('Losses = ' + losses);
});


   
document.getElementById('wins').innerHTML = ('Win = ' + wins);
document.getElementById('losses').innerHTML = ('Losses = ' + losses);
document.getElementById('scoreBoard').innerHTML = scoreBoard;
document.getElementById('winningNumber').innerHTML = winningNumber;

}

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4); 