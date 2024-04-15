import React from "react"

export default function page() {
  return (
    <main className="min-h-screen w-full gap-4 flex flex-col sm:flex-row items-center justify-center ">
      <object
        data="/your-own-cv.pdf"
        type="application/pdf"
        width="100%"
        height="500px"
      >
        <p>
          Unable to display PDF file.{" "}
          <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">
            Download
          </a>{" "}
          instead.
        </p>
      </object>
    </main>
  )
}
