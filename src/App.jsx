import { estudiantes } from "./assets/components/config/databBase"
import ListadosEstudiantes from "./assets/components/layouts/ListadosEstudiantes"

function App() {
  console.log(estudiantes)
  return (
   <section>
    <ListadosEstudiantes estudiantes={estudiantes}/>
   </section>
  )
}

export default App
