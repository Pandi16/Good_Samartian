import React from 'react';
import "./laws.css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {Helmet} from "react-helmet";
import {useState} from "react";
import logo from "../../assets/logo.png";
//import lawsImage from "";

import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaTeamspeak } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { TbUnlink } from "react-icons/tb";
import { MdGroups3 } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";
import { GiMedalSkull } from "react-icons/gi";


function Laws(){
    // useEffect(() => {
    //     let item = document.querySelectorAll(".timeline li");
    //     function isElementInViewport(el) {
    //       var rect = el.getBoundingClientRect();
    //       return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <=
    //           (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <=
    //           (window.innerWidth || document.documentElement.clientWidth)
    //       );
    //     }
    //     function callback() {
    //       for (let i = 0; i < item.length; i++) {
    //         if (isElementInViewport(item[i])) {
    //           item[i].classList.add("in-view");
    //         }
    //       }
    //     }
    //     window.addEventListener("load", callback);
    //     window.addEventListener("resize", callback);
    //     window.addEventListener("scroll", callback);
    
    //     // Cleanup function to remove event listeners when component unmounts
    //     return () => {
    //       window.removeEventListener("load", callback);
    //       window.removeEventListener("resize", callback);
    //       window.removeEventListener("scroll", callback);
    //     };
    //   }, []);
      const [open, setOpen] = useState(false);
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Good Samaritan Mission | Laws</title>
            </Helmet>
            <div className="font-poppins lawscontainer">
                <nav className="flex items-center justify-between md:px-4">
                <Link to={"/"}>
                    <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.3 }}
                    variants={{
                        hidden: { opacity: 0, x: 120 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    src={logo}
                    alt="GoodSamaritan-logo"
                    className="lg:absolute lg:left-4 lg:top-6 w-44 md:w-52 rounded-full"
                    />
                </Link>

                {/* Menu */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.3 }}
                    variants={{
                    hidden: { opacity: 0, x: -120 },
                    visible: { opacity: 1, x: 0 },
                    }}
                    onClick={() => setOpen(!open)}
                    className="relative flex items-center gap-2 mb-3 mr-4 lg:absolute lg:right-10 lg:top-20 cursor-pointer"
                >
                    <p className="text-xl text-white celestraHeroFont tracking-widest">
                    {" "}
                    {open ? (
                        <motion.div
                        whileTap={{ scale: 0.6 }}
                        className="flex items-center"
                        >
                        <span className="text-4xl text-red-500">C</span>
                        <span className="mt-1">lose</span>
                        </motion.div>
                    ) : (
                        <motion.div whileTap={{ scale: 0.6 }}>
                        <span className="text-4xl text-red-500">M</span>
                        <span>enu</span>
                        </motion.div>
                    )}
                    </p>
                    <span className={`mt-2 ${open && "rotate-90"}`}>
                    <AiOutlineDoubleRight size={20} color="white" />
                    </span>
                    {/* DropDown Menu */}
                    {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="absolute top-14 right-0 lg:-right-10 opacity-95 w-72 h-auto bg-white rounded-lg celestraHeroFont"
                    >
                        <ul>
                        <Link
                            to={"/"}
                            className="flex text-lg px-4 py-4 items-center gap-3 rounded-t-lg  transition-all duration-300 ease-in-out  hover:bg-red-300 "
                        >
                            <HiOutlineHome size={20} />{" "}
                            <div className="text-red-500 text-2xl ">
                            H<span className="text-black text-xl">ome</span>{" "}
                            </div>
                        </Link>
                        <Link
                            to={"/about-us"}
                            className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                        >
                            <TbUnlink size={20} />{" "}
                            <div className="text-red-500 text-2xl ">
                            A<span className="text-black text-xl">bout Us</span>{" "}
                            </div>
                        </Link>
                        <Link
                            to={"/team"}
                            className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                        >
                            <VscOrganization size={20} />{" "}
                            <div className="text-red-500 text-2xl ">
                            O<span className="text-black text-xl">ur Team</span>{" "}
                            </div>
                        </Link>
                        <Link
                            to={"/chronoline"}
                            className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                        >
                            <VscOrganization size={20} />{" "}
                            <div className="text-red-500 text-2xl ">
                            C<span className="text-black text-xl">hronoline</span>{" "}
                            </div>
                        </Link>
                        <Link
                            to={"/contact-us"}
                            className="flex text-lg px-4 py-4 items-center gap-3 rounded-b-lg  transition-all duration-300 ease-in-out hover:bg-red-300 "
                        >
                            <FaTeamspeak size={20} />{" "}
                            <div className="text-red-500 text-2xl ">
                            C<span className="text-black text-xl">ontact Us</span>{" "}
                            </div>
                        </Link>
                        </ul>
                    </motion.div>
                    )}
                </motion.div>
                </nav>
                <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.3 }}
                variants={{
                    hidden: { opacity: 0, x: 120 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="text-4xl mt-10 lg:mt-20 tracking-wider text-white celestraHeroFont text-center mb-12 lg:mb-20"
                >
                <span className="text-6xl text-[rgb(255,0,0)] tracking-widest">
                    L
                </span>
                aws
                </motion.p>

                <h2 className="text-white celestraHeroFont text-center text-4xl tracking-widest mb-20">
                <span className="text-5xl text-red-600">D</span>early Beloved
                </h2>
                {/* Chronoline Container */}
                {/* March 17 Events */}
                <div className='laws-container '>
                    <ul className='laws-list'>
                        <li className='law'>You shall love your neighbor as yourself.</li>
                        <li className='law'>You shall not take vengeance, nor bear any grudge against the children of your people; but you shall love your neighbor as yourself.</li>
                        <li className='law'>Honor your father and your mother.</li>
                        <li className='law'>You shall not murder.</li>
                        <li className='law'>You shall not commit adultery.</li>
                        <li className='law'>You shall not steal.</li>
                        <li className='law'>You shall not give false testimony against your neighbor.</li>
                        <li className='law'>Learn to do well. Seek justice, Relieve the oppressed, judge the fatherless, plead for the widow.</li>
                        <li className='law'>Don't withhold good from those to whom it is due, when it is in the power of your hand to do it.</li>
                        <li className='law'>Don't say to your neighbor. "Go, and come again, Tomorrow I will give it to you." When you have it by you.</li>
                        <li className='law'>Owe no one anything, except to love one another.</li>
                        <li className='law'>You shall not wrong one another.</li>
                        <li className='law'>But let your 'yes' be 'yes' and your 'No'be 'no, Whatever is more than these is of the evil one.</li>
                        <li className='law'>Don't resist him who is evil; but whoever strikes you on your right cheek turn to him the other also.</li>
                        <li className='law'>Love your enemies, bless those who curse you, do good to those who hate you, and pray for those who mistreat you and persecute you</li>
                        <li className='law'>Be careful that you don't do your charitable giving before men, to be seen by them.</li>
                        <li className='law'>But when you do merciful deeds, don't let your left hand know what your right hand does.</li>
                        <li className='law'>For if you forgive men their trespasses, your heavenly Father will also forgive you.</li>
                        <li className='law'>But don't forget to be doing good and sharing.</li>
                        <li className='law'>Give to everyone who asks you, and don't ask him who takes away your goods to give them back again.</li>
                        <li className='law'>But love Your enemies, and do good, and lend, expecting nothing back: and your reward will be great.</li>
                        <li className='law'>Therefore as you would like people to do to you, do exactly so to them.</li>
                    </ul>
                </div>
            </div>
            
        </div> 
    )
}



export default Laws;