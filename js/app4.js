const BOARD_COLUMNS = 18
const BOARD_ROWS = 18

// square statuses
const NOT_BLOCKED = 'not-blocked'
const BLOCKED = 'blocked'
const FREEDOM = 'freedom'

class Game {
	constructor(){
		this.board = this.buildBoard()
		this.currentTarget = 0
	}

	// set currentTarget(t){
	// 	this.currentTarget = t
	// }

	// get currentTarget(){
	// 	return this.currentTarget
	// }

	buildBoard(){
		const board = []
		let boardRow = []
		let col = 0


		$('.square').each(function(obj) {
			//add id to div. Needed to find div position in array.
			let id = $(this).attr('id')
			let status = $(this).children().attr('class')

			if(status === undefined) {
		    	status = NOT_BLOCKED
		    } else if (status.split(' ')[0] === FREEDOM) {
		    	status = FREEDOM
		    } else {
		    	status = BLOCKED
		    }	


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
		console.log(board)
	return board
}

	findCurrentSquareLocation(id){
		debugger
		for(let row = 0; row < BOARD_ROWS; row++){
			for(let col = 0; col < BOARD_COLUMNS; col++){
				if(this.board[row][col].id === id){
					return {id, row, col}
				}
			}
		}
	}

	lookUp(currentSquare){
		let destinationSquare
		
		let loc = this.findCurrentSquareLocation(currentSquare)
		let startingRow = loc.row - 1
		let col = loc.col // the column of the current location
		for(let row = startingRow; row >= 0; row--){
			if(this.board[row][col].status != BLOCKED){
				destinationSquare = this.board[row][col].id
			} else {
				break
			}
		}
		return destinationSquare
	}

	lookDown(currentSquare){
		let destinationSquare
		
		let loc = this.findCurrentSquareLocation(currentSquare)
		let startingRow = loc.row + 1
		let col = loc.col // the column of the current location
		for(let row = startingRow; row >= 0; row++){
			if(this.board[row][col].status != BLOCKED){
				destinationSquare = this.board[row][col].id
			} else {
				break
			}
		}
		return destinationSquare
	}


	lookLeft(currentSquare){
		let destinationSquare
		
		let loc = this.findCurrentSquareLocation(currentSquare)
		let startingCol = loc.col - 1
		let row = loc.row
		for(let col = startingCol; col >= 0; col--){
			if(this.board[row][col].status != BLOCKED){
				destinationSquare = this.board[row][col].id
			} else {
				break
			}
		}
		return destinationSquare
	}

	lookRight(currentSquare){
	
		let destinationSquare
		
		let loc = this.findCurrentSquareLocation(currentSquare)
		let startingCol = loc.col + 1
		let row = loc.row
		for(let col = startingCol; col >= 0; col++){
			if(this.board[row][col].status != BLOCKED){
				destinationSquare = this.board[row][col].id
			} else {
				break
			}
		}
		return destinationSquare
	}
	
	moveUp(tokenId){
		debugger
		// get parent of token
		let origin = $(tokenId).parent().attr("id")

		// let origin = this.findCurrentSquareLocation(tokenId).id
		let destination = this.lookUp(origin)

		origin = '#' + origin
		destination = '#' + destination

		this.moveToken(tokenId, destination, origin)

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
	    let newPosition = token.offset();

	    let temp = token.clone().appendTo(oldParent);
	    temp.css({
	        // 'position': 'relative',
	        // 'left': oldPosition.left,
	        // 'top': oldPosition.top,
	        // 'z-index': 1000
	    });
	    // debugger
	    token.hide();
	    temp.animate({'top': newPosition.top, 'left': newPosition.left}, 500, 'swing', function(){
	       token.show();
	       temp.remove();
    });
}
	
}

let myGame = new Game
myGame.buildBoard()


$( "#game-board" ).focus(function() {
  // console.log('event fired')
});


$('#game-board').on('click', (event) => {
  // so it must be converted back to jQuery
  const $etarget = $(event.target)
  // console.log($etarget)
})


$(".pig").each(function () {
    const pig = this;

    pig.addEventListener("focus", function() {
        event.preventDefault();
		myGame.currentTarget = event.target.id
    });
})

$(document).keydown(function(e){
	$("#temp").animate({ "margin-left": "+=50px" }, "fast", () => {
		$('#temp').remove();
		$('<div id="temp"></div>').css('margin-left', '50px').prependTo($('body'))
	});
	// console.log('key press')
	let t = myGame.currentTarget
    switch (e.which){
    case 37:    //left arrow key
    	// console.log('left arrow')
    	$( " #11 " ).animate({ "left": "-=50px" }, "fast" );
        
        break;
    case 38:    //up arrow key
        

        break;
    case 39:    //right arrow key
        

        break;
    case 40:    //bottom arrow key
        $("#11" ).animate({
            top: "+=50"
        });
        break;
    }
});



