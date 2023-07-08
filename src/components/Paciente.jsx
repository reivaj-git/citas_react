export const Paciente = ({ paciente, setPaciente, elimarPaciente }) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente
  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar este paciente?")

    if (respuesta) {
      elimarPaciente(id)
    }
  }


  return (
    <div className=" mb-3 mx-5 bg-white shadow-md px-5 py-10 rounded-xl ">
      <p className="font-bold mb-3 text-gray-600 uppercase">Nombre: {""}<span className="font-normal normal-case">{nombre}</span></p>

      <p className="font-bold mb-3 text-gray-600 uppercase">Propietario: {""}<span className="font-normal normal-case">{propietario}</span></p>

      <p className="font-bold mb-3 text-gray-600 uppercase">Correo: {""}<span className="font-normal normal-case">{email}</span></p>

      <p className="font-bold mb-3 text-gray-600 uppercase">Fecha Alta: {""}<span className="font-normal normal-case">{fecha}</span></p>

      <p className="font-bold mb-3 text-gray-600 uppercase">Sintomas: {""}<span className="font-normal normal-case">{sintomas}</span></p>

      <div className="flex justify-center gap-4 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-md"
          onClick={() => setPaciente(paciente)}> Editar </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-md"
          onClick={handleEliminar}
        >
          Elimar
        </button>
      </div>


    </div>


  )
}
