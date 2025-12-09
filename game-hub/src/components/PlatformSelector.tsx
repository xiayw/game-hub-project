import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import type { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";



interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(platform=> platform.id === selectedPlatformId);
  if (error) return null;

  return (
<Menu.Root>
  <Menu.Trigger asChild>
    <Button>
      {selectedPlatform?.name || 'Platforms'}
       
      <BsChevronDown />
    </Button>
  </Menu.Trigger>
  <Portal>
    <Menu.Positioner>
      <Menu.Content>
        {data?.results.map((platform) => 
                  <Menu.Item value={platform.name} onClick={() =>onSelectPlatform(platform)} key={platform.id}>
                    {platform.name}
                </Menu.Item>
        )}
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
  );
};

export default PlatformSelector;
