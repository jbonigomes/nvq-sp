import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default () => {
  const { id } = useParams()

  return (
    <>
      <Link to={`/evidences/${id}`}>&lt; Back</Link>
      <h1>Writeup {id}</h1>
    </>
  )
}
