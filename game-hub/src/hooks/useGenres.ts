import genres from '@/data/genres';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClinet from "../services/api-client";
import type { Genre } from '../entities/Genre';

const apiClient = new APIClinet<Genre>('/genres');
const useGenres = () => 
    useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'), //24h
        initialData: genres, 
    });
    //({data: genres, isLoading: false, error: null})
    //useData<Genre>('/genres');
export default useGenres;