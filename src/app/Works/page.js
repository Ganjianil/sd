"use client"

import React from "react";
import Image from "next/image";
import "./stylesheet.css"
import { useRouter } from "next/navigation";
const page = () => {
    const router=useRouter()
    const redirectpage=(path)=>{
        router.push(path)
    }
  return (
    <div>
        <div className="ord">  <h3>ORDER NOW</h3></div>
        <div>
            <marquee>
                <h6>FLAT 20% PERCENT DISCOUNT'S ON ALL SILVER AND BRASS PRODUCT'S LIMITED TIME OFFER</h6>
            </marquee>
        </div>
        <div className="wimg">
            <div className="works" >
                <div>
                <Image className="worksimg" src="/up.jpg"  width={300} height={200}/>

                </div>
                <div>
                    <span>COUSTOMIZED ORDERs</span>
                </div>
            </div>
            <div className="works">
                <div className="worksimg" onClick={()=>{
                    redirectpage("/Catagories")
                }}>
                <Image className="worksimg"  src="/bi.png"  width={300} height={200}/>


                </div>
                <div>
                    <span className="spanss">BRASS & SILVER PRODUCTS</span>
                </div>
            </div>
        </div>

    </div>
  )
};

export default page;
