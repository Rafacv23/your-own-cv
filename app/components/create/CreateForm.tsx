import React from "react"

export default function CreateForm() {
  async function createCv(formData: FormData) {
    "use server"

    const rawFormData = {
      nombre: formData.get("nombre"),
      apellidos: formData.get("apellidos"),
      email: formData.get("email"),
      avatar: formData.get("avatar"),
      telefono: formData.get("telefono"),
      pais: formData.get("pais"),
      web: formData.get("web"),
    }

    console.log(rawFormData)

    // mutate data
    // revalidate cache
  }
  return (
    <form className="flex flex-col gap-4" action={createCv}>
      <h2>Presentación</h2>
      <input
        className="text-black"
        type="text"
        placeholder="Nombre"
        required
        min={2}
        name="nombre"
      />
      <input
        className="text-black"
        type="text"
        placeholder="Apellidos"
        required
        min={2}
        name="apellidos"
      />
      <input
        className="text-black"
        type="email"
        placeholder="Email"
        name="email"
      />
      <input className="text-black" type="file" name="avatar" />
      <input
        className="text-black"
        type="number"
        placeholder="Teléfono"
        name="telefono"
      />
      <input
        className="text-black"
        type="text"
        placeholder="País de residencia"
        name="pais"
      />
      <input
        className="text-black"
        type="text"
        placeholder="Página web"
        name="web"
      />
      <h2>Trabajos</h2>
      <h2>Estudios</h2>
      <h2>Habilidades</h2>
      <button>Completar</button>
    </form>
  )
}
