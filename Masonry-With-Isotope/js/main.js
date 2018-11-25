$(document).ready(function() {
    
    var $grid = $('.portfolio-grid').isotope({
        itemSelector: '.portfolio-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth:1
        }
      })

      $('.portfolio-nav ul li').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

})