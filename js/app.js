//todo: review all variable declarations
//todo: review public/static properties
class Cell {
	row;
	col;
	occupied = false
	occupant = {}
	constructor(row, col){
		this.row = row
		this.col = col
	}
	//todo: change occupant to be o object
	addOccupant(o){
		this.occupant = o
		this.occupied = true
	}

	removeOccupant(o){
		this.occupant = null
		this.occupied = false
	}
}


// Tokens are game pieces. Chickapigs, Cow, Hay Bale, Cow Pie, (Fence?)
class Token {
	constructor(row, col, tokenType){
		this.row = row
		this.col = col
		this.tokenType = tokenType
	}
}

class Chickapig extends Token {
	constructor(row, col){
		super(row,col)
	}
}

class Fence extends Token {
	constructor(row, col){
		super(row, col)
	}
}

class Gate extends Token {
	constructor(row, col, tokenType){
	super(row, col, tokenType)
	}
}
// class Player {
// 	constructor(){
// 		// add player id
// 		// add chickapigs
// 	}

// 	// add move method
// 	// add gate location
// }

class Gameboard {
	numRows = 15 //todo: make these constants and determine if private. Also naming convention
	numCols = 15
	constructor(){
		this.cells = []
		this.makePasture()
		this.buildGates()

	}

	makePasture() {
		for(let r = 0; r <= this.numRows; r++) {
			this.cells.push([])
			for(let c = 0; c <= this.numCols; c++) {
				const cell = new Cell(r,c)

			//const gateLocations = [7,8]

			// add fence
			// if(gateLocations.includes(r) fenceLocations.includes(c)){
			// 	let f = new Fence(r,c)
			// 	cell.addOccupant(f, 'fence')					
			// }


			// if(r === 0 ||
			// 	r === this.numRows ||
			// 	c === 0 ||
			// 	c === this.numCols) {
			// 		let f = new Fence(r,c)
			// 		cell.addOccupant(f, 'fence')
			// }
				this.cells[r].push(cell)
			}
		}
	}

	buildGates(){
		//open gates
		const gates = [[0,7], [0,8], [15,7], [15,8], [7,0], [8,0], [7,15], [8,15]] 

		for(let i = 0; i <= gates.length; i++){
			console.log('1',gates[i])
			console.log('2',gates[i][0])			
			console.log('3',gates[i][1])

			let r = gates[i][0]
			let c = gates[i][1]
			console.log('4', r)
			console.log('5', c)

			let g = new Gate(r,c)
			this.moveToCell(g, r, c)
		}

	}

	moveToCell(token, row, col){
		console.log(this.cells, row, col)
		this.cells[row][col].occupant = token
	}

	print(){
		//todo: edit for jQuery
		const gridGameboard = document.getElementById("game-board");
  		gridGameboard.style.setProperty('--grid-rows', this.numRows + 1);
  		gridGameboard.style.setProperty('--grid-cols', this.numCols + 1);

  		//todo: change to forEach
  		for(let i = 0; i <= this.cells.length - 1; i++){
  			let gridCell  = document.createElement('div')
  			gridCell.innerText = this.cells[i].occupant //this.cells[i].row + ", " + this.cells[i].col  			
  			gridGameboard.appendChild(gridCell).className = '.grid-cell'
  		}
	}
}
// Needs to be added to game object
// choose number of players ( 2 or 4 )
const board = new Gameboard()
console.log(board)
board.print()




