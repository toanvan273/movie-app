import React from 'react';
import MovieCard from '../movie-card';
import { useQueryTopRatedMovie } from '../query-client';

function TopRatedMovie() {
  const { movies, fetchNextPage, hasNextPage } = useQueryTopRatedMovie();
  const renderListMovie = data => {
    if (!data) return null;
    return data?.data.results.map((item, index) => {
      return <MovieCard data={item} key={index + item.id} />
    })
  }

  return (
    <div className='container'>
    <div className='row'>
      {movies&&movies.pages.map((page) => {
        return renderListMovie(page)
      })}
    </div>
    {hasNextPage &&
       <div onClick={() => { fetchNextPage() }} className="mt-2 d-flex justify-content-center align-items-center">
       <button className='btn w-100 br-10 bg-dark7 text-fff fw-600 text-uppercase'>Load more</button>  
     </div>}
    </div>
  );
}
export default TopRatedMovie;
