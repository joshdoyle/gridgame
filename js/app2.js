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
		//console.log(squares)
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
		const greenChickaPigs = [
			[],					 		// row 0
			[2, 4, 6, 9, 11, 13],		// row 1
			[],							// row 2
			[],							// row 3												
			[],							// row 4
			[],							// row 5
			[],							// row 6
			[],							// row 7
			[],							// row 8
			[],							// row 9
			[],							// row 10
			[],							// row 11
			[],							// row 12
			[],							// row 13
			[],							// row 14
			[]							// row 15	
		]

		const yellowChickaPigs = [
			[],					 		// row 0
			[],							// row 1
			[14],						// row 2
			[],							// row 3												
			[14],						// row 4
			[],							// row 5
			[14],						// row 6
			[],							// row 7
			[],							// row 8
			[14],						// row 9
			[],							// row 10
			[14],						// row 11
			[],							// row 12
			[14],						// row 13
			[],							// row 14
			[]							// row 15	
		]

		const redChickaPigs = [
			[], 						// row 0
			[],							// row 1
			[],							// row 2
			[],							// row 3												
			[],							// row 4
			[],							// row 5
			[],							// row 6
			[],							// row 7
			[],							// row 8
			[],							// row 9
			[],							// row 10
			[],							// row 11
			[],							// row 12
			[],							// row 13
			[2, 4, 6, 9, 11, 13],		// row 14
			[]							// row 15	
		]

		const blueChickaPigs = [
			[],					 		// row 0
			[],							// row 1
			[1],						// row 2
			[],							// row 3												
			[],							// row 4
			[],							// row 5
			[1],						// row 6
			[],							// row 7
			[],							// row 8
			[1],						// row 9
			[],							// row 10
			[1],						// row 11
			[],							// row 12
			[1],						// row 13
			[],							// row 14
			[]							// row 15	
		]

		this.addTokensToPasture(greenChickaPigs,'grP')
		this.addTokensToPasture(yellowChickaPigs,'yP')
		this.addTokensToPasture(redChickaPigs,'rP')
		this.addTokensToPasture(blueChickaPigs,'bP')
	}
//2,6 2,9 11,6 11,9
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




	addTokensToPasture(tokens, tokenType){
		for(let r = 0; r <= tokens.length - 1; r++){
  			for(let c = 0; c<= tokens[r].length - 1 ; c++){
  				console.log(r, tokens[r][c])
  				this.pasture[r][tokens[r][c]].addOccupant(tokenType)
  			}	
  		}
	}	

	print(){
		console.log(this.pasture)

		const gridGameboard = document.getElementById("game-board");
  		// gridGameboard.style.setProperty('--grid-rows', this.numRows + 1);
  		// gridGameboard.style.setProperty('--grid-cols', this.numCols + 1);

  		//todo: change to forEach
  		for(let r = 0; r <= this.numRows; r++){
  			for(let c = 0; c<= this.numCols; c++){
	  			let gridCell  = document.createElement('div')
	  			gridCell.innerText = this.pasture[r][c].occupant //this.cells[i].row + ", " + this.cells[i].col  			
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

// class Token {
// 	constructor(row, col){
// 		this.row = row
// 		this.col = col
// 	}
// }

// class Chickapig extends Token{
// 	constructor(row, col){
// 		super(row, col)
// 		this.movable = true
// 		movem
// 	}

// }


const board = new Game()
board.print()
// console.log(board.pasture)

