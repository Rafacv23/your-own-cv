import { nameRegex, phoneRegex, countryRegex } from "./regex"
import { z } from "zod" // Importar z de Zod

export const zodSchema = z.object({
  nombre: z.string().refine(
    (value) => {
      return nameRegex.test(value)
    },
    {
      message: "El nombre no puede contener números",
    }
  ),
  apellidos: z.string().refine(
    (value) => {
      return nameRegex.test(value)
    },
    {
      message: "El apellido/s no puede contener números",
    }
  ),
  descripcion: z.string().optional(),
  email: z.string().email(),
  telefono: z.string().refine(
    (value) => {
      return phoneRegex.test(value)
    },
    {
      message: "El número de teléfono no es válido",
    }
  ),
  pais: z
    .string()
    .refine(
      (value) => {
        return countryRegex.test(value)
      },
      {
        message: "El país no es válido",
      }
    )
    .optional(),
  web: z.string().optional(),
  trabajos: z
    .array(
      z.object({
        trabajo: z.string(),
        empresa: z.string(),
        fecha: z.string().optional(),
        descripcion: z.string().optional(),
      })
    )
    .optional(),
  estudios: z
    .array(
      z.object({
        titulo: z.string(),
        escuela: z.string(),
        fecha: z.string().optional(),
        descripcion: z.string().optional(),
      })
    )
    .optional(),
  habilidades: z
    .array(
      z.object({
        habilidad: z.string(),
      })
    )
    .optional(),
})
