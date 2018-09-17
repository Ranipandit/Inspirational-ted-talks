$(document).ready(function() {

	$("#ajax_load").click(function(e){
		e.preventDefault();
		$.ajax({
			type:"GET",
			url:"tedTalks.json",
			dataType:"json",
			success:function(data){
				console.log(data.tedTalks);

				var counter = 0;
				while(counter < 3){

					var result = randomName(data.tedTalks); 
					if (result) {
						counter++;
					}	

				}
			},

			error:function(){
				alert("json was not found");
			}
		});
	});

	function randomName(newArray)
	{

		var index = Math.round( Math.random() * 10 );

		if (index < newArray.length) {

			var talk = newArray[index];

			console.log(talk);

			var output = '<li>';
			output += '<h2>' + talk.title + '</h2>';
			output += '<h3>' + talk.speaker + '</h3>';
			output += '<p>' + talk.description + '</p>';
			output += '<p align ="right"><iframe width="420" height="345" src="https://www.youtube.com/embed/' + talk.youTubeId + '"></iframe></p>';
			output += '</li>';

			$('ul').append(output);


			return true;
		}
		return false;

	}

});