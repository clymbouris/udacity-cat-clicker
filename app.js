$(function() {
	var cats = [
		{
			name: 'Mojo',
			clicks: 0,
			image: 'images/cat1.jpg'
		},
		{
			name: 'Stalin',
			clicks: 0,
			image: 'images/cat2.jpg'
		},
		{
			name: 'Lenin',
			clicks: 0,
			image: 'images/cat3.jpg'
		}
	];

	var $catList = $('#cat-list');
	cats.forEach(function(cat) {
		$catList.append('<li><button id="' + cat.name + '">' + cat.name + '</button></li>');
	});

	var $catName = $('#cat-name');
	var $catClicks = $('#cat-clicks');
	var $catPics = $('.cat-pics');
	cats.forEach(function(cat) {
		$('#' + cat.name).click(function() {
			loadCat(cat);
		});
	});

	$catPics.click(function() {
		var catName = $('#cat-name').text()
		var currentCat = getCat(catName)
		currentCat.clicks++;
		$catClicks.text(currentCat.clicks);
	});

	function getCat(catName) {
		var len = cats.length, i;
		for (i = 0; i < len; i++) {
			if (cats[i].name === catName) {
				return cats[i];
			}
		}
	}

	function loadCat(cat) {
		$catName.text(cat.name);
		$catClicks.text(cat.clicks);
		$catPics.attr("src", cat.image);
	}

	loadCat(cats[0]);
	
});

