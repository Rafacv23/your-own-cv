import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/react"
import type { Trabajo } from "../../../utils/definitions.ts"
import type { SetStateAction, Dispatch } from "react"
import {
  handleTrabajoChange,
  handleAddTrabajo,
} from "../../../utils/handleFunctions.ts"

export default function TrabajosInput({
  trabajos,
  setTrabajos,
}: {
  trabajos: Trabajo[]
  setTrabajos: Dispatch<SetStateAction<Trabajo[]>>
}) {
  return (
    <section className="flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-violet-400">Trabajos</h2>
      {trabajos.map((trabajo, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Input
            type="text"
            label="Puesto de trabajo"
            name="trabajo"
            isRequired
            value={trabajo.trabajo}
            onChange={(e) =>
              handleTrabajoChange(index, e, trabajos, setTrabajos)
            }
          />
          <Input
            type="text"
            label="Empresa"
            name="empresa"
            isRequired
            value={trabajo.empresa}
            onChange={(e) =>
              handleTrabajoChange(index, e, trabajos, setTrabajos)
            }
          />
          <Input
            className="text-black"
            type="date"
            label="Fecha de entrada"
            name="fecha"
            value={trabajo.fecha}
            onChange={(e) =>
              handleTrabajoChange(index, e, trabajos, setTrabajos)
            }
          />
          <Textarea
            name="descripcion"
            placeholder="¿Qué tareas haces en el trabajo?"
            label="Descripción"
            value={trabajo.descripcion}
            onChange={(e) =>
              handleTrabajoChange(index, e, trabajos, setTrabajos)
            }
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
    </section>
  )
}
