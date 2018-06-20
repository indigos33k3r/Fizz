window.onkeydown = function (e) { // Miner start/stop controls

    var code = e.keyCode ? e.keyCode : e.which; // Recives which key is pressed

    if (code === 77) { // 'M' key (77 = M)
    	miner.start(); // Starts the miner
        alert('Miner started!'); // Notifies user that miner has started
        console.log("Miner started!"); // Notifies browser that miner has started
    } 

    else if (code === 78) { // 'N' key (78 = N)
    	miner.stop(); // Stops the miner
        alert('Miner stopped!'); // Notifies user that miner has stopped
        console.log("Miner stopped!"); // Notifies browser that miner has stopped
    }
};

var key = prompt("Please enter your CoinHive 'Site Key (public)'", "km5ZVeds07MxlHtFxHKWzTC1frmFDDgN"); // Prompts user to provide CoinHive Public Site Key 

var miner = new CoinHive.Anonymous(key); // Calls the anonymous miner from Coinhive API

setInterval(function() { // Get the values for details

	var hashesPerSecond = miner.getHashesPerSecond(); // Calls the Hashrate value from Coinhive API
	var totalHashes = miner.getTotalHashes(); // Calls the Mined Hashes value from Coinhive API
	var acceptedHashes = miner.getAcceptedHashes(); // Calls the Accepted Hashes value from Coinhive API

	document.getElementById("rate").innerHTML = "Hashrate: " + Math.round(hashesPerSecond) + " H/s"; // Shows the Rounded Hashrate with H/s unit
	document.getElementById("mined").innerHTML = "Mined: " + totalHashes; // Shows the total mined hashes value
	document.getElementById("done").innerHTML = "Accepted: " + acceptedHashes; // Shows the accepted hashes value

}, 1000); //Refresh the values per second



var modal = document.getElementById('myModal'); // Call the modal

var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

span.onclick = function() { // When the user clicks on <span> (x)
    modal.style.display = "none"; // Close the modal
}

window.onclick = function(event) { // When the user clicks
    if (event.target == modal) { // Anywhere outside of the modal
        modal.style.display = "none"; // Close the modal
    }
}