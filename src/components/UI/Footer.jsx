import React from 'react'
import { YMaps , Map} from '@pbe/react-yandex-maps';
import DustTwo from './Map';


export default function Footer({ point }) {
  return (
    <>
<div className="footer" > 
      <div className="footer_item">
         <div className='title'>Контактная информация:</div>
            <div className="footer_name">Email:</div>
            <div className="footer_name">Номер телефона:</div>
            <div className="footer_name">Адрес:</div>
        </div>
        <div className="footer_item">
         <div className='title'>Enjoy Socks</div>
          <div className="footer_value"> info@enjoysocks.ru</div>
         <div className="footer_value">+7-999-666-36-36</div>
          <div className="footer_value">г. Москва, Шоссе Энтузиастов 12 ст2</div>
     </div>
        <div className='map'>
         <div className='ymap'>Мы на Яндекс.Картах</div>   
         <div> <DustTwo point={point}/> </div>
        </div>
 </div>
    <div className='team_name'> Development "OkoloRAZRABOTKI" team ⓒ</div>
</>
  )
}
