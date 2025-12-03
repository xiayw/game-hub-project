import { ListRoot, ListItem, HStack, Image, Spinner, Button, List, Text, Heading } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../service/image-url";
interface Props{
  onSelectGenre: (genre:Genre) => void,
  selectedGenre: Genre|null;
  
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner  />
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <ListRoot>
      {data.map((genre) => (
        <List.Item key={genre.id} as='ol' paddingY="5px">
          <HStack>
              <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button  whiteSpace='normal'
            fontWeight={genre.id === selectedGenre?.id? "bold": "normal"} fontSize="lg" variant="ghost" onClick={() => onSelectGenre(genre)} >{genre.name}</Button>
          </HStack>
        </List.Item>
      ))}
    </ListRoot>
    </>
  );
};

export default GenreList;
