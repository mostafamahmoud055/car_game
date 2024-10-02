document.addEventListener("DOMContentLoaded", function () {
  road = document.querySelector("#road");
  hero = document.querySelector("#hero");
  villian = document.querySelector("#villian");
  score = document.querySelector("#score");
  function moveLeft() {
    heroLeft = parseInt(window.getComputedStyle(hero).getPropertyValue("left"));
    heroLeft -= 100;
    if (heroLeft>=0) {
        hero.style.left = heroLeft + "px";
    }
  }
  function moveRight() {
    heroRight = parseInt(
      window.getComputedStyle(hero).getPropertyValue("left")
    );
    heroRight += 100;
    if (heroRight< 300) {
        hero.style.left = heroRight + "px";
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
      moveRight();
    }
    if (e.key == "ArrowLeft") {
      moveLeft();
    }
  });
  document.addEventListener("animationiteration",function(){
    randomNum = Math.floor(Math.random() * 3) * 100
    villian.style.left = randomNum + "px"
  })
  myScore = 0;
  CheckGameOver = setInterval(function(){
    myScore++
     heroPosLeft = parseInt(
        window.getComputedStyle(hero).getPropertyValue("left")
      );
      villianPosLeft = parseInt(
        window.getComputedStyle(villian).getPropertyValue("left")
      );
      villianPosTop = parseInt(
        window.getComputedStyle(villian).getPropertyValue("top")
      );
      score.innerHTML = "SCORE: "+myScore
      if (heroPosLeft == villianPosLeft && villianPosTop>=300) {
        alert("Game Over")
        road.style.animation = 'none'
        villian.style.animation = 'none'
        villian.style.top = villianPosTop + "px"
        clearInterval(CheckGameOver)
      }
  },100)
});
