import React from 'react'

const Afterbaneradd = () => {
    let advertise = [
        {
            img : "afterbanerimgadd.gif"
        }
    ]
  return (
    <div className=' container '>
        {
            advertise.map((item,i) =>(
        <div key={i} className='mt-[20px]'>
            <img src={item.img} alt="" />
        </div>
            ))
        }
    </div>
  )
}

export default Afterbaneradd