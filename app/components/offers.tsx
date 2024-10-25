import Image from "next/image";
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import icon4 from "../../images/icon4.png"

export default function Offers(){
    return(
        <section className="h-auto">
            <h1 className="text-purple-900 text-2xl font-extrabold text-center mt-[30px] tracking-small">What Shopex Offers!</h1>
            <div id="cards" className="flex gap-4 justify-center mt-[40px]">
                
                {/* card 1 */}
                <div className="flex flex-col justify-center w-[270px] h-[320px] shadow-gray-custom rounded-md">
                    <Image src={icon1} alt="delivery" className="mx-[100px] mb-[10px]"/>
                    <h2 className="text-2xl font-semibold text-center mb-[10px] text-purple-800">24/7 Support</h2>
                    <p className="text-sm text-center px-[20px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>

                {/* card 2 */}
                <div className="flex flex-col justify-center w-[270px] h-[320px] shadow-gray-custom rounded-md">
                    <Image src={icon2} alt="delivery" className="mx-[100px] mb-[10px]"/>
                    <h2 className="text-2xl font-semibold text-center mb-[10px] text-purple-800">24/7 Support</h2>
                    <p className="text-sm text-center px-[20px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>

                {/* card 3 */}
                <div className="flex flex-col justify-center w-[270px] h-[320px] shadow-gray-custom rounded-md">
                    <Image src={icon3} alt="delivery" className="mx-[100px] mb-[10px]"/>
                    <h2 className="text-2xl font-semibold text-center mb-[10px] text-purple-800">24/7 Support</h2>
                    <p className="text-sm text-center px-[20px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>

                {/* card 4 */}
                <div className="flex flex-col justify-center w-[270px] h-[320px] shadow-gray-custom rounded-md">
                    <Image src={icon4} alt="delivery" className="mx-[100px] mb-[10px]"/>
                    <h2 className="text-2xl font-semibold text-center mb-[10px] text-purple-800">24/7 Support</h2>
                    <p className="text-sm text-center px-[20px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>

            </div>
        </section>
    )
}