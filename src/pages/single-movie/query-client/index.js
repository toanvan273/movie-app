import { useQuery } from 'react-query';
import { getDetails } from '../../../api/movie';

export const useQueryDetailMovie = (movie_id) => {
    const { data, isFetching } = useQuery(
        ['DETAIL_MOVIE', movie_id],
        () => getDetails(movie_id)
    );
    return { data, isFetching };
};