import { useState } from 'react'
import { Grid, ChakraProvider, GridItem } from "@chakra-ui/react"

import './App.css'

function App() {


  return (

    <Grid templateAreas = {`"nav nav" "aside main"`}>
      <GridItem area = 'nav' bg = 'coral'>Nav</GridItem>
      <GridItem area = 'aside' bg = 'gold'>Aside</GridItem>
      <GridItem area = 'main' bg = 'dodgerblue'>Main</GridItem>
    </Grid>
  )
}

export default App
