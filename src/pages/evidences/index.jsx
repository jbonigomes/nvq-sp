import React from 'react'
import { Link } from 'react-router-dom'

import H1 from '/src/components/H1'
import Section from '/src/components/Section'
import Progress from '/src/components/Progress'
import Container from '/src/components/Container'
import Navigation from '/src/components/Navigation'

export default () => (
  <Container>
    <Section>
      <Progress progress={75} numerator={34} denominator={50} />
      <H1 className="text-center mt-3">Evidences</H1>
    </Section>
    {/* TODO: Get the real packs list */}
    <ul>
      <li>
        <Link to="/evidences/1">Question pack 1</Link>
      </li>
      <li>
        <Link to="/evidences/2">Question pack 2</Link>
      </li>
      <li>
        <Link to="/evidences/3">Question pack 3</Link>
      </li>
      <li>
        <Link to="/evidences/4">Question pack 4</Link>
      </li>
      <li>
        <Link to="/evidences/5">Question pack 5</Link>
      </li>
    </ul>
    <Navigation active="evidences" />
  </Container>
)
