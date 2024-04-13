import React from "react"
import CreateForm from "../components/create/CreateForm"

export default function page() {
  return (
    <main className="min-h-screen w-full gap-4 flex flex-col sm:flex-row items-center justify-center">
      <aside className="border-r border-r-gray-800">
        <CreateForm />
      </aside>
      <article>Aqui se verá el resultado</article>
    </main>
  )
}
