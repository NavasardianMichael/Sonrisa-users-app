export function menuActiveItemHandler(itemClassName) {
	document.querySelectorAll(itemClassName).forEach(item => {
	  	item.addEventListener('click', function(event) {
	  		document.querySelector(`${itemClassName}.active`) && document.querySelector(`${itemClassName}.active`).classList.toggle('active');
			event.target.classList.toggle('active');
	  })
	})
};

export function pageActiveItemHandler(event, itemClassName) {
	document.querySelector(`${itemClassName}.active`) && document.querySelector(`${itemClassName}.active`).classList.toggle('active');
	event.target.classList.toggle('active');
};


	