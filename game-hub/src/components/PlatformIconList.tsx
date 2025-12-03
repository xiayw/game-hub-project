
import { HStack, Icon } from '@chakra-ui/react'
import type { Platform } from '../hooks/usePlatforms'
import type { IconType } from 'react-icons'
import { FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox, FaAndroid } from 'react-icons/fa'
import { SiMacos, SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { MdPhoneIphone } from 'react-icons/md'
interface Props{
    platforms: Platform[]
}


const PlatformIconList = ({platforms}: Props) => {
  const iconMap: {[key:string]: IconType} = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  macos: SiMacos,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe
}
  return (
    <HStack marginY= {1}> 
    {
      platforms.map ((p) =>(
        <Icon key={p.id} as={iconMap[p.slug]} color='gray.500'/>
      ))
    }
    </HStack>

  )
}

export default PlatformIconList