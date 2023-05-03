import React from 'react'
import TopBar from './TopBar/TopBar'

export default function Layout({children}:any) {
  return (
    <>
      <TopBar/>
      {children}
    </>
  )
}
