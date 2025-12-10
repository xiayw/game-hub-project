import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GaneHeading from "./components/GaneHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string,
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery,searchText})}/>
      </GridItem>
      <Box hideBelow="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id})}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Box>

      <GridItem area="main">
        <Box paddingLeft={2} >
          <GaneHeading gameQuery={gameQuery} />
          
          <Flex  marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
            </Box>
            <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />

      </GridItem>
    </Grid>
  );
}

export default App;
