import { defineStore } from "pinia"
import type { CvStore } from "~/models/cvStore"

const useCvStore = defineStore<"cvStore", CvStore>("cvStore", {
  state: () => ({
    name: "Rafa",
    surname: "Canosa",
    job_title: "Web Developer",
    phone: 625435859,
    email: "example@gmail.com ",
    summary:
      "Hola, soy Rafa Canosa, un ingeniero de software con 2+ años de experiencia. Actualmente trabajo como desarrollador de frontend construyendo proyectos de código abierto.",
    avatar: "",
    skills: [],
    works: [],
    education: [],
    langs: [
      {
        lang: "Spanish",
        knowledge: "Native",
      },
      {
        lang: "English",
        knowledge: "Fluent",
      },
    ],
  }),

  actions: {
    clearAll() {
      this.name = ""
      this.surname = ""
      this.job_title = ""
      this.phone = 0
      this.email = ""
      this.summary = ""
      this.avatar = ""
      this.skills = []
      this.works = []
      this.education = []
      this.langs = []
    },
  },
})

export default useCvStore
