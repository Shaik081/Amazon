import React, { useContext, useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router";
import { myContext } from "../App";
import ShareLink from "./ShareLink";
import { TbShare2 } from "react-icons/tb";


const Product = () => {

  const {items,setItems,showShare,setShowShare,lapShare,setLapShare,isShare,setIsShare} = useContext(myContext)
  

  

  useEffect(()=>{
    const fetchData = async () => {

      try{
        const res = await axios.get("http://localhost:5000/api/product", { params: { search: '' } })
         setItems(res.data)
         
      }
      catch(err){
        console.log(err);
      }

    }
    fetchData()

  },[setItems])

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center gap-5 md:gap-6 p-2'>
      {items.map((item, i) => {
        const isActive = isShare === item._id
        const lapIsActive = lapShare === item._id
        return (
          <div key={i} className='max-w-xs rounded-md shadow-xl hover:scale-105 transition-all ease-in dark:bg-gray-50 dark:text-gray-800 cursor-pointer relative'
          >
          <img
              src={item.image}
              alt="image"
              className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500"
               onClick={()=>window.open(item.link)}
            />
            <div className="flex flex-col space-y-8 justify-between p-6">
              <div className="space-y-6"  onClick={()=>window.open(item.link)}>
                <p className="text-md md:text-xl  font-semibold tracking-wide text-left hover:text-orange-300">
                  {item.name.length > 90
                    ? item.name.slice(0, 50) + "..."
                    : item.name}
                </p>
               
              </div>
              <div className="flex items-center justify-between h-5">
                <div>
                  <TbShare2 className="text-3xl bg-gray-500 sm:hidden rounded-full p-1 backdrop-blur-3xl text-neutral-200 cursor-pointer hover:bg-gray-600"
                  onClick={()=>{setIsShare(isActive ? null : item._id)
                  setShowShare(true)  
                  }}
                  />
                </div> 
                 {showShare && lapShare === item._id && <button className=" bg-gray-600/40 backdrop-blur-2xl
                    rounded-full
                    w-52
                    h-15
                    hidden sm:grid
                    sm:grid-cols-1 
                    items-center
                    focus:outline-none
                    "
                    autoFocus
                    tabIndex={0}
                    onBlur={(e)=>{
                      if (!e.currentTarget.contains(e.relatedTarget)){
                      setShowShare(false)
                      setLapShare(null);
                    }}}
                      >
                        <ShareLink
                                  productId={lapShare} productName={
                                    items.map(item => item._id == lapShare ? item.name : "product")
                                  }/>
                      </button>
                   }
                    <div>
                  <TbShare2 className="text-3xl bg-gray-500 hidden sm:flex rounded p-1 backdrop-blur-3xl text-neutral-200 cursor-pointer hover:bg-gray-600"
                  onClick={()=>{setLapShare(lapIsActive ? null : item._id)
                   setShowShare(true) 
                  }}
                  />
                </div>
              </div> 
            </div>
          </div>
        );
      })} 
       {isShare && <div className="bg-neutral-200 p-2 rounded-lg  fixed bottom-0 left-0 right-0 z-10 border-1 border-gray-400 sm:hidden"
           >
            <p className="text-black text-xl border-b-1 ">Share</p>
            <ShareLink
                      productId={isShare} productName={
                        items.map(item => item._id == isShare ? item.name : "product")
                      }/>
                      </div>
                   } 
    </div>
  );
};

export default Product;
