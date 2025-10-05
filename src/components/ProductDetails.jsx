import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const ProductDetails = () => {

    const {id} = useParams()
    const [detail,setDetails] = useState({})

    useEffect(()=>{
        axios.get(`https://live2vendor.onrender.com/api/product/${id}`).then(res => setDetails(res.data.getById)
        )
    },[])

  return (
    <div>
        <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 flex justify-center items-center">
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={detail.image} alt="" className="block w-full rounded-md h-96 object-contain  dark:bg-gray-500" />
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">{detail.name}</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">{detail.description}</p>
		</div>
        <div className='font-bold text-xl'>
            <span><span className='text-green-600'>Price: </span>{detail.price}</span>
        </div>
        <a href={detail.link} className='flex justify-center p-3 font-semibold mx-72 rounded-md dark:bg-violet-600 dark:text-gray-50
                  hover:shadow-md
                  hover:shadow-violet-300'>
            <button className='cursor-pointer' >
            Buy Now
            </button></a>
	</div>
</div>
</div>
  )
}

export default ProductDetails