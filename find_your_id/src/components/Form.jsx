
import { useState } from "react";


function Form({setUser}) {
  const [id, setid] = useState("");
  const [error, seterror] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id === "") {
      seterror(true);
      return;
    }
    
    seterror(false);
    setUser ([id])
  };

  return (

   
    <div className="flex justify-center text-center items-center bg-blue5 bg-opacity-15 rounded-2xl w-2/5 h-3/5 mt-7   ">
      <div className="flex flex-col justify-center items-center text-center">
      <div>
      <section className="flex justify-center items-center text-center ">
        <form
          className="flex flex-col justify-center items-center text-center h-96 "
          onSubmit={handleSubmit}
        >
          <h1 className="flex justify-center items-center text-center mt-2 pb-7 mb-2 font-bold font-sans text-2xl">
            CONSULTA EL DOCUMENTO PERDIDO
          </h1>
          <p className="p-1 text-lg font-serif">Tipo de documento</p>
          <select className="flex w-64 justify-center items-center rounded-md text-sm border-solid border-2 border-white bg-blue4 p-1 h-8  ">
            <option value="">C.C</option>
            <option value="">T.I</option>
          </select>
          <p className="flex p-1 mt-2  text-lg font-serif ">
            Numero de documento
          </p>
          <div>
            <input
              className="flex w-64 justify-center items-center rounded-md text-sm border-solid border-2 border-white bg-blue4 p-1 h-8 "
              type="number"
              placeholder=""
              value={id}
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          <div className="block pt-1 m-5">
            <button className="flex justify-center items-center text-center w-20 h-8 text-md rounded-md border-solid border-2 border-white bg-blue4 m-2">
              Consultar
            </button>
          </div>
        </form>
      </section>
      <div> {error && <p>Este campo es obligatorio</p>} </div>
    </div>
      </div>
    </div>
  
    
  );
}

export default Form;
