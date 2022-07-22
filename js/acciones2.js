(function(){ //Encerrar la función en () es para proteger el codigo
	var formulario = document.getElementById('formulario'), //Se toma la información del id=formulario en html
	//Se declaran las variables de acuerdo a la class=formulario con cada name en el html
		nombre = formulario.nombre,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		//Se declara la variable error con el id=error del html
		error = document.getElementById('error');
		//Se crean las funciones para cada dato: nombre, correo, sexo, terminos
	function validarNombre(e){ //Se escribe el parametro e para funcione e.preventDefault()
		//alert('hola');
		 //Esta función valida que si el campo de nombre esta vacio muestra un mensaje de error
		if(nombre.value == '' || nombre.value == null){  //Aplica la condición si el valor del campo nombre esta vacio}
			console.log('Por favor completa el nombre'); //Mensaje
			error.style.display = 'block'; //Modifica la prioridad display que oculta el bloque de errores y ahora mostrarlo
			error.innerHTML +=  '<li>Por favor completa el nombre</li>';//Muestra en pantalla el error + el siguiente

			e.preventDefault(); //Utiliza el parametro e para que cuando este vacio el campo nombre mande el error
		}else{
			error.style.display = 'none';
		}
	}
	//Este función valida que si el campo de correo esta vacio muestra un mensajede error
	function validarCorreo(e){ //Se escribe el parametro e para funcione e.preventDefault()
		if(correo.value == '' || correo.value == null){  //Aplica la condición si el valor del campo correo esta vacio}
			console.log('Por favor completa el correo'); //Mensaje
			error.style.display = 'block'; //Modifica la prioridad display que oculta el bloque de errores y ahora mostrarlo
			error.innerHTML +=  '<li>Por favor completa el correo</li>';//Muestra en pantalla el error + el siguiente

			e.preventDefault(); //Utiliza el parametro e para que cuando este vacio el campo correo mande el error
		}else{
			error.style.display = 'none'; //Si no esta vacio el campo no muestra el error
		}
	}
	//Para las siguientes funciones aplican los mismos comentarios que las funciones anteriores
	function validarSexo(e){
		if (sexo.value == '' || sexo.value == null){
			console.log('Por favor completa el sexo');
			error.style.display = 'block';
			error.innerHTML +=  '<li>Por favor  completa el sexo</li>';

			e.preventDefault();
		}else{
			error.style.display = 'none';
		}
	}

	function validarTerminos(e){
		if (terminos.checked == false){
			console.log('Por favor acepta los terminos');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor acepta los terminos</li>';

			e.preventDefault();
		}else{
			error.style.display = 'none';
		}
	}
	//La función validarformulario llama a las funciones que validan los espacios sin llenar
	function validarFormulario(e){
		error.innerHTML = '';

		validarNombre(e); //Se llama a la función que valida el llenado del nombre
		validarCorreo(e); //Se llama a la función que valida el llenado del correo
		validarSexo(e); //Se llama a la función que valida la selección del sexo
		validarTerminos(e); //Se llama a la función que valida la selección de los terminos
	}
	//La Siguiente linea llama a la función validarFormulario al momento de presionar el boton
	formulario.addEventListener('submit',validarFormulario);
}())