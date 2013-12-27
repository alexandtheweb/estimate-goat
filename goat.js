function Response() {
	this.encourage = ["encourage 1", "encourage 2"],
	this.confirm = ["20 days", "30 points","5 weeks"],
	this.failed = ["Sorry, you didn't rub the goat long and hard enough. Your project is now overruning", ""]
}



function confirm() {
	var response = new Response(),
	rText = document.createTextNode(response.confirm[Math.floor(Math.random()*response.confirm.length)]);
	rContainer = document.getElementById('response');
	rContainer.appendChild(rText);
}


confirm();