import { useState, useEffect } from "react"
import CvPreview from "./CvPreview"
import TrabajosInput from "./form/TrabajosInput"
import EstudiosInput from "./form/EstudiosInput"
import HabilidadesInput from "./form/HabilidadesInput"
import PresentacionInput from "./form/PresentacionInput"
import { Button } from "@nextui-org/react"
import { GrAdd } from "react-icons/gr"
import { zodSchema } from "../../utils/zodSchema.js"
export default function Create() {
  const [data, setData] = useState(null)
  const [trabajos, setTrabajos] = useState([])
  const [estudios, setEstudios] = useState([])
  const [habilidades, setHabilidades] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem("cv")
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      setData(parsedData)
      setTrabajos(parsedData.trabajos || [])
      setEstudios(parsedData.estudios || [])
      setHabilidades(parsedData.habilidades || [])
    }
  }, [])

  async function createCv(formData) {
    const rawFormData = {
      nombre: formData.get("nombre"),
      apellidos: formData.get("apellidos"),
      descripcion: formData.get("descripcion"),
      email: formData.get("email"),
      //avatar: formData.get("avatar"),
      telefono: formData.get("telefono"),
      pais: formData.get("pais"),
      web: formData.get("web"),
      trabajos,
      estudios,
      habilidades,
    }

    try {
      // Validar los datos del formulario con el esquema de Zod
      zodSchema.parse(rawFormData)

      localStorage.setItem("cv", JSON.stringify(rawFormData))
      setData(rawFormData)
      // mutate data
      // revalidate cache
    } catch (error) {
      // Si hay errores de validación, manejarlos aquí
      console.error("Error de validación:")
      // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones
    }
  }

  return (
    <main className="gap-4 grid grid-cols-1 sm:grid-cols-2 items-start justify-center mx-0 pt-32">
      <aside>
        <form className="flex flex-col gap-4 mb-24" id="form" action={createCv}>
          <PresentacionInput />
          <TrabajosInput trabajos={trabajos} setTrabajos={setTrabajos} />
          <EstudiosInput estudios={estudios} setEstudios={setEstudios} />
          <HabilidadesInput
            habilidades={habilidades}
            setHabilidades={setHabilidades}
          />
          <div className="flex justify-center">
            <Button
              color="success"
              startContent={<GrAdd />}
              onClick={(e) => {
                e.preventDefault() // Prevenir el comportamiento por defecto del formulario
                const form = e.target.closest("form") // Obtener el formulario más cercano al botón
                if (form) {
                  const formData = new FormData(form) // Crear un objeto FormData con los datos del formulario
                  createCv(formData) // Llamar a la función createCv con los datos del formulario
                }
              }}
            >
              Guardar
            </Button>
          </div>
        </form>
      </aside>
      {data ? <CvPreview data={data} /> : null}
    </main>
  )
}
