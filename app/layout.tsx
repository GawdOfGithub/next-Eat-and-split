
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { Provider } from './contexts/contextProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eat and split',
  description: 'THe best way to split your bill',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Include metadata here */}
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      </head>

     <Provider>
    
      <body className={inter.className}>
        <div className='min-h-screen '>
          <Header/>
          <Navbar />
          {children}
        </div>
       
      </body>
      </Provider>
    </html>
  )
}
