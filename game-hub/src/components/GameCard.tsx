import type { Game } from '../hooks/useGames'
import { Image, CardBody, CardRoot, Heading, HStack } from '@chakra-ui/react'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../service/image-url'
import PlatformIconList from './PlatformIconList'
import Emoji from './Emoji'

interface Props{
    game: Game,
}
const GameCard = ({game}: Props) => {
  return (
    <CardRoot >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack justifyContent={'space-between'} marginBottom={3}>

            <PlatformIconList platforms={game.parent_platforms.map(({platform})=> platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize='2xl' >{game.name}<Emoji rating={game.rating_top}/></Heading>
        </CardBody>
    </CardRoot>
  )
}

export default GameCard