var Map = require('./map')

function Methods (){
  this.liveCoordinates = [],
  this.checkLiveNeighbors = function(array){
    for (var i = 0; i < array.length; i++) {
      var row = array[i]
      for (var j = 0; j < row.length; j++) {
        if(row[j] === 1){
          this.liveCoordinates.push([i, j])
        }
      }
    }
    console.log(this.liveCoordinates);
    return this.liveCoordinates
  },

  this.countLiveNeighborsOne = function(coords, game){
    var neighborCounter = 0;
    var row = coords[0]
    var column = coords[1]
    if (row > 0 && column > 0 && game[row-1][column-1] === 1){
      neighborCounter ++
    }
    if (row > 0 && game[row-1][column] === 1){
      neighborCounter ++
    }
    if (row > 0 && game[row-1][column+1] === 1){
      neighborCounter ++
    }

    if (column > 0 && game[row][column-1] === 1){
      neighborCounter ++
    }
    if (game[row][column+1] === 1){
      neighborCounter ++
    }

    if (column > 0 && game[row+1][column-1] === 1){
      neighborCounter ++
    }
    if (game[row+1][column] === 1){
      neighborCounter ++
    }
    if (game[row+1][column+1] === 1){
      neighborCounter ++
    }
    console.log(neighborCounter);
    return neighborCounter
  }
  // this.checkLiveNeighborsAll() = function(){
  //   var liveNeighbors = []
  //   for (var i = 0; i < coordArray.length; i++) {
  //     var coords = coordArray[i]
  //   }
  // }
}


module.exports = Methods
