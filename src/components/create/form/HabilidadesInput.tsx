import type { Habilidad } from "../../../utils/definitions.ts"
import React from "react"
import type { SetStateAction, Dispatch } from "react"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import {
  handleAddHabilidad,
  handleHabilidadChange,
} from "../../../utils/handleFunctions.ts"

export default function HabilidadesInput({
  habilidades,
  setHabilidades,
}: {
  habilidades: Habilidad[]
  setHabilidades: Dispatch<SetStateAction<Habilidad[]>>
}) {
  return (
    <section className="flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-violet-400">Habilidades</h2>
      {habilidades.map((habilidad, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Input
            type="text"
            label="Habilidad"
            name="habilidad"
            isRequired
            value={habilidad.habilidad}
            onChange={(e) =>
              handleHabilidadChange(index, e, habilidades, setHabilidades)
            }
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
    </section>
  )
}
