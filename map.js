function Map (){
  this.game = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
  ]
}

Map.prototype.checkForLive = function(){
  var counter = 0;
  for (var i = 0; i < this.game.length; i++) {
    var row = this.game[i]
    for (var j = 0; j < row.length; j++) {
      if(row[j] != 0){
        counter ++
      }
    }
  }
  return counter
}

module.exports = Map
