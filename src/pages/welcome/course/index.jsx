import React from 'react'

import { useNavigate } from 'react-router'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import Footer from '/src/components/Footer'
import H1 from '/src/components/H1'
import H3 from '/src/components/H3'
import Radio from '/src/components/Radio'
import Section from '/src/components/Section'
import Steps from '/src/components/Steps'

import { getProfile, setProfileCourse, setProfileLevel } from '/src/store/profile'

export default () => {
  const navigate = useNavigate()

  const [level, setLevel] = React.useState('')
  const [course, setCourse] = React.useState('')
  const [levelError, setLevelError] = React.useState('')
  const [courseError, setCourseError] = React.useState('')

  const onChangeLevel = ({ target }) => {
    setLevel(target.value)
  }

  const onChangeCourse = ({ target }) => {
    setCourse(target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const isFormValid = [
      level,
      course,
    ].every(Boolean)

    if (!level) {
      setLevelError('You must select a level')
    }

    if (!course) {
      setCourseError('You must select a course')
    }

    if (isFormValid) {
      await setProfileLevel(level)
      await setProfileCourse(course)

      navigate('/welcome/school')
    }
  }

  React.useEffect(() => {
    const init = async () => {
      const profile = await getProfile()
      setLevel(level || profile?.level || '')
      setCourse(course || profile?.course || '')
    }

    init()
  }, [])

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Section>
          <Steps step={2} />
        </Section>
        <Section>
          <H1>Your course details</H1>
        </Section>
        <Section>
          <H3>What is your NVQ course?</H3>
          <Radio
            name="course"
            value={course}
            error={courseError}
            onChange={onChangeCourse}
            options={['Installation & Commissioning', 'Maintenance & Service']}
          />
        </Section>
        <Section>
          <H3>What is your NVQ level?</H3>
          <Radio
            name="level"
            value={level}
            error={levelError}
            onChange={onChangeLevel}
            options={['NVQ Level 2', 'NVQ Level 3', 'NVQ Level 4']}
          />
        </Section>
        <Footer>
          <Button type="submit" secondary>
            NEXT
          </Button>
        </Footer>
      </form>
    </Container>
  )
}
