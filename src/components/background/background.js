import Image from 'next/image';
import backgroundFaculdade from './assets/images/fonte.jpeg';

export default function Background(){
    return(
        <div className="absolute inset-0 blur-sm -z-10 w-screen h-screen bg-cover bg-center">
            <Image
                src={backgroundFaculdade}
                alt='background'
                layout='fill'
                objectFit='cover'
                quality={100}
            />
        </div>
    );
}