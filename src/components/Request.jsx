import React from "react";

function Request({user,setUser}) {

  const handleLogout = ()=>{
    setUser([])
  }

  return (
    
      <div className="flex flex-col items-center text-center h-52 pt-1 m-2" >
        <h1 className="text-center text-lg font-sans ">Se ha encontrado su documento {user} </h1>
        <div className="flex text-center">
          <h2 className="text-center text-lg font-sans mb-52"> Para mas informacion de click aqui </h2>
          <a className="ml-2 text-purple-950" href="http://">🔗</a>
        </div>
        <h2 className="text-center text-lg font-sans mb-52"></h2>
        <button className="flex justify-center items-center text-center w-20 h-8 text-md rounded-md border-solid border-2 border-white bg-blue4 m-2"
        onClick={handleLogout}
        >Salir</button>
      </div>
  
  );
}

export default Request;

/* document.addEventListener("keyup", function (event) {
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
      id: "1140891029",
    },
  ]; */


