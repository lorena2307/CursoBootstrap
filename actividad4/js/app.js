var datos = [
    {
        Nombre : "Diego",
        Apellido : "Cueto",
        Edad : 23,
        Sexo : "H",
        Email : "diegocueto-9@hotmail.com",
        Telefono : 966232309,
        Direccion : "16 de Septiembre",
        Colonia : "Nicatan",
        Municipio : "Tonala",
        Estado : "Chiapas",
        Pais : "Mexico"

    },
    {
        Nombre : "Lucio",
        Apellido : "Escobar",
        Edad : 22,
        Sexo : "H",
        Email : "lucio48@outlook.com",
        Telefono : 9681197536,
        Direccion : "Revolucion",
        Colonia : "Union Agrarista",
        Municipio : "Jiquipilas",
        Estado : "Chiapas",
        Pais : "Mexico"

    },
    {
        Nombre : "Tomas",
        Apellido : "Lopez",
        Edad : 22,
        Sexo : "H",
        Email : "thomas_mcthom@Outlook.com",
        Telefono : 9681009079,
        Direccion : "Segunda Avenida Sur",
        Colonia : "Santa Cruz",
        Municipio : "Cintalapa",
        Estado : "Chiapas",
        Pais : "Mexico"

    },
    {
        Nombre : "Fidel",
        Apellido : "Rodriguez",
        Edad : 22,
        Sexo : "H",
        Email : "fidelin24_@hotmail.com",
        Telefono : 9681143111,
        Direccion : "calle central",
        Colonia : "Las Merceditas",
        Municipio : "Cintalapa",
        Estado : "Chiapas",
        Pais : "Mexico"

    },
    {
        Nombre : "Lorena",
        Apellido : "Zarate",
        Edad : 22,
        Sexo : "M",
        Email : "anerol_brumars@hotmail.com",
        Telefono : 9684556783,
        Direccion : "8a oriente entre 4a y 5a Norte",
        Colonia : "San Francisco",
        Municipio : "Cintalapa",
        Estado : "Chiapas",
        Pais : "Mexico"

    },
    {
        Nombre : "Roxana",
        Apellido : "Salazar",
        Edad : 22,
        Sexo : "M",
        Email : "monce.26@hotmail.com",
        Telefono : 9689542380,
        Direccion : "Segunda Avenida Sur",
        Colonia : "Tehuacan",
        Municipio : "Cintalapa",
        Estado : "Chiapas",
        Pais : "Mexico"

    },
    {
        Nombre : "Guadalupe",
        Apellido : "Aguilar",
        Edad : 22,
        Sexo : "M",
        Email : "guadalupeaguilarmedina@outlook.com",
        Telefono : 9684345300,
        Direccion : "Avenida ferrocarril",
        Colonia : "Joaquin Amaro",
        Municipio : "Pijijiapan",
        Estado : "Chiapas",
        Pais : "Mexico"

    }

  ];


  (document).ready(mostrar());

function mostrar(){
  for (var i = 0; i < datos.length; i++) {
    var tablita = document.getElementById("tablita").innerHTML;
    document.getElementById("tablita").innerHTML=tablita+'<tr><td>'+
    datos[i].Nombre+'</td><td>'+
    datos[i].Apellido+'</td><td>'+
    datos[i].Edad+'</td><td>'+
    datos[i].Sexo+'</td><td>'+
    datos[i].Email+'</td><td>'+
    datos[i].Telefono+'</td><td>'+
    datos[i].Direccion+'</td><td>'+
    datos[i].Colonia+'</td><td>'+
    datos[i].Municipio+'</td><td>'+
    datos[i].Estado+'</td><td>'+
    datos[i].Pais+'</td></tr>';
  }
}
