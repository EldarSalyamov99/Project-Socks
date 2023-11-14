import React from 'react'
import { YMaps , Map, Placemark} from '@pbe/react-yandex-maps';


export default function DustTwo({point}) {
  const clickHandler = () => {
    // window.location.href = 'https://yandex.ru/maps/213/moscow/house/shosse_entuziastov_12k2/Z04YcQdnSEUAQFtvfXt1dn9lbA==/?indoorLevel=1&ll=37.707108%2C55.747369&z=16.82'
    window.open('https://yandex.ru/maps/213/moscow/house/shosse_entuziastov_12k2/Z04YcQdnSEUAQFtvfXt1dn9lbA==/?indoorLevel=1&ll=37.707108%2C55.747369&z=16.82')
  }
    const yMap = () => (
        <YMaps>
          <Map defaultState={{ center: [55.747540, 37.706840], zoom: 10 }} >
          <Placemark  onClick={clickHandler} defaultGeometry={[point?.latitude, point?.longitude]} />
            </Map>
        </YMaps>
      );
    return (
        <div>{yMap()}</div>
  )
}
