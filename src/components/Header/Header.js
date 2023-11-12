import React, { useState } from "react"
import Logo from "../../images/logo/logo2.png"
import { Link } from "react-router-dom"
import "./Header.css"
import { RiMenu3Fill } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    // AiOutlineMail,
} from "react-icons/ai"
import { BsWhatsapp, BsPinterest, BsFacebook } from "react-icons/bs"

export default function Header() {
    const [menuBar, setMenuBar] = useState(false)

    return (
        <div className="Header">
            <nav className="px-5 py-2 navbarContent">
                <div className="flex w-full items-center relative">
                    <div className="flex items-center justify-between w-full">
                        <Link to="/" className="logo">
                            <img src={Logo} alt="logo" />
                        </Link>
                        <div className="lg:hidden">
                            <RiMenu3Fill
                                onClick={() => {
                                    setMenuBar((prev) => !prev)
                                }}
                                className="h-8 w-8 text-white"
                            />
                        </div>
                    </div>

                    <div className="hidden lg:flex ">
                        <ul className="flex items-center gap-x-8">
                            <Link to="/">
                                <li className="">Home</li>
                            </Link>

                            <Link to="/about">
                                <li className="">About</li>
                            </Link>

                            <Link to="/portfolio">
                                <li className="">Portfolio</li>
                            </Link>

                            <Link to="/services">
                                <li className="">Services</li>
                            </Link>

                            <Link to="/contact">
                                <li className="">Contact</li>
                            </Link>
                        </ul>
                    </div>

                       {menuBar && (
                        <div className="absolute">
                            <div className="bg-black z-50 fixed text-white  px-5 py-4 inset-0 w-full h-full ">
                                <div className="flex justify-end">
                                    <AiOutlineClose
                                        onClick={() => {
                                            setMenuBar((prev) => !prev)
                                        }}
                                        className="h-8 w-8 text-white"
                                    />
                                </div>
                                <div className="mt-10">
                                    <ul className="flex flex-col gap-y-7 items-center justify-center">
                                        <Link to="/">
                                            <li
                                                onClick={() => {
                                                    setMenuBar((prev) => !prev)
                                                }}
                                                className=" font-Fraunces text-[20px]"
                                            >
                                                Home
                                            </li>
                                        </Link>

                                        <Link to="/about">
                                            <li
                                                onClick={() => {
                                                    setMenuBar((prev) => !prev)
                                                }}
                                                className="font-Fraunces text-[20px]"
                                            >
                                                About
                                            </li>
                                        </Link>

                                        <Link to="/portfolio">
                                            <li
                                                onClick={() => {
                                                    setMenuBar((prev) => !prev)
                                                }}
                                                className="font-Fraunces text-[20px]"
                                            >
                                                Portfolio
                                            </li>
                                        </Link>

                                        <Link to="/services">
                                            <li
                                                onClick={() => {
                                                    setMenuBar((prev) => !prev)
                                                }}
                                                className="font-Fraunces text-[20px]"
                                            >
                                                Services
                                            </li>
                                        </Link>

                                        <Link to="/contact">
                                            <li
                                                onClick={() => {
                                                    setMenuBar((prev) => !prev)
                                                }}
                                                className="font-Fraunces text-[20px]"
                                            >
                                                Contact
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                                <div className="flex items-center gap-x-5 justify-center mt-20">
                                    <Links
                                        href={
                                            "https://www.instagram.com/tofagraphy"
                                        }
                                        Icon={AiOutlineInstagram}
                                    />
                                    <Links
                                        href={
                                            "https://wa.me/message/4RZ42BOFSTQPG1"
                                        }
                                        Icon={BsWhatsapp}
                                    />
                                    <Links
                                        href={"https://twitter.com/tofagraphy"}
                                        Icon={AiOutlineTwitter}
                                    />
                                    <Links
                                        href={
                                            "https://www.facebook.com/profile.php?id=100066447411097"
                                        }
                                        Icon={BsFacebook}
                                    />
                                    <Links
                                        href={
                                            "https://www.pinterest.com/tofa_ng/"
                                        }
                                        Icon={BsPinterest}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

function Links({ href, Icon }) {
    return (
        <div>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-10 w-10 bg-white text-black rounded-full px-2" />
            </a>
        </div>
    )
}
