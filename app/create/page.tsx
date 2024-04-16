"use client"
import React, { useState, useEffect } from "react"
import CvPreview from "../components/create/CvPreview"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Textarea } from "@nextui-org/react"
import { Trabajo, Estudio, Habilidad } from "../utils/definitions"
import {
  handleAddEstudio,
  handleAddHabilidad,
  handleAddTrabajo,
} from "../utils/addItem"

export default function Create() {
  const [data, setData] = useState<FormData | null>(null)
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

  const handleTrabajoChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    const newTrabajos = [...trabajos]

    // Verifica si el nombre es una de las claves válidas de Trabajo
    if (
      name === "trabajo" ||
      name === "empresa" ||
      name === "fecha" ||
      name === "descripcion"
    ) {
      newTrabajos[index][name as keyof Trabajo] = value
      setTrabajos(newTrabajos)
    } else {
      console.error(`'${name}' no es una propiedad válida para Trabajo`)
    }
  }

  const handleEstudioChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    const newEstudios = [...estudios]

    // Verifica si el nombre es una de las claves válidas de Estudio
    if (
      name === "titulo" ||
      name === "escuela" ||
      name === "fecha" ||
      name === "descripcion"
    ) {
      newEstudios[index][name as keyof Estudio] = value
      setEstudios(newEstudios)
    } else {
      console.error(`'${name}' no es una propiedad válida para Estudio`)
    }
  }

  const handleHabilidadChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target
    const newHabilidades = [...habilidades]
    newHabilidades[index].habilidad = value
    setHabilidades(newHabilidades)
  }

  return (
    <main className="min-h-screen w-full gap-4 flex flex-col sm:flex-row items-center justify-center ">
      <aside>
        <form className="flex flex-col gap-4 mt-24 mb-24" action={createCv}>
          <h2 className="text-2xl font-bold text-violet-400">Presentación</h2>
          <Input type="text" isRequired min={2} name="nombre" label="Nombre" />
          <Input type="text" label="Apellidos" min={2} name="apellidos" />
          <Textarea
            name="descripcion"
            label="Descripción"
            placeholder="¿A qué te dedicas?"
          />
          <Input type="email" isRequired label="Email" name="email" />
          {/*<Input type="file" name="avatar" />*/}
          <Input type="number" label="Teléfono" name="telefono" isRequired />
          <Input
            type="text"
            label="País de residencia"
            name="pais"
            isRequired
          />
          <Input type="text" label="Página web" name="web" />
          <h2 className="text-2xl font-bold text-violet-400">Trabajos</h2>
          {trabajos.map((trabajo, index) => (
            <div key={index} className="flex flex-col gap-4">
              <Input
                type="text"
                label="Puesto de trabajo"
                name="trabajo"
                isRequired
                value={trabajo.trabajo}
                onChange={(e) => handleTrabajoChange(index, e)}
              />
              <Input
                type="text"
                label="Empresa"
                name="empresa"
                isRequired
                value={trabajo.empresa}
                onChange={(e) => handleTrabajoChange(index, e)}
              />
              <Input
                className="text-black"
                type="date"
                label="Fecha de entrada"
                name="fecha"
                value={trabajo.fecha}
                onChange={(e) => handleTrabajoChange(index, e)}
              />
              <Textarea
                name="descripcion"
                placeholder="¿Qué tareas haces en el trabajo?"
                label="Descripción"
                value={trabajo.descripcion}
                onChange={(e) => handleTrabajoChange(index, e)}
              />
            </div>
          ))}
          <Button
            color="secondary"
            variant="ghost"
            type="button"
            onClick={() => handleAddTrabajo(setTrabajos, trabajos)}
          >
            Añadir trabajo
          </Button>
          <h2 className="text-2xl font-bold text-violet-400">Estudios</h2>
          {estudios.map((estudio, index) => (
            <div key={index} className="flex flex-col gap-4">
              <Input
                type="text"
                label="Titulación"
                name="titulo"
                isRequired
                value={estudio.titulo}
                onChange={(e) => handleEstudioChange(index, e)}
              />
              <Input
                type="text"
                label="Centro de estudios"
                name="escuela"
                isRequired
                value={estudio.escuela}
                onChange={(e) => handleEstudioChange(index, e)}
              />
              <Input
                type="date"
                label="Fecha de entrada"
                name="fecha"
                className="text-black"
                value={estudio.fecha}
                onChange={(e) => handleEstudioChange(index, e)}
              />
              <Textarea
                name="descripcion"
                placeholder="¿Qué aprendiste?"
                label="Descripción"
                value={estudio.descripcion}
                onChange={(e) => handleEstudioChange(index, e)}
              />
            </div>
          ))}
          <Button
            color="secondary"
            variant="ghost"
            type="button"
            onClick={() => handleAddEstudio(setEstudios, estudios)}
          >
            Añadir estudios
          </Button>
          <h2 className="text-2xl font-bold text-violet-400">Habilidades</h2>
          {habilidades.map((habilidad, index) => (
            <div key={index} className="flex flex-col gap-4">
              <Input
                type="text"
                label="Habilidad"
                name="habilidad"
                isRequired
                value={habilidad.habilidad}
                onChange={(e) => handleHabilidadChange(index, e)}
              />
            </div>
          ))}
          <Button
            color="secondary"
            variant="ghost"
            type="button"
            onClick={() => handleAddHabilidad(setHabilidades, habilidades)}
          >
            Añadir habilidad
          </Button>
          <button></button>
          <button className=" bg-green-600 rounded p-2 text-black">
            Guardar
          </button>
        </form>
      </aside>
      {data ? <CvPreview data={data} /> : null}
    </main>
  )
}
