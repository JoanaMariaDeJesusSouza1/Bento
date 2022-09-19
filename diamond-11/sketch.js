var menu, game, painel, enemy, enemyGroup;
var players = [];
var player;

var gameState = 0;
var title, playButton, input;
var button1, button2, button3, button4;
var enemys = [];

function preload() {
     bg = loadImage("./assets/bg_provisorio.jpg")

}

function setup() {
     createCanvas(400, 600)

     //criação do menu
     title = createButton("Diamond 1");
     playButton = createButton("play");
     input = createInput("").attribute("placeholder", "Enter your name");


     //botões do painel
     button1 = createButton("PC1");
     button2 = createButton("PC2");
     button3 = createButton("PC3");
     button4 = createButton("PC4");

     enemyGroup = new Group();
     playerGroup = new Group();


     // tambem não deu certo
     // enemy = new Enemy()
     


}

function draw() {
     background(0)

     //enemy.moveUp()

     if (gameState === 0) {
          menu();

     }

     if (gameState === 1) {
          play();

          title.hide();
          playButton.hide();
          input.hide();

          //machine();
          for (let i = 0; i < players.length; i++) {
               if (keyDown("up")) {
                    player.velocityY -= 10;
               }

          }

     }

     if (gameState === 2) {
          end();
     }



}

function menu() {
     playButton.class("playButton");
     title.class("title");
     input.class("menuInput");

     playButton.position(width / 2 - 30, height / 2 - 70);
     title.position(width / 2 - 170, height / 2 - 250);
     input.position(width / 2 - 90, height / 2 - 100);


     button1.hide();
     button2.hide();
     button3.hide();
     button4.hide();

     playButton.mouseClicked(() => {
          gameState = 1;
     })
}

function play() {
     //coloque aqui o que vai rolar no gameplay
     image(this.bg, 0, 0, width, height + 50)

     painel();
     if (enemy != undefined) {
          //enemy.moveUp();
          
          enemy.enemyMove();
     }
     

     drawSprites();
}

function end() {
     //coloque aqui tudo sobre o fim de jogo

}

function painel() {

     button1.position(100, 530);
     button2.position(175, 530);
     button3.position(250, 530);
     button4.position(325, 530);
     button1.show();
     button2.show();
     button3.show();
     button4.show();
     fill("blue")
     rect(0, 500, 410, 150)


     button1.mouseClicked(() => {
          // enemy = createSprite(120, 500, 25, 25);
          // enemy.shapeColor = "deeppink";
          // enemys.push(enemy)
          enemy = new Enemy(120,500)

     })
     button2.mouseClicked(() => {
          // enemy = createSprite(200, 500, 25, 25);
          // enemy.shapeColor = "deeppink";
          // enemys.push(enemy)


     })
     button3.mouseClicked(() => {
          // enemy = createSprite(270, 500, 25, 25);
          // enemy.shapeColor = "deeppink";
          // enemys.push(enemy)


     })
     button4.mouseClicked(() => {
          // enemy = createSprite(340, 500, 25, 25);
          // enemy.shapeColor = "deeppink";
          // enemys.push(enemy)


     })
}


function machine() {
     for (let index = 0; index < enemys.length; index++) {
          showEnemy(enemys[index]);
          console.log(enemys[index])
     }
}

function showEnemy(character) {

     if (character) {
          character.y -= 5
     }
}
