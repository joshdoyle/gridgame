class Game {
	constructor() {
		this.numRows = 15
		this.numCols = 15
		this.pasture = this.makePasture()
		// this.addFence()
		// this.addGates()
		this.addChickapigs()
		// this.addHayBales()
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
			[0, 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15], 	// row 0
			[0,15],												// row 1
			[0,15],												// row 2
			[0,15],												// row 3												
			[0,15],												// row 4
			[0,15],												// row 5
			[0,15],												// row 6
			[],													// row 7
			[],													// row 8
			[0,15],												// row 9
			[0,15],												// row 10
			[0,15],												// row 11
			[0,15],												// row 12
			[0,15],												// row 13
			[0,15],												// row 14
			[0, 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15]	// row 15												
		]

			this.addTokensToPasture(fences, 'f')
	}	

	addGates(){
		const greenGates = [
			[],		 	// row 0
			[],			// row 1
			[],			// row 2
			[],			// row 3												
			[],			// row 4
			[],			// row 5
			[],			// row 6
			[],			// row 7
			[],			// row 8
			[],			// row 9
			[],			// row 10
			[],			// row 11
			[],			// row 12
			[],			// row 13
			[],			// row 14
			[7,8]		// row 15			
		]

		const yellowGates = [
			[], 		// row 0
			[],			// row 1
			[],			// row 2
			[],			// row 3												
			[],			// row 4
			[],			// row 5
			[],			// row 6
			[0],		// row 7
			[0],		// row 8
			[],			// row 9
			[],			// row 10
			[],			// row 11
			[],			// row 12
			[],			// row 13
			[],			// row 14
			[]			// row 15	
		]

		const redGates = [
			[7, 8], 	// row 0
			[],			// row 1
			[],			// row 2
			[],			// row 3												
			[],			// row 4
			[],			// row 5
			[],			// row 6
			[],			// row 7
			[],			// row 8
			[],			// row 9
			[],			// row 10
			[],			// row 11
			[],			// row 12
			[],			// row 13
			[],			// row 14
			[]			// row 15			
		]

		const blueGates = [
			[], 		// row 0
			[],			// row 1
			[],			// row 2
			[],			// row 3												
			[],			// row 4
			[],			// row 5
			[],			// row 6
			[15],		// row 7
			[15],		// row 8
			[],			// row 9
			[],			// row 10
			[],			// row 11
			[],			// row 12
			[],			// row 13
			[],			// row 14
			[]			// row 15	
		]		
		this.addTokensToPasture(greenGates,'grG')
		this.addTokensToPasture(yellowGates,'yG')
		this.addTokensToPasture(redGates,'rG')
		this.addTokensToPasture(blueGates,'bG')						
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
		const greenHayBales = [
			[],					 		// row 0
			[],							// row 1
			[6, 9],						// row 2
			[],							// row 3												
			[],							// row 4
			[],							// row 5
			[],							// row 6
			[],							// row 7
			[],							// row 8
			[],							// row 9
			[],							// row 10
			[6,9],						// row 11
			[],							// row 12
			[],							// row 13
			[],							// row 14
			[]							// row 15	
		]

		const yellowHayBales = [
			[],					 		// row 0
			[],							// row 1
			[],							// row 2
			[],							// row 3												
			[],							// row 4
			[],							// row 5
			[4, 13],					// row 6
			[],							// row 7
			[],							// row 8
			[4, 13],					// row 9
			[],							// row 10
			[],							// row 11
			[],							// row 12
			[],							// row 13
			[],							// row 14
			[]							// row 15	
		]

		const redHayBales = [
			[], 						// row 0
			[],							// row 1
			[],							// row 2
			[],							// row 3												
			[6,9],						// row 4
			[],							// row 5
			[],							// row 6
			[],							// row 7
			[],							// row 8
			[],							// row 9
			[],							// row 10
			[],							// row 11
			[],							// row 12
			[6,9],						// row 13
			[],							// row 14
			[]							// row 15	
		]

		const blueHayBales = [
			[],					 		// row 0
			[],							// row 1
			[],							// row 2
			[],							// row 3												
			[],							// row 4
			[],							// row 5
			[2, 11],					// row 6
			[],							// row 7
			[],							// row 8
			[2, 11],					// row 9
			[],							// row 10
			[],							// row 11
			[],							// row 12
			[],							// row 13
			[],							// row 14
			[]							// row 15	
		]

		this.addTokensToPasture(greenHayBales,'grH')
		this.addTokensToPasture(yellowHayBales,'yH')
		this.addTokensToPasture(redHayBales,'rH')
		this.addTokensToPasture(blueHayBales,'bH')
	}

	addToPasture(token){
		this.pasture[token.row][token.col].addOccupant(token)
	}

	addTokensToPasture(tokens, tokenType){
		for(let r = 0; r <= tokens.length - 1; r++){
  			for(let c = 0; c<= tokens[r].length - 1 ; c++){
  				this.pasture[r][tokens[r][c]].addOccupant(tokenType)
  			}	
  		}
	}	

	print(){
		console.log(this.pasture)

		const gridGameboard = document.getElementById("game-board");

  		//todo: change to forEach
  		for(let r = 0; r <= this.numRows; r++){
  			for(let c = 0; c<= this.numCols; c++){
	  			let gridCell  = document.createElement('div')
	  			if(this.pasture[r][c].occupied){
	  				gridCell.innerText = this.pasture[r][c].occupant.debugId
	  			}
	  			gridGameboard.appendChild(gridCell).className = 'grid-cell'
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
}	

class Chickapig extends Token{
	constructor(row, col, team, debugId){
		super(row, col, false, true, 'Chickapig', team, debugId)
	}

}


const board = new Game()
board.print()

