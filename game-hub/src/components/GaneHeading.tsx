import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
interface Props {
  game: GameQuery;
}
const GaneHeading = ({ game }: Props) => {
  const heading = `${game.platform?.name || ""} ${game.genre?.name || ""}`;
  return (
    <Heading marginY={5} fontSize="5xl">
    {heading}
    </Heading>
  );
};

export default GaneHeading;
