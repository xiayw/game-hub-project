import type { GameQuery } from '@/App';
import useData from './useData';
import type { Platform } from './usePlatforms'
export interface Game {
    id: number,
    name: string,
    background_image:string,
    parent_platforms: {platform: Platform} [],
    metacritic: number;
}



const useGames = ({genre, platform, sortOrder}: GameQuery) =>
    useData<Game>('/games',
     {params: {
        genre: genre?.id, 
        platform: platform?.id,
        ordering: sortOrder
    }},
    [genre?.id, platform?.id]    
    );



export default useGames