class Game {
	constructor() {
		this.numRows = 15
		this.numCols = 15
		this.pasture = this.makePasture()
		this.addFence()
		this.addGates()
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
			[0, 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15], 	// row 1
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
			[0,15],												// row 15
			[0, 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15]	// row 16												
		]

			this.addTokensToPasture(fences, 'f')
	}	

	addGates(){
		const gates = [
			[7,8], 		// row 1
			[],			// row 2
			[],			// row 3
			[],			// row 4												
			[],			// row 5
			[],			// row 6
			[0, 15],	// row 7
			[0, 15],	// row 8
			[],			// row 9
			[],			// row 10
			[],			// row 11
			[],			// row 12
			[],			// row 13
			[],			// row 14
			[],			// row 15
			[7,8]		// row 16	
		]
		this.addTokensToPasture(gates,'g')
	}

	addPlayer1(){


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


const board = new Game()
board.print()
// console.log(board.pasture)

