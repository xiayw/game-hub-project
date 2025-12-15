
import APIClinet, { type FetchResponse } from '@/services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import useGameQueryStore from '@/store';
import type { Game } from '@/entities/Game';
const apiClient = new APIClinet<Game>('/games');

const useGames = () =>{
      const gameQuery = useGameQueryStore(s=>s.gameQuery);
     return useInfiniteQuery<FetchResponse<Game>, Error>({
        initialPageParam:1,
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
        apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
      
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
}

/*    useData<Game>('/games',
     {params: {
        genre: genreId, 
        platform: platformId,
        ordering: sortOrder
    }},
    [genreId, platformId, sortOrder]    
    );*/

export default useGames;