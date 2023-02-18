import { useInfiniteQuery } from 'react-query';
import { getNowPlaying, getPopular, getTopRated } from '../../../api/movie';

export const useQueryPopularMovie = () => {
    const { data: movies,error, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(['POPULAR_MOVIE'],
        ({ pageParam = 1 }) => getPopular(pageParam),
        {
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.data.results.length < 20) return undefined;
                return pages.length + 1;
            },
            retry: false,
        });
    console.log('POPUPLAR', error);
    return { movies, isFetching, fetchNextPage, hasNextPage };
};

export const useQueryTopRatedMovie = () => {
    const { data: movies, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(['TOP_RATED_MOVIE'],
        ({ pageParam = 1 }) => getTopRated(pageParam),
        {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.data.results.length < 20) return undefined;
            return pages.length + 1;
        },
        retry: false,
    });
    return { movies, isFetching, fetchNextPage, hasNextPage };
};

export const useQueryNowPlayingMovie = () => {
    const { data: movies, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(['TOP_RATED_MOVIE'],
        ({ pageParam = 1 }) => getNowPlaying(pageParam),
        {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.data.results.length < 20) return undefined;
            return pages.length + 1;
        },
        retry: false,
    });
    return { movies, isFetching, fetchNextPage, hasNextPage };
};