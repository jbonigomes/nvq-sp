import React from 'react'

import { useNavigate } from 'react-router'

import Container from '/src/components/Container'
import Drawer from '/src/components/Drawer'
import DrawerItem from '/src/components/DrawerItem'
import H1 from '/src/components/H1'
import Navigation from '/src/components/Navigation'
import Progress from '/src/components/Progress'
import Section from '/src/components/Section'

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
      <Section className="fixed top-0 left-0 right-0">
        <Progress
          progress={progress?.progress ?? 0}
          numerator={progress?.numerator ?? 0}
          denominator={progress?.denominator ?? 0}
        />
        <H1 className="text-center mt-3">Modules</H1>
      </Section>
      <Drawer>
        {modules.map((module) => (
          <DrawerItem key={module} label={module} path="modules" />
        ))}
        {/* TODO: Remove test data below */}
        <DrawerItem label="QICM002" path="modules" />
        <DrawerItem label="QICM003" path="modules" />
        <DrawerItem label="QICM004" path="modules" />
        <DrawerItem label="QICM005" path="modules" />
        <DrawerItem label="QICM006" path="modules" />
        <DrawerItem label="QICM007" path="modules" />
        <DrawerItem label="QICM008" path="modules" />
        <DrawerItem label="QICM009" path="modules" />
        <DrawerItem label="QICM010" path="modules" />
      </Drawer>
      <Navigation active="modules" />
    </Container>
  )
}
