import React from 'react'
import { Link, useParams } from 'react-router'

export default () => {
  const { id } = useParams()

  return (
    <>
      <h1>
        <Link to="/evidences">&lt;</Link> Evidence {id}
      </h1>
      <div className="fixed bottom-0 left-0 right-0 text-center flex">
        <Link to={`/evidences/${id}/writeup`} className="flex-1">
          Writeup
        </Link>
        <Link to={`/evidences/${id}/gallery`} className="flex-1">
          Gallery
        </Link>
        <div className="flex-1">Export</div>
      </div>
    </>
  )
}
