import React from 'react'

import { useNavigate } from 'react-router'

import H1 from '/src/components/H1'
import Steps from '/src/components/Steps'
import Radio from '/src/components/Radio'
import Button from '/src/components/Button'
import Footer from '/src/components/Footer'
import Section from '/src/components/Section'
import Container from '/src/components/Container'

import { setProfileCourse } from '/src/store/profile'

export default () => {
  const navigate = useNavigate()

  const [error, setError] = React.useState('')
  const [course, setCourse] = React.useState('')

  const onChange = ({ target }) => {
    setCourse(target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (course) {
      await setProfileCourse(course)
      navigate('/')
    } else {
      setError('You must select a value')
    }
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Section>
          <Steps step={3} />
        </Section>
        <Section>
          <H1>What is your NVQ course?</H1>
        </Section>
        <Section>
          <Radio
            error={error}
            onChange={onChange}
            options={[
              'Installation & Commissioning',
              'Maintenance & Service',
            ]}
          />
        </Section>
        <Footer>
          <Button type="submit" secondary>COMPLETE</Button>
        </Footer>
      </form>
    </Container>
  )
}
