class Gameboard {
	constructor() {
		this.pasture = this.makePasture()
	}

	// Getter

	// Method
	makePasture() {
		const squares = []
		for(let r = 0; r <= 15; r++) {
			squares.push([])
			for(let c = 0; c <= 15; c++) {
				let square = new Square(r,c)
				squares[r].push(square)
			}
		}
		//console.log(squares)
		return squares
	}	

	addToken(r,c,t){
		this.pasture[r][c].token = t
	}	

	print(){
		console.log(this.pasture)
	}

}


class Square {
	constructor(row, col){
		this.row = row
		this.col = col
		this.occupied = false
		this.occupant = ''

	}
}


const board = new Gameboard()
board.print()
// console.log(board.pasture)

