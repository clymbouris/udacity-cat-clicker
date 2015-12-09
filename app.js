var $cat1 = document.getElementById('cat1'),
$clicks1 = document.getElementById('clicks1'), clickCounter1 = 0,
cat1name = 'Stalin', $cat1name = document.getElementById('cat1-name');
$cat1name.innerHTML = cat1name;

var $cat2 = document.getElementById('cat2'),
$clicks2 = document.getElementById('clicks2'), clickCounter2 = 0,
cat2name = 'Lenin', $cat2name = document.getElementById('cat2-name');
$cat2name.innerHTML = cat2name;

$cat1.addEventListener('click', function() {
	clickCounter1++;
	$clicks1.innerHTML = clickCounter1;
}, false);

$cat2.addEventListener('click', function() {
	clickCounter2++;
	$clicks2.innerHTML = clickCounter2;
}, false); 