import React from 'react'

import Container from '/src/components/Container'
import Section from '/src/components/Section'

export default ({ children }) => (
  <footer className="w-full absolute bottom-0 left-0 right-0">
    <Container>
      <Section>{children}</Section>
    </Container>
  </footer>
)
