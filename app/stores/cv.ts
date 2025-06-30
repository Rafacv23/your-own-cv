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

  // TODO: create theme state for the cvPreview so the user can change the theme before downloaded it

  actions: {
    addSkill() {
      this.skills.push("")
    },

    removeSkill(index: number) {
      this.skills.splice(index, 1)
    },

    addWorkExperience() {
      this.works.push({
        name: "",
        company: "",
        description: "",
        start_date: new Date(),
        end_date: undefined,
      })
    },

    removeWorkExperience(index: number) {
      this.works.splice(index, 1)
    },

    addEducationExperience() {
      this.education.push({
        title: "",
        school: "",
        description: "",
        start_date: new Date(),
        end_date: undefined,
      })
    },

    removeEducationExperience(index: number) {
      this.education.splice(index, 1)
    },

    addLanguage() {
      this.langs.push({
        lang: "",
        knowledge: "Conversational",
      })
    },

    removeLanguage(index: number) {
      this.langs.splice(index, 1)
    },

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
