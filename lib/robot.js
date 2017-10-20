'use strict';

const allDirections = ['north', 'east', 'south', 'west']

class Robot {

  constructor() {
    this.bearing = ""
    this.coordinates = []
  }

  orient(direction) {
    if(allDirections.includes(direction.toLowerCase())) {
      this.bearing = direction
    }else{
      throw new Error("Invalid Robot Bearing")
    }
  }

  generateNewI(change) {
    if (this.bearing.length > 0) {
      let i = allDirections.findIndex(d => (d === this.bearing))
      let newI = i + change
      if(newI<0) {
        newI = 3
      }else if(newI > 3) {
        newI = 0
      }
      this.bearing = allDirections[newI]
    }
    console.log("Changed Direction.")
    console.log("coordinates: ", this.coordinates[0], ', ', this.coordinates[1])
    console.log("direction: ", this.bearing)
  }

  turnRight() {
    this.generateNewI(1)
  }

  turnLeft() {
    this.generateNewI(-1)
  }

  at(x, y) {
    this.coordinates = [x, y]
  }

  advance() {
    switch(this.bearing) {
      case "north":
        this.coordinates[1]++
        break
      case "east":
        this.coordinates[0]++
        break
      case "south":
        this.coordinates[1]--
        break
      case "west":
        this.coordinates[0]--
        break
    }
    console.log("Advanced one space.")
    console.log("coordinates: ", this.coordinates[0], ', ', this.coordinates[1])
    console.log("direction: ", this.bearing)
  }

  instructions(str) {
    const instructionArr = []
    str.split("").forEach(function (char) {
      switch(char) {
        case "L":
          instructionArr.push("turnLeft")
          break
        case "R":
          instructionArr.push("turnRight")
          break
        case "A":
          instructionArr.push("advance")
          break
      }
    })
    return instructionArr
  }

  place(params) {
    if(params.x !== undefined){
      this.coordinates[0] = params.x
    }
    if(params.y !== undefined) {
      this.coordinates[1] = params.y
    }
    if(params.direction !== undefined) {
      this.bearing = params.direction
    }
  }

  evaluate(letters) {
    const instruct = this.instructions(letters)
    instruct.forEach(fxnString => {
      console.log(fxnString)
      this[fxnString]()
    })
  }

}
