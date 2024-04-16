import React from "react"
import { useRef } from "react"
import TrabajosList from "./TrabajosList"
import EstudiosList from "./EstudiosList"
import HabilidadesList from "./HabilidadesList"
import ContactData from "./ContactData"
import { CvAndContactData, CvData } from "@/app/utils/definitions"
import { convertToPdf } from "@/app/utils/convertToPdf"

export default function CvPreview({ data }: { data: CvAndContactData }) {
  const contentRef = useRef(null)

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
        onClick={() => convertToPdf({ ref: contentRef })}
      >
        Descargar
      </button>
    </div>
  )
}
