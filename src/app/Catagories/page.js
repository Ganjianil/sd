"use client"

import React, { useEffect } from "react";
import "./stylesheets.css"
import { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"

const page = () => {
 const[nimage,setnimage]= useState(0)
 let nimages=["/ter.webp","/ter2.webp"]
useEffect(()=>{
 const interval= setInterval(()=>{
    
    setnimage((index)=>(index+1)%nimages.length)
 },3500)
 return ()=> clearInterval(interval)
  },[nimages.length])
  return (
    <div>
      <div className="catgeory">
        <h1 >Collections</h1>
      </div>
      <div>
        <div className="products">
            <div className="product-item">
                <div>
                 <Image className="imgs" src={nimages[nimage]} width={1440} height={100}
                          alt="images" />
                          </div>
                          <div>
                          <span className="spans">Nataraj Statue - 11 inches</span>
                          </div>
                          <div>
                            <h6>MRP 450</h6>
                          </div>
                          <div className="btns  ">
                            <button className="btn btn-primary">BUYNOW</button>
                            <button className="btn btn-success">ADD TO CART</button>

                          </div>
                          
                          
                          
            </div>
            <div className="product-item">
                <div>
                 <Image className="imgs" src={nimages[nimage]} width={1440} height={100}
                          alt="images" />
                          </div>
                          <div>
                          <span className="spans">Nataraj Statue - 11 inches</span>
                          </div>
                          <div>
                            <h6>MRP 450</h6>
                          </div>
                          <div className="btns  ">
                            <button className="btn btn-primary">BUYNOW</button>
                            <button className="btn btn-success">ADD TO CART</button>

                          </div>
                          
                          
                          
            </div>
            <div className="product-item">
                <div>
                 <Image className="imgs" src={nimages[nimage]} width={1440} height={100}
                          alt="images" />
                          </div>
                          <div>
                          <span className="spans">Nataraj Statue - 11 inches</span>
                          </div>
                          <div>
                            <h6>MRP 450</h6>
                          </div>
                          <div className="btns  ">
                            <button className="btn btn-primary">BUYNOW</button>
                            <button className="btn btn-success">ADD TO CART</button>

                          </div>
                          
                          
                          
            </div> <div className="product-item">
                <div>
                 <Image className="imgs" src={nimages[nimage]} width={1440} height={100}
                          alt="images" />
                          </div>
                          <div>
                          <span className="spans">Nataraj Statue - 11 inches</span>
                          </div>
                          <div>
                            <h6>MRP 450</h6>
                          </div>
                          <div className="btns  ">
                            <button className="btn btn-primary">BUYNOW</button>
                            <button className="btn btn-success">ADD TO CART</button>

                          </div>
                          
                          
                          
            </div>
            <div>
                 <Image className="imgs" src={nimages[nimage]} width={1440} height={100}
                          alt="images" />
            </div>
            <div>
                 <Image className="imgs" src={nimages[nimage]} width={1440} height={100}
                          alt="images" />
            </div>
            <div>
                 <Image className="imgs" src={nimages[nimage]} width={1440} height={100}
                          alt="images" />
            </div>
            <div>
                 <Image className="imgs" src={nimages[nimage]} width={1440} height={100}
                          alt="images" />
            </div>
            <div className="product-item">
                <div>
                 <Image className="imgs" src={nimages[nimage]} width={1440} height={100}
                          alt="images" />
                          </div>
                          <div>
                          <span className="spans">Nataraj Statue - 11 inches</span>
                          </div>
                          <div>
                            <h6>MRP 450</h6>
                          </div>
                          <div className="btns container ">
                            <button className="btn btn-primary">BUYNOW</button>
                            <button className="btn btn-success">ADD TO CART</button>

                          </div>
                          
                          
            </div>
            <div className="product-item">
                <div>
                 <Image className="imgs" src={nimages[nimage]} width={1440} height={100}
                          alt="images" />
                          </div>
                          <div>
                          <span className="spans">Nataraj Statue - 11 inches</span>
                          </div>
                          <div>
                            <h6>MRP 450</h6>
                          </div>
                          <div className="btns container ">
                            <button className="btn btn-primary">BUYNOW</button>
                            <button className="btn btn-success">ADD TO CART</button>

                          </div>
                          
                          
            </div>
            
        </div>

      </div>
    </div>
  );
};

export default page;
