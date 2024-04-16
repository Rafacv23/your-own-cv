"use client"
import React, { useState, useEffect } from "react"
import CvPreview from "../components/create/CvPreview"
import {
  Trabajo,
  Estudio,
  Habilidad,
  CvAndContactData,
} from "../utils/definitions"
import TrabajosInput from "../components/create/form/TrabajosInput"
import EstudiosInput from "../components/create/form/EstudiosInput"
import HabilidadesInput from "../components/create/form/HabilidadesInput"
import PresentacionInput from "../components/create/form/PresentacionInput"

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
    <main className="min-h-screen w-full gap-4 flex flex-col sm:flex-row items-center justify-center ">
      <aside>
        <form className="flex flex-col gap-4 mt-24 mb-24" action={createCv}>
          <PresentacionInput />
          <TrabajosInput trabajos={trabajos} setTrabajos={setTrabajos} />
          <EstudiosInput estudios={estudios} setEstudios={setEstudios} />
          <HabilidadesInput
            habilidades={habilidades}
            setHabilidades={setHabilidades}
          />
          <button className=" bg-green-600 rounded p-2 text-black">
            Guardar
          </button>
        </form>
      </aside>
      {data ? <CvPreview data={data} /> : null}
    </main>
  )
}
