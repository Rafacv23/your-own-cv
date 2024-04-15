import React from "react"

export default function CvPreview({ data }) {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-3xl">
        {data.nombre} {data.apellidos}
      </h1>
      <div className="flex gap-4">
        <aside>
          <h2 className="text-2xl">Contacto</h2>
          <h3>{data.email}</h3>
          <h3>{data.telefono}</h3>
          <h3>{data.web}</h3>
          <h3>{data.pais}</h3>
        </aside>
        <main>
          {data.descripcion}
          <h2 className="text-2xl">Experiencia</h2>
          {data.trabajos
            ? data.trabajos.map((trabajo) => (
                <li key={trabajo.trabajo}>{trabajo.trabajo}</li>
              ))
            : null}
          <h2 className="text-2xl">Estudios</h2>
          {data.estudios
            ? data.estudios.map((estudio) => (
                <li key={estudio.titulacion}>{estudio.titulacion}</li>
              ))
            : null}
          <h2 className="text-2xl">Habilidades</h2>
          {data.habilidades
            ? data.habilidades.map((habilidad) => (
                <li key={habilidad.habilidad}>{habilidad.habilidad}</li>
              ))
            : null}
        </main>
      </div>
      <button className="bg-violet-400 p-2 rounded">Descargar</button>
    </article>
  )
}
