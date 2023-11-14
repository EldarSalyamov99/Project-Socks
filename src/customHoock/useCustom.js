import React, { useState } from "react";

export default function useCustom() {
    const [img, setImg] = useState([]);
  const [design, setDesign] = useState([]);
  const [showImgContent, setShowImgContent] = useState(false);
  const [showDesignContent, setShowDesignContent] = useState(false);

  const imgHandler = async () => {
    try {
      const response = await fetch('/api/img', {
        method: 'GET'
      });
      const images = await response.json();
      setImg(images);
      setShowImgContent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const designHandler = async () => {
    try {
      const response = await fetch('/api/design', {
        method: 'GET'
      });
      const files = await response.json();
      setDesign(files);
      setShowDesignContent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closeImgContent = () => {
    setShowImgContent((prev) => !prev);
  };

  const closeDesignContent = () => {
    setShowDesignContent((prev) => !prev);
  };


  const [currentColor, setCurrentColor] = useState('#ff6');
  const handleOnChange = (color) => {
    setCurrentColor(color.hex)
    console.log(color);
  }

  const backgrondColor={
    backgroundColor:currentColor
  }
  const [designBackground, setDesignBackground] = useState();
  const [imgBackground, setImgBackground] = useState();

  const designOntouch = (path) => {
    setDesignBackground(path);
  }

  const imgOntouch = (path) => {
    setImgBackground(path);
  }

  const [click, setClick] = useState(false);

  const closeColorClick = () => {
    setClick((prev) => !prev);
  }

  return {imgHandler, designHandler, closeImgContent, closeDesignContent, img, design, showImgContent, showDesignContent, currentColor, handleOnChange, backgrondColor, designBackground, imgBackground, designOntouch, imgOntouch, click, closeColorClick};
}