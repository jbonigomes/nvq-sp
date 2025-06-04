import React from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

import { useParams } from 'react-router'
import { Device } from '@capacitor/device'
import { FileViewer } from '@capacitor/file-viewer'
import { Filesystem, Directory } from '@capacitor/filesystem'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import Header from '/src/components/Header'
import Input from '/src/components/Input'
import Section from '/src/components/Section'
import Subnav from '/src/components/Subnav'

import { getData } from '/src/store/data'
import { getProfile } from '/src/store/profile'
import { isNameValid } from '/src/utils/validators'

pdfMake.addVirtualFileSystem(pdfFonts);

export default () => {
  const { id } = useParams()

  const [date, setDate] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [firstAider, setFirstAider] = React.useState('')
  const [evidenceTitle, setEvidenceTitle] = React.useState('')

  const [dateError, setDateError] = React.useState('')
  const [titleError, setTitleError] = React.useState('')
  const [locationError, setLocationError] = React.useState('')
  const [firstAiderError, setFirstAiderError] = React.useState('')

  const onDateChange = ({ target }) => {
    setDateError('')
    setDate(target.value)
  }

  const onTitleChange = ({ target }) => {
    setTitleError('')
    setTitle(target.value)
  }

  const onLocationChange = ({ target }) => {
    setLocationError('')
    setLocation(target.value)
  }

  const onFirstAiderChange = ({ target }) => {
    setFirstAiderError('')
    setFirstAider(target.value)
  }

  const onDateBlur = () => {
    if (date && isNameValid(date)) {
      // TODO: Persist
    } else {
      setDateError('You must enter a valid date')
    }
  }

  const onTitleBlur = () => {
    if (title && isNameValid(title)) {
      // TODO: Persist
      setEvidenceTitle(title)
    } else {
      setEvidenceTitle('')
      setTitleError('You must enter a valid title')
    }
  }

  const onLocationBlur = () => {
    if (location && isNameValid(location)) {
      // TODO: Persist
    } else {
      setLocationError('You must enter a valid location')
    }
  }

  const onFirstAiderBlur = () => {
    if (firstAider && isNameValid(firstAider)) {
      // TODO: Persist
    } else {
      setFirstAiderError('You must enter a valid first aider name')
    }
  }

  const onDelete = () => {
    // TODO: implement
  }

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

  React.useEffect(() => {
    const init = async () => {
      const profile = await getProfile()
      const { evidences } = await getData(profile)

      const evidence = evidences?.find?.((e) => e.id === id)

      setTitle(id)
      setDate(evidence?.date || '')
      setLocation(profile?.location || '')
      setEvidenceTitle(evidence?.id || '')
      setFirstAider(profile?.firstAider || '')
    }

    init()
  }, [])

  return (
    <>
      <Header backTo="/evidences" onClick={onDownload}>
        Evidence Details
      </Header>
      <Container className="mt-17">
        <Section>
          <Input
            label="Title"
            value={title}
            error={titleError}
            onBlur={onTitleBlur}
            onChange={onTitleChange}
          />
        </Section>
        <Section>
          <Input
            label="Date"
            value={date}
            error={dateError}
            onBlur={onDateBlur}
            onChange={onDateChange}
          />
        </Section>
        <Section>
          <Input
            label="Location"
            value={location}
            error={locationError}
            onBlur={onLocationBlur}
            onChange={onLocationChange}
          />
        </Section>
        <Section>
          <Input
            label="First aider"
            value={firstAider}
            error={firstAiderError}
            onBlur={onFirstAiderBlur}
            onChange={onFirstAiderChange}
          />
        </Section>
        <Section>
        <Button onClick={onDelete} secondary warning>
          DELETE
        </Button>
      </Section>
      </Container>
      {evidenceTitle && (
        <Subnav id={id} active="details" />
      )}
    </>
  )
}
