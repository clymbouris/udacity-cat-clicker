var $cat = document.getElementById('cat1'),
$clicks = document.getElementById('clicks'),
clickCounter = 0;

$cat.addEventListener('click', function() {
	clickCounter++;
	$clicks.innerHTML = clickCounter;
}, false);