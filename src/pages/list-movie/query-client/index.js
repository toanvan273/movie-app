import { useInfiniteQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { getNowPlaying, getPopular, getTopRated } from '../../../api/movie';
import { searchMovieAtom } from '../../../layout/header/recoil';

export const useQueryPopularMovie = () => {
    const searchAtom = useRecoilValue(searchMovieAtom)
    const { data: movies,error, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(['POPULAR_MOVIE',searchAtom],
        ({ pageParam = 1 }) => getPopular(pageParam, searchAtom),
        {
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.data.results.length < 20) return undefined;
                return pages.length + 1;
            },
            retry: false,
        });
    return { movies, isFetching, fetchNextPage, hasNextPage };
};

export const useQueryTopRatedMovie = () => {
    const searchAtom = useRecoilValue(searchMovieAtom)
    const { data: movies, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(['TOP_RATED_MOVIE',searchAtom],
        ({ pageParam = 1 }) => getTopRated(pageParam,searchAtom),
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
    const searchAtom = useRecoilValue(searchMovieAtom)
    const { data: movies, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(['TOP_RATED_MOVIE',searchAtom],
        ({ pageParam = 1 }) => getNowPlaying(pageParam,searchAtom),
        {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.data.results.length < 20) return undefined;
            return pages.length + 1;
        },
        retry: false,
    });
    return { movies, isFetching, fetchNextPage, hasNextPage };
};