import React from "react"
import { GiSkills } from "react-icons/gi"
import type { Habilidades, Habilidad } from "../../utils/definitions.ts"

export default function HabilidadesList({ habilidades }: Habilidades) {
  return (
    <section>
      <h2 className="text-2xl text-violet-400 font-semibold mb-4 flex gap-4 items-center">
        <GiSkills /> Habilidades
      </h2>
      <ul className="list-none flex flex-col gap-4 mb-8 mt-4">
        {habilidades.map((habilidad: Habilidad) => (
          <li key={habilidad.habilidad}>{habilidad.habilidad}</li>
        ))}
      </ul>
    </section>
  )
}
