import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen w-full gap-4 flex flex-col items-center justify-center">
      <section className=" max-w-3xl flex flex-row gap-4 h-screen items-center justify-center">
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-3xl">
            <span className="text-violet-400 font-bold">Your Own CV</span> tu
            currículum gratis.
          </h1>
          <p className=" text-violet-200">
            Your Own CV te permite crear tu propio currículum completamente
            personalizado y gratis.
          </p>
          <Link
            href="/create"
            title="Crear"
            className=" bg-violet-400 rounded p-4 font-bold text-black"
          >
            Crear
          </Link>
        </div>
        <img
          className="rounded h-auto"
          src="/home-1.avif"
          alt="dada"
          title=""
          width={200}
        />
      </section>
      <section className=" h-screen max-w-3xl">
        <h2 className="text-2xl text-violet-400 font-bold mb-8">
          ¿Por qué usar Your Own CV?
        </h2>
        <ul className="flex gap-4 items-start justify-center">
          <li className="text-lg bg-gray-900 p-4 rounded shadow-lg">
            <h3 className="text-xl mb-4 font-semibold">⚙️ Personalizable</h3>
            <p className="mb-4 text-violet-200">fdasdfadadadadadasdadad</p>
            <img
              src="/home-2.avif"
              alt=""
              className="rounded max-h-56 max-w-48"
            />
          </li>
          <li className="text-lg bg-gray-900 p-4 rounded max-h-max">
            <h3 className="text-lg mb-4 font-semibold">📖 Código abierto</h3>
            <p className="mb-4 text-violet-200">fdasdfadadadadadasdadad</p>
            <img
              src="/home-5.avif"
              alt=""
              className="rounded max-h-56 max-w-48"
            />
          </li>
          <li className="text-lg bg-gray-900 p-4 rounded">
            <h3 className="text-lg mb-4 font-semibold">🆓 Gratis</h3>
            <p className="mb-4 text-violet-200">fdasdfadadadadadasdadad</p>
            <img
              src="/home-4.avif"
              alt=""
              className="rounded max-h-56 max-w-48"
            />
          </li>
        </ul>
      </section>
    </main>
  )
}
