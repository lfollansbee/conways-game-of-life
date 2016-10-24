var chai = require('chai')
var expect = chai.expect
var Map = require("../map")
var Methods = require("../methods")
var Game = require("../game")

describe("Map", function(){
  var map = new Map();
  it("should have a length of 6", function (){
    expect(map.map.length).to.equal(6)
  })
  it("should equal zero", function(){
    expect(map.checkForLive()).to.equal(0);
  })
})

describe("Live Map", function(){
  var map = new Map();
  var methods = new Methods();
  map.map = [
    [0,1,0,0,0,0],
    [0,0,1,0,0,0],
    [1,1,1,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
  ]
  methods.findLiveCells(map.map);
  methods.countAllLiveNeighbors(methods.liveCoordinates, map.map)

  it("should equal 4", function(){
    expect(map.checkForLive()).to.equal(5);
  })
  it("should have 5 live coordinates", function(){
    expect(methods.liveCoordinates.length).to.equal(5)
  })
  it("should check the first coordinate for live neighbors", function(){
    expect(methods.countEachLiveNeighbors(methods.liveCoordinates[0], map.map)).to.equal(1)
  })
  it("should return an array", function(){
    expect(methods.liveNeighborsCount).to.be.a('array')
    expect(methods.liveNeighborsCount.length).to.equal(5)
    expect(methods.liveNeighborsCount[0]).to.equal(1)
    expect(methods.liveNeighborsCount[4]).to.equal(2)
  })
})

describe("Game of Life", function(){
  var map = new Map();
  var methods = new Methods();
  var game = new Game();
  map.map = [
    [0,1,0,0,0,0],
    [0,0,1,0,0,0],
    [1,1,1,0,0,0],
    [0,0,1,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
  ]
  methods.findLiveCells(map.map);
  methods.countAllLiveNeighbors(methods.liveCoordinates, map.map)
  game.sortLiveCells(methods.liveCoordinates, methods.liveNeighborsCount)

  it("should add all live cells with less than 2 live neighbors to dying array", function(){
    expect(game.dyingCells).to.be.a('array')
    expect(game.dyingCells[0][0]).to.equal(0)
    expect(game.dyingCells[0][1]).to.equal(1)
    expect(game.dyingCells[1][0]).to.equal(2)
    expect(game.dyingCells[1][1]).to.equal(0)
  })
  it("should add all live cells with 2 or 3 live neighbors to a surviving array", function(){
    expect(game.survivingCells).to.be.a('array')
    expect(game.survivingCells[0][0]).to.equal(1)
    expect(game.survivingCells[0][1]).to.equal(2)
    expect(game.survivingCells[1][0]).to.equal(2)
    expect(game.survivingCells[1][1]).to.equal(2)
  })
  it("should add all live cells with more than 3 live neighbors to dying array", function(){
    expect(game.dyingCells[2][0]).to.equal(2)
    expect(game.dyingCells[2][1]).to.equal(1)
  })
})
