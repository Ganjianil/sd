"use client"


import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import "./styles.css";
const page = () => {
 const[currentimage,setimage]= useState(0)
 const images=["/Banner.jpg","/pre.jpg","/Vinayak.jpeg"]
 useEffect(()=>{
 const interval= setInterval(()=>{
    
    setimage((index)=>(index+1)%images.length)
 },5000)
 return ()=> clearInterval(interval)
  },[images.length])
  
  return (
    <>
      <div>
        <div className="images">
          <Image className="img" src={images[currentimage]} width={1440} height={450}
          alt="images" />
        
        </div>
      </div>
    </>
  );
};

export default page;
