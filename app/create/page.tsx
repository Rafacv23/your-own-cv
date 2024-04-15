"use client"
import React, { useState } from "react"
import CvPreview from "../components/create/CvPreview"

export default function Create() {
  const [data, setData] = useState(null)
  const [trabajos, setTrabajos] = useState([
    { trabajo: "", empresa: "", fecha: "", descripcion: "" },
  ])
  const [estudios, setEstudios] = useState([
    { titulo: "", escuela: "", fecha: "", descripcion: "" },
  ])
  const [habilidades, setHabilidades] = useState([{ habilidad: "" }])

  async function createCv(formData: FormData) {
    const rawFormData = {
      nombre: formData.get("nombre"),
      apellidos: formData.get("apellidos"),
      descripcion: formData.get("descripcion"),
      email: formData.get("email"),
      avatar: formData.get("avatar"),
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
          <h2>Presentación</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Nombre"
            required
            min={2}
            name="nombre"
          />
          <input
            className="text-black"
            type="text"
            placeholder="Apellidos"
            required
            min={2}
            name="apellidos"
          />
          <textarea
            className="text-black"
            name="descripcion"
            placeholder="Descripción"
          />
          <input
            className="text-black"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input className="text-black" type="file" name="avatar" />
          <input
            className="text-black"
            type="number"
            placeholder="Teléfono"
            name="telefono"
          />
          <input
            className="text-black"
            type="text"
            placeholder="País de residencia"
            name="pais"
          />
          <input
            className="text-black"
            type="text"
            placeholder="Página web"
            name="web"
          />
          <h2>Trabajos</h2>
          {trabajos.map((trabajo, index) => (
            <div key={index} className="flex flex-col gap-4">
              <input
                type="text"
                className="text-black"
                placeholder="Puesto de trabajo"
                name="trabajo"
                value={trabajo.trabajo}
                onChange={(e) => handleTrabajoChange(index, e)}
              />
              <input
                type="text"
                className="text-black"
                placeholder="Empresa"
                name="empresa"
                value={trabajo.empresa}
                onChange={(e) => handleTrabajoChange(index, e)}
              />
              <input
                type="date"
                placeholder="Fecha de entrada"
                name="fecha"
                className="text-black"
                value={trabajo.fecha}
                onChange={(e) => handleTrabajoChange(index, e)}
              />
              <textarea
                name="descripcion"
                placeholder="Qué has aprendido?"
                className="text-black"
                value={trabajo.descripcion}
                onChange={(e) => handleTrabajoChange(index, e)}
              />
              {/* Otros campos de trabajo */}
            </div>
          ))}
          <button type="button" onClick={handleAddTrabajo}>
            Añadir trabajo
          </button>
          <h2>Estudios</h2>
          {estudios.map((estudio, index) => (
            <div key={index} className="flex flex-col gap-4">
              <input
                type="text"
                className="text-black"
                placeholder="Titulación"
                name="trabajo"
                value={estudio.titulo}
                onChange={(e) => handleEstudioChange(index, e)}
              />
              <input
                type="text"
                className="text-black"
                placeholder="Centro de estudios"
                name="empresa"
                value={estudio.escuela}
                onChange={(e) => handleEstudioChange(index, e)}
              />
              <input
                type="date"
                placeholder="Fecha de entrada"
                name="fecha"
                className="text-black"
                value={estudio.fecha}
                onChange={(e) => handleEstudioChange(index, e)}
              />
              <textarea
                name="descripcion"
                placeholder="Qué has aprendido?"
                className="text-black"
                value={estudio.descripcion}
                onChange={(e) => handleEstudioChange(index, e)}
              />
              {/* Otros campos de trabajo */}
            </div>
          ))}
          <button type="button" onClick={handleAddEstudio}>
            Añadir estudios
          </button>
          <h2>Habilidades</h2>
          {habilidades.map((habilidad, index) => (
            <div key={index} className="flex flex-col gap-4">
              <input
                className="text-black"
                type="text"
                placeholder="Habilidad"
                name="habilidad"
                value={habilidad.habilidad}
                onChange={(e) => handleHabilidadChange(index, e)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddHabilidad}>
            Añadir habilidad
          </button>
          <button>Guardar</button>
        </form>
      </aside>
      {data ? <CvPreview data={data} /> : null}
    </main>
  )
}
