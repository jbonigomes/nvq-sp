import React from 'react'

import { useNavigate } from 'react-router'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import Footer from '/src/components/Footer'
import H1 from '/src/components/H1'
import Radio from '/src/components/Radio'
import Section from '/src/components/Section'
import Steps from '/src/components/Steps'

import { setProfileLevel } from '/src/store/profile'

export default () => {
  const navigate = useNavigate()

  const [error, setError] = React.useState('')
  const [level, setLevel] = React.useState('')

  const onChange = ({ target }) => {
    setLevel(target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (level) {
      await setProfileLevel(level)
      navigate('/welcome/course')
    } else {
      setError('You must select a value')
    }
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Section>
          <Steps step={2} />
        </Section>
        <Section>
          <H1>What is your NVQ level?</H1>
        </Section>
        <Section>
          <Radio
            error={error}
            onChange={onChange}
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
