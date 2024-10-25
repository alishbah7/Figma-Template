import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <div className="flex justify-between px-[10%] py-[16px]">
        {/* Logo */}
        <div>
            <h1 className='text-2xl font-bold'>Hekto</h1>
        </div>
        {/* Link */}
        <div className="hidden lg:flex gap-4 text-purple-950">
            <Link href={""}>Home</Link>
            <Link href={""}>Pages</Link>
            <Link href={""}>Products</Link>
            <Link href={""}>Blog</Link>
            <Link href={""}>Shop</Link>
            <Link href={""}>Contact</Link>
        </div>
        <div className="flex">
            <input type="text"/><div className="h-[30px] w-[30px] bg-pink-500"><i className="fas fa-search p-[6px] text-white"></i></div>
            <div className="lg:hidden"><div className="fa-solid fa-bars text-3xl ml-[10px]" id="menu-icon"></div></div>
        </div>
    </div>
  )
}
