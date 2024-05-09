/* eslint-disable react/no-unescaped-entities */
export default function ComingSoon() {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='max-w-lg p-8 bg-white shadow-lg rounded-md text-center'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Coming Soon</h1>
        <p className='text-gray-600 mb-6'>
          Our website is under construction. We'll be here soon with our new
          awesome site.
        </p>
        <div className='flex justify-center'>
          <input
            type='email'
            placeholder='Enter your email'
            className='w-64 px-4 py-2 mr-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-primary'
          />
          <button className='px-6 py-2 text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none'>
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}
