import { Input } from "@nextui-org/input"
import { Textarea } from "@nextui-org/react"

export default function PresentacionInput() {
  return (
    <section className="flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-violet-400">Presentación</h2>
      <div className="flex flex-col gap-4">
        <Input type="text" isRequired min={2} name="nombre" label="Nombre" />
        <Input type="text" label="Apellidos" min={2} name="apellidos" />
        <Textarea
          name="descripcion"
          label="Descripción"
          placeholder="¿A qué te dedicas?"
        />
        <Input type="email" isRequired label="Email" name="email" />
        {/*<Input type="file" name="avatar" />*/}
        <Input type="number" label="Teléfono" name="telefono" isRequired />
        <Input type="text" label="País de residencia" name="pais" isRequired />
        <Input type="text" label="Página web" name="web" />
      </div>
    </section>
  )
}
