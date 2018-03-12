var color;
var gridHeight;
var gridWidth;

function makeGrid() {

	gridHeight = $('#input_height').val();
	gridWidth = $('#input_width').val();

	for(var r=0; r<gridHeight; r++){
	$('#pixel_canvas').append('<tr></tr>');
	for (var c=0; c<gridWidth; c++){
	$('tr').last().append('<td></td>');

	$('td').click(function(){
	color=$('#colorPicker').val();
	$(this).css('background-color', color);
	}
	);}
}
};

$(document).ready(function(){
  $("#sizePicker").submit(function(event){
    event.preventDefault();
   $("#pixel_canvas").empty();
    makeGrid();
  });
});
