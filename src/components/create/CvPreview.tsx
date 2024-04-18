import { useRef } from "react"
import { Button } from "@nextui-org/react"
import TrabajosList from "./TrabajosList"
import EstudiosList from "./EstudiosList"
import HabilidadesList from "./HabilidadesList"
import ContactData from "./ContactData"
import type { CvAndContactData } from "../../utils/definitions.ts"
import { convertToPdf } from "../../utils/convertToPdf.js"
import DeleteAlert from "./form/DeleteAlert"
import { BsDownload } from "react-icons/bs"

export default function CvPreview({ data }: { data: CvAndContactData }) {
  const contentRef = useRef(null)

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-violet-400">Vista Previa</h2>
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
      <footer className="flex gap-4 items-center justify-center">
        <Button
          color="secondary"
          startContent={<BsDownload />}
          onClick={() => convertToPdf({ ref: contentRef })}
        >
          Descargar
        </Button>
        <DeleteAlert />
      </footer>
    </div>
  )
}
