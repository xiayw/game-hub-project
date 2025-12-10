import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/userPlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GaneHeading = () => {
  const genreId = useGameQueryStore(s=>s.gameQuery.genreId);
  const genre = useGenre(genreId);
  const platformId = useGameQueryStore(s=>s.gameQuery.platformId);
  const platform = usePlatform(platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""}`;
  return (
    <Heading marginY={5} fontSize="5xl" textAlign='left'>
    {heading}
    </Heading>
  );
};

export default GaneHeading;
