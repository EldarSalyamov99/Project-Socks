import React, { useState } from 'react'
import OneSock from './OneSock';

export default function SocksCards({socks}) {
  const [currentSoks,setCurrentSoks]= useState(socks)
    const deleteHandler = async(id)=>{
        await fetch(`/api/${id}`);
        setCurrentSoks((prev)=>prev.filter((el)=>el.id!==id));
        
    }
    console.log('qqqqqqqqqqqq',socks);
  return (
    <div className='row'>
                {currentSoks.map((sock)=>(
            <div key = {sock.id} className='col-4 mb-3 mt-3'>
                <OneSock  deleteHandler={deleteHandler} sock={sock}/>

            </div>   
        ))}
    </div>
  )
}
