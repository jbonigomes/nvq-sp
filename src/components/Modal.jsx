import React from 'react'

export default ({ children }) => (
  <dialog
    open
    className="fixed inset-0 z-10 w-full h-full overflow-hidden flex justify-center items-center bg-black/80"
  >
    <aside className="w-4/5 bg-dark-blue text-white rounded p-8">
      {children}
    </aside>
  </dialog>
)
