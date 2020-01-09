const BOARD_COLUMNS = 18
const BOARD_ROWS = 18

// square statuses
const NOT_BLOCKED = 'not-blocked'
const BLOCKED = 'blocked'
const FREEDOM = 'freedom'
const SQUARE_SIZE = 73.5//36.75

class Game {
	constructor(){
		this.board = this.indexBoard()
		this.currentToken = 0
		this.currentPlayer = 1
		this.numMoves = 0
		this.togglePlayerFocus()
		this.yellowScore = 0
		this.blueScore = 0
		this.redScore = 0
		this.greenScore = 0
	}


	indexBoard(){
		// debugger
		const board = []
		let boardRow = []
		let col = 0


		$('.square').each(function(obj) {
			//add id to div. Needed to find div position in array.
			
			let id = $(this).attr('id')
			let status = $(this).data('sq')

		    if(col === BOARD_COLUMNS - 1) {
			    boardRow.push({id, status})	    	
		    	board.push(boardRow)
		    	col = 0
		    	boardRow = []
		    } else {
		    	boardRow.push({id, status})
		    	col++
		    }	

		}) 
		// console.log(board)
	return board
}

	findCurrentSquareLocation(id){
		 // debugger
		for(let row = 0; row < BOARD_ROWS; row++){
			for(let col = 0; col < BOARD_COLUMNS; col++){
				if(this.board[row][col].id === id){
					return {id, row, col}
				}
			}
		}
	}

	lookUp(currentSquare, limit){
		let destinationSquare
		
		let loc = this.findCurrentSquareLocation(currentSquare.id)
		let startingRow = loc.row - 1
		let col = loc.col // the column of the current location

		// if limit is true then only allow movement of one square
		let endingRow = 0
		if(limit){
			endingRow = startingRow
		} 

		for(let row = startingRow; row >= endingRow; row--){
			let square = this.board[row][col]
			if(square.status != BLOCKED){
				let id = square.id
				destinationSquare = { id, row, col }
			} else {
				break
			}
		}
		return destinationSquare
	}

	lookDown(currentSquare, limit){
		let destinationSquare
		let loc = this.findCurrentSquareLocation(currentSquare.id)
		let startingRow = loc.row + 1
		let col = loc.col // the column of the current location
		// if limit is true then only allow movement of one square
		let endingRow = BOARD_ROWS - 1
		if(limit){
			endingRow = startingRow
		} 
		

		for(let row = startingRow; row <= endingRow; row++){
			let square = this.board[row][col]
			if(square.status != BLOCKED){
				let id = square.id
				destinationSquare = { id, row, col }
			} else {
				break
			}
		}
		return destinationSquare
	}


	lookLeft(currentSquare, limit){
		let destinationSquare
		
		let loc = this.findCurrentSquareLocation(currentSquare.id)
		let startingCol = loc.col - 1
		let row = loc.row // the row of the current location
		let endingCol = 0

		if(limit){
			endingCol = startingCol
		}

		for(let col = startingCol; col >= endingCol; col--){
			let square = this.board[row][col]
			if(square.status != BLOCKED){
				let id = square.id
				destinationSquare = { id, row, col }
			} else {
				break
			}
		}
		return destinationSquare
	}
	

	lookRight(currentSquare, limit){
		let destinationSquare
		
		let loc = this.findCurrentSquareLocation(currentSquare.id)
		let startingCol = loc.col + 1
		let row = loc.row // the row of the current location
		let endingCol = BOARD_COLUMNS -1

		if(limit){
			endingCol = startingCol
		}

		for(let col = startingCol; col <= endingCol; col++){
			let square = this.board[row][col]
			if(square.status != BLOCKED){
				let id = square.id
				destinationSquare = { id, row, col }
			} else {
				break
			}
		}
		return destinationSquare
	}

	// lookLeft(currentSquare){
	// 	let destinationSquare
		
	// 	let loc = this.findCurrentSquareLocation(currentSquare.id)
	// 	let startingCol = loc.col - 1
	// 	let row = loc.row // the row of the current location
	// 	for(let col = startingCol; col >= 0; col--){
	// 		let square = this.board[row][col]
	// 		if(square.status != BLOCKED){
	// 			let id = square.id
	// 			destinationSquare = { id, row, col }
	// 		} else {
	// 			break
	// 		}
	// 	}
	// 	return destinationSquare
	// }
	
	moveUp(tokenId){
		// get tokens move limit
		let token = $(tokenId)
		let tokenType = token.attr('class').split(' ')[0]
		let moveLimited = false

		if(tokenType === 'hay-bale'){
			moveLimited = true
		} 
		
		// get parent of token
		let originSquareId = token.parent().attr("id")

		let originSquare = this.findCurrentSquareLocation(originSquareId)
		let destinationSquare = this.lookUp(originSquare, moveLimited)

		this.moveToken(token, destinationSquare, originSquare, 'up')
		
	}


