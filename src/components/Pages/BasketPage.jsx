import React from 'react'
import SocksCards from '../UI/SocksCards'
export default function BasketPage({ socks }) {
    console.log('-------------',socks);
  return (
    <div className="row mt-3">
<SocksCards socks={socks}/>
    </div>
  )
}

