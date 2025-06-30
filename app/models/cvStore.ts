export type CvStore = {
  name: string
  surname: string
  phone: number
  email: string
  avatar: string
  summary: string
  job_title: string
  skills: string[]
  works: WorkExperience[]
  education: Education[]
  langs: LanguageSkill[]
}

export type WorkExperience = {
  name: string
  company: string
  description?: string
  start_date: Date
  end_date?: Date // if end_date is undefined or null, it means they still work there
}

export type Education = {
  title: string
  school: string
  description: string
  start_date: Date
  end_date?: Date
}

export type LanguageSkill = {
  lang: string
  knowledge: LangKnowledge
}

export type LangKnowledge = "Native" | "Fluent" | "Conversational"
