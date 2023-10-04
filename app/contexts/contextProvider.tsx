
'use client'
import { createContext, useContext, useState, ReactNode } from "react";

// Define the types for name and setName
type ContextType = {
  randomImageNumber:number;
  dataSender:boolean
  setDataSender:(data:boolean)=> void;

  data:{
    name:string
    image:string
  
  }
  setData:(data: { name: string; image: string }) => void; 
}



const Context = createContext<ContextType | undefined>(undefined);

interface NameProviderProps {
  children: ReactNode; // Specify the type for children
}

export function Provider({ children }: NameProviderProps) {
  const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
  const[dataSender,setDataSender]=useState(false)
  const[data,setData] = useState({
    name:"",
    image:""
  })

  return (
    <Context.Provider value={{ data,setData,randomImageNumber,dataSender,setDataSender}}>
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
