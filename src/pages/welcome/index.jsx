import React from 'react'

import Button from '/src/components/Button'
import Container from '/src/components/Container'
import H1 from '/src/components/H1'
import H2 from '/src/components/H2'
import Logo from '/src/components/Logo'
import P from '/src/components/P'
import Section from '/src/components/Section'

export default () => (
  <Container className="flex items-center h-screen">
    <div className="w-full">
      <Section>
        <H1 className="text-center">Welcome</H1>
        <H2>NVQ SP</H2>
      </Section>
      <Section>
        <Logo />
      </Section>
      <Section>
        <P>Click the button below to get started</P>
      </Section>
      <Section>
        <Button href="/welcome/profile" secondary>
          GET STARTED
        </Button>
      </Section>
    </div>
  </Container>
)
