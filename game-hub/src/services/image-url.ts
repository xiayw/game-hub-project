import noImage from '../assets/32px-No-Image-Placeholder.svg.png'
const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage ;
    const target = 'media/';
    const index = url.indexOf(target)+ target.length;
    url.slice(0,index);
    return  url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;