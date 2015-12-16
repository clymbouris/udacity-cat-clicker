$(function() {

	var model = {
		init: function(cat) {
			this.currentCat = cat;
		},
		cats: [
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
		],
		getAll: function() {
			return this.cats;
		}
	};

	var octopus = {
		init: function() {
			model.init(model.cats[0]);

			listView.init();
			mainView.init();
		},
		getAll: function() {
			return model.getAll();
		},
		getCurrent: function() {
			return model.currentCat;
		},
		setCurrent: function(cat) {
			model.currentCat = cat;
		},
		loadCurrent: function() {
			mainView.render(octopus.getCurrent());
		},
		incrementCounter: function() {
			model.currentCat.clicks++;
		}
	};

	var listView = {
		init: function() {
			this.cats = octopus.getAll();
			listView.render();
			this.cats.forEach(function(cat) {
				$('#' + cat.name).click(function() {	

					octopus.setCurrent(cat);
					octopus.loadCurrent();
	
					return false;
				});
			});
		},
		render: function() {
			this.cats.forEach(function(cat) {
				$('#cat-list').append('<li><button id="' + cat.name + '">' + cat.name + '</button></li>');
			});
		}
	};

	var mainView = {
		init: function() {
			this.$catName = $('#cat-name');
			this.$catClicks = $('#cat-clicks');
			this.$catPics = $('.cat-pics');

			this.$catPics.click(function() {
				octopus.incrementCounter();
				mainView.render(octopus.getCurrent());
				return false;
			});

			mainView.render(octopus.getCurrent());
		},
		render: function(cat) {
			this.$catName.text(cat.name);
			this.$catClicks.text(cat.clicks);
			this.$catPics.attr("src", cat.image);

		}
	};

	octopus.init();
});

