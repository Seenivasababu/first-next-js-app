

import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const AppBar = () => {
  
  return (
    <>
    <Button><Link href={'/addBook'}> AddBook</Link></Button>
    <Button><Link href={'/fetchBooks'}> fetchBook</Link></Button>
    <Button><Link href={'/'}> Home</Link></Button>
    
    
   
    </>
  )
}

export default AppBar