	moveDown(tokenId){
		// get tokens move limit
		let token = $(tokenId)
		let tokenType = token.attr('class').split(' ')[0]
		let moveLimited = false

		if(tokenType === 'hay-bale'){
			moveLimited = true
		} 
		
		// get parent of token
		let originSquareId = token.parent().attr("id")

		let originSquare = this.findCurrentSquareLocation(originSquareId)
		let destinationSquare = this.lookDown(originSquare, moveLimited)

		this.moveToken(token, destinationSquare, originSquare, 'down')
		
	}	

	moveRight(tokenId){
		
		// get tokens move limit
		let token = $(tokenId)
		let tokenType = token.attr('class').split(' ')[0]
		let moveLimited = false

		if(tokenType === 'hay-bale'){
			moveLimited = true
		} 
		
		// get parent of token
		let originSquareId = token.parent().attr("id")

		let originSquare = this.findCurrentSquareLocation(originSquareId)
		let destinationSquare = this.lookRight(originSquare, moveLimited)

		this.moveToken(token, destinationSquare, originSquare, 'right')
		
	}	

	moveLeft(tokenId){
		
		// get tokens move limit
		let token = $(tokenId)
		let tokenType = token.attr('class').split(' ')[0]
		let moveLimited = false

		if(tokenType === 'hay-bale'){
			moveLimited = true
		} 
		
		// get parent of token
		let originSquareId = token.parent().attr("id")

		let originSquare = this.findCurrentSquareLocation(originSquareId)
		let destinationSquare = this.lookLeft(originSquare, moveLimited)

		this.moveToken(token, destinationSquare, originSquare, "left")

	}	



	moveToken(token, destination, origin, direction){
		
	    //Allow passing in either a jQuery object or selector

	   	let destinationId = "#" + destination.id
	   	let originId = "#" + origin.id
	  
	   	let tokenRemoved = false
	   	let distanceToTravel = ''

	    this.numMoves--

    	let temp = token.clone().appendTo(originId);
	    token.hide()

	    if(direction === 'up'){
	    	distanceToTravel = Math.abs(destination.row - origin.row) * SQUARE_SIZE
	    	console.log('distance',distanceToTravel)
	    	temp.animate({'marginTop' : `-=${distanceToTravel}`}, 1000, 'easeOutBounce', function(){
	    		token.show()
	    		temp.remove()
	    	})
	    }

	   	if(direction === 'down'){
	    	distanceToTravel = Math.abs(destination.row - origin.row) * SQUARE_SIZE
	    	console.log('distance',distanceToTravel)
	    	temp.animate({'marginTop' : `+=${distanceToTravel}`}, 1000, 'easeOutBounce', function(){
	    		token.show()
	    		temp.remove()
	    	})
	    }

	   	if(direction === 'left'){
	    	distanceToTravel = Math.abs(destination.col - origin.col) * SQUARE_SIZE
	    	console.log('distance',distanceToTravel)
	    	temp.animate({'marginLeft' : `-=${distanceToTravel}`}, 1000, 'easeOutBounce', function(){
	    		token.show()
	    		temp.remove()
	    	})
	    }

	   	if(direction === 'right'){
	    	distanceToTravel = Math.abs(destination.col - origin.col) * SQUARE_SIZE
	    	console.log('distance',distanceToTravel)
	    	temp.animate({'marginLeft' : `+=${distanceToTravel}`}, 10000, 'easeOutBounce', function(){
	    		token.show()
	    		temp.remove()
	    	})
	    }		    	    



	    if($(token).hasClass('green')){
	    	if($(destinationId).children().hasClass('green')) {
	    		// On score square
	    		this.greenScore++
	    		token.remove()
	    		tokenRemoved = true
	    		$(`#green-score-${this.greenScore}`).css({'background-color':'green'})
	    	} else {
	    		$(token).appendTo(destinationId);
	    	}

	    } else if($(token).hasClass('blue')){
	    	if($(destinationId).children().hasClass('blue')) {
	    		// On score square
	    		this.blueScore++
	    		token.remove()
	    		tokenRemoved = true
	    		$(`#blue-score-${this.blueScore}`).css({'background-color':'blue'})
	    	} else {
	    		$(token).appendTo(destinationId);
	    	}	    	

	    } else if($(token).hasClass('red')){	
	    	if($(destinationId).children().hasClass('red')) {
	    		// On score square
	    		this.redScore++
	    		token.remove()
	    		tokenRemoved = true
	    		$(`#red-score-${this.redScore}`).css({'background-color':'red'})
	    	} else {
	    		$(token).appendTo(destinationId);
	    	}	    	

	    } else if($(token).hasClass('yellow')){	
	    	if($(destinationId).children().hasClass('yellow')) {
	    		// On score square
	    		this.yellowScore++
	    		token.remove()
	    		tokenRemoved = true
	    		$(`#yellow-score-${this.yellowScore}`).css({'background-color':'#ffe44d'})
	    	} else {
	    		$(token).appendTo(destinationId);
	    	}    	

	    } else {
	    	//nothing
	    }

		if(tokenRemoved){
	    	$(origin).attr('data-sq', NOT_BLOCKED)
			this.board[origin.row][origin.col].status = NOT_BLOCKED			
		} else {
			$(destination).attr('data-sq', BLOCKED)
			this.board[destination.row][destination.col].status = BLOCKED
			$(origin).attr('data-sq', NOT_BLOCKED)
			this.board[origin.row][origin.col].status = NOT_BLOCKED	
		}

	  	if(this.numMoves === 0){
	    	this.togglePlayerFocus()
	    } else {
	    	this.updateMovesDisplay()
	    }

	}	

