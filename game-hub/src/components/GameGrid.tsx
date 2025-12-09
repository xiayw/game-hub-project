import { SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from "../hooks/useGames";
import type { GameQuery } from "@/App";
import React from "react";
interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {
  //const { data, error, isLoading } = useGames(gameQuery);
    const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
   if (error) return <Text>{error.message}</Text>;
   const fetchedGamesCount =
    data?.pages.reduce(
      (total, page) => total + page.results.length,
      0
    ) || 0;
  return (
    <>
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        borderSpacing={6}
      >

        {isLoading &&
          skeletons.map((skelete) => (
            <GameCardContainer  key={skelete}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
