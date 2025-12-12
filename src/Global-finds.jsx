import React from 'react'
import Shord from './globalfinds/Shord';
import Beautyproducts from './globalfinds/Beautyproducts';

const Globalfinds = () => {
  return (
    <div className='container'>
        <div>
            <h1 className=' font-[600] text-[25px]'>Order any product from any country</h1>
            <Shord/>
            <Beautyproducts/>
        </div>

    </div>
  )
}

export default Globalfinds;
