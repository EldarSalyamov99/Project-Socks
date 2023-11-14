import React from 'react'
import { useParams } from 'react-router-dom';
// import useCustom from '../../customHoock/useCustom';

export default function OneSock({sock,deleteHandler}) {
  //  const { backgrondColor, designBackground, imgBackground, } =useCustom
    const { id } = useParams();

    console.log('aaaaaaaaaaaaaaaaaaa',sock);
  return (
    
     <div className="wrapper">
    <div className="color" style={{ backgroundColor: sock?.color }}>
      <div className='design' style={{ backgroundImage: `url(../img/design/${sock?.design})` }} >
        <div className="sock">
          <div className='img'  style={{ backgroundImage: `url(../img/customImg/${sock?.img})` }} />
             <button type="button" onClick={() => deleteHandler(sock.id)} className="btn btn-primary" style={{ marginLeft: '5px' }}>Delete</button>
        </div>
      </div>
    </div>
  </div>   
        
  )
}
