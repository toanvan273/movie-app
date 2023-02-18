import React from 'react';
import MovieCard from './movie-card';
import { useQueryPopularMovie } from './query-client';

function ListMovie() {
  const { data, error } = useQueryPopularMovie();
  console.log('check:',data);
  return (
    <div className='container'>
      <div className='row'>
        {data && data?.data.results.map((item, index) => {
          return <MovieCard data={item} key={index + item.id} />
        })}
      </div>
      <div onClick={()=>{} }>Load more</div>
    </div>
  );
}
export default ListMovie;
