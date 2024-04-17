export type Trabajo = {
  trabajo: string
  empresa: string
  fecha: string
  descripcion: string
}

export type Trabajos = {
  trabajos: Trabajo[]
}

export type Estudio = {
  titulo: string
  escuela: string
  fecha: string
  descripcion: string
}

export type Estudios = {
  estudios: Estudio[]
}

export type Habilidad = {
  habilidad: string
}

export type Habilidades = {
  habilidades: Habilidad[]
}

export type ConvertToPdfParams = {
  ref: React.RefObject<HTMLElement>
}

export type CvData = {
  nombre: string
  apellidos: string
  descripcion: string
  trabajos: Trabajo[]
  estudios: Estudio[]
  habilidades: Habilidad[]
}

export type ContactDataProps = {
  email: string
  telefono: string
  web: string
  pais: string
}

export type CvAndContactData = CvData & ContactDataProps
