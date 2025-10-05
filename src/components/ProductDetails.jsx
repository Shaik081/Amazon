import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const ProductDetails = () => {

    const {id} = useParams()
    const [detail,setDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/product/${id}`).then(res => setDetails(res.data.getById)
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
	</div>
</div>
</div>
  )
}

export default ProductDetails