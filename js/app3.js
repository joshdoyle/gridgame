
// class Square {
// 	let occupied = ''
// 	let occupant = ''
// 	let beyondFence = ''
// }

const BOARD_COLUMNS = 18
const BOARD_ROWS = 18

// square statuses
const NOT_BLOCKED = 'not blocked'
const BLOCKED = 'blocked'
const FREEDOM = 'freedom'

class Game {
	constructor(){}

	let board = new Array()

	// for(let r = 0; r <= BOARD_ROWS - 1; r++){
	// 	board.push(r)
	// }

	// console.log(board)


	// buildBoard(){
	// 	// let r = 0
	// 	// let c = 0
	// 	let board = new Array(18)
	// 	let boardRow = new Array(18)

	// 	// let el = document.getElementsByClassName('square')

	// 	// for (let square of el) {
	// 	// 	if(square.firstChild === null){
	// 	// 		console.log('empty')
	// 	// 	} else {
	// 	//     	console.log(square.firstChild.className);
	// 	// 	}
	// 	// }	



	// 	for(let r = 0; r <= BOARD_ROWS - 1; r++){
	// 		for(let c = 0; c <= BOARD_COLUMNS -1; c++){
	// 			// boardRow[r][c] = `(${r}, ${c})`
	// 			boardRow.push('test')
	// 		}
	// 		board.push(boardRow)
	// 		let boardRow = []	
	// 	}
	// 	//     if(status === undefined) {
	// 	//     	status = NOT_BLOCKED
	// 	//     } else if (status === FREEDOM) {
	// 	//     	status = FREEDOM
	// 	//     } else {
	// 	//     	status = BLOCKED
	// 	//     }	



	// 	// 	}
	// 	// }
	// 	// $('.square').each(function(i, obj) {
		    
	// 	//     let status = $(this).children().attr('class')

	// 	//     if(status === undefined) {
	// 	//     	status = NOT_BLOCKED
	// 	//     } else if (status === FREEDOM) {
	// 	//     	status = FREEDOM
	// 	//     } else {
	// 	//     	status = BLOCKED
	// 	//     }	
		    
	// 	//     if(c < BOARD_COLUMNS - 1) {
	// 	//     	boardRow[c] = status
	// 	//     	// boardRow.push(status)
	// 	//     	c++
	// 	//     } else if (c = BOARD_COLUMNS - 1) {
	// 	//     	// boardRow.push(status)
	// 	//     	boardRow[c] = status
	// 	//     	c = 0
	// 	//     	board[r] = boardRow
	// 	//     	// board.push(boardRow)
	// 	//     	let boardRow = []
	// 	//     	r++
		  
	// 	//     }

	// 	// });	
	// 	// console.log(this.board)
	// }
}

let myGame = new Game

myGame.buildBoard()




