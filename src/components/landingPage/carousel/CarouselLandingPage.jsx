import React, { useEffect, useState } from 'react'
import CarouselLandingPageData from './carouselData/CarouselLandingPageData'
import infoCarousel from '../../../api/carouselData'

function CarouselLandingPage() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedComponent, setSelectedComponent] = useState(infoCarousel[0])
  const [loaded, setLoaded] = useState(true)
  const {arch, quotes, img, description, constructionName} = infoCarousel[selectedIndex]

  useEffect(()=>{
    const interval = setInterval(()=>{
      selectNewComponent(selectedIndex, infoCarousel)
    },10000)
    return () => clearInterval(interval);
  })

  const selectNewComponent = (index, component, next = false) => {
    setLoaded(false)
    setTimeout(() => {
    const condition = next ? selectedIndex < infoCarousel.length - 1 : selectedIndex > 0;
    const nextIndex = next 
      ? condition ? selectedIndex + 1 : 0
      : condition ? selectedIndex - 1 : infoCarousel.length - 1
      setSelectedComponent(infoCarousel[nextIndex])
      setSelectedIndex(nextIndex)
      setLoaded(true)
    }, 500);
  }

  /* const previous = () => {
    selectNewComponent(selectedImage, infoCarousel, false)
  }

  const next = () => {
    selectNewComponent(selectedImage, infoCarousel)
  } */
  return (
    <div className={` absolute mx-32 transition-all duration-1000 opacity-0 ${loaded ? 'opacity-100': ''}`}>
      <CarouselLandingPageData 
      arch={arch} 
      quotes={quotes}
      img={img}
      description={description}
      constructionName={constructionName}
      />
      {/* <button onClick={previous}>{'< Previous'}</button>
      <button onClick={next}>{'Next >'}</button> */}
    </div>
  )
}

export default CarouselLandingPage