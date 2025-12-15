import useScreenshots from "@/hooks/useScreenshots"
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props{
    gameId: number,
}

const GameScreenShots = ({gameId}: Props) => {
  const {data, isLoading, error} =  useScreenshots(gameId);
    if (isLoading) return null;
    if (error) throw error;
    
  return (
    <SimpleGrid columns = {{base: 1, md: 2}} borderSpacing={2}>
        {data?.results.map((file) => <Image src={file.image} key={file.id} /> )}

    </SimpleGrid>

  )
}

export default GameScreenShots