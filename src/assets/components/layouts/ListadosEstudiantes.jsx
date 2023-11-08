

const ListadosEstudiantes = ({estudiantes}) => {
    console.log({estudiantes})
  return (
    <section className="Card">
        {
            estudiantes.map((estudiante)=>(
                <section className="lista">
                    <p>Nombre: {estudiante.nombre}</p>
                    <p>Edad: {estudiante.edad}</p>
                    <p>Nota: {estudiante.nota}</p>
                    <p>ID: {estudiante.id}</p>
                    
                </section>
            ))
        }
    </section>
  )
}

export default ListadosEstudiantes

