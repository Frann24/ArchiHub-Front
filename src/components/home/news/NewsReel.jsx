import React from "react";
import news from "../../../api/news";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getNews1 } from "../../../redux/slices/sliceNews/newsActions";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function NewsReel() {
  const dispatch = useDispatch();
  const newNews = useSelector((state) => state.newsSlice.news);

  useEffect(() => {
    dispatch(getNews1());
  }, [dispatch]);

  const carouselNews = [];

  for (let i = 0; i < newNews.length; i++) {
    if (carouselNews.length < 66) {
      carouselNews.push(newNews[i]);
    }
  }

  return (
    <div className="container mx-auto mb-20 gap-6">
      <div className="container mx-auto margin-top: 16px gap-6">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={66}
          visibleSlides={3}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8  focus:outline-indigo-200 focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div>
                  {carouselNews.map((e) => {
                    return (
                      <Slide key={e._id}>
                        <div>
                          <img
                            className="w-full aspect-[3/2] px-6 "
                            src={e.image}
                            alt="img not found"
                          />
                          <div>
                            <h2 className="text-gray-400 mt-6 px-6">
                              {e.date}
                            </h2>
                            <div style={{ marginTop: 40 }}>
                              <div className="font-semibold truncate text-transform: uppercase px-6">
                                {e.title}
                              </div>
                              <div className="font-light truncate  px-6">
                                {e.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div>
                  {carouselNews.map((e) => {
                    return (
                      <Slide key={e._id}>
                        <div
                          style={{
                            maxWidth: 450,
                            height: 580,
                            backgroundColor: "rgb(17, 52, 82)",
                            marginTop: 5,
                            marginLeft: 20,
                            borderRadius: 10,
                          }}
                        >
                          <img
                            style={{
                              minHeight: 180,
                              maxHeight: 180,
                              width: "100%",
                              objectFit: "cover",
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            }}
                            src={e.image}
                            alt="img not found"
                          />
                          <div>
                            <h2
                              style={{
                                fontSize: 20,
                                display: "flex",
                                color: "rgb(201, 196, 184)",
                                justifyContent: "center",
                                backgroundColor: "rgb(55, 109, 109)",
                                paddingTop: 10,
                                paddingBottom: 10,
                              }}
                            >
                              {e.name}
                            </h2>
                            <div style={{ marginTop: 40 }}>
                              <h3
                                style={{
                                  fontSize: 15,
                                  display: "flex",
                                  color: "rgb(201, 196, 184)",
                                  justifyContent: "center",
                                  minHeight: 230,
                                  paddingLeft: 35,
                                  paddingRight: 35,
                                  textAlign: "center",
                                }}
                              >
                                {e.description}
                              </h3>
                            </div>
                            <NavLink to={`/course/${e._id}`}>
                              <div
                                className="z-30 "
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignContent: "center",
                                }}
                              >
                                <button
                                  style={{
                                    backgroundColor: "rgb(17, 52, 82)",
                                    color: "rgb(201, 196, 184)",
                                  }}
                                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-semi-bold focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                                >
                                  Read more
                                </button>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div>
                  {carouselNews.map((e) => {
                    return (
                      <Slide key={e._id}>
                        <div
                          style={{
                            minWidth: 300,
                            maxWidth: 450,
                            height: 580,
                            backgroundColor: "rgb(17, 52, 82)",
                            borderRadius: 10,
                          }}
                        >
                          <img
                            style={{
                              minHeight: 180,
                              maxHeight: 180,
                              width: "100%",
                              objectFit: "cover",
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            }}
                            src={e.image}
                            alt="img not found"
                          />
                          <div>
                            <h2
                              style={{
                                fontSize: 20,
                                display: "flex",
                                color: "rgb(201, 196, 184)",
                                justifyContent: "center",
                                backgroundColor: "rgb(55, 109, 109)",
                                paddingTop: 10,
                                paddingBottom: 10,
                              }}
                            >
                              {e.name}
                            </h2>
                            <div style={{ marginTop: 40 }}>
                              <h3
                                style={{
                                  fontSize: 15,
                                  display: "flex",
                                  color: "rgb(201, 196, 184)",
                                  justifyContent: "center",
                                  minHeight: 230,
                                  paddingLeft: 35,
                                  paddingRight: 35,
                                  textAlign: "center",
                                }}
                              >
                                {e.description}
                              </h3>
                            </div>
                            <NavLink to={`/course/${e._id}`}>
                              <div
                                className="z-30"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignContent: "center",
                                }}
                              >
                                <button
                                  style={{
                                    backgroundColor: "rgb(17, 52, 82)",
                                    color: "rgb(201, 196, 184)",
                                  }}
                                  className=" py-2.5 px-5 mr-2 mb-2 text-sm font-semi-bold focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                                >
                                  Read more
                                </button>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
