class Gameboard {
	constructor() {
		this.numRows = 15
		this.numCols = 15
		this.pasture = this.makePasture()
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

	addToken(row,col,token){
		this.pasture[row][col].token = token
	}	

	print(){
		console.log(this.pasture)

		const gridGameboard = document.getElementById("game-board");
  		gridGameboard.style.setProperty('--grid-rows', this.numRows + 1);
  		gridGameboard.style.setProperty('--grid-cols', this.numCols + 1);

  		//todo: change to forEach
  		for(let r = 0; r <= this.numRows; r++){
  			for(let c = 0; c<= this.numCols; c++){
	  			let gridCell  = document.createElement('div')
	  			gridCell.innerText = this.pasture[r][c].occupant //this.cells[i].row + ", " + this.cells[i].col  			
	  			gridGameboard.appendChild(gridCell).className = '.grid-cell'
  			}
		}	
	}
}


class Square {
	constructor(row, col){
		this.row = row
		this.col = col
		this.occupied = false
		this.occupant = 'empty'

	}
}


const board = new Gameboard()
board.print()
// console.log(board.pasture)

