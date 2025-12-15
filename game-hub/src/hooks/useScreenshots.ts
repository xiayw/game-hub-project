import type ScreenShort from "@/entities/ScreenShout";
import APIClinet from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) =>{
    const apiClient = new APIClinet<ScreenShort>(`/games/${gameId}/screenshots`);
    return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn:  apiClient.getAll

});
}
export default useScreenshots;



