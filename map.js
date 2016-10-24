function Map (){
  this.map = [
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
  for (var i = 0; i < this.map.length; i++) {
    var row = this.map[i]
    for (var j = 0; j < row.length; j++) {
      if(row[j] != 0){
        counter ++
      }
    }
  }
  return counter
}

module.exports = Map
