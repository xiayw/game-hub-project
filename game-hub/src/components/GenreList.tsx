import { ListRoot, ListItem, HStack, Image, Spinner, Button } from "@chakra-ui/react";
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
    
    <ListRoot>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={genre.id === selectedGenre?.id? "bold": "normal"} fontSize="lg" variant="subtle" onClick={() => onSelectGenre(genre)} >{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};

export default GenreList;
