import { Link } from "@nextui-org/react"
import {
  AiFillSetting,
  AiFillCode,
  AiFillGithub,
  AiOutlineArrowUp,
} from "react-icons/ai"
import { Button } from "@nextui-org/react"
import { MdMoneyOff, MdRocketLaunch } from "react-icons/md"

export default function Content() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section
        id="start"
        className=" max-w-3xl mx-8 md:flex-row flex flex-col gap-4 h-screen items-center justify-center"
      >
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-3xl">
            <span className="text-violet-400 font-bold">Your Own CV</span> tu
            currículum gratis.
          </h1>
          <p className=" text-violet-200">
            Your Own CV te permite crear tu propio currículum completamente
            personalizado y gratis.
          </p>
          <div className="flex gap-4 items-center">
            <Link href="/create" title="Crear">
              <Button color="secondary" startContent={<MdRocketLaunch />}>
                Crear
              </Button>
            </Link>
            <Link
              href={"https://github.com/Rafacv23/your-own-cv"}
              title="Repositorio de Github"
              target="blank"
            >
              <Button
                color="default"
                variant="bordered"
                className="text-white"
                startContent={<AiFillGithub />}
              >
                Github
              </Button>
            </Link>
          </div>
        </div>
        <img
          className="rounded h-auto"
          src="/home-1.avif"
          alt="dada"
          title=""
          width={200}
        />
      </section>
      <section className="md:h-screen max-w-3xl mb-24">
        <h2 className="text-2xl text-violet-400 font-bold mb-8 mx-16 md:mx-0">
          ¿Por qué usar Your Own CV?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-16 md:mx-0">
          <li className="flex flex-col bg-gray-900 p-4 rounded shadow-lg">
            <h3 className="text-xl mb-4 font-semibold flex gap-2 items-center">
              <AiFillSetting /> Personalizable
            </h3>
            <p className="mb-4 text-violet-200">
              Personaliza tu currículum para destacar tus habilidades y
              experiencia de manera única y profesional.
            </p>
            <img
              src="/home-2.avif"
              alt=""
              loading="lazy"
              className="rounded h-48 w-full object-cover"
            />
          </li>
          <li className="flex flex-col bg-gray-900 p-4 rounded shadow-lg">
            <h3 className="text-xl mb-4 font-semibold flex items-center gap-2">
              <AiFillCode /> Código abierto
            </h3>
            <p className="mb-4 text-violet-200">
              Accede al código fuente de Your Own CV y colabora en su desarrollo
              para mejorar la plataforma y adaptarla a tus necesidades.
            </p>
            <img
              src="/home-5.avif"
              alt=""
              loading="lazy"
              className="rounded h-48 w-full object-cover"
            />
          </li>
          <li className="flex flex-col bg-gray-900 p-4 rounded shadow-lg">
            <h3 className="text-xl mb-4 font-semibold flex gap-2 items-center">
              <MdMoneyOff /> Gratis
            </h3>
            <p className="mb-4 text-violet-200">
              Crea tu currículum en línea de forma gratuita y en cuestión de
              minutos, sin costos ocultos ni suscripciones.
            </p>
            <img
              src="/home-4.avif"
              alt=""
              loading="lazy"
              className="rounded h-48 w-full object-cover"
            />
          </li>
        </ul>
      </section>
      <Link href="#start" title="Volver al inicio" className="mb-8 ">
        <Button
          color="default"
          variant="bordered"
          startContent={<AiOutlineArrowUp />}
          className="text-white"
        >
          Volver
        </Button>
      </Link>
    </div>
  )
}
