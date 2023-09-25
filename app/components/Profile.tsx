import React from 'react';
import Image from 'next/image';

type Props = {};

export default function Profile({}: Props) {
  // Generate a random number between 1 and 1000 (adjust the range as needed)
  const randomImageNumber = Math.floor(Math.random() * 1000) + 1;

  // Construct the URL with the random number
  const imageUrl = `https://i.pravatar.cc/${randomImageNumber}? w={48} h={48}`;

  return (
    <div className='flex justify-center align-center my-10 mx-3'>
      <Image src={imageUrl} height={48} width={48} alt="Picture" />
      <div className="flex flex-col m-3">
        <div>
        Clark
        </div>
        <div>
        You owe anurag 2000
        </div>
      </div>
      <button className='primary font-serif text-black bg-orange-400 rounded-2xl px-6 m-5'>Select</button>
    </div>
  );
}
