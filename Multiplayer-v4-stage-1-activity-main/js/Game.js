class Game {
  constructor() {}

  getState(){
    var getStateRef = database.ref("gameState")
    getStateRef.on("value", function (data) {
      gameState = data.val()
    })
  }

  update(){
    database.ref("/").update({
      gameState:state
    })
  }

  handleElements(){
    form.hide()
    from.titleImage.class("gameTitleAfterEffect")
  }

  start(){
    form = new Form()
    form.display()
    player = new Player()
    car1 = createSprite(width/2-500, height-100)
    car1.addImage(car2_img)
    car2 = createSprite(width/2-500, height-100)
    car2.addImage(car2_img)
    cars=[car1,car2]
  }

  play(){
    this.handleElements()
    drawSprites()
  }

  
}
