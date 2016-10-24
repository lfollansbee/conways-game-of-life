var chai = require('chai')
var expect = chai.expect
var Map = require("../map")
var Methods = require("../methods")
var Game = require("../game")

describe("Map", function(){
  var map = new Map();
  it("should have a length of 6", function (){
    expect(map.game.length).to.equal(6)
  })
  it("should equal zero", function(){
    expect(map.checkForLive()).to.equal(0);
  })
})

describe("Live Map", function(){
  var map = new Map();
  var methods = new Methods();
  map.game = [
    [0,1,0,0,0,0],
    [0,0,1,0,0,0],
    [1,1,1,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
  ]
  methods.findLiveCells(map.game);
  var liveNeighborsCount = methods.countAllLiveNeighbors(methods.liveCoordinates, map.game)

  it("should equal 4", function(){
    expect(map.checkForLive()).to.equal(5);
  })
  it("should have 5 live coordinates", function(){
    expect(methods.liveCoordinates.length).to.equal(5)
  })
  it("should check the first coordinate for live neighbors", function(){
    expect(methods.countEachLiveNeighbors(methods.liveCoordinates[0], map.game)).to.equal(1)
  })
  it("should return an array", function(){
    expect(liveNeighborsCount).to.be.a('array')
    expect(liveNeighborsCount.length).to.equal(5)
    expect(liveNeighborsCount[0]).to.equal(1)
    expect(liveNeighborsCount[4]).to.equal(2)
  })
})

// describe("Game of Life", function(){
//
// })
