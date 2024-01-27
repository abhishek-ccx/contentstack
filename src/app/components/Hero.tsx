import Image from "next/image";
import image1 from "../assests/motor-1.png"
import image2 from "../assests/motor-2.png"

const Hero = () =>{
  return(
      <div className="w-full ">
        <Image src={image1} alt={"alkhdlkan"} className="w-full" />
        {/* <Image src={image2} alt={"alkkan"} className="w-full" /> */}
      </div>
  )
}

export default Hero;