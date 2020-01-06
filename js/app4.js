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

		$('.square').each(function(i, obj) {
	
			let status = $(this).children().attr('class')

			if(status === undefined) {
		    	status = NOT_BLOCKED
		    } else if (status.split(' ')[0] === FREEDOM) {
		    	status = FREEDOM
		    } else {
		    	status = BLOCKED
		    }	

		    if(col < BOARD_COLUMNS - 1) {
		    	boardRow.push(status)
		    	col++
		    } else if (col = BOARD_COLUMNS - 1) {
		    	boardRow.push(status)
		    	col = 0
		    	board.push(boardRow)
		    	boardRow = []
		    }	

		}) 
	return board
}
	
	moveAnimate(element, newParent){
	    //Allow passing in either a jQuery object or selector
	    element = $(element);
	    newParent= $(newParent);

	    var oldOffset = element.offset();
	    element.appendTo(newParent);
	    var newOffset = element.offset();

	    var temp = element.clone().appendTo('body');
	    temp.css({
	        'position': 'absolute',
	        'left': oldOffset.left,
	        'top': oldOffset.top,
	        'z-index': 1000
	    });
	    element.hide();
	    temp.animate({'top': newOffset.top, 'left': newOffset.left}, 'slow', 'easeOutBounce', function(){
	       element.show();
	       temp.remove();
    });
}
	
}

let myGame = new Game
myGame.buildBoard()


$( "#game-board" ).focus(function() {
  console.log('event fired')
});


$('#game-board').on('click', (event) => {
  // so it must be converted back to jQuery
  const $etarget = $(event.target)
  console.log($etarget)
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
	console.log('key press')
	let t = myGame.currentTarget
    switch (e.which){
    case 37:    //left arrow key
    	console.log('left arrow')
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



