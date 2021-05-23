(function(){
	const carrousel = document.querySelector('.carrousel');
	const trampos = document.querySelectorAll('.trampo');

	console.log(trampos);




	let i = 0;
	while (i < trampos.length) {
		(function(i) {
			setTimeout(function() {
				if (i === 0) {
					console.log(i)
					trampos[0].className = 'trampos --active';
					trampos[1].className = 'trampos --next';
					trampos[2].className = 'trampos';
				}
				else if (i === 1) {
					console.log(i)
					trampos[0].className = 'trampos';
					trampos[1].className = 'trampos --active';
					trampos[2].className = 'trampos --next';
				}
				else if (i === 2) {
					console.log(i)
					trampos[0].className = 'trampos --next';
					trampos[1].className = 'trampos';
					trampos[2].className = 'trampos --active';
				}
			}, 1000 * i);
		})(i++)
		if (i === 2) {
			console.log("reseta filho da puta");
			i = 0;
		}
	}

	


})();