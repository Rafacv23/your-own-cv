import html2pdf from "html2pdf.js"
const options = {
  filename: "your-own-cv.pdf",
  margin: 0.5,
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
}

export const convertToPdf = ({ ref }) => {
  const content = ref.current

  html2pdf().set(options).from(content).save()
}
