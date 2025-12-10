import { Input, Kbd, InputGroup } from '@chakra-ui/react'
import { LuSearch } from "react-icons/lu"

interface Props {
  onSearch: (searchText: string) => void,

}
const SearchInput = ({onSearch}: Props) => {
  return (
    <form onSubmit={(event) =>{ 
        event.preventDefault();
        console.log(event.target);
        }}>
        <InputGroup  flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
        <Input placeholder='Search games..'
        borderRadius={20} variant='outline'>
        </Input>
          </InputGroup>
    </form>
  )
}

export default SearchInput