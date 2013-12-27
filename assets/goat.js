// TODO: 
// styling
// animation
// github link
// credits


// Construct progress, failure and confirmation messages

function Message() {
	this.progress = ["Calculating... mehhhh", "Baaaahhh... planning sprints...","Optimising velocity via saltlicks..","Grooming baaaacklog..."],
	this.qnty = Math.floor(Math.random() * 20) + 2,
	this.unit = ["days","points","weeks","NUTs","gummi goats"],
	this.response = ["You're welcome.","The goat is done goating.","Goat again if you wish.","Baahhhh."],
	this.failed = ["Blast. You didn't rub the goat long and hard enough and your project will overrun catastrophically. Try again", "Failed to estimate. Insufficient goat rubbing. Try again?"],

	this.progressTxt = function() {
		var txt = this.progress[Math.floor(Math.random()*this.progress.length)];
		return txt;
	},

	this.outcomeTxt = function() {
		var txt = this.qnty + " " + this.unit[Math.floor(Math.random()*this.unit.length)] + ". " + this.response[Math.floor(Math.random()*this.response.length)];
		return txt;
	},

	this.failedTxt = function() {
		var txt = this.failed[Math.floor(Math.random()*this.failed.length)];
		return txt;
	};
}


var message = new Message(),
	rContainer = document.getElementById('message'),
	goatPic = document.getElementById('goatPic'),
	rConfirm = function(r) {
		var text = document.createTextNode(r);
		return text;
	};


function goatConfirm() {
	rContainer.innerHTML = '';
	rContainer.appendChild(rConfirm(message.outcomeTxt()));
}

function goatFailed() {
	rContainer.innerHTML = '';
	rContainer.appendChild(rConfirm(message.failedTxt()));
}



// Create progress timer

var count = 0;

function goatProgress() {
	rContainer.innerHTML = '';
	rContainer.appendChild(rConfirm(message.progressTxt()));
	updateProgress(count);
	count=count+1;
	return;
}


// Progress bar helper functions

function updateProgress(t) {
	document.getElementById("progressBar").style.width = t * 10 + '%';
}

function resetProgress() {
	document.getElementById("progressBar").style.width = '0%';
}



var mousedownID = -1;  //Global ID of mouse down interval
function mousedown() {
	if(mousedownID===-1)  //Prevent multimple loops!
		mousedownID = setInterval(goatProgress, 1000 /*execute every 1s*/);
	}

function mouseup() {
	if (count >= 10) { // Display confirmation text if countdown has finished
		clearInterval(mousedownID);
		mousedownID=-1;
		resetProgress();
		goatConfirm();
	} else { // Otherwise show failure text
		clearInterval(mousedownID);
		count = 0;
		mousedownID=-1;
		resetProgress();
		goatFailed();
	}

}

goatPic.addEventListener('mousedown',mousedown,false);
goatPic.addEventListener('mouseup',mouseup,false);

