import React from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

import { Link, useParams } from 'react-router'

pdfMake.addVirtualFileSystem(pdfFonts);

export default () => {
  const { id } = useParams()

  const dd = {
    content: [
      id,
      'An example pdf',
    ],
  }

  const onDownload = () => {
    pdfMake.createPdf(dd).download(id)
  }

  const onOpen = () => {
    pdfMake.createPdf(dd).open()
  }

  const onPrint = () => {
    pdfMake.createPdf(dd).print()
  }

  return (
    <>
      <h1>
        <Link to="/modules">&lt;</Link> Module {id}
      </h1>
      <button className="bg-white text-black p-3 m-3" onClick={onDownload}>
        Download
      </button>
      <button className="bg-white text-black p-3 m-3" onClick={onOpen}>
        Open
      </button>
      <button className="bg-white text-black p-3 m-3" onClick={onPrint}>
        Print
      </button>
    </>
  )
}
