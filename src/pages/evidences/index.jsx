import React from 'react'

import { useNavigate } from 'react-router'

import H1 from '/src/components/H1'
import Drawer from '/src/components/Drawer'
import Section from '/src/components/Section'
import Progress from '/src/components/Progress'
import Container from '/src/components/Container'
import Navigation from '/src/components/Navigation'
import DrawerItem from '/src/components/DrawerItem'

import { getData } from '/src/store/data'
import { getProfile } from '/src/store/profile'
import { calculateEvidencesProgress } from '/src/utils/calculatedFields'

export default () => {
  const navigate = useNavigate()

  const [progress, setProgress] = React.useState({})
  const [evidences, setEvidences] = React.useState([])

  React.useEffect(() => {
    const init = async () => {
      const profileStore = await getProfile()

      if (profileStore?.course && profileStore?.level) {
        const dataStore = await getData(profileStore)
        setEvidences(Object.keys(dataStore.evidences))
        setProgress(calculateEvidencesProgress(dataStore))
      } else {
        navigate('/welcome')
      }
    }

    init()
  }, [setProgress, setEvidences])

  return (
    <Container>
      <Section className="fixed top-0 left-0 right-0">
        <Progress
          progress={progress?.progress ?? 0}
          numerator={progress?.numerator ?? 0}
          denominator={progress?.denominator ?? 0}
        />
        <H1 className="text-center mt-3">Evidences</H1>
      </Section>
      <Drawer>
        {evidences.map((evidence) => (
          <DrawerItem key={evidence} label={evidence} path="evidences" />
        ))}
        {/* TODO: Remove test data below */}
        <DrawerItem label="6.02" path="evidences" />
        <DrawerItem label="6.03" path="evidences" />
        <DrawerItem label="6.04" path="evidences" />
        <DrawerItem label="6.05" path="evidences" />
        <DrawerItem label="6.06" path="evidences" />
        <DrawerItem label="6.07" path="evidences" />
        <DrawerItem label="6.08" path="evidences" />
        <DrawerItem label="6.09" path="evidences" />
        <DrawerItem label="6.10" path="evidences" />
      </Drawer>
      <Navigation active="evidences" />
    </Container>
  )
}
