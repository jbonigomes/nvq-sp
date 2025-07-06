import React from 'react'

import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

import { Route, Routes, useParams, useNavigate } from 'react-router'
import { Device } from '@capacitor/device'
import { FileViewer } from '@capacitor/file-viewer'
import { Filesystem, Directory } from '@capacitor/filesystem'

import Container from '/src/components/Container'
import DeleteModal from '/src/components/DeleteModal'
import EvidenceModal from '/src/components/EvidenceModal'
import Header from '/src/components/Header'
import Subnav from '/src/components/Subnav'
import Details from '/src/pages/evidences/[id]/details'
import Gallery from '/src/pages/evidences/[id]/gallery'
import Materials from '/src/pages/evidences/[id]/materials'
import Tools from '/src/pages/evidences/[id]/tools'

import { getData, updateEvidence, deleteEvidence } from '/src/store/data'
import { isNameValid } from '/src/utils/validators'

pdfMake.addVirtualFileSystem(pdfFonts)

export default () => {
  const { id, ...params } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = React.useState('')
  const [titleError, setTitleError] = React.useState('')

  const [evidence, setEvidence] = React.useState()

  const [showEditModal, setShowEditModal] = React.useState(false)
  const [showDeleteModal, setShowDeleteModal] = React.useState(false)

  const onTitleChange = ({ target }) => {
    setTitleError('')
    setTitle(target.value)
  }

  const onDelete = async () => {
    await deleteEvidence(id)
    navigate('/evidences')
  }

  const onHideEditModal = () => {
    setShowEditModal(false)
  }

  const onShowEditModal = () => {
    setShowEditModal(true)
  }

  const onHideDeleteModal = () => {
    setShowDeleteModal(false)
  }

  const onShowDeleteModal = () => {
    setShowDeleteModal(true)
  }

  const onSave = () => {
    if (!isNameValid(title)) {
      setTitleError('You must enter a valid title')
    } else {
      setShowEditModal(false)
      setEvidence({ ...evidence, title })
      updateEvidence(id, 'title', title)
    }
  }

  const onDownload = async () => {
    const dd = {
      content: [
        id,
        'An example pdf',
      ],
    }

    const pdf = pdfMake.createPdf(dd)
    const { platform } = await Device.getInfo()

    if (platform === 'web') {
      pdf.open()
    } else {
      pdfMake.createPdf(dd).getBase64((data) => {
        Filesystem.writeFile({
          data,
          recursive: true,
          path: `nvq-sp/${id}.pdf`,
          directory: Directory.Documents,
        }).then(({ uri }) => {
          FileViewer.openDocumentFromLocalPath({ path: uri })
        }).catch(console.error)
      })
    }
  }

  React.useEffect(() => {
    const init = async () => {
      const { evidences } = await getData()
      const evidence = evidences?.find?.((e) => e.id === id)

      setEvidence(evidence)
      setTitle(evidence?.title || '')
    }

    init()
  }, [])

  return (
    <>
      {!!evidence && (
        <Container>
          <Header
            backTo="/evidences"
            onClick={onDownload}
            onEdit={onShowEditModal}
            onDelete={onShowDeleteModal}
          >
            {evidence.title}
          </Header>
          <Routes>
            <Route path="*" element={<Details evidence={evidence} />} />
            <Route path="/gallery" element={<Gallery evidence={evidence} />} />
            <Route path="/materials" element={<Materials evidence={evidence} />} />
            <Route path="/tools" element={<Tools evidence={evidence} />} />
          </Routes>
          <Subnav id={id} active={params['*'] ?? ''} />
          {showEditModal && (
            <EvidenceModal
              onSave={onSave}
              value={title}
              title="Edit Evidence"
              error={titleError}
              onCancel={onHideEditModal}
              onChange={onTitleChange}
            />
          )}
          {showDeleteModal && (
            <DeleteModal onCancel={onHideDeleteModal} onConfirm={onDelete} />
          )}
        </Container>
      )}
    </>
  )
}
