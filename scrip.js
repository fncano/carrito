$(document).ready(function(){

	globalfunction();


$(".paginations-buttons button").click(function(){

	var boton =$(this).html();

	$.ajax({
		url: "php/"+boton+".html",
		method: "get",
		success: function(result){

			$("#rolo").html(result);
			globalfunction();
		}

	})
})

});


function globalfunction (){


$(".producto").click(function(){

		var nombre =$(this).parents("tr").find(".art").html();
		console.log(nombre);

		var precio =$(this).parents("tr").find(".prec").html();
		console.log(precio);

		var cant = $(this).parents("tr").find(".cant").val();
		
		cant= parseInt(cant);
		precio= parseInt(precio);
		var total = cant * precio;

		console.log(total);

		
		var fila="<tr><td class='nom'>"+nombre+"</td><td class='pres'>"+precio+"</td><td class='cant'>"+cant+"</td><td class='tot'> "+total+"</td><td class='bot'><button class='btn btn-danger button-delete'><span class='fa fa-trash'></span></button></td></tr>";
		console.log(fila);

		        
		//
		$("#contenedorproductos").append(fila);

		//desactivar duplicacion de eventos

		$(".button-delete").off("click");

		$(".button-delete").click(function(){
			
			var precio2 = $(this).parents("tr").find(".tot").html();

			var total2 =$(".total").html();

			total2= total2-precio2;

			$(".total").html(total2);

			$(this).parents("tr").remove();

		});



		var to_act = $(".total").html();
		to_act = parseInt(to_act);
		var general = (total + to_act);
		$(".total").html(general);




	});


	$(".menos").click(function(){

		var cant = $(this).parents("tr").find(".cant").val();
		cant = parseInt(cant)
		var resta = cant - 1;

		$(this).parents("tr").find(".cant").val(resta);



	})
	$(".mas").click(function(){
		var cant = $(this).parents("tr").find(".cant").val();
		cant = parseInt(cant)
		var incremento = cant + 1;

		$(this).parents("tr").find(".cant").val(incremento);
	})


}
