import React from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

import { useParams, useNavigate } from 'react-router'
import { Device } from '@capacitor/device'
import { FileViewer } from '@capacitor/file-viewer'
import { Filesystem, Directory } from '@capacitor/filesystem'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import DateInput from '/src/components/DateInput'
import Fieldset from '/src/components/Fieldset'
import Header from '/src/components/Header'
import Input from '/src/components/Input'
import Main from '/src/components/Main'
import Section from '/src/components/Section'
import Subnav from '/src/components/Subnav'
import Textarea from '/src/components/Textarea'

import { getData, updateEvidence, deleteEvidence } from '/src/store/data'
import { getProfile } from '/src/store/profile'
import { isNameValid } from '/src/utils/validators'

pdfMake.addVirtualFileSystem(pdfFonts);

export default () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [day, setDay] = React.useState('')
  const [year, setYear] = React.useState('')
  const [month, setMonth] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [writeup, setWriteup] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [firstAider, setFirstAider] = React.useState('')

  const [dateError, setDateError] = React.useState('')
  const [locationError, setLocationError] = React.useState('')
  const [firstAiderError, setFirstAiderError] = React.useState('')

  const onDayChange = ({ target }) => {
    setDateError('')
    setDay(target.value)
  }

  const onYearChange = ({ target }) => {
    setDateError('')
    setYear(target.value)
  }

  const onMonthChange = ({ target }) => {
    setDateError('')
    setMonth(target.value)
  }

  const onLocationChange = ({ target }) => {
    setLocationError('')
    setLocation(target.value)
  }

  const onFirstAiderChange = ({ target }) => {
    setFirstAiderError('')
    setFirstAider(target.value)
  }

  const onWriteupChange = ({ target }) => {
    setWriteup(target.value)
  }

  const onDateBlur = () => {
    const yearInRange = year.length === 4
    const dayInRange = Number(day) < 32 && Number(day) > 0
    const monthInRange = Number(month) < 13 && Number(month) > 0

    if (dayInRange && monthInRange && yearInRange) {
      setDay(day.padStart(2, '0'))
      setMonth(month.padStart(2, '0'))
      updateEvidence(id, 'date', [day.padStart(2, '0'), month.padStart(2, '0'), year])
    } else {
      setDateError('You must enter a valid date')
    }
  }

  const onLocationBlur = () => {
    if (location && isNameValid(location)) {
      updateEvidence(id, 'location', location)
    } else {
      setLocationError('You must enter a valid location')
    }
  }

  const onFirstAiderBlur = () => {
    if (firstAider && isNameValid(firstAider)) {
      updateEvidence(id, 'firstAider', firstAider)
    } else {
      setFirstAiderError('You must enter a valid first aider name')
    }
  }

  const onWriteupBlur = () => {
    // TODO: add some validation?
    updateEvidence(id, 'writeup', writeup)
  }

  const onDelete = async () => {
    await deleteEvidence(id)
    navigate('/evidences')
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
      const { evidences } = await getData()
      const evidence = evidences?.find?.((e) => e.id === id)

      setTitle(evidence?.title || '')
      setDay(evidence?.date?.[0] || '')
      setYear(evidence?.date?.[2] || '')
      setMonth(evidence?.date?.[1] || '')
      setWriteup(evidence?.writeup || '')
      setLocation(evidence?.location || '')
      setFirstAider(evidence?.firstAider || '')
    }

    init()
  }, [])

  return (
    <Container>
      <Header backTo="/evidences" onClick={onDownload} onDelete={onDelete} onEdit={() => null}>
        {title}
      </Header>
      <Main>
        <Section>
          <DateInput
            day={day}
            year={year}
            month={month}
            error={dateError}
            onBlur={onDateBlur}
            onDayChange={onDayChange}
            onYearChange={onYearChange}
            onMonthChange={onMonthChange}
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
          <Textarea
            large
            label="Writeup"
            value={writeup}
            onBlur={onWriteupBlur}
            onChange={onWriteupChange}
          />
        </Section>
      </Main>
      <Subnav id={id} active="details" />
    </Container>
  )
}
