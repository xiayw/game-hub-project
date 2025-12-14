import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "@/components/GameGrid";
import GaneHeading from "@/components/GaneHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Box hideBelow="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Box>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GaneHeading />

          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
