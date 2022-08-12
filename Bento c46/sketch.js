var aviao,aviaoImg, bala,balaImg,fundo,fundoImg,moeda,moedaImg,inimigo,inimigoImg, fuel,fuelImg;
function preload() {
  aviaoImg =  loadImage("aviao.png");
  balaImg = loadImage("bala.jpg");
  moedaImg =  loadImage("moeda.jpg");
  inimigoImg = loadImage("inimigo.png");
  fundoImg =  loadImage("fundo2.jpg");
  fuelImg = loadImage("fuel.png");
  }
function setup(){
  createCanvas(800,1000)

  
  aviao = createSprite(400,800,40,40);
  aviao.addImage("aviao",aviaoImg);
  aviao.scale = 0.3

  //fundo =  createSprite(400,100);
  fundo =  createSprite(width/2,height/2);
  fundo.addImage("fundo",fundoImg)
  fundo.scale =  2;
  fundo.depth=aviao.depth-1;

}

function draw() {
background("blue")
image(fundoImg,0,0,800,1000)

fundo.velocityY =  2;

if(fundo.y>=650){
fundo.y = 200;
}


drawSprites();
}

