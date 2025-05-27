import React from 'react'

import { useNavigate } from 'react-router'

import H1 from '/src/components/H1'
import Steps from '/src/components/Steps'
import Input from '/src/components/Input'
import Button from '/src/components/Button'
import Footer from '/src/components/Footer'
import Section from '/src/components/Section'
import Container from '/src/components/Container'

import { isNameValid } from '/src/utils/validators'
import { getProfile, setProfileName } from '/src/store/profile'

export default () => {
  const navigate = useNavigate()

  const [name, setName] = React.useState('')
  const [error, setError] = React.useState('')

  const onChange = ({ target }) => {
    setError('')
    setName(target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (isNameValid(name)) {
      await setProfileName(name)
      // navigate('/welcome/level') TODO: re-add this when levels are re-instated
      navigate('/welcome/course')
    } else {
      setError('You must enter a valid name')
    }
  }

  React.useEffect(() => {
    const init = async () => {
      setName(name || (await getProfile())?.name || '')
    }

    init()
  }, [])

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Section>
          {/* TODO: move this back to 1 when levels are re-instated */}
          <Steps step={2} />
        </Section>

        <Section>
          <H1>What is your name?</H1>
        </Section>
        <Section>
          <Input label="Name:" onChange={onChange} value={name} error={error} />
        </Section>
        <Footer>
          <Button type="submit" secondary>NEXT</Button>
        </Footer>
      </form>
    </Container>
  )
}
