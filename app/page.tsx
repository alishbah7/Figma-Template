import Image from "next/image";
import Header from "./components/header"
import main2 from "../images/main2.png"
import sofamain from "../images/sofamain.png"
import Link from "next/link"
import Products from "./components/products";
import Offers from "./components/offers";
import Trending from "./components/trending";
import Footer from "./components/footer";
import companies from "../images/companies.png"

export default function Home() {
  return (
    <div>

      {/* header */}
      <Header/>

      {/* hero-section */}
      <section className="flex flex-col h-auto md:flex-row justify-between bg-purple-50">
        <div>
          <Image src={main2} alt="lantern" className="hidden lg:block"/>
        </div>

        <div className="mt-[20px] md:mt-[160px] md:text-left lg:mt-[160px]">
          <p className="text-center  text-pink-600 font-semibold md:ml-[30px] md:text-left lg:ml-[-46px]">Best Furniture For Your Castle....</p>
          <h1 className="text-center text-2xl font-extrabold leading-relaxed md:ml-[30px] md:text-left lg:text-3xl lg:ml-[-46px] mt-[10px] ">New Furniture Collection <br /> Trends In 2022</h1>
          <p className="text-center  text-gray-500 text-xs md:ml-[30px] md:text-left lg:ml-[-46px] mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo.</p>
          <Link href={""} className="flex justify-center md:justify-normal"><h1 className="md:ml-[30px] w-[140px] h-[50px] bg-pink-600 py-4 text-center text-sm font-extrabold text-white mt-[18px] lg:ml-[-46px]">Shop Now</h1></Link>
        </div>

        <div className="flex justify-center">
          <Image src={sofamain} alt="sofa" className="w-[350px] md:w-[400px] py-[80px] px-[20px] -lg:p-[14px]"/>
        </div>

      </section>

      {/* featured products */}
      <Products/>

      {/* offers */}
      <Offers/>

      {/* trending */}
      <Trending/>

      {/* Newshelter */}
      <section id="newshelter" className="flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold text-purple-900 text-center">Get Latest Update By Subscribing <br /> Our Newshelter</h1>
        <Link href={""} className="flex justify-center"><h1 className="w-[140px] h-[50px] bg-pink-600 py-4 text-center text-sm font-extrabold text-white mt-[18px]">Shop Now</h1></Link>
      </section>

      {/* Companies */}
      <section id="comp"></section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
