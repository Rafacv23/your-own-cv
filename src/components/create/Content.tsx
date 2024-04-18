import { useState, useEffect } from "react"
import CvPreview from "../../components/create/CvPreview"
import type {
  Trabajo,
  Estudio,
  Habilidad,
  CvAndContactData,
} from "../../utils/definitions"
import TrabajosInput from "../../components/create/form/TrabajosInput"
import EstudiosInput from "../../components/create/form/EstudiosInput"
import HabilidadesInput from "../../components/create/form/HabilidadesInput"
import PresentacionInput from "../../components/create/form/PresentacionInput"
import { Button } from "@nextui-org/react"
import { GrAdd } from "react-icons/gr"
import Skeleton from "../../components/create/Skeleton"

export default function Create() {
  const [data, setData] = useState<CvAndContactData | null>(null)
  const [trabajos, setTrabajos] = useState<Trabajo[]>([])
  const [estudios, setEstudios] = useState<Estudio[]>([])
  const [habilidades, setHabilidades] = useState<Habilidad[]>([])

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

  async function createCv(formData: FormData) {
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

    localStorage.setItem("cv", JSON.stringify(rawFormData))

    setData(rawFormData)
    // mutate data
    // revalidate cache
  }

  return (
    <main className="gap-4 grid grid-cols-1 sm:grid-cols-2 items-start justify-center mx-12 pt-32">
      <aside>
        <form
          className="flex flex-col gap-4  mb-24"
          id="form"
          action={createCv}
        >
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
      {data ? <CvPreview data={data} /> : <Skeleton />}
    </main>
  )
}
