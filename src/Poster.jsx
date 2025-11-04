import React from 'react'

const Poster = () => {
    let poster = [
        {
            img : "poster.jpeg",
        }
    ]
  return (
    <div className=''>
        <div className='mt-[20px]'>
            {
                poster.map((item,i) =>(
            <img key={i} className=' mx-auto' src={item.img} alt="" />
                ))
            }
        </div>
    </div>
  )
}

export default Poster