"use client"
import { Card, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

const AddBook = () => {
  
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [author,setAuthor] = useState('')
    const [category,setCategory] = useState('')
    const [price,setPrice] = useState(0)

    const handleSubmit = async () =>{
      try {
        const response = await axios.post('http://localhost:3001/books',{
                    title,description,category,author,price
        },{
            headers: {
              Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        console.log(response.data);
     
      } catch (error) {
        console.log(error.message);
        return <h1>Error</h1>
      }
        
    }

    return (
        <div>
            <center>
            <Card style={{width:400,padding:20,marginTop:20}}>
                <TextField variant='outlined' label='Enter title' fullWidth
                 onChange={(e)=>setTitle(e.target.value)}/> <br/> <br/>
                <TextField variant='outlined' label='Enter description' fullWidth
                 onChange={(e)=>setDescription(e.target.value)}/> <br/> <br/>
                <TextField variant='outlined' label='Enter author' fullWidth
                 onChange={(e)=>setAuthor(e.target.value)}/> <br/> <br/>
                <TextField variant='outlined' label='Enter category' fullWidth
                 onChange={(e)=>setCategory(e.target.value)}/> <br/> <br/>
                <TextField variant='outlined' label='Enter price' fullWidth
                 onChange={(e)=>setPrice(e.target.value)}/> <br/> <br/>

                 <Button variant='contained' color='success' onClick={handleSubmit}> Add Book</Button>
            </Card>
            </center>
        </div>
    )
}

export default AddBook