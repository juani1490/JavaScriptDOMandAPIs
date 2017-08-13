var btrespuesta = document.getElementById('btmessage');

/*I create  functions to get an answers (creo una funcion para obtener respuesta*/
function get_an_answer(){
   let urlJokes = "http://api.icndb.com/jokes/random";

   $.ajax({
   	url: urlJokes,
   	success(datafromjoke){
   		let listdata = "";
   		$.each(datafromjoke, function(index,resp){
   			listdata = resp.joke;
   		})
   		$('#seccion_oculta').html(listdata);
   	}
   })
};

//btrespuesta.addEventListener('click', get_an_answer);

function get_an_answer_fromGithub(){
	//let urlGithub = "https://api.github.com/search/repositories?q={JavaScript}";
	  let campo = $('#busqueda').val();
      let urlGithub = "https://api.github.com/search/repositories?q={"+campo+"}";

	$.ajax({
      url: urlGithub,
      success(datafromgithub){
      	console.log(datafromgithub);
      	let listdata = "";
      	$.each(datafromgithub.items, function(index,resp){
           listdata += '<li><a href="'+resp.html_url+'">'+resp.name+'</li>'
      	})
      	$('#listado').html(listdata);
      } 
	})
};

btrespuesta.addEventListener('click', get_an_answer_fromGithub);

/*end*/



