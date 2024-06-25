import React, {useState, useEffect} from 'react'
import { api_data2 } from './api_data2';

export default function Top_rated() {

  const [data2, setData2] = useState([]);
  const [search, setSearch] =useState([''])

  useEffect(() => {
    const searchString = String(search).toLowerCase();
    if (searchString) {
      const extracted_data = api_data2.filter(movie => 
        movie.title.toLowerCase().includes(searchString)
      );
      setData2(extracted_data);
    } else {
      setData2(api_data2);
    }
  }, [search]);

  return (
    <div className='bg-gray-700 h-auto rounded-xl '>
    <div className='w-3/5 h-10 mx-auto rounded-3xl text-center mt-20 border-black border-2 bg-white'><input type="text" className='w-full h-full rounded-3xl text-center' placeholder='Search' onChange={(e) => setSearch(e.target.value)}/></div>

    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16'>
      {data2.map((movie) => (
            <div key={movie.title} className='bg-gray-800 rounded-lg p-4'>
              <h3 className='text-black float-right bg-green-300 rounded-3xl w-10 h-10 flex justify-center items-center'>{movie.rating}</h3>
              <h3 className='text-white mb-2'>{movie.title}</h3>
              <img src={movie.image} alt={movie.title} className='w-full h-auto rounded' />
              <h3 className='text-white'>{movie.description}</h3>
              <br />
              <h3 className='text-white float-left gap-2'>{movie.genre[0]} {movie.genre[1]} {movie.genre[2]}</h3>
              <h3 className='text-white float-right'>{movie.year}</h3>
              <br />
              <h3 className='text-white hover:text-green-300 hover:text-lg cursor-pointer'><a href={movie.imdb_link}>Check-out</a></h3>
              </div>
          ))}
    </div>
  </div>
  )
}


