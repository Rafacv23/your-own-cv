import React from "react"
import { Spinner } from "@nextui-org/react"

export default function loading() {
  return (
    <main className="min-h-screen w-full gap-4 flex flex-col sm:flex-row items-center justify-center ">
      <Spinner color="secondary" />
    </main>
  )
}
