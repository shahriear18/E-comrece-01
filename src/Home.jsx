import React from 'react'
import Banerslider from './Banerslider'

const Home = () => {
  return (
    <div className='h-[600px]'>
        <div className='container'>
        <div className=' flex justify-between mt-[20px] baner-sections'>
            <div className=' grid justify-center items-center '>
                <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
                <p className=' text-[12px] font-[400]  mt-[10px] w-[100px]'>GLOBAL FINDS</p>
            </div>
            <div className=' grid justify-center items-center'>
            <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
            <p className=' text-[12px] font-[400]  mt-[10px] text-center'>QUICK <br /> COMMERCE</p>
            </div>
            <div className=' grid justify-center items-center'>
            <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
            <p className=' text-[12px] font-[400]  mt-[10px] text-center'>SMARTPHONE</p>
            </div>
            <div className=' grid justify-center items-center'>
            <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
            <p className=' text-[12px] font-[400]  mt-[10px] text-center '>SMARTPHONE</p>
            </div>
            <div className=' grid justify-center items-center'>
            <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
            <p className=' text-[12px] font-[400]  mt-[10px] text-center '>ELECTRONICS <br /> & APLIENCES</p>
            </div>
            <div className=' grid justify-center items-center'>
            <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
            <p className=' text-[12px] font-[400]  mt-[10px] text-center '>MEN</p>
            </div>
            <div className=' grid justify-center items-center'>
            <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
            <p className=' text-[12px] font-[400]  mt-[10px] text-center'>WOMEN</p>
            </div>
            <div className=' grid justify-center items-center'>
            <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
            <p className=' text-[12px] font-[400]  mt-[10px]  text-center'>FURNITRE</p>
            </div>
            <div className=' grid justify-center items-center'>
            <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
            <p className=' text-[12px] font-[400]  mt-[10px] text-center '>BEAUTY</p>
            </div>
            <div className=' grid justify-center items-center'>
            <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
            <p className=' text-[12px] font-[400]  mt-[10px]  text-center'>BABY CARE</p>
            </div>
            <div className=' grid justify-center items-center'>
            <div className='h-[90px] w-[90px] bg-[red] rounded-[50px]'></div>
            <p className=' text-[12px] font-[400]  mt-[10px] text-center'>TOYS</p>
            </div>
        </div>
        <Banerslider/>            
        </div>

    </div>
  )
}

export default Home