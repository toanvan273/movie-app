import React, { useRef, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getNowPlaying, getPopular, getTopRated } from "../../api/movie";
import { useOnScreen } from "../../hook";
import Loading from "../../layout/loading";
import MovieCard from "./movie-card";
import { useQueryMovie } from "./query-client";

const dataApi = {
  popular: {
    key: 'POPULAR_MOVIE',
    api: getPopular
  },
  top_rated: {
    key: 'TOP_RATED_MOVIE',
    api: getTopRated
  },
  now_playing: {
    key: 'NOW_PLAYING_MOVIE',
    api: getNowPlaying
  }
}

function MainList() {
  const refElm = useRef(0);
  const params = useParams();
  const onScreen = useOnScreen(refElm, "30px");

  const dataQuery = useMemo(() => {
    switch (params.page) {
      case 'popular':
        return dataApi.popular
      case 'top-rated':
        return dataApi.top_rated
      case 'now-playing':
        return dataApi.now_playing
      default:
        return dataApi.popular
    }
  },[params])

  const { movies, isFetching, fetchNextPage, hasNextPage } = useQueryMovie(dataQuery);

  useEffect(() => {
    if (onScreen && hasNextPage &&movies) {
      if (movies.pages.length === 1) return;
      fetchNextPage();
    }
  }, [onScreen, movies]);

  const renderListMovie = (data) => {
    if (!data) return null;
    return data?.data.results.map((item, index) => {
      return <MovieCard data={item} key={index + item.id} />;
    });
  };

  return (
    <div className="container">
      <div className="row">
        {movies &&
          movies.pages.map((page) => {
            return renderListMovie(page);
          })}
        {(isFetching || !movies) && <Loading />}
      </div>
      {hasNextPage && (
        <div ref={refElm} onClick={() => {fetchNextPage()}}
          className="mt-2 d-flex justify-content-center align-items-center"
        >
          <button className="btn w-100 br-10 bg-dark7 text-fff fw-600 text-uppercase">
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
export default MainList;