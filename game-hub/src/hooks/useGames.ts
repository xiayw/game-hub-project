import useData from './useData';
export interface Platform {
    credit: number
}
export interface Game {
    id: number,
    name: string,
    background_image:string,
    parent_platforms: {platforms: Platform} [],
    metacritic: number;
}



const useGames = () => useData<Game>('/games');



export default useGames