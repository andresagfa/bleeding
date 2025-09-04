import Image from "next/image";
import DotGrid from '../components/DotGrid';
import { kMaxLength } from "node:buffer";
import img from '../public/Vector (1).svg'
import ThreePart from '../components/ThreePart'
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="relative flex h-screen flex-col  items-center  bg-gray-50">
    
      {/* Dot grid background */}
       <div className="absolute inset-0 z-0absolute bottom-0 left-0 right-0 z-0 ">
     <DotGrid 
          dotSize={2}
          gap={15}
          baseColor="#F4F6F7"
          activeColor="black"
          proximity={120}
          shockRadius={0}
          shockStrength={0}
          resistance={1000}
          returnDuration={0.5}
          speedTrigger={0}
        />
      </div> 

      {/* Content */}
      <div className="flex mt-2">
        <img src="/Vector (1).svg" alt="" />
        <img src="/Group (1).svg" alt="" />
      </div>
<ThreePart/>
<Footer/>
    </div>
  );
}
