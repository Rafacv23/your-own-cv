import React from "react"
import { useRef } from "react"
import html2pdf from "html2pdf.js"
import TrabajosList from "./TrabajosList"
import EstudiosList from "./EstudiosList"
import HabilidadesList from "./HabilidadesList"
import ContactData from "./ContactData"
export default function CvPreview({ data }) {
  const contentRef = useRef(null)

  const options = {
    filename: "your-own-cv.pdf",
    margin: 0.5,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
  }

  const convertToPdf = () => {
    const content = contentRef.current

    html2pdf().set(options).from(content).save()
  }

  return (
    <div className="flex flex-col gap-4">
      <article
        className="flex flex-col gap-4 text-white bg-black p-8 h-full"
        ref={contentRef}
      >
        <h1 className="text-3xl font-bold boder-b border-b-gray-800 boder-b">
          {data.nombre} {data.apellidos}
        </h1>
        <p>{data.descripcion}</p>
        <div className="flex gap-12">
          <ContactData data={data} />
          <main>
            {data.trabajos.length >= 1 ? (
              <TrabajosList trabajos={data.trabajos} />
            ) : null}
            {data.estudios.length >= 1 ? (
              <EstudiosList estudios={data.estudios} />
            ) : null}
            {data.habilidades.length >= 1 ? (
              <HabilidadesList habilidades={data.habilidades} />
            ) : null}
          </main>
        </div>
      </article>
      <button
        className=" bg-violet-400 rounded p-4 font-bold text-black"
        onClick={convertToPdf}
      >
        Descargar
      </button>
    </div>
  )
}
