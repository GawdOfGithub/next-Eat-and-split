import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
        




<form className='flex flex-col justify-center items-center ml-0 '>
<label className='text-3xl font-sans ml-0'>Add a new friend</label>

<div className="flex flex-col mt-5 ml-0">
    <div className='flex flex-col mt-10 /'>
    <label className="font-bold ">Friend Name</label>
    <input type='text'
    className='text-black  ml-5'
    />
    </div>
    <div className='mt-5 flex flex-col'>
    <label className="font-bold ml-0">🪙Friend Image</label>
    <input type='text'
    className='text-black ml-1 mb-10 '
    />

<div className="flex justify-center align-center text-5xl bg-red-500">
    Add 
    <span className="material-icons  ">
add
</span>
</div>
<div className="font-serif text-blue-800 mt-20 text-5xl">Your Friend was added to the list  </div>
    </div>
    
</div>
</form>
    </div>
  )
}