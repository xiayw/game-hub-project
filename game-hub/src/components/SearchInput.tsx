import useGameQueryStore from '@/store';
import { Input, Kbd, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { LuSearch } from "react-icons/lu"
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s=>s.setSearchText);
  const navigate = useNavigate();
  return (
    <form onSubmit={(event) =>{ 
        event.preventDefault();
        if (ref.current) {
            setSearchText(ref.current.value);
            navigate('/');
        } 

        }}>
        <InputGroup  flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
        <Input ref={ref} placeholder='Search games..'
        borderRadius={20} variant='outline'>
        </Input>
          </InputGroup>
    </form>
  )
}

export default SearchInput