function getDay() {
	let date = new Date();
	let numDay = date.getDay();
	let day;
	switch (numDay) {
		case 0:
    		day = "Domingo";
    		break;
  		case 1:
    		day = "Lunes";
    		break;
  		case 2:
     		day = "Martes";
    		break;
  		case 3:
    		day = "Miercoles";
    		break;
  		case 4:
    		day = "Jueves";
    		break;
  		case 5:
    		day = "Viernes";
    		break;
  		case 6:
    		day = "Sabado";
	}
	return day;
}
