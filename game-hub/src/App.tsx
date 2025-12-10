import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";


import "./App.css";
import GameGrid from "./components/GameGrid";
import GaneHeading from "./components/GaneHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  //const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar />
      </GridItem>
      <Box hideBelow="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
          />
        </GridItem>
      </Box>

      <GridItem area="main">
        <Box paddingLeft={2} >
          <GaneHeading />
          
          <Flex  marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector/>

            </Box>
            <SortSelector/>
          </Flex>
        </Box>
        <GameGrid />

      </GridItem>
    </Grid>
  );
}

export default App;