	updateMovesDisplay(){
		$('#moves-display>h1').text(this.numMoves)
	}

	shiftMovesDisplay(player){
		if(player === 1){
			$('#moves-display').animate({'marginLeft':"-=190px"}, 1200, 'swing')	
		} else if (player === 2){
			$('#moves-display').animate({'marginLeft':"+=190px"}, 1200, 'swing')	
		}

		this.rollDice()
	}

	rollDice(){

		this.numMoves = Math.floor(Math.random() * 6) + 1  
		this.updateMovesDisplay()
	}

	togglePlayerFocus(){		
		
		if(this.currentPlayer === 1){
			this.currentPlayer = 2
				$('.green.pig').each(function () {$(this).attr('tabindex', 0)})
				$('.green.hay-bale').each(function () {$(this).attr('tabindex', 0)})
				$('.blue.pig').each(function () {$(this).attr('tabindex', 0)})
				$('.blue.hay-bale').each(function () {$(this).attr('tabindex', 0)})

				$('.red.pig').each(function () {$(this).removeAttr('tabindex')})
				$('.red.hay-bale').each(function () {$(this).removeAttr('tabindex')})
				$('.yellow.pig').each(function () {$(this).removeAttr('tabindex')})
				$('.yellow.hay-bale').each(function () {$(this).removeAttr('tabindex')})	

				$('#player1-roll').prop('disabled', true);	
				$('#player2-roll').prop('disabled', false);

		} else {
			this.currentPlayer = 1
				$('.red.pig').each(function () {$(this).attr('tabindex', 0)})
				$('.red.hay-bale').each(function () {$(this).attr('tabindex', 0)})
				$('.yellow.pig').each(function () {$(this).attr('tabindex', 0)})
				$('.yellow.hay-bale').each(function () {$(this).attr('tabindex', 0)})

				$('.green.pig').each(function () {$(this).removeAttr('tabindex')})
				$('.green.hay-bale').each(function () {$(this).removeAttr('tabindex')})
				$('.blue.pig').each(function () {$(this).removeAttr('tabindex')})
				$('.blue.hay-bale').each(function () {$(this).removeAttr('tabindex')})

				$('#player1-roll').prop('disabled', false);	
				$('#player2-roll').prop('disabled', true);	
		}

		this.shiftMovesDisplay(this.currentPlayer)	
	}
}


let myGame = new Game
myGame.indexBoard()


$(".pig").each(function () {
    const pig = this;


    pig.addEventListener("focus", function() {
        event.preventDefault();
		myGame.currentToken = event.target.id

    });
})

$(".hay-bale").each(function () {
    const hay = this;


    hay.addEventListener("focus", function() {
        event.preventDefault();
		myGame.currentToken = event.target.id

    });
})

$(document).keydown(function(e){


	let t = "#" + myGame.currentToken

    switch (e.which){
    case 37:    //left arrow key
    	myGame.moveLeft(t)

        break;
    case 38:    //up arrow key
        myGame.moveUp(t)


        break;
    case 39:    //right arrow key
    	myGame.moveRight(t)
        

        break;
    case 40:    //bottom arrow key
    	myGame.moveDown(t)

        break;
    }
});

// event listener for dice button
$('#player1-roll').on('click', () => {
  myGame.rollDice('player1-moves')
})
 
$('#player2-roll').on('click', () => {
  myGame.rollDice('player2-moves')
}) 

