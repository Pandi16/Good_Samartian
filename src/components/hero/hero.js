import logo from "../../assets/MISSION_logo.png";
import CIT_Logo from "../../assets/logo.png";
import { GiTimeSynchronization } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { GoLaw } from "react-icons/go";
import "./hero.css";
import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaTeamspeak } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { TbUnlink } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdGroups3 } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";
import { GiMedalSkull } from "react-icons/gi";


const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        id="hero-container"
        className="flex flex-col pb-10 p-4 h-screen max-w-screen-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-4">
          {/* CIT Logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 2 }}
            className="mb-3 lg:absolute lg:left-6 lg:top-6"
          >
            <img
              src={CIT_Logo}
              alt="CIT-LOGO"
              className="w-20 sm:w-32 lg:w-24"
            />
          </motion.div>
          {/* Menu  */}
          <div
            onClick={() => setOpen(!open)}
            className="relative flex items-center gap-2 mb-3 mr-4 lg:absolute lg:right-5 lg:top-12 cursor-pointer"
          >
            <p className="text-xl text-white celestraHeroFont tracking-wider">
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
                className="absolute top-14 z-100 right-2 opacity-95 w-80 h-auto bg-white rounded-lg celestraHeroFont "
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
                    to={"/chronoline"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <GiTimeSynchronization size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      C<span className="text-black text-xl">hronoline</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/laws"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <GoLaw size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      
                      G<span className="text-black text-xl">ood Samaritan Law</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/team"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <MdGroups3 size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      F<span className="text-black text-xl">our Quality Houses</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/team"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <TfiAgenda size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      O<span className="text-black text-xl">verall Theme</span>{" "}
                    </div>
                  </Link>
                  <Link
                    to={"/team"}
                    className="flex text-lg px-4 py-4 items-center gap-3 transition-all duration-300 ease-in-out hover:bg-red-300 "
                  >
                    <GiMedalSkull size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      A<span className="text-black text-xl">wards and Batches</span>{" "}
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
                    to={"contact-us"}
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
          </div>
        </div>
        {/* Hero-Text */}
        <div className="text-white md:mt-4  text-center celestraHeroFont tracking-widest">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2 }}
            variants={{
              hidden: { opacity: 0, y: +70 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl tracking-widest md:tracking-wide sm:text-3xl lg:text-5xl mb-2 lg:mb-4"
          >
            <span className="text-3xl md:text-4xl lg:text-6xl">G</span>ood{" "}
            <span className="text-3xl md:text-4xl lg:text-6xl">S</span>amaritan{" "}
            <span className="text-3xl md:text-4xl lg:text-6xl">I</span>nstitution
            
          </motion.h2>
          <motion.h5
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2 }}
            variants={{
              hidden: { opacity: 0, y: +70 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-md sm:text-xl lg:text-3xl"
          > <span className="text-3xl md:text-4xl lg:text-5xl text-red-500">
              E
            </span>
            ducational and{" "}
            <span className="text-3xl md:text-4xl lg:text-5xl text-red-500">
              S
            </span>
            ocial{" "}
            <span className="text-3xl md:text-4xl lg:text-5xl text-red-500">
              D
            </span>
            evelopment
            <span className="text-3xl md:text-4xl lg:text-5xl text-red-500">
            T
            </span>
            rust
          </motion.h5>
        </div>

        <div className="flex flex-col-reverse lg:mt-12 lg:flex-row w-full justify-around px-10 items-center">
          <div className="flex flex-col mt-4  justify-center items-center gap-7 text-white celestraHeroFont tracking-widest">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2 }}
              variants={{
                hidden: { opacity: 0, y: -70 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center text-xl dynamic-text-shadow lg:text-3xl"
            >
            let us join forces as Samaritans to champion transformative
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2 }}
              variants={{
                hidden: { opacity: 0, y: +70 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center text-2xl lg:text-4xl dynamic-text-shadow"
            >
            educational reforms together
            </motion.h1>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: -120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-center text-4xl  dynamic-celestra-shadow lg:text-7xl tracking-wider  "
            >
              <span className="text-6xl lg:text-8xl dynamic-celestra-white-shadow-mobile lg:dynamic-celestra-white-shadow text-red-500">
              G
              </span>
              OOD SAMARITA<span className="text-6xl lg:text-8xl">N</span>
            </motion.h1>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: +120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-4xl lg:text-7xl tracking-widest"
            >
              M<span className="text-red-500">issio</span>N
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, y: +120 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                to={"/events"}
                className="w-[90%] lg:w-[60%] py-6 px-6 rounded-xl text-white text-xl tracking-widest bg-gradient-to-b from-[#fb3e38] via-[#fffdfd00] to-[#fb3e38]"
              >
                <span className="text-red-500 text-3xl">G</span>ood  
                <span className="text-3xl text-red-500">S</span>amaritan Dossire
              </Link>
            </motion.div>
          </div>
        
          {/* Celestra Logo */}
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: +120 },
              visible: { opacity: 1, x: 0 },
            }}
            src={logo}
            alt="celestra-logo"
            id="logo"
            className="rounded-full w-[80%] lg:max-w-[40%]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
