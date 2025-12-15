import ExpandableText from "@/components/expandableText";
import GameAttribute from "@/components/GameAttribute";
import GameScreenShots from "@/components/GameScreenShots";
import GameTrailer from "@/components/GameTraler";
import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} borderSpacing={2}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>

          <GameAttribute game={game}></GameAttribute>
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />

          <GameScreenShots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
