import React from 'react'
import Image from 'next/image'
import Profile from '../components/Profile'

type Props = {}

export default function Friends({}: Props) {
  const items = [
    {
      name:"Anurag",
      money:100
    },
    {
      name:"Shubham",
      money:200
    }
  ]

  return (
    <>
    <div className='flex flex-col justify-center align-center'>
   {items.map((item,index)=>
   
    (<Profile key = {index} name={item.name} money={item.money}/>))
   
   }
   
   

    </div>
    </>
  )
}