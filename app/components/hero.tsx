import Image, { StaticImageData } from "next/image";
import homeSrc from '../public/哈登.png'

interface IProps {
    imgurl: StaticImageData,
    alttxt: string,
    content: string
}

export default function Page(props: IProps) {
    return (
        <div className="h-screen relative">
            <div className="absolute inset-0 -z-10">
                <Image src={props.imgurl} fill style={{ objectFit: 'cover' }} alt={props.alttxt} />
                <div className=" absolute inset-0 bg-gradient-to-r from-gray-900"></div>
            </div>
            <div className="flex justify-center pt-48">
                <h1 className="text-white text-6xl">{props.content}</h1>
            </div>
        </div>
    );
}
