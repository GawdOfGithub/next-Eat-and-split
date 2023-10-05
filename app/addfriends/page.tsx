'use client'
import React from 'react';
import { useState } from 'react';
import { useName } from '../contexts/contextProvider';

type Props = {};


type friendType = 
{
  number:number
  id:number;
  name:string;
  image:string;
  FriendDega:0
}

export default function Page({}: Props) {

  const[imageUrl,setImgeUrl] = useState("https://i.pravatar.cc/")
  const[name,setName] = useState("")
  const[image,setImage] = useState("")
  const { friendsData,setDataSender,randomImageNumber,setFriendsData,FriendDega,setFriendDega } = useName();
  const[number,setNumber] = useState(2)
  const id =Math.floor(Math.random()*100)
  function handleSubmit(e:any)
  {
    e.preventDefault();
    
    let friend: friendType;

    if (image == "") {
      friend = {
        number,
        id,
        name,
        image: imageUrl,
        FriendDega:0
      };
    } else {
      friend = {
        number,
        id,
        name,
        image,
        FriendDega:0
      };
    }
    setImgeUrl("https://i.pravatar.cc")
    setFriendsData([...friendsData,friend])
    setNumber(number+1)
    
    setName("")
    setImage("")
    console.log(friendsData)
  }
  return (
    <div>
      <form className="flex flex-col justify-center items-center ml-0" onSubmit={handleSubmit}>
        <label className="text-3xl font-sans ml-0">Add a new friend</label>

        <div className="flex flex-col mt-5 ml-0">
          <div className="flex flex-col mt-10">
            <label className="font-bold">Friend Name</label>
            <input
              type="text"
              className="text-black ml-5"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mt-5 flex flex-col">
            <label className="font-bold ml-0">🪙Friend Image</label>
            <input
              type="text"
              value={image}
              onChange={(e)=>setImage(e.target.value)}
              className="text-black ml-1 mb-10"
            />
            <button
              className="flex justify-center align-center text-5xl bg-red-500"
            >
              Add
              <span className="material-icons">add</span>
            </button>
            <div className="font-serif text-blue-800 mt-20 text-5xl">
              Your Friend was added to the list
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
