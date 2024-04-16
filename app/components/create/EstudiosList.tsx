import React from "react"
import { PiStudentFill } from "react-icons/pi"
import { Estudio, Estudios } from "@/app/utils/definitions"
import { BsCalendar2DateFill } from "react-icons/bs"

export default function EstudiosList({ estudios }: Estudios) {
  return (
    <section>
      <h2 className="text-2xl text-violet-400 font-semibold mb-4 flex gap-4 items-center">
        <PiStudentFill /> Estudios
      </h2>
      <ul className="list-none flex flex-col gap-4 mb-8 mt-4">
        {estudios.map((estudio: Estudio) => (
          <li key={estudio.titulo}>
            <h3 className=" text-xl">
              {estudio.titulo} | {estudio.escuela}
            </h3>
            <h4 className="flex gap-2 items-center">
              <BsCalendar2DateFill /> {estudio.fecha}
            </h4>
            <p>{estudio.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
