(function(){
	const body = document.querySelector('body');
	const menuOpener = document.querySelector('#menuOpener');
	const menu = document.querySelector('#menu');

	menuOpener.addEventListener('click', function(){
		body.classList.toggle('--open');
	});
	
	body.addEventListener('click', function(e){
		if (body.classList.contains('--open') && e.target != menu && e.target != menuOpener) {
			console.log('fechar');
			console.log(e.target);
			body.classList.remove('--open');
		}
	});
})();