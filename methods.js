var Map = require('./map')

function Methods (){
  this.liveCoordinates = [],
  this.findLiveCells = function(array){
    for (var i = 0; i < array.length; i++) {
      var row = array[i]
      for (var j = 0; j < row.length; j++) {
        if(row[j] === 1){
          this.liveCoordinates.push([i, j])
        }
      }
    }
    // console.log("liveCoordinates", this.liveCoordinates);
    return this.liveCoordinates
  },

  this.countEachLiveNeighbors = function(coords, map){
    var neighborCounter = 0;
    var row = coords[0]
    var column = coords[1]
    if (row > 0 && column > 0 && map[row-1][column-1] === 1){
      neighborCounter ++
    }
    if (row > 0 && map[row-1][column] === 1){
      neighborCounter ++
    }
    if (row > 0 && map[row-1][column+1] === 1){
      neighborCounter ++
    }

    if (column > 0 && map[row][column-1] === 1){
      neighborCounter ++
    }
    if (map[row][column+1] === 1){
      neighborCounter ++
    }

    if (map.length - 1 != row && column > 0 && map[row+1][column-1] === 1){
      neighborCounter ++
    }
    if (map.length - 1 != row && map[row+1][column] === 1){
      neighborCounter ++
    }
    if (map.length - 1 != row && map[row+1][column+1] === 1){
      neighborCounter ++
    }
    return neighborCounter
  },
  this.liveNeighborsCount = [],
  this.countAllLiveNeighbors = function(coordArray, game){
    for (var i = 0; i < coordArray.length; i++) {
      var coords = coordArray[i]
      var liveCount = this.countEachLiveNeighbors(coords, game)
      this.liveNeighborsCount.push(liveCount)
    }
    // console.log("liveNeighborsCount", this.liveNeighborsCount)
  }
}


module.exports = Methods
