export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
export const nameRegex: RegExp = /^[\p{L}\s]+$/u
export const descriptionRegex: RegExp = /^[\p{L}0-9\s.,!?¡¿()-]+$/u
export const phoneRegex: RegExp = /^[\d+()\s-]+$/
export const countryRegex: RegExp = /^[\p{L}\s-]+$/u
export const websiteRegex: RegExp =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
