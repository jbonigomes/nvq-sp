import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default () => {
  const { id } = useParams()

  return (
    <>
      <h1>
        <Link to="/modules">&lt;</Link> Module {id}
      </h1>
      <div className="fixed bottom-0 left-0 right-0 text-center">Export</div>
    </>
  )
}
