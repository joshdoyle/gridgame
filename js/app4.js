const BOARD_COLUMNS = 18
const BOARD_ROWS = 18

// square statuses
const NOT_BLOCKED = 'not-blocked'
const BLOCKED = 'blocked'
const FREEDOM = 'freedom'

class Game {
	constructor(){
		this.board = this.indexBoard()
		this.currentToken = 0
		this.currentPlayer = 1
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
		let tokenType = $(tokenId).attr('class').split(' ')[0]
		let moveLimited = false

		if(tokenType === 'hay-bale'){
			moveLimited = true
		} 
		
		// get parent of token
		let originSquareId = $(tokenId).parent().attr("id")

		let originSquare = this.findCurrentSquareLocation(originSquareId)
		let destinationSquare = this.lookUp(originSquare, moveLimited)

		let originId = '#' + originSquare.id
		let destinationId = '#' + destinationSquare.id

		this.moveToken(tokenId, destinationId, originId)
		$(originId).attr('data-sq', NOT_BLOCKED)
		$(destinationId).attr('data-sq', BLOCKED)

		this.board[originSquare.row][originSquare.col].status = NOT_BLOCKED
		this.board[destinationSquare.row][destinationSquare.col].status = BLOCKED

		// this.indexBoard()
		console.log('after move', this.board)
	}


	moveDown(tokenId){
		
		// get tokens move limit
		let tokenType = $(tokenId).attr('class').split(' ')[0]
		let moveLimited = false

		if(tokenType === 'hay-bale'){
			moveLimited = true
		} 
		
		// get parent of token
		let originSquareId = $(tokenId).parent().attr("id")

		let originSquare = this.findCurrentSquareLocation(originSquareId)
		let destinationSquare = this.lookDown(originSquare, moveLimited)

		let originId = '#' + originSquare.id
		let destinationId = '#' + destinationSquare.id

		this.moveToken(tokenId, destinationId, originId)
		$(originId).attr('data-sq', NOT_BLOCKED)
		$(destinationId).attr('data-sq', BLOCKED)

		this.board[originSquare.row][originSquare.col].status = NOT_BLOCKED
		this.board[destinationSquare.row][destinationSquare.col].status = BLOCKED

		// this.indexBoard()
		console.log('after move', this.board)
	}	

	moveRight(tokenId){
		
		
		let tokenType = $(tokenId).attr('class').split(' ')[0]
		let moveLimited = false

		if(tokenType === 'hay-bale'){
			moveLimited = true
		} 
		
		// get parent of token
		let originSquareId = $(tokenId).parent().attr("id")

		let originSquare = this.findCurrentSquareLocation(originSquareId)
		let destinationSquare = this.lookRight(originSquare, moveLimited)

		let originId = '#' + originSquare.id
		let destinationId = '#' + destinationSquare.id

		this.moveToken(tokenId, destinationId, originId)
		$(originId).attr('data-sq', NOT_BLOCKED)
		$(destinationId).attr('data-sq', BLOCKED)

		this.board[originSquare.row][originSquare.col].status = NOT_BLOCKED
		this.board[destinationSquare.row][destinationSquare.col].status = BLOCKED

		// this.indexBoard()
		console.log('after move', this.board)
	}	

	moveLeft(tokenId){
		
		// get tokens move limit
		let tokenType = $(tokenId).attr('class').split(' ')[0]
		let moveLimited = false

		if(tokenType === 'hay-bale'){
			moveLimited = true
		} 
		
		// get parent of token
		let originSquareId = $(tokenId).parent().attr("id")

		let originSquare = this.findCurrentSquareLocation(originSquareId)
		let destinationSquare = this.lookLeft(originSquare, moveLimited)

		let originId = '#' + originSquare.id
		let destinationId = '#' + destinationSquare.id

		this.moveToken(tokenId, destinationId, originId)
		$(originId).attr('data-sq', NOT_BLOCKED)
		$(destinationId).attr('data-sq', BLOCKED)

		this.board[originSquare.row][originSquare.col].status = NOT_BLOCKED
		this.board[destinationSquare.row][destinationSquare.col].status = BLOCKED

		// this.indexBoard()
		console.log('after move', this.board)
	}	



	moveToken(token, newParent, oldParent){
		
	    //Allow passing in either a jQuery object or selector
	    // debugger
	    token = $(token);
	    newParent= $(newParent);
	    oldParent = $(oldParent)
	    // debugger
	    let oldOffset = token.offset();
	    // let oldPosition = token.position()
	    // console.log('oldOffset', oldOffset)
	    // console.log('old Position',element.position())
	    token.appendTo(newParent);
	    // let newPosition = token.offset();
	    let newPosition = token.position()

	    let temp = token.clone().appendTo(oldParent);
	    temp.css({
	        // 'position': 'relative',
	        // 'left': oldPosition.left,
	        // 'top': oldPosition.top,
	        // 'z-index': 1000
	    });
	    // debugger
	    token.hide();
	    temp.css('position', 'absolute')
	    temp.parent().css('position', 'relative')
	    // temp.animate({ 'top': newPosition.top, 'left': newPosition.left}, 5000, 'swing', function(){
	    //    token.show();
	    //    temp.remove();
    	// });

	    temp.animate({ 'marginLeft' : "+=50px"}, 1000, 'easeOutBounce', function(){
	       token.show();
	       temp.remove();
    	});

	}	

	shiftMovesDisplay(player){
		if(player === 1){
			$('#moves-display').animate({'marginLeft':"-=325px"}, 1000, 'easeOutBounce')	
		} else if (player === 2){
			$('#moves-display').animate({'marginLeft':"+=325px"}, 1000, 'easeOutBounce')	
		}

		this.rollDice()
	}

	rollDice(){

		let roll = Math.floor(Math.random() * 6) + 1  
		$('#moves-display>h1').text(roll)
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
	// debugger
	// $("#temp").animate({ "margin-left": "+=50px" }, "fast", () => {
	// 	$('#temp').remove();
	// 	$('<div id="temp"></div>').css('margin-left', '50px').prependTo($('body'))
	// });

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

