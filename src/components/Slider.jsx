import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function Slider({ images }) {
  let [currentImage, setCurrentImage] = useState(0);

  let nextSlide = () => {
    if (currentImage === images.length - 1) setCurrentImage(0);
    else setCurrentImage(currentImage + 1);
  };
  return (
    <>
      <div className='overflow-hidden relative'>
        <div
          className={`flex transition ease-out duration-75 gap-5`}
          style={{
            transform: `translateX(-${currentImage * 30}%)`,
          }}
        >
          {images.map((image) => (
            <img src={image} key={image} className='h-[200%] aspect-auto' />
          ))}
        </div>

        <div className='absolute top-56 justify-end items-end right-3'>
          <button
            onClick={nextSlide}
            className='bg-white bg-opacity-55 hover:bg-opacity-100 rounded-full px-2 py-1 text-primary text-3xl pb-2 shadow-md'
          >
            <span className='font-bold'>&rarr;</span>
          </button>
        </div>

        <div className='absolute px-3 py-4 flex justify-start gap-5 w-full'>
          {images.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrentImage(i);
                }}
                key={'circle' + i}
                className={`rounded-full w-3 h-3 cursor-pointer  ${
                  i == currentImage
                    ? 'bg-primary ring-primary ring-opacity-50 ring-offset-secondary ring-offset-8 ring-1'
                    : 'bg-gray-300'
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
