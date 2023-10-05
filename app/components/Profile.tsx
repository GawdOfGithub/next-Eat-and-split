'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useName } from '../contexts/contextProvider';

export default function Profile() {
  const {friendsData,randomImageNumber,setDataSender,setFriendsData,person,setPerson,FriendDega,setFriendDega} = useName()
  function handle(name:string)
  {
   setPerson(name)
   router.push("/split")
  }
  

  const router = useRouter(); 
 
  const latestArray = friendsData.map((item, index) => {
    return (
      <div className='flex justify-center align-center my-10 mx-3' key={index}>
        <Image src={item.image} height={48} width={48} alt="Picture" />
        <div className="flex flex-col m-3">
          <div>
            {item.name}
          </div>
          <div>
            You owe name money
          </div>
        </div>
        <button className='primary font-serif text-black bg-orange-400 rounded-2xl px-6 m-5' onClick={() => handle(item.name)}>
          Select
        </button>
      </div>
    );
  });

  return(
    <div>
      {latestArray}
    </div>
  )
  
}
