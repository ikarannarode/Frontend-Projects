// import React, { useState } from 'react'

// export const Input = () => {
//     const [name, setName] = useState("");
//     const [price, setPrice] = useState("");
//     const [city, setCity] = useState("");
//     const [stock, setStock] = useState(false);





//     return (
//         <>
//             <div className='flex justify-center gap-10'>
//                 <div className='flex flex-col shadow-lg rounded h-90 w-1/3 my-10  py-5'>
//                     <form className='flex flex-col gap-3 items-center' >
//                         <h2>Form Demo</h2>
//                         <input type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)} className='w-64 rounded-md p-2 border' placeholder='Enter Name' />

//                         <input type="number" name="price" id="" value={price} onChange={(e) => setPrice(e.target.value)} className='w-64 rounded-md p-1.5 border' placeholder='Enter Price' />

//                         <select name="city" id="" value={city} onChange={(e) => setCity(e.target.value)} className='w-64 rounded-md border py-1.5 px-1'>
//                             <option value=" ">City</option>
//                             <option value="Ahmednagar">Ahmednagar</option>
//                             <option value="Pune">Pune</option>
//                             <option value="Nashik">Nashik</option>
//                             <option value="Shevgaon">Shevgaon</option>
//                             <option value="Newasa">Newasa</option>



//                         </select>
//                         <span className='self-start mx-28' >Stock: <input type="checkbox" name="stock" id="" className='cursor-pointer' checked={stock} onChange={(e) => setStock(e.target.checked)} /> Available </span>
//                         <button className='bg-slate-200 hover:bg-slate-300 w-64 py-2 rounded-md' onClick={handleSubmit} >Submit</button>
//                     </form>
//                 </div>
//                 <div className='flex flex-col shadow-lg rounded h-90 w-1/3 my-10'>
//                     <h3 className='text-center py-5'>User data will be display here</h3>


//                     <h5 className='mx-14'>Product name: <span className='font-semibold'>{data?.item1}</span></h5>
//                     <h5 className='mx-14'>Price: <span className='font-semibold'>{data?.item2}</span></h5>
//                     <h5 className='mx-14'>City: <span className='font-semibold'>{data?.item3}</span></h5>
//                     <h5 className='mx-14'>Stock Availablity: <span className='font-semibold'>{data?.item4 ? "Available" : "Not available"}</span></h5>
//                 </div>
//             </div>
//         </>
//     )

// }
















