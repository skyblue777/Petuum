$(document).ready(function(){



	// $('#petuum-hp').fullpage({

	// 	sectionSelector: '.vertical-scrolling',

	// 	navigation: true

	// });



	$('.facemod').magnificPopup({

		type:'inline',

		midClick: false,

		gallery: {

			enabled: true

		},

		delegate: 'a.facepop',

		removalDelay: 0,

		callbacks: {

			elementParse: function() { 

			   this.st.src = this.st.el.attr('href'); 

			   console.log('Write_in_card_step.Parsing content. Item object that is being parsed:', this.st.src);

			},

		    beforeOpen: function() {

		       this.st.mainClass = this.st.el.attr('data-effect');

		    },

		    buildControls: function() {

				// re-appends controls inside the main container

				this.contentContainer.append(this.arrowLeft.add(this.arrowRight));

			}

		},

	  	closeOnContentClick: false,

	});

	$('.res-content').magnificPopup({

		type:'inline',

		midClick: false,

		gallery: {

			enabled: false

		},

		delegate: 'a.more-pappers',

		removalDelay: 0,

		callbacks: {

			elementParse: function() { 

			   this.st.src = this.st.el.attr('href'); 

			   console.log('Write_in_card_step.Parsing content. Item object that is being parsed:', this.st.src);

			},

		    beforeOpen: function() {

		       this.st.mainClass = this.st.el.attr('data-effect');

		    }

		},

	  	closeOnContentClick: false,

	});

});