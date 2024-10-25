import Image from "next/image";
import Link from "next/link";
import sofamain2 from "../../images/sofamain2.png"
import trending1 from "../../images/trending1.png"
import trending2 from "../../images/trending2.png"
import trending3 from "../../images/trending3.png"
import trending4 from "../../images/trending4.png"
import trending5 from "../../images/trending5.png"


export default function Trending(){
    return(
        <div>
            <section className="mt-[40px] flex flex-col md:flex-row justify-between px-[8%] py-[40px] lg:h-[90vh] md:h-auto bg-purple-50">
                <div className="flex justify-center">
                    <Image src={sofamain2} alt="sofa" className="h-auto md:w-[600px] md:h-[500px]"/>
                </div>
                <div className="ml-[20px]">
                <h1 className="text-[20px] font-extrabold leading-relaxed mt-[40px] ml-[-20px] text-purple-800 lg:text-3xl ">Unique Features Of Latest & <br /> Treanding Products</h1>
                <ul className="list-disc text-2xl text-pink-500">
                    <li className="mt-[14px]"><span className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></li>
                    <li className="mt-[14px]"><span className="text-gray-400 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga perferendis exercitationem. Eveniet, soluta!</span></li>
                    <li className="mt-[14px]"><span className="text-gray-400 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing.</span></li>
                </ul>
                <div className="flex gap-4 mt-[20px] ml-[-20px]">
                <Link href={""} ><h1 className="h-[30px] w-[100px] py-1 bg-pink-600 md:w-[140px] md:h-[50px] md:py-4 text-center text-sm font-extrabold text-white">Add To Cart</h1></Link>
                <h4 className="text-[10px] md:text-[16px]">B&B Italian Sofa <br /> $32.00</h4>
                </div>
                </div>
                

            </section>

            <section id="trends" className="flex gap-4 justify-center py-[40px]">
                <div className="w-[320px] h-[270px] bg-pink-100 rounded-md shadow-gray-custom">
                    <h2 className="text-[20px] text-purple-800 font-semibold mt-[20px] ml-[20px]">23% off on all products</h2>
                    <h4 id="h4" className="w-[80px] text-pink-500 text-center mt-[10px] ml-[20px]">Shop Now</h4>
                    <Image src={trending1} alt="clock" className="mt-[-25px] ml-[120px]"/>

                </div>

                <div id="trendDiv" className="w-[320px] h-[270px] bg-purple-100 rounded-md shadow-gray-custom">
                <h2 className="text-[20px] text-purple-800 font-semibold mt-[20px] ml-[20px]">23% off on all products</h2>
                    <h4 id="h4" className="w-[80px] text-pink-500 text-center mt-[10px] ml-[20px]">Shop Now</h4>
                    <Image src={trending2} alt="table" className="mt-[40px] ml-[110px] w-[200px]"/>
                </div>

                <div className="flex gap-6 flex-col w-[320px] h-[270px]">
                    <div className="flex h-[74px] w-[320px] rounded-md shadow-gray-custom">
                        <div className="h-[74px] w-[107px] bg-gray-200">
                            <Image src={trending3} alt="chair" className="ml-[20px]"/>
                        </div>
                        <h4 className="text-1xl font-semibold text-purple-800 ml-[10px] mt-[10px]">Executive Seat Chair <br /> $32.00</h4>
                    </div>
                    <div className="flex h-[74px] w-[320px] rounded-md shadow-gray-custom">
                        <div className="h-[74px] w-[107px] bg-gray-200">
                            <Image src={trending4} alt="chair" className="ml-[20px]"/>
                        </div>
                        <h4 className="text-1xl font-semibold text-purple-800 ml-[10px] mt-[10px]">Executive Seat Chair <br /> $32.00</h4>
                    </div>
                    <div className="flex h-[74px] w-[320px] rounded-md shadow-gray-custom">
                        <div className="h-[74px] w-[107px] bg-gray-200">
                            <Image src={trending5} alt="chair" className="ml-[20px]"/>
                        </div>
                        <h4 className="text-1xl font-semibold text-purple-800 ml-[10px] mt-[10px]">Executive Seat Chair <br /> $32.00</h4>
                    </div>

                </div>


            </section>
        </div>
    )
}