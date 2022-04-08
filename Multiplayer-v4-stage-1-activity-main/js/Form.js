class Form {
  constructor() {
    this.Input = createInput("").attribute("placeholder", "Enter your name!")
    this.play = createButton("Play")
    this.titleImage = createImg("assets/title.png", "game title")
    this.greeting = createElement("h2")
  }

  setElementPosition(){
    this.titleImage.position(120,100)
    this.Input.position(width/2-110, height/2+80)
    this.play.position(width/2-90, height/2+120)
    this.greeting.position(width/2-250, height/2 - 100)
  }

  hide(){
    this.Input.hide()
    this.play.hide()
    this.greeting.hide()
  }

  handleMousePressed(){
    this.play.mousePressed(()=>{
      this.Input.hide()
      this.play.hide()
      var message = `hello ${this.Input.value()}
      </br> wait for another player to join`
      this.greeting.html(message)
      playerCount+=1
      player.name = this.input.value()
      player.index = playerCount
      player.updateCount(playerCount)

    })
  }
  
  display(){
    this.setElementPosition()
    this.handleMousePressed()
  }

}
