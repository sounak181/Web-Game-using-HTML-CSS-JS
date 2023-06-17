cross = true;
highestScore=0;
score=0;
key=0;
audio = new Audio('onlymp3.to - RARA RARA ___BGM___Ringtone-D_aE82hqFTM-256k-1654304945480.mp3');
audiogo = new Audio('onlymp3.to - SUPER MARIO - game over - sound effect-BVQ_JHmvhCM-256k-1654305996798.mp3');
setTimeout(() => {
    audio.play()
}, 2000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode== 38) {
        player = document.querySelector('.player');
        player.classList.add('animateplayer');
        setTimeout(() => {
            player.classList.remove('animateplayer')
        }, 700);
    }
    if (e.keyCode == 39) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 112 + "px";
    }
    if (e.keyCode == 37) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (playerX - 112) + "px";
    }
}

setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
   
    dx = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    //console.log("dis is ", offsetX, offsetY)
    
    if (offsetX < 90 && offsetY < 30) {
        gameOver.innerHTML = "Game Over!!"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            
            audio.pause();
        }, 500);
        
        
    }
    else if (offsetX < 90 && cross) {
        score += 1;
        highscore(score);
        scoreCont.innerHTML = "Your Score: " + score;
        cross = false;
        

setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
            console.log('score', score)
        }, 500);

    }

}, 10);

function highscore(ab){
    
    temp=localStorage.getItem("score")
    temp=parseInt(temp);
    if (ab>temp)

      {
        temp=ab;
        ab=ab.toString();
        console.log(ab)
        localStorage.setItem("score", ab)
      }
    console.log("s is",temp)
    
    highestScoreCont.innerHTML = "Highest Score: " + temp;
}
function updateScore(score) {
    
    scoreCont.innerHTML = "Your Score: " + score;
    localStorage.setItem("highestScore", score);
   
    
}

        
        
      
        
