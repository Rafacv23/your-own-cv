import { Estudio, Habilidad, Trabajo } from "../utils/definitions"
import { SetStateAction, Dispatch } from "react"

export const handleAddTrabajo = (
  setTrabajos: Dispatch<SetStateAction<Trabajo[]>>,
  trabajos: Trabajo[]
) => {
  setTrabajos([
    ...trabajos,
    { trabajo: "", empresa: "", fecha: "", descripcion: "" },
  ])
}

export const handleAddEstudio = (
  setEstudios: Dispatch<SetStateAction<Estudio[]>>,
  estudios: Estudio[]
) => {
  setEstudios([
    ...estudios,
    { titulo: "", escuela: "", fecha: "", descripcion: "" },
  ])
}

export const handleAddHabilidad = (
  setHabilidades: Dispatch<SetStateAction<Habilidad[]>>,
  habilidades: Habilidad[]
) => {
  setHabilidades([...habilidades, { habilidad: "" }])
}
