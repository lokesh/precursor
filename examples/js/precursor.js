$(document).ready(function () {

  // Toggle on grids be repeatedly pressing the 'g' key
  $(window).on('keypress', function(e) {
    var key = e.which;
    if (key === 103) { // "g" key
      toggleGrids();
    }
  });

  var GRIDS            = ['grid-8', 'horizontal-grid-8', 'vertical-grid-8'];
  var gridCount        = GRIDS.length;
  var currentGridIndex = null;

  function toggleGrids() {
    hideGrids();

    if (currentGridIndex === null) {
      currentGridIndex = 0;
      showGrid(currentGridIndex);
    } else if (currentGridIndex === (gridCount - 1)) {
      currentGridIndex = null;
    } else {
      currentGridIndex += 1;
      showGrid(currentGridIndex);
    }
  }

  function hideGrids() {
    $('.testing-grid').remove();
  }

  function showGrid(gridIndex) {
    $('<div />')
      .addClass('testing-grid ' + GRIDS[gridIndex])
      .prependTo('body');
  }

  showGrid(1);

});
