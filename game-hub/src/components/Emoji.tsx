import { Image, type ImageProps } from '@chakra-ui/react'
import bullsEye from '../assets/bulls-eye.svg'
import thumbsUP from '../assets/thumbs-up.svg'
import meh from '../assets/meh.svg'
interface Props{
    rating: number,
}
const Emoji = ({rating}: Props) => {
    if (rating< 3) return null;
  const emojiMap: {[key:number]: ImageProps}={
    3: {src: meh, alt: 'meh', boxSize: '25px' },
    4: {src: thumbsUP, alt: 'recommended',  boxSize: '25px'},
    5: {src: bullsEye, alt: 'exceptional',  boxSize: '25px'},
  } 
  return (
   <Image {...emojiMap[rating]} marginTop={5}/>
  )
}

export default Emoji