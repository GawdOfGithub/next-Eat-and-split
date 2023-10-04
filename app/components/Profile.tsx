'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useName } from '../contexts/contextProvider';
type Props = {
  
  money:number
};

export default function Profile({money}: Props) {
  const {randomImageNumber,data:{name,image},dataSender} = useName()
  function handle()
  {
   router.push("/split")
  }
  // Generate a random number between 1 and 1000 (adjust the range as needed)
 

  // Construct the URL with the random number
 // const imageUrl = `https://i.pravatar.cc/${randomImageNumber}? w={48} h={48}`;
  const router = useRouter(); 

  return (
    <div className='flex justify-center align-center my-10 mx-3'>
       {/* <Image src={imageUrl} height={48} width={48} alt="Picture" /> */}{image}
      <div className="flex flex-col m-3">
        <div>
        {name}
        </div>
        <div>
        `You owe {name} {money}`
        </div>
      </div>
      <button className='primary font-serif text-black bg-orange-400 rounded-2xl px-6 m-5' onClick={()=>handle}>Select</button>
    </div>
  );
}
