var Map = require('./map')
var Methods = require('./methods')

function Game(){
  this.dyingCells = [],
  this.survivingCells = [],
  this.newLivingCells = [],
  this.bornCells = [],
  // this.newMap = new Map,

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
  },

  this.markBornCells = function(array, methods){
      for (var i = 0; i < array.length; i++) {
        var row = array[i]
        for (var j = 0; j < row.length; j++) {

          if(row[j] === 0 && methods.countEachLiveNeighbors([i,j], array) === 3){
            this.bornCells.push([i, j])
          }
        }
      }
      // console.log("born cells", this.bornCells);
      return this.bornCells
  }
  this.bringToLife = function(map, bornCells){
    console.log("born cells: ", bornCells);
    for (var i = 0; i < map.length; i++) {
      var row = i
      for (var j = 0; j < bornCells.length; j++) {
        if(bornCells[j][0] === row){
        	var column = bornCells[j][1]
        	map[row][column] = 1
        }
      }
    }
    return map
  }
  // this.killDying = function(map, dyingCells){
  //   console.log("dying cells: ", dyingCells);
  // }
}


module.exports = Game

// Any live cell with fewer than two live neighbours dies, as if caused by under-population.

// Any live cell with two or three live neighbours lives on to the next generation.

// Any live cell with more than three live neighbours dies, as if by over-population.

// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
