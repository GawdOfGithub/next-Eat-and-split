import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <>
    <form className='flex flex-col justify-center items-center '>
        <label className='text-3xl font-sans'>Split the bill with Anurag</label>
        
        <div className="flex flex-col mt-5">
            <div className='flex mt-10 /'>
            <label className="font-bold">💰 Bill Value</label>
            <input type='text'
            className='text-black  ml-12'
            />
            </div>
            <div className='mt-5'>
            <label className="font-bold ">🪙Your expense</label>
            <input type='text'
            className='text-black ml-5'
            />
            </div>
            <div className='mt-5'>
            <label className="font-bold mr-0">💰 Friend's expense</label>
            <input type='text'
            className='text-black mr-0'
            />
            </div>
            <div className='mt-5'>
            <label className="font-bold ">💰 Who is paying</label>
            <input type='text'
            className='text-black ml-5'
            />
            </div>
        </div>
    </form>
    </>
  )
}