import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { allPosts, order } from '../../../redux/slices/post/postSlice';
import Loader from '../../loader/Loader';
let orderPostsRating = []
function Carousel() {
  const { allPosts } = useSelector((state) => state.post);
  useEffect(() => {
    const posts = [...allPosts]
    if(allPosts.length!==0){ orderPostsRating = posts.sort((a, b) => (a.rating > b.rating ? -1 : 1))}
  }, [allPosts])
  


  if(orderPostsRating.length === 0) return <div className='w-full h-[50vw] flex justify-center items-center'><Loader/></div>
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
            <Slide index={0}><img className='size-img' src={orderPostsRating[0].image[0]} alt=""/></Slide>
            <Slide index={1}><img className='size-img' src={orderPostsRating[1].image[0]} alt=""/></Slide>
            <Slide index={2}><img className='size-img' src={orderPostsRating[2].image[0]} alt=""/></Slide>
        </Slider>
      </CarouselProvider>
    </div>
  )
}

export default Carousel