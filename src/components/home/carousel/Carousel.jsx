import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../loader/Loader';

function Carousel() {
  const { allPosts } = useSelector((state) => state.post);
  if(allPosts.length === 0) return <div className='w-full h-[50vw] flex justify-center items-center'><Loader/></div>
  return (
    <div className='w-full'>
      <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
      visibleSlides={1}
      infinite={true}
      className=""
      >
        <Slider className='h-[100vw] sm:h-[95vw] md:h-[80vw] lg:h-[60vw] 2xl:h-[43vw]'>
            <Slide index={0}><img className='size-img' src={allPosts[0].image[0]} alt=""/></Slide>
            <Slide index={1}><img className='size-img' src={allPosts[1].image[0]} alt=""/></Slide>
            <Slide index={2}><img className='size-img' src={allPosts[5].image[0]} alt=""/></Slide>
        </Slider>
      </CarouselProvider>
    </div>
  )
}

export default Carousel