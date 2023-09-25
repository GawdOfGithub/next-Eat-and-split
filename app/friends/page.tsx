import React from 'react'
import Image from 'next/image'
import Profile from '../components/Profile'

type Props = {}

export default function Friends({}: Props) {
  return (
    <>
    <div className='flex flex-col justify-center align-center'>
   <Profile/>
   <Profile/>
   <Profile/>
   <Profile/>

    </div>
    </>
  )
}