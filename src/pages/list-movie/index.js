import React from 'react';
import { useParams } from 'react-router-dom';
import NowPlayingMovie from './now-playing';
import PopularMovie from './popular';
import TopRatedMovie from './top-rated';

function ListMovie() {
  const params = useParams()
  return (
    <div>
      {params.page === 'popular' && <PopularMovie />}
      {params.page === 'top-rated' && <TopRatedMovie />}
      {params.page === 'now-playing' && <NowPlayingMovie />}
    </div>
  );
}
export default ListMovie;
