function validateForm(){

var letrasnormales = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

	function validarNombre(){
		valor = document.getElementById('name').value;
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
			var uno = document.getElementsByClassName ('input-box')[0];
			var dos = document.createElement('span');
			var tres = document.createTextNode('Debe ingresar su name');
			dos.appendChild(tres);
			uno.appendChild(dos);
			return false;
		}else if(!letrasnormales.test(valor)){
			var uno = document.getElementsByClassName ('input-box')[0];
			var dos = document.createElement('span');
			var tres = document.createTextNode('Deben ser solo letras');
			dos.appendChild(tres);
			uno.appendChild(dos);
			return true;
		} else if (valor.charAt(0) != valor.charAt(0).toUpperCase()){
			var uno = document.getElementsByClassName ('input-box')[0];
			var dos = document.createElement('span');
			var tres = document.createTextNode('Comenzar con mayus');
			dos.appendChild(tres);
			uno.appendChild(dos);

		}
	}
	validarNombre();

	function validarApellido(){
		valor = document.getElementById('lastname').value;
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor)){
			var uno = document.getElementsByClassName ('input-box')[1];
			var dos = document.createElement('span');
			var tres = document.createTextNode('está vacio y es OBLIGATORIO');
			dos.appendChild(tres);
			uno.appendChild(dos);
			return false;
		}else if(!letrasnormales.test(valor)){
			var uno = document.getElementsByClassName ('input-box')[1];
			var dos = document.createElement('span');
			var tres = document.createTextNode('Deben ser solo letras');
			dos.appendChild(tres);
			uno.appendChild(dos);
			return true;
		} else if (valor.charAt(0) != valor.charAt(0).toUpperCase()){
			var uno = document.getElementsByClassName ('input-box')[1];
			var dos = document.createElement('span');
			var tres = document.createTextNode('Comenzar con mayus');
			dos.appendChild(tres);
			uno.appendChild(dos);

		}		
	}	
	validarApellido();


	function validarEmail(){
		caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
		valor = document.getElementById('input-email').value;
		if(valor === null || valor.length === 0){
			var uno = document.getElementsByClassName ('input-box')[2];
			var dos = document.createElement('span');
			var tres = document.createTextNode('verifique su e-mail');
			dos.appendChild(tres);
			uno.appendChild(dos);
			return false;
		}
	}	
	validarEmail();

	function CheckPassword(){
		valor = document.getElementById('input-password').value;
		if(valor == null || valor.length === 0){
			var uno = document.getElementsByClassName ('input-box')[3];
			var dos = document.createElement('span');
			var tres = document.createTextNode('la contraseña debe tener al menos 6 caracteres');
			dos.appendChild(tres);
			uno.appendChild(dos);
			return false;
		}else if(valor.length < 6){
			var uno = document.getElementsByClassName ('input-box')[3];
			var dos = document.createElement('span');
			var tres = document.createTextNode('incorrecto ...! ');
			dos.appendChild(tres);
			uno.appendChild(dos);
			return true;
		} 
	}		
	CheckPassword();


	function SelectBici(){
		var valor = document.getElementsByTagName('select')[0];
		var tipo = valor.value; 
		var uno = document.getElementsByClassName ('input-box')[4];
		var dos = document.createElement('span');
		var tres = document.createTextNode('Debes seleccionar al menos un tipo de bici');
		dos.appendChild(tres);
		uno.appendChild(dos);

		return tipo == 'urbana' || tipo == 'trekking' || tipo == 'electrica' || tipo == 'estatica';
	}		
	SelectBici();

}

