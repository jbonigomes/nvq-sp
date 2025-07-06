import React from 'react'

import DateInput from '/src/components/DateInput'
import Input from '/src/components/Input'
import Main from '/src/components/Main'
import Section from '/src/components/Section'
import Textarea from '/src/components/Textarea'

import { getData, updateEvidence } from '/src/store/data'
import { isNameValid } from '/src/utils/validators'

export default ({ evidence }) => {
  const [day, setDay] = React.useState(evidence?.date?.[0] || '')
  const [year, setYear] = React.useState(evidence?.date?.[2] || '')
  const [month, setMonth] = React.useState(evidence?.date?.[1] || '')
  const [writeup, setWriteup] = React.useState(evidence?.writeup || '')
  const [location, setLocation] = React.useState(evidence?.location || '')
  const [firstAider, setFirstAider] = React.useState(evidence?.firstAider || '')

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

  return (
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
  )
}
