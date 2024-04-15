export async function createCv(formData: FormData) {
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

  return rawFormData
  // mutate data
  // revalidate cache
}
