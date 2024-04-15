import React from "react"
import { GiSkills } from "react-icons/gi"

export default function HabilidadesList({ habilidades }) {
  return (
    <section>
      <h2 className="text-2xl text-violet-400 font-semibold mb-4 flex gap-4 items-center">
        <GiSkills /> Habilidades
      </h2>
      <ul className="list-none flex flex-col gap-4 mb-8 mt-4">
        {habilidades.map((habilidad) => (
          <li key={habilidad.habilidad}>{habilidad.habilidad}</li>
        ))}
      </ul>
    </section>
  )
}
