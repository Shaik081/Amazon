import React, { useState } from 'react'
import { LuCopy } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const ShareLink = ({productId,productName}) => {

    const [copied,setCopied] = useState(false)

    const shareLink = `${import.meta.env.VITE_API_URL}/api/product/${productId}` 

    const handleCopy = () => {

        navigator.clipboard.writeText(shareLink)
        .then(()=>{
        setCopied(true)
        setTimeout(()=>setCopied(false),3000)
    })
    .catch(err=> console.error('failed to copy',err))
     
    }

     const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
     const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareLink)}`;
     const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareLink)}`;

  return (
     <div className="grid grid-cols-4 mt-2 h-20 sm:h-full  justify-items-center items-center w-screen sm:w-full">
      <div className='justify-items-center'>
        <div onClick={handleCopy} className=" bg-gray-500 text-white rounded-full hover:bg-gray-600 flex items-center text-xl justify-center h-10 w-10 cursor-pointer">
          {copied ? <SiTicktick className='text-emerald-300'/>  : <LuCopy />}
        </div> 
        <p className='text-black sm:hidden'>copy link</p>
      </div>
      <div className='justify-items-center'>
      <a href={facebookShare} target="_blank" rel="noopener noreferrer" className=" bg-blue-800 rounded-full h-10 w-10 text-white hover:bg-blue-900 flex items-center text-xl justify-center">
        <FaFacebook />
      </a>
      <p className='text-black sm:hidden'>Facebook</p>
      </div>
      <div className='justify-items-center'>
      <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="bg-neutral-800 text-white rounded-full hover:bg-gray-900  flex items-center text-xl justify-center h-10 w-10">
        <FaXTwitter />
      </a>
      <p className='text-black sm:hidden'>X</p>
      </div>
      <div className='justify-items-center'>
      <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className=" bg-green-500 text-white rounded-full hover:bg-green-600 flex items-center text-2xl justify-center h-10 w-10">
        <FaWhatsapp />
      </a>
      <p className='text-black sm:hidden'>Whatsapp</p>
      </div>
    </div>
  )
}

export default ShareLink