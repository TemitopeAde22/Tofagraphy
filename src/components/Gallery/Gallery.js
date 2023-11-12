import "./Gallery.css"
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    // AiOutlineMail,
} from "react-icons/ai"
import { BsWhatsapp, BsPinterest, BsFacebook } from "react-icons/bs"

//apartment images

function Gallery() {
    return (
        <div className="slider">
            <div className="content">
                <div className="principal flex justify-between items-center ">
                    <div className="lg:ml-16 md:ml-10 hidden md:flex flex-col items-center gap-y-10 py-5 px-5 ">
                        <Links
                            href={"https://www.instagram.com/tofagraphy"}
                            Icon={AiOutlineInstagram}
                        />
                        <Links
                            href={"https://wa.me/message/4RZ42BOFSTQPG1"}
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
                            href={"https://www.pinterest.com/tofa_ng/"}
                            Icon={BsPinterest}
                        />
                    </div>
                    <div>
                        <h1 className="text-[50px] font-Belanosima mb-3 md:mt-14">
                            MOBILE PHOTOGRAPHER IN LAGOS
                        </h1>
                        <div className="flex justify-center">
                            <div className="border h-[1px] md:w-16 w-8 mt-3 mr-2"></div>
                            <h4 className=" font-semibold mb-6">
                                BY BASHIR TOFA
                            </h4>
                            <div className="border h-[1px] md:w-16 w-8 mt-3 mr-2"></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
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
export default Gallery
