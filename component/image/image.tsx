import Image from "next/image"
const Imagesection = ({ src, ...rest }: any) => {
    if (src == 'https://d35y6w71vgvcg1.cloudfront.net/media/no-post.png') {
        src = '/no-image.png'
    }
    return (
        <Image src={src}  {...rest} />
    )
}

export default Imagesection;