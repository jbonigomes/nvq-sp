import React from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

import { useParams } from 'react-router'
import { Device } from '@capacitor/device'
import { FileViewer } from '@capacitor/file-viewer'
import { Filesystem, Directory } from '@capacitor/filesystem'

import Container from '/src/components/Container'
import Header from '/src/components/Header'
import Section from '/src/components/Section'

pdfMake.addVirtualFileSystem(pdfFonts);

export default () => {
  const { id } = useParams()

  const onDownload = async () => {
    const dd = {
      content: [
        id,
        'An example pdf',
      ],
    }

    const pdf = pdfMake.createPdf(dd)
    const { platform } = await Device.getInfo()

    if (platform === 'web') {
      pdf.open()
    } else {
      pdfMake.createPdf(dd).getBase64((data) => {
        Filesystem.writeFile({
          data,
          recursive: true,
          path: `nvq-sp/${id}.pdf`,
          directory: Directory.Documents,
        }).then(({ uri }) => {
          FileViewer.openDocumentFromLocalPath({ path: uri })
        }).catch(console.error)
      })
    }
  }

  return (
    <>
      <Header backTo="/modules" onClick={onDownload}>
        {id}
      </Header>
      <Container className="mt-11">
        <Section>
          <div>The first question goes here?</div>
          <textarea />
        </Section>
        <Section>
          <div>The next question goes here?</div>
          <textarea />
        </Section>
        <Section>
          <div>The next question goes here?</div>
          <textarea />
        </Section>
        <Section>
          <div>The next question goes here?</div>
          <textarea />
        </Section>
        <Section>
          <div>The next question goes here?</div>
          <textarea />
        </Section>
        <Section>
          <div>The next question goes here?</div>
          <textarea />
        </Section>
        <Section>
          <div>The next question goes here?</div>
          <textarea />
        </Section>
        <Section>
          <div>The next question goes here?</div>
          <textarea />
        </Section>
        <Section>
          <div>The next question goes here?</div>
          <textarea />
        </Section>
        <Section>
          <div>The next question goes here?</div>
          <textarea />
        </Section>
      </Container>
    </>
  )
}
