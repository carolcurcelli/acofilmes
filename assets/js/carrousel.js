(function(){
	const carrousel = document.querySelector('.carrousel');
	const trampos = document.querySelectorAll('.trampo');

	for (var i = 0; i = trampos.length; i = i + 1) {
		(function(i) {
			setInterval(function() {
				console.log(i + "=>" + list[i] + "\n");
			}, 100)
		})(i);
	}

	for() {
		if (i === 0) {
			trampos[0].className = 'trampos --active';
			trampos[1].className = 'trampos --next';
			trampos[2].className = 'trampos';
		}
		else if (i === 1) {
			trampos[0].className = 'trampos';
			trampos[1].className = 'trampos --active';
			trampos[2].className = 'trampos --next';
		}
		else if (i === 2) {
			trampos[0].className = 'trampos --next';
			trampos[1].className = 'trampos';
			trampos[2].className = 'trampos --active';
	}


})();