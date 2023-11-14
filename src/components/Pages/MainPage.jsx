import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import ImgCard from '../UI/ImgCard';
import DesignCard from '../UI/DesignCard';
import useCustom from '../../customHoock/useCustom';

export default function MainPage({user}) {
  const { imgHandler, designHandler, closeImgContent, closeDesignContent, img, design, showImgContent, showDesignContent, currentColor, handleOnChange, backgrondColor, designBackground, imgBackground, designOntouch, imgOntouch,  click, closeColorClick} = useCustom();
  const makeCustom = () => {
    // Создаем объект с данными, которые будут отправлены в запросе
    const data = {
      design: designBackground,
      img: imgBackground,
      color: currentColor
    };
  
    axios
      .post('/api/custom', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      alert('Добавлено в корзину!');
  };


  return (
    <>
      <h1>{user &&`${ user.name},`} Добро пожаловать в магазин кастомных носков - Enjoy Socks!</h1>
      <div className="wrapper">
        <div className="color" style={backgrondColor}>
          <div className='design' style={{ backgroundImage: `url(../img/design/${designBackground})` }} >
            <div className="sock">
              <div className='img'  style={{ backgroundImage: `url(../img/customImg/${imgBackground})` }} />
              {!user ? (
                <button  className='btn-custom' onClick={() => {
                  alert('Друг, пожалуйста, авторизуйся!');
                  window.location.href = '/login';
                }} type='submit'>Сделать кастом</button>
                ):(
              <button  className='btn-custom' onClick={makeCustom} type='submit'>Сделать кастом</button>
              )}
              {/* <img src='/img/favorite.svg'  alt='favorite'/>  */}
            </div>
          </div>
        </div>
      </div>
              {/* цвет носкаe */}
        <div className='papaknopki'> 

<div>
      <button className='knopka' onClick={closeColorClick} type="button">Выбери цвет!</button>
      <button className='knopka' onClick={imgHandler} type="button">Выбери принт!</button>
      <button className='knopka' onClick={designHandler} type="button">Выбери узор!</button>
</div>

<div>
      {click && (
      <div>

      <SketchPicker
      color={currentColor}
      onChangeComplete={handleOnChange}
      />
      <button className='knopka' onClick={closeColorClick} type="button">Закрыть</button>
      </div>
      )}

        {/* Выбор картинки */}
      {showImgContent && (
        <Row>

          {Array.isArray(img) && img.map((el) => (
            <Col>
            <ImgCard imgOntouch={imgOntouch} key={el.id} img={el} />
            </Col>
            ))}
          <button className='knopka' onClick={closeImgContent} type="button">Закрыть</button>
            </Row>
      )}


      {/* Выбор дизайна */}
      {showDesignContent && (
        <Row>
          {Array.isArray(design) && design.map((el) => (
            <Col>
            <DesignCard key={el.id} img={el} designOntouch={designOntouch} />
            </Col>
            ))}
      <button className='knopka' onClick={closeDesignContent} type="button">Закрыть</button>
        </Row>
      )}
      </div>
      </div>
    </>
    
  );
}