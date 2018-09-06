    var datos = [
      {
        "Nombre": "Diego",
        "Apellido": "Cueto",
        "Edad": "23",
        "Sexo": "H",
        "Email": "diegocueto@hotmail.com",
        "Telefono": "9684345300",
        "Direccion": "",
        "Colonia": "",
        "Municipio": "San Isidro",
        "Estado": "Chiapas",
        "Pais": "Mexico"
      }]
  var foo = datos.map(function(bar){
    return '<li>'+bar.Nombre+' '+bar.Apellido+' '+bar.Edad+' '+bar.Sexo+' '+bar.Email+' '+bar.Telefono+' '+bar.Direccion+' '+bar.Colonia+' '+bar.Municipio+' '+bar.Estado+' '+bar.Pais+'</li>'
  })
  document.getElementById("foo").innerHTML = foo;
