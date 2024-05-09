import { useState, useEffect } from 'react';
import { shareSetup } from '../constants';

export default function ShareSetup() {
  const [shuffledSetup, setShuffledSetup] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);

  // Shuffle array on component mount
  useEffect(() => {
    setShuffledSetup([...shareSetup]);
  }, []);

  // Function to shuffle array
  const shuffleArray = () => {
    setIsShuffling(true);
    const shuffledArray = [...shuffledSetup].sort(() => Math.random() - 0.5);
    const delay = 100; // Delay between each image change in milliseconds

    // Update shuffled array with delay
    shuffledArray.forEach((item, index) => {
      setTimeout(() => {
        setShuffledSetup(shuffledArray.slice(0, index + 1));
      }, (index + 1) * delay);
    });

    // Reset shuffle state after animation is complete
    setTimeout(() => {
      setIsShuffling(false);
    }, shuffledArray.length * delay);
  };

  return (
    <>
      <div className='flex flex-col xl:gap-10 max-sm:gap-1 xl:my-16 my-10'>
        <div className='flex flex-col gap-2 text-center'>
          <p className='text-lg font-semibold'>Share your setup with</p>
          <h1
            className='font-extrabold xl:text-4xl cursor-pointer'
            onClick={shuffleArray}
            disabled={isShuffling}
          >
            #FuniroFurniture
          </h1>
        </div>

        <div className='relative rounded-xl overflow-auto p-8 gap-5'>
          <div className='relative'>
            <div className='relative columns-2 sm:columns-3 md:columns-6'>
              {shuffledSetup.map((item, index) => (
                <div
                  key={index}
                  className={`relative mt-5`}
                  style={{ transition: 'opacity 0.5s, transform 0.5s' }}
                >
                  <img
                    className={`w-full object-cover rounded-lg ${
                      isShuffling ? `blur` : ``
                    }`}
                    src={item.thumbnail}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
