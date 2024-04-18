import type { Estudio } from "../../../utils/definitions.ts"
import type { SetStateAction, Dispatch } from "react"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/react"
import {
  handleAddEstudio,
  handleEstudioChange,
} from "../../../utils/handleFunctions.ts"

export default function EstudiosInput({
  estudios,
  setEstudios,
}: {
  estudios: Estudio[]
  setEstudios: Dispatch<SetStateAction<Estudio[]>>
}) {
  return (
    <section className="flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-violet-400">Estudios</h2>
      {estudios.map((estudio, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Input
            type="text"
            label="Titulación"
            name="titulo"
            isRequired
            value={estudio.titulo}
            onChange={(e) =>
              handleEstudioChange(index, e, estudios, setEstudios)
            }
          />
          <Input
            type="text"
            label="Centro de estudios"
            name="escuela"
            isRequired
            value={estudio.escuela}
            onChange={(e) =>
              handleEstudioChange(index, e, estudios, setEstudios)
            }
          />
          <Input
            type="date"
            label="Fecha de entrada"
            name="fecha"
            className="text-black"
            value={estudio.fecha}
            onChange={(e) =>
              handleEstudioChange(index, e, estudios, setEstudios)
            }
          />
          <Textarea
            name="descripcion"
            placeholder="¿Qué aprendiste?"
            label="Descripción"
            value={estudio.descripcion}
            onChange={(e) =>
              handleEstudioChange(index, e, estudios, setEstudios)
            }
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
    </section>
  )
}
