//Busqueda en list de numero de documento ingresado en input//

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    init();
  }
});

function init() {
  const ced = document.getElementById("id_Doc").value;
  const date = list.find(function (find) {
    return find.id === ced;
  });
  //Condicional para verificacion de documento ingresado//
  if (date) {
    document.getElementById(
      "yax"
    ).innerHTML = `Felicidades, el documento se encuentra en la base de datos`;
    document.getElementById(
      "nom"
    ).innerHTML = `El documento ${ced} pertenece a ${date.nameID} ${date.lastName}`;
    document.getElementById("nom2").innerHTML = `Para más informacion presione`;
    document.getElementById("inf").innerHTML = "🔗";
  } else if (ced == "") {
    alert(`Por favor ingrese documento a consultar`);
  } else {
    alert(`El documento ${ced} no se encuentra en la base de datos`);
  }
}

const list = [
  {
    nameID: "ROGER",
    lastName: "MENDEZ",
    id: "1140891026",
  },
  {
    nameID: "SNEIDER",
    lastName: "MOLANO",
    id: "1140891027",
  },
  {
    nameID: "ANGELA",
    lastName: "MONTES",
    id: "1140891028",
  },
  {
    nameID: "NEFERIT",
    lastName: "DAES",
    id: "1140891028",
  },
];
