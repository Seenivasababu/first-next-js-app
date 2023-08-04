import React from 'react'

import { Card,Typography } from '@mui/material'
const getData = async () => {
    const response = await fetch('http://localhost:3001/books')
    return response.json()
}

const page = async () => {
    const books = await getData()
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>

    {books.map(book=>{
        return <Card style={{width:300, padding:20, margin:20}}>
            <Typography variant='h5'> {book.title} </Typography>
            <Typography variant='h6'> {book.description} </Typography>
            <Typography variant='h6'> {book.author} </Typography>
            <Typography variant='h6'> {book.category} </Typography>
            <Typography variant='h6'> {book.price} </Typography>
            
        </Card>
    })}
</div>
  )
}

export default page