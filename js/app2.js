class Game {
	constructor() {
		this.numRows = 15
		this.numCols = 15
		this.pasture = this.makePasture()
		this.addFence()
		this.addGates()
		this.addChickapigs()
		this.addHayBales()
	}

	// Getter

	// Method
	makePasture() {
		const squares = []
		for(let r = 0; r <= this.numRows; r++) {
			squares.push([])
			for(let c = 0; c <= this.numCols; c++) {
				let square = new Square(r,c)
				squares[r].push(square)
			}
		}
		return squares
	}

	addFence(){
		const fences = [
			[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 9], [0,10], [0,11], [0, 12], [0, 13], [0, 14], [0, 15],
			[1, 0], [1, 15],
			[2, 0], [2,15],		
			[3, 0], [3,15],									
			[4, 0], [4,15],																							
			[5, 0], [5,15],												
			[6, 0], [6,15],												
			[9, 0], [9,15],																						
			[10, 0], [10,15],												
			[11, 0], [11,15],												
			[12, 0], [12,15],												
			[13, 0], [13,15],												
			[14, 0], [14,15],												
			[15, 0], [15, 1], [15, 2], [15, 3], [15, 4], [15, 5], [15, 6], [15, 9], [15, 10], [15, 11], [15, 12], [15, 13], [15, 14], [15, 15]													
		]	
			// this.addTokensToPasture(fences, 'f')
			fences.forEach(loc => {
			let fence = new Fence(loc[0], loc[1])
			this.addToPasture(fence)
		})
	}	

	addGates(){
		const greenGates = []
		const yellowGates = []
		const redGates = []
		const blueGates = []

		const greenGatesLoc = [
			[15, 7],
			[15, 8]
		]

		const yellowGatesLoc = [
			[7, 0],
			[8, 0]
		]

		const redGatesLoc = [
			[0, 7],
			[0, 8]
		]

		const blueGatesLoc = [
			[7, 15],
			[8, 15]
		]

		greenGatesLoc.forEach(loc => {
			let gate = new Gate(loc[0], loc[1], 'green', 'gG')
			this.addToPasture(gate)
			greenGates.push(gate)
		})
		
		yellowGatesLoc.forEach(loc => {
			let gate = new Gate(loc[0], loc[1], 'yellow', 'yG')
			this.addToPasture(gate)
			yellowGates.push(gate)
		})
		
		redGatesLoc.forEach(loc => {
			let gate = new Gate(loc[0], loc[1], 'red', 'rG')
			this.addToPasture(gate)
			redGates.push(gate)
		})
		
		blueGatesLoc.forEach(loc => {
			let gate = new Gate(loc[0], loc[1], 'blue', 'bG')
			this.addToPasture(gate)
			blueGates.push(gate)
		})				
	}

	addChickapigs(){
		const greenChickapigs = []
		const yellowChickapigs = []
		const redChickapigs = []
		const blueChickapigs = []

		const greenChickapigsStartPos = [
			[1, 2],
			[1, 4],
			[1, 6],
			[1,	9],
			[1, 11],
			[1, 13]
		]

		const yellowChickapigsStartPos = [
			[2, 14],
			[4, 14],
			[6, 14],
			[9,	14],
			[11, 14],
			[13, 14]
		]

		const redChickapigsStartPos = [
			[14, 2],
			[14, 4],
			[14, 6],
			[14, 9],
			[14, 11],
			[14, 13]
		]

		const blueChickapigsStartPos = [
			[2, 1],
			[4, 1],
			[6, 1],
			[9,	1],
			[11, 1],
			[13, 1]
		]

		greenChickapigsStartPos.forEach(loc => {
			let pig = new Chickapig(loc[0], loc[1], 'green', 'gP')
			this.addToPasture(pig)
			greenChickapigs.push(pig)
		})

		yellowChickapigsStartPos.forEach(loc => {
			let pig = new Chickapig(loc[0], loc[1], 'yellow', 'yP')
			this.addToPasture(pig)
			yellowChickapigs.push(pig)
		})

		redChickapigsStartPos.forEach(loc => {
			let pig = new Chickapig(loc[0], loc[1], 'yellow', 'rP')
			this.addToPasture(pig)
			redChickapigs.push(pig)
		})

		blueChickapigsStartPos.forEach(loc => {
			let pig = new Chickapig(loc[0], loc[1], 'blue', 'bP')
			this.addToPasture(pig)
			blueChickapigs.push(pig)
		})
	}

	addHayBales(){
		const greenHayBales = []
		const yellowHayBales = []
		const redHayBales = []
		const blueHayBales = []

		const greenHayBalesStartPos = [
			[2, 6],
			[2, 9],
			[11, 6],
			[11, 9]	
		]

		const yellowHayBalesStartPos = [
			[6, 4],
			[6, 13],
			[9, 4],
			[9, 13]
		]

		const redHayBalesStartPos = [						
			[4, 6],
			[4 ,9],				
			[13, 6],
			[13, 9]						
		]

		const blueHayBalesStartPos = [
			[6, 2],
			[6, 11],
			[9, 2],
			[9, 11]
		]

		greenHayBalesStartPos.forEach(loc => {
			let hay = new HayBale(loc[0], loc[1], 'green', 'gH')
			this.addToPasture(hay)
			greenHayBales.push(hay)
		})

		yellowHayBalesStartPos.forEach(loc => {
			let hay = new HayBale(loc[0], loc[1], 'yellow', 'yH')
			this.addToPasture(hay)
			yellowHayBales.push(hay)
		})

		redHayBalesStartPos.forEach(loc => {
			let hay = new HayBale(loc[0], loc[1], 'yellow', 'rH')
			this.addToPasture(hay)
			redHayBales.push(hay)
		})

		blueHayBalesStartPos.forEach(loc => {
			let hay = new HayBale(loc[0], loc[1], 'blue', 'bH')
			this.addToPasture(hay)
			blueHayBales.push(hay)
		})
	}

	addToPasture(token){
		this.pasture[token.row][token.col].addOccupant(token)
	}

	removeFromPasture(row, col){
		this.pasture[row][col].removeOccupant()
	}

	addTokensToPasture(tokens, tokenType){
		for(let r = 0; r <= tokens.length - 1; r++){
  			for(let c = 0; c<= tokens[r].length - 1 ; c++){
  				this.pasture[r][tokens[r][c]].addOccupant(tokenType)
  			}	
  		}
	}	

	moveDown(token){
		let roomToMove = true
		let r = token.row
		let c = token.col
		let moves = 0

		let rowOffset = 1
		debugger
		while(roomToMove){
			if(this.pasture[r + rowOffset][c].occupied === false){
				moves++
				rowOffset++
				if(token.travelLimited){
					roomToMove = false
				}
			} else {
				roomToMove = false
			}
		}
		console.log('num of moves', moves)
		console.log(token)

		
		token.updateLocation(r + moves, c)
		this.addToPasture(token)
		this.removeFromPasture(r, c)
		this.print()
	}	

	moveUp(token){
		let roomToMove = true
		let r = token.row
		let c = token.col
		let moves = 0

		let rowOffset = 1

		while(roomToMove){
			if(this.pasture[r - rowOffset][c].occupied === false){
				moves++
				rowOffset++
				if(token.travelLimited){
					roomToMove = false
				}
			} else {
				roomToMove = false
			}
		}
		console.log('num of moves', moves)
		console.log(token)

		
		token.updateLocation(r - moves, c)
		this.addToPasture(token)
		this.removeFromPasture(r, c)
		this.print()
	}		

	moveLeft(token){
		let roomToMove = true
		let r = token.row
		let c = token.col
		let moves = 0

		let colOffset = 1

		while(roomToMove){
			if(this.pasture[r][c - colOffset].occupied === false){
				moves++
				colOffset++
				if(token.travelLimited){
					roomToMove = false
				}
			} else {
				roomToMove = false
			}
		}
		console.log('num of moves', moves)
		console.log(token)

		
		token.updateLocation(r, c - moves)
		this.addToPasture(token)
		this.removeFromPasture(r, c)
		this.print()
	}	

	moveRight(token){
		let roomToMove = true
		let r = token.row
		let c = token.col
		let moves = 0

		let colOffset = 1

		while(roomToMove){
			if(this.pasture[r][c + colOffset].occupied === false){
				moves++
				colOffset++
				if(token.travelLimited){
					roomToMove = false
				}
			} else {
				roomToMove = false
			}
		}
		console.log('num of moves', moves)
		console.log(token)

		
		token.updateLocation(r, c + moves)
		this.addToPasture(token)
		this.removeFromPasture(r, c)
		this.print()
	}		
	// todo: change print to draw
	// todo: change to jQuery
	print(){
		console.log(this.pasture)

		//const gridGameboard = document.getElementById("game-board");

		//gridGameboard.innerHTML = ''
		$('#game-board').html('')

  		for(let r = 0; r <= this.numRows; r++){
  			for(let c = 0; c<= this.numCols; c++){

	  			let $gridCell = $(`<div class = "grid-cell"></div>`)
	  			if(this.pasture[r][c].occupied){
	  				$gridCell.append(`<div>${this.pasture[r][c].occupant.debugId}</div>`)
	  			} 

	  			$('#game-board').append($gridCell)
  			}
		}	
	}
}


class Square {
	constructor(row, col){
		this.row = row
		this.col = col
		this.occupied = false
		this.occupant = null
	}

	addOccupant(token){
		this.occupant = token
		this.occupied = true
	}

	removeOccupant(){
		this.occupant = null
		this.occupied = false
	}
}

class Token {
	constructor(row, col, travellimited, directionLimited, type, team, debugId) {
		this.row = row
		this.col = col
		this.travelLimited = travellimited
		this.directionLimited = directionLimited
		this.type = type
		this.team = team
		this.debugId = debugId
	}
	updateLocation(r, c){
		this.row = r
		this.col = c
	}
}	

class Chickapig extends Token{
	constructor(row, col, team, debugId){
		super(row, col, false, true, 'Chickapig', team, debugId)
	}

}

class Fence extends Token {
	constructor(row, col){
		super(row, col, true, true, 'Fence', null, 'f')
	}
}

class Gate extends Token {
	constructor(row, col, team, debugId){
		super(row, col, true, true, 'Gate', team, debugId)
	}
}

class HayBale extends Token {
	constructor(row, col, team, debugId){
		super(row, col, true, true, 'Hay', team, debugId)
	}
}

const board = new Game()
board.print()

