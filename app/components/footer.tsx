import React from "react"
import Link from "next/link"

export default function Footer(){
    return(
        <section id="footer" className="bg-purple-100">
            <div>
                <h1 className="text-2xl font-extrabold mb-[20px]">Hekto</h1>
                <div className="flex mb-[20px]">
                    <input type="text" placeholder="Enter Email Address" className="pl-[3px] bg-transparent w-[160px]"/>
                    <Link href={""}><h1 className="w-[100px] h-[30px] bg-pink-600 py-1 text-center text-sm font-extrabold text-white">Sign Up</h1></Link>
                </div>
                <p className="text-gray-400 text-[12px]">Contact Info <br /> Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div id="cat" className="ml-[30px]">
                <h1 className="text-1xl font-semibold">Categories</h1>
                <ul id="ft" className="text-gray-400 mt-[15px] text-[12px]">
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                </ul>
            </div>
            <div id="cust">
                <h1 className="text-1xl font-semibold">Customer Care</h1>
                <ul id="ft" className="text-gray-400 mt-[15px] text-[12px]">
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                </ul>
            </div>
            <div id="pages">
                <h1 className="text-1xl font-semibold">Pages</h1>
                <ul id="ft" className="text-gray-400 mt-[15px] text-[12px]">
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                </ul>
            </div>
        </section>
    )
}