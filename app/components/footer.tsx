import React from "react"
import Link from "next/link"
import { Divider } from "@nextui-org/divider"

export default function footer() {
  return (
    <footer className="flex flex-col items-center w-full justify-center py-4 border-t border-t-gray-800 rounded-xl gap-4">
      <div className="flex gap-8">
        <section>
          <h4 className="text-lg font-semibold">Contenido</h4>
          <ul>
            <li>
              <Link href="/" title="Inicio">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/create" title="Crear">
                Crear
              </Link>
            </li>
            <li>
              <Link href="/example" title="Ejemplo">
                Ejemplo
              </Link>
            </li>
          </ul>
        </section>
        <Divider orientation="vertical" />
        <section>
          <h4 className="text-lg font-semibold">Contacto</h4>
          <ul>
            <li>
              <Link
                href="https://github.com/Rafacv23/your-own-cv"
                title="Repositorio de Github"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/rafa-canosa-vallejo-6328a5194/"
                title="Rafa Canosa Linkedin"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                href="https://rafa-canosa-portfolio.vercel.app/"
                title="Rafa Canosa Portfolio"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <h5>Creado con ❤️ por Rafa Canosa</h5>
    </footer>
  )
}
