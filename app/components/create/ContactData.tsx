import React from "react"
import { BsFillPhoneVibrateFill } from "react-icons/bs"
import { MdMarkEmailRead } from "react-icons/md"
import { CgWebsite } from "react-icons/cg"
import { BiWorld } from "react-icons/bi"
import { BiSolidContact } from "react-icons/bi"

export default function ContactData({ data }) {
  return (
    <aside className="flex flex-col gap-4">
      <h2 className="text-2xl text-violet-400 font-semibold mb-4 flex gap-4 items-center">
        <BiSolidContact /> Contacto
      </h2>
      <h3 className="flex gap-4 items-center">
        <MdMarkEmailRead /> {data.email}
      </h3>
      <h3 className="flex gap-4 items-center">
        <BsFillPhoneVibrateFill /> {data.telefono}
      </h3>
      <h3 className="flex gap-4 items-center">
        <CgWebsite /> {data.web}
      </h3>
      <h3 className="flex gap-4 items-center">
        <BiWorld /> {data.pais}
      </h3>
    </aside>
  )
}
