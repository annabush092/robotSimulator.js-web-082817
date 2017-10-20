window.onload = function() {

  showRobot()

  function showRobot() {
    const myRobot = new Robot()
    myRobot.place({x: 8, y: 4, direction: "south"})
    const html = `<h2>coordinates: ${myRobot.coordinates}</h2><h2>bearing: ${myRobot.bearing}</h2>`
    document.getElementById("robot").innerHTML = html
  }

}
