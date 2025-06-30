import { defineStore } from "pinia"
import type { cvStore } from "~/models/cvStore"

const useCvStore = defineStore<"cvStore", cvStore>("cvStore", {
  state: () => ({
    name: "rafa",
    surname: "canosa",
    phone: 13123131,
    email: "dadadadad@gmail.com ",
  }),
})

export default useCvStore
