
import { Grid, GridItem } from "@chakra-ui/react"

import './App.css'
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

function App() {


  return (

    <Grid templateAreas = {`"nav nav" "aside main"`}>
      <GridItem area = 'nav' bg = 'coral'>Nav</GridItem>
      <GridItem area = 'aside' bg = 'gold'><GenreList/></GridItem>
      <GridItem area = 'main' bg = 'dodgerblue'><GameGrid/></GridItem>
    </Grid>
  )
}

export default App
