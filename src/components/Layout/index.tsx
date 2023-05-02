import React from 'react'
import Topbar from '../topbar'
import Sidebar from '../sidebar'

type ILayout = {
    children: React.ReactNode
}

function Layout({ children }: ILayout) {
  return (
    <>
    <Topbar/>
    <main>
      <Sidebar />      
      {children}
    </main>
    </>
  )
}

export default Layout