import Body from '@/components/Body'
import Header from '@/components/Header'
import SubHead from '@/components/SubHead'
import React from 'react'

function page() {
  return (
    <div className='w-full text-white'>
      <Header />
      <SubHead />
      <Body />
    </div>
  )
}

export default page