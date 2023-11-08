

const ListadosEstudiantes = ({estudiantes}) => {
    console.log({estudiantes})
  return (
    <section className="Card">
        {
            estudiantes.map((estudiantes)=>(
                <section className="lista">
                    <p>Nombre: {estudiantes.nombre}</p>
                    <p>Edad: {estudiantes.edad}</p>
                    <p>Nota: {estudiantes.nota}</p>
                    <p>ID: {estudiantes.id}</p>
                    
                </section>
            ))
        }
    </section>
  )
}

export default ListadosEstudiantes

