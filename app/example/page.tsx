import React from "react"

export default function Example() {
  return (
    <main className="min-h-screen w-full gap-4 flex flex-col sm:flex-row items-center justify-center ">
      <object
        data="/your-own-cv.pdf"
        type="application/pdf"
        width="100%"
        height="500px"
      >
        <p>
          No se ha podido mostrar el archivo.{" "}
          <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">
            Descargar.
          </a>
        </p>
      </object>
    </main>
  )
}
