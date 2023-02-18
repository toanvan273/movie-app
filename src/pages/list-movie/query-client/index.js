import { useQuery } from 'react-query';
import { getPopular } from '../../../api/movie';

export const useQueryPopularMovie = () => {
    const { data, error } = useQuery(['POPULAR_MOVIE'], getPopular, {});
    return { data, error };
};