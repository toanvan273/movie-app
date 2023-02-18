import React from 'react';
import Loading from '../../../layout/loading';
import MovieCard from '../movie-card';
import { useQueryNowPlayingMovie } from '../query-client';

function NowPlayingMovie() {
  const { movies, isFetching, fetchNextPage, hasNextPage } = useQueryNowPlayingMovie();
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
        {(isFetching || !movies) && <Loading /> }
    </div>
    {hasNextPage &&
       <div onClick={() => { fetchNextPage() }} className="mt-2 d-flex justify-content-center align-items-center">
       <button className='btn w-100 br-10 bg-dark7 text-fff fw-600 text-uppercase'>Load more</button>  
     </div>}
    </div>
  );
}
export default NowPlayingMovie;
