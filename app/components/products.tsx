import Image from "next/image";
import sofa1 from "../../images/sofa1.png"
import sofa2 from "../../images/sofa2.png"
import sofa3 from "../../images/sofa3.png"
import sofa4 from "../../images/sofa4.png"

export default function Products() {
  return (
    <section className="h-auto">
        <h1 className="text-purple-900 text-2xl font-extrabold text-center mt-[30px] tracking-small">Featured Products</h1>
        <div id="cards" className="flex gap-4 justify-center mt-[40px]">

            {/* card 1 */}
            <div className="h-[361px] w-[270px] shadow-gray-custom rounded-md">
                <div className="h-[236px] px-[40px] py-[46px] bg-blue-50">
                    <Image src={sofa1} alt="sofa"/>
                </div>
                <h2 className="text-pink-700 font-bold text-center text-lg mt-3">Cantilever chair</h2>
                <div className="flex gap-2 justify-center mt-[8px]">
                    <div className="h-[4px] w-[14px] bg-green-400 rounded-md"></div>
                    <div className="h-[4px] w-[14px] bg-pink-400 rounded-md"></div>
                    <div className="h-[4px] w-[14px] bg-blue-600 rounded-md"></div>
                </div>
                <h4 className="text-center mt-[10px]">Code - Y523201</h4>
                <h4 className="text-center">$42.00</h4>
            </div>

            {/* card 2 */}
            <div className="h-[361px] w-[270px] shadow-gray-custom rounded-md">
                <div className="h-[236px] px-[79px] py-[48px] bg-pink-50">
                    <Image src={sofa2} alt="sofa"/>
                </div>
                <h2 className="text-pink-700 font-bold text-center text-lg mt-3">Cantilever chair</h2>
                <div className="flex gap-2 justify-center mt-[8px]">
                    <div className="h-[4px] w-[14px] bg-green-400 rounded-md"></div>
                    <div className="h-[4px] w-[14px] bg-pink-400 rounded-md"></div>
                    <div className="h-[4px] w-[14px] bg-blue-600 rounded-md"></div>
                </div>
                <h4 className="text-center mt-[10px]">Code - Y523201</h4>
                <h4 className="text-center">$42.00</h4>
            </div>

            {/* card 3 */}
            <div className="h-[361px] w-[270px] shadow-gray-custom rounded-md">
                <div className="h-[236px] px-[40px] py-[46px] bg-gray-100">
                    <Image src={sofa3} alt="sofa"/>
                </div>
                <h2 className="text-pink-700 font-bold text-center text-lg mt-3">Cantilever chair</h2>
                <div className="flex gap-2 justify-center mt-[8px]">
                    <div className="h-[4px] w-[14px] bg-green-400 rounded-md"></div>
                    <div className="h-[4px] w-[14px] bg-pink-400 rounded-md"></div>
                    <div className="h-[4px] w-[14px] bg-blue-600 rounded-md"></div>
                </div>
                <h4 className="text-center mt-[10px]">Code - Y523201</h4>
                <h4 className="text-center">$42.00</h4>
            </div>

            {/* card 4 */}
            <div className="h-[361px] w-[270px] shadow-gray-custom rounded-md">
                <div className="h-[236px] px-[40px] py-[46px] bg-purple-50">
                    <Image src={sofa4} alt="sofa"/>
                </div>
                <h2 className="text-pink-700 font-bold text-center text-lg mt-3">Cantilever chair</h2>
                <div className="flex gap-2 justify-center mt-[8px]">
                    <div className="h-[4px] w-[14px] bg-green-400 rounded-md"></div>
                    <div className="h-[4px] w-[14px] bg-pink-400 rounded-md"></div>
                    <div className="h-[4px] w-[14px] bg-blue-600 rounded-md"></div>
                </div>
                <h4 className="text-center mt-[10px]">Code - Y523201</h4>
                <h4 className="text-center">$42.00</h4>
            </div>
            
        </div>
    </section>

  )
}  