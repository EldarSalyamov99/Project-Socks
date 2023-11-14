import React from 'react';

export default function DesignCard({ img, designOntouch}) {
  return (
    <div>
      <div className="card" style={{ width: '10rem' }}>
        <img className="card-img-top" src={`/img/design/${img}`} alt="Card" style={{ width: '100%' }} />
        <button className='knopka' onClick={()=>designOntouch(img)} type="button">Выбрать</button>
      </div>
    </div>
  );
}