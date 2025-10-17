import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { myContext } from '../App'


const ProductDetails = () => {

    const {id} = useParams()
    const {detail,setDetails} = useContext(myContext)
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/api/product/${id}`).then(res => setDetails(res.data.getById)
        )
    },[id,setDetails])


  return (
  <div>
    <div className='p-4'>
    <button
        onClick={() => navigate('/')}
        className="mb-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all cursor-pointer"
      >
        ← Back
      </button>
      </div> 
  <div className='flex justify-center items-center p-2 '>
          <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 cursor-pointer"
          onClick={()=>window.open(detail.link)}
          >
          <img src={detail.image} alt="image" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <p className="text-md md:text-xl font-semibold tracking-wide text-left hover:text-orange-400">{ detail.name?.length > 90 ? detail.name.slice(0,50) + '...' : detail.name}</p>
            </div>
          </div>
        </div>
</div>
</div>
  )
}

export default ProductDetails