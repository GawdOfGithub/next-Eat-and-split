'use client'
import React from 'react'
import { useName } from '../contexts/contextProvider'
type Props = {}

export default function page({}: Props) {
  const {data,setData,dataSender,setDataSender} = useName()
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
    setData({ ...data, name: e.target.value }) 
    console.log(data)

  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setData({ ...data, image: e.target.value }) 
   console.log(data)
    
  };
  const handle = (e:any) => {

    setData(data)
  
  }
    
    // Now, log the data object after dataSender is set to false
    

  
  return (
    <div>

<form className='flex flex-col justify-center items-center ml-0 '>
<label className='text-3xl font-sans ml-0'>Add a new friend</label>

<div className="flex flex-col mt-5 ml-0">
    <div className='flex flex-col mt-10 /'>
    <label className="font-bold " >Friend Name</label>
    <input type='text'
    className='text-black  ml-5'
    onChange={handleNameChange}
    />
    </div>
    <div className='mt-5 flex flex-col'>
    <label className="font-bold ml-0">🪙Friend Image</label>
    <input type='text'
    onChange={handleImageChange}
    className='text-black ml-1 mb-10 '
    />

<button className="flex justify-center align-center text-5xl bg-red-500"  onClick={handle}>
    Add 
    <span className="material-icons  ">
add
</span>
</button>
<div className="font-serif text-blue-800 mt-20 text-5xl">Your Friend was added to the list  </div>
    </div>
    
</div>
</form>
    </div>
  )
}