import React from "react"
import { PiStudentFill } from "react-icons/pi"

export default function EstudiosList({ estudios }) {
  return (
    <section>
      <h2 className="text-2xl text-violet-400 font-semibold mb-4 flex gap-4 items-center">
        <PiStudentFill /> Estudios
      </h2>
      <ul className="list-none flex flex-col gap-4 mb-8 mt-4">
        {estudios.map((estudio) => (
          <li key={estudio.titulo}>
            <h3 className=" text-xl">
              {estudio.titulo} | {estudio.escuela}
            </h3>
            <h4>{estudio.fecha}</h4>
            <p>{estudio.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
