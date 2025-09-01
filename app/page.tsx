import Image from "next/image";
import DotGrid from '../components/DotGrid';
import { kMaxLength } from "node:buffer";
import img from '../public/Vector (1).svg'
import ThreePart from '../components/ThreePart'


export default function Home() {
  return (
    <div className="relative flex w-full h-[919px] flex-col  items-center gap-14 bg-gray-50">
      
      {/* Dot grid background */}
       <div className="absolute inset-0">
        <DotGrid
          dotSize={3}
          gap={100}
          baseColor="#F4F6F7"
          activeColor="black"
          proximity={500}
          shockRadius={20}
          shockStrength={1}
          resistance={1000}
          returnDuration={0.5}
        />
      </div> 

      {/* Content */}
      <div className="flex mt-5">
        <img src="/Vector (1).svg" alt="" />
        <img src="/Group (1).svg" alt="" />
      </div>
<ThreePart/>
    </div>
  );
}
