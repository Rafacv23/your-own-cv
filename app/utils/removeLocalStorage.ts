export const removeLocalStorage = () => {
  const storedData = localStorage.getItem("cv")

  if (storedData) {
    localStorage.removeItem("cv")
    console.log("Datos borrados de forma exitosa")
    window.location.reload()
  } else {
    console.log("No hay datos guardados")
  }
}
