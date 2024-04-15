"use client"
import React, { useState } from "react"
import CvPreview from "../components/create/CvPreview"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Textarea } from "@nextui-org/react"
export default function Create() {
  const [data, setData] = useState(null)
  const [trabajos, setTrabajos] = useState([])
  const [estudios, setEstudios] = useState([])
  const [habilidades, setHabilidades] = useState([])

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

    console.log(rawFormData)

    setData(rawFormData)
    // mutate data
    // revalidate cache
  }

  const handleAddTrabajo = () => {
    setTrabajos([
      ...trabajos,
      { trabajo: "", empresa: "", fecha: "", descripcion: "" },
    ])
  }

  const handleAddEstudio = () => {
    setEstudios([
      ...estudios,
      { titulo: "", escuela: "", fecha: "", descripcion: "" },
    ])
  }

  const handleAddHabilidad = () => {
    setHabilidades([...habilidades, { habilidad: "" }])
  }

  const handleTrabajoChange = (index, e) => {
    const { name, value } = e.target
    const newTrabajos = [...trabajos]
    newTrabajos[index][name] = value
    setTrabajos(newTrabajos)
  }

  const handleEstudioChange = (index, e) => {
    const { name, value } = e.target
    const newEstudios = [...estudios]
    newEstudios[index][name] = value
    setEstudios(newEstudios)
  }

  const handleHabilidadChange = (index, e) => {
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
            onClick={handleAddTrabajo}
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
            onClick={handleAddEstudio}
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
            onClick={handleAddHabilidad}
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
