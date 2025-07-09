import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {
    // console.log('hii');
    const params = useParams()
    console.log(params)
  return (
    <h1>Contact Us</h1>
  )
}  
