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
			adminView.init();
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
			adminView.render();
		},
		incrementCounter: function() {
			model.currentCat.clicks++;
			adminView.render();
			mainView.render(this.getCurrent());
		},
		adminHideShow: function() {
			adminView.$admin.toggle();
		},
		adminSave: function(name, clicks, image) {
			model.currentCat.name = name;
			model.currentCat.clicks = clicks;
			model.currentCat.image = image;

			adminView.render();
			listView.init();
			mainView.render(octopus.getCurrent());
		}
	};

	var adminView = {
		init: function() {
			this.$admin = $('#admin-mode');

			$('#btn-admin').click(function(e) {
				adminView.render();
				octopus.adminHideShow();
				e.preventDefault();
			});

			$('#btn-reset').click(function(e) {
				adminView.render();
				octopus.adminHideShow();
				e.preventDefault();
			});

			$('#btn-save').click(function(e) {
				var name = $('#name').val();
				var clicks = $('#clicks').val();
				var image = $('#pic').val();
				octopus.adminSave(name, clicks, image);
				octopus.adminHideShow();
				e.preventDefault();;
			});

			octopus.adminHideShow();
			adminView.render();
		},
		render: function() {
			$('#name').val(octopus.getCurrent().name);
			$('#clicks').val(octopus.getCurrent().clicks);
			$('#pic').val(octopus.getCurrent().image);
		}
	};

	var listView = {
		init: function() {
			$('#cat-list').html('');
			listView.render();
			octopus.getAll().forEach(function(cat) {
				$('#' + cat.name).click(function(e) {
					octopus.setCurrent(cat);
					octopus.loadCurrent();
					e.preventDefault();;
				});
			});
		},
		render: function() {
			octopus.getAll().forEach(function(cat) {
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

