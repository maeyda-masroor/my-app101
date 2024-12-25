import Image from "next/image";
import Logo from '../public/images/logo.png';
export default function Home(){
    return <div className="flex m-5 p-5 gap-10">
            <div className="rounded-full border-2 border-white">
                <Image src={Logo} width={200} height={200} alt="c"/>    
            </div>
            <div className="text-white">
            <h1 className="text-bold text-6xl">Sidney Liebrand's blog</h1>
            <h4 className="text-medium text-xl">My name is Sidney Liebrand. I am a Software developer specialized in front-end development with experience in JS, React, Ruby, Rails, Lua, PHP, and more. This is the place where I publish new blog posts and perhaps a tool or two in the future.
            </h4>
            </div>
        </div>
}
