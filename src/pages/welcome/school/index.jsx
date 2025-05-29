import React from 'react'

import { useNavigate } from 'react-router'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import Footer from '/src/components/Footer'
import H1 from '/src/components/H1'
import Input from '/src/components/Input'
import Section from '/src/components/Section'
import Steps from '/src/components/Steps'

import {
  getProfile,
  setProfileSchool,
  setProfileInstructor,
} from '/src/store/profile'
import { isNameValid } from '/src/utils/validators'

export default () => {
  const navigate = useNavigate()

  const [school, setSchool] = React.useState('')
  const [instructor, setInstructor] = React.useState('')
  const [schoolError, setSchoolError] = React.useState('')
  const [instructorError, setInstructorError] = React.useState('')

  const onChangeSchool = ({ target }) => {
    setSchoolError('')
    setSchool(target.value)
  }

  const onChangeInstructor = ({ target }) => {
    setInstructorError('')
    setInstructor(target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const isFormValid = [
      isNameValid(school),
      isNameValid(instructor),
    ].every(Boolean)

    if (!isNameValid(school)) {
      setSchoolError('You must enter a valid school name')
    }

    if (!isNameValid(instructor)) {
      setInstructorError('You must enter a valid instructor name')
    }

    if (isFormValid) {
      await setProfileSchool(school)
      await setProfileInstructor(instructor)

      navigate('/')
    }
  }

  React.useEffect(() => {
    const init = async () => {
      const profile = await getProfile()
      setSchool(school || profile?.school || '')
      setInstructor(instructor || profile?.instructor || '')
    }

    init()
  }, [])

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Section>
          <Steps step={3} />
        </Section>
        <Section>
          <H1>Your School Details</H1>
        </Section>
        <Section>
          <Input
            label="School name"
            value={school}
            error={schoolError}
            onChange={onChangeSchool}
          />
        </Section>
        <Section>
          <Input
            label="Instructor name"
            value={instructor}
            error={instructorError}
            onChange={onChangeInstructor}
          />
        </Section>
        <Footer>
          <Button type="submit" secondary>
            COMPLETE
          </Button>
        </Footer>
      </form>
    </Container>
  )
}
