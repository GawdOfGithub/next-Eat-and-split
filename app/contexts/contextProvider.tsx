"use client"
import React, { createContext, useContext, useState } from 'react';

type Friend = {
  number:number
  name: string;
  id: number;
  image: string;
  FriendDega:number;
};

type ContextType = {
  person:string;  //who will pay the bill
  setPerson:(person:string)=>void
  billAmount:number
  setBillAmount:(billAmount:number)=>void
  randomImageNumber: number;
  dataSender: boolean;
  setDataSender: (data: boolean) => void;
  friendsData: Friend[];
  setFriendsData: React.Dispatch<React.SetStateAction<Friend[]>>; // Update the type of 'setData'
  FriendDega:number
  setFriendDega:(FriendDega:number)=>void
};

const Context = createContext<ContextType | undefined>(undefined);

interface NameProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: NameProviderProps) {
  const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
  const imageUrl = `https://i.pravatar.cc/${randomImageNumber}?w=48&h=48`;

  const friends: Friend[] = [
    {
      number:1,
      name: "Anurag",
      id: 1,
      image: imageUrl,
      FriendDega:0
    },
  ];

  const [dataSender, setDataSender] = useState(false);
  const [friendsData, setFriendsData] = useState(friends);
 const[billAmount,setBillAmount] = useState(0)
 const [person,setPerson] = useState("")
 const[FriendDega,setFriendDega] = useState(0)
  return (
    <Context.Provider value={{ friendsData, setFriendsData, randomImageNumber, dataSender, setDataSender,billAmount,setBillAmount,person,setPerson,FriendDega,setFriendDega}}>
      {children}
    </Context.Provider>
  );
}

export function useName() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
}
