import Link from "next/link"
import React from "react"

export default function header() {
  return (
    <header className="flex gap-4 items-center justify-center py-4 border-b-gray-800 border-b fixed w-full z-10 backdrop-blur">
      <Link
        href="/"
        title="Inicio"
        className=" hover:text-violet-400 hover:transition"
      >
        Inicio
      </Link>
      <Link
        href="/create"
        title="Crear"
        className=" hover:text-violet-400 hover:transition"
      >
        Crear
      </Link>
      <Link
        href="/example"
        title="Ejemplo"
        className=" hover:text-violet-400 hover:transition"
      >
        Ejemplo
      </Link>
    </header>
  )
}
