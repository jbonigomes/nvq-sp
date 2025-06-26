import React from 'react'

import Button from '/src/components/Button'
import Group from '/src/components/Group'
import H3 from '/src/components/H3'
import Input from '/src/components/Input'
import Modal from '/src/components/Modal'
import Section from '/src/components/Section'

export default ({ title, value, error, onChange, onCancel, onSave }) => (
  <Modal>
    <Section>
      <H3>{title}</H3>
      <Input
        label="Title"
        value={value}
        error={error}
        onChange={onChange}
      />
    </Section>
    <Group>
      <Button small secondary onClick={onCancel}>CANCEL</Button>
      <Button small onClick={onSave}>SAVE</Button>
    </Group>
  </Modal>
)
