import React from 'react'

import Button from '/src/components/Button'
import Group from '/src/components/Group'
import H2 from '/src/components/H2'
import H3 from '/src/components/H3'
import Input from '/src/components/Input'
import Modal from '/src/components/Modal'
import Section from '/src/components/Section'

export default ({ onCancel, onConfirm }) => (
  <Modal>
    <Section>
      <H3>Are you sure?</H3>
      <H2>This action will delete your evidence</H2>
    </Section>
    <Group>
      <Button small secondary onClick={onCancel}>CANCEL</Button>
      <Button small warning onClick={onConfirm}>DELETE</Button>
    </Group>
  </Modal>
)
