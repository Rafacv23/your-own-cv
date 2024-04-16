import React from "react"
import Link from "next/link"
import { Divider } from "@nextui-org/divider"
import { AiFillGithub, AiFillLinkedin, AiFillHeart } from "react-icons/ai"
import { MdOutlineWork } from "react-icons/md"

export default function footer() {
  return (
    <footer className="flex flex-col items-center w-full justify-center py-4 border-t border-t-gray-800 rounded-xl gap-4">
      <div className="flex gap-8">
        <section>
          <h4 className="text-lg font-semibold">Contenido</h4>
          <ul>
            <li>
              <Link
                href="/"
                title="Inicio"
                className="hover:text-violet-400 hover:transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/create"
                title="Crear"
                className="hover:text-violet-400 hover:transition-colors"
              >
                Crear
              </Link>
            </li>
            <li>
              <Link
                href="/example"
                title="Ejemplo"
                className="hover:text-violet-400 hover:transition-colors"
              >
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
                target="blank"
                className="flex gap-2 items-center hover:text-violet-400 hover:transition-colors"
              >
                <AiFillGithub />
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/rafa-canosa-vallejo-6328a5194/"
                title="Rafa Canosa Linkedin"
                target="blank"
                className="flex gap-2 items-center hover:text-violet-400 hover:transition-colors"
              >
                <AiFillLinkedin />
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                href="https://rafa-canosa-portfolio.vercel.app/"
                title="Rafa Canosa Portfolio"
                target="blank"
                className="flex gap-2 items-center hover:text-violet-400 hover:transition-colors"
              >
                <MdOutlineWork />
                Portfolio
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <h5 className="flex items-center gap-2">
        Creado con <AiFillHeart /> por Rafa Canosa
      </h5>
    </footer>
  )
}
