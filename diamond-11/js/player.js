class Player{
    constructor(x,y){
         this.x = x;
         this.y = y;
         this.player  = createSprite(x,y,25,25);
         this.player.shapeColor = "deeppink";
         playerGroup.add(this.player);
         this.player.scale = 2.5;
         this.velocityX=3
         this.velocitys = random(-3,3) //[2, 3, -2, -3];
        // this.selector = Math.round(random(this.velocitys));

        // this.player.velocityX = this.selector;      
         
    }

    animationCorrection(){
         if(this.player.velocityX > 0){
              this.player.changeAnimation("right")
         }

         else{
              this.player.changeAnimation("left")
         }
    }

  
    moveUp(){
          this.player.velocityY -= 3
          console.log(this.player.velocityY)
     
    }

   playerMove(){
     if (keyIsDown(UP_ARROW)) {
          this.player.position.y -= 5
     }
     if (keyIsDown(DOWN_ARROW)) {
          this.player.position.y += 5
     }
     if (keyIsDown(RIGHT_ARROW)) {
          this.player.position.x += 5
     }
     if (keyIsDown(LEFT_ARROW)) {
          this.player.position.x -= 5
     }
   }

   
}

// vc não tem um array de player então o codigo não coonsegue identficar

// const array = (
//  "velocity"
//  )
// for(var i = 0;i<player.length; i++ ){
//  player.velocityY = 5;
//  player.velocityX = 5;
// }
