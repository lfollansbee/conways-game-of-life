var Map = require('./map')
var Methods = require('./methods')

function Game(){
  this.dyingCells = [],
  this.survivingCells = []
  this.sortLiveCells = function(liveCoordinates, liveNeighborsCount){
    for (var i = 0; i < liveNeighborsCount.length; i++) {
      if(liveNeighborsCount[i] < 2 || liveNeighborsCount[i] > 3){
        this.dyingCells.push(liveCoordinates[i])
      }else{
        this.survivingCells.push(liveCoordinates[i])
      }
    }
    console.log("Cells to die", this.dyingCells);
    console.log("Cells to survive", this.survivingCells);
  }
}


module.exports = Game

// Any live cell with fewer than two live neighbours dies, as if caused by under-population.

// Any live cell with two or three live neighbours lives on to the next generation.

// Any live cell with more than three live neighbours dies, as if by over-population.

// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
