import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import H1 from '/src/components/H1'
import Section from '/src/components/Section'
import Progress from '/src/components/Progress'
import Container from '/src/components/Container'
import Navigation from '/src/components/Navigation'

import { getData } from '/src/store/data'
import { getProfile } from '/src/store/profile'
import { calculateModulesProgress } from '/src/utils/calculatedFields'

export default () => {
  const navigate = useNavigate()

  const [modules, setModules] = React.useState([])
  const [progress, setProgress] = React.useState({})

  React.useEffect(() => {
    const init = async () => {
      const profileStore = await getProfile()

      if (profileStore?.course && profileStore?.level) {
        const dataStore = await getData(profileStore)
        setModules(Object.keys(dataStore.modules))
        setProgress(calculateModulesProgress(dataStore))
      } else {
        navigate('/welcome')
      }
    }

    init()
  }, [setProgress, setModules])

  return (
    <Container>
      <Section>
        <Progress
          progress={progress?.progress ?? 0}
          numerator={progress?.numerator ?? 0}
          denominator={progress?.denominator ?? 0}
        />
        <H1 className="text-center mt-3">Modules</H1>
      </Section>
      <Section>
      </Section>
      <ul>
        {modules.map((module) => (
          <li key={module}>
            <Link to={`/modules/${module}`}>{module}</Link>
          </li>
        ))}
      </ul>
      <Navigation active="modules" />
    </Container>
  )
}
