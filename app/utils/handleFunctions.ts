import type { Estudio, Habilidad, Trabajo } from "./definitions"
import type { SetStateAction, Dispatch } from "react"

//handle add functions

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

// handleChange functions

export const handleTrabajoChange = (
  index: number,
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  trabajos: Trabajo[],
  setTrabajos: Dispatch<SetStateAction<Trabajo[]>>
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

export const handleEstudioChange = (
  index: number,
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  estudios: Estudio[],
  setEstudios: Dispatch<SetStateAction<Estudio[]>>
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

export const handleHabilidadChange = (
  index: number,
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  habilidades: Habilidad[],
  setHabilidades: Dispatch<SetStateAction<Habilidad[]>>
) => {
  const { value } = e.target
  const newHabilidades = [...habilidades]
  newHabilidades[index].habilidad = value
  setHabilidades(newHabilidades)
}
