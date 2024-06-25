import React, {useState, useEffect} from 'react'
import { api_data } from './api-data';

export default function Home() {

  const [data, setData] = useState([]);
  const [search, setSearch] =useState([''])

  useEffect(() => {
    const searchString = String(search).toLowerCase();
    if (searchString) {
      const extracted_data = api_data.filter(movie => 
        movie.title.toLowerCase().includes(searchString)
      );
      setData(extracted_data);
    } else {
      setData(api_data);
    }
  }, [search]);

  return (
    <div className=' bg-gray-700 h-auto rounded-xl'>
      <div className='w-3/5 h-10 mx-auto rounded-3xl text-center mt-20 border-black border-2 bg-white'><input type="text" className='w-full h-full rounded-3xl text-center' placeholder='Search' onChange={(e) => setSearch(e.target.value)}/></div>
      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {data.map((movie) => (
          <div key={movie.title} className='bg-gray-800 rounded-lg p-4'>
            <h3 className='text-black float-right bg-green-300 rounded-3xl w-10 h-10 flex justify-center items-center'>{movie.rating}</h3>
            <h3 className='text-white mb-2'>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} className='w-full h-auto rounded' />
            <h3 className='text-white'>{movie.description}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}


