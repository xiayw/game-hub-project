import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/userPlatform";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
const GaneHeading = ({ gameQuery }: Props) => {

  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""}`;
  return (
    <Heading marginY={5} fontSize="5xl" textAlign='left'>
    {heading}
    </Heading>
  );
};

export default GaneHeading;
