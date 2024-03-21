import React from "react";
import "./about-us.css";
import CitCollege from "../../assets/citImage.jpeg";
import ItBlock from "../../assets/itBlock.jpg";
import { MdGroups3 } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";
import { GiMedalSkull } from "react-icons/gi";


// Nav imports
import logo from "../../assets/logo.png";
import { GiTimeSynchronization } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaTeamspeak } from "react-icons/fa";
import { SiEventstore, SiRiotgames } from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";
import { TbUnlink } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GOOD SAMARITAN MISSION | About Us</title>
      </Helmet>
      <nav className="flex items-center justify-between pb-10 md:px-4">
        <Link to={"/"}>
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            src={logo}
            alt="celestra-logo"
            className="lg:absolute lg:left-4 lg:top-4 w-44 md:w-52 rounded-full"
          />
        </Link>
        {/* Menu */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
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
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -120 },
          visible: { opacity: 1, x: 0 },
        }}
        className="text-white text-6xl text-center mt-10 md:mt-4 celestraHeroFont tracking-widest"
      >
        <span className="text-7xl text-red-500">A</span>bout Us
      </motion.h2>
      {/* about section */}
      <div className="pt-10 lg:pt-36">
        <div className="about-content">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            src={CitCollege}
            alt="Cit College"
            className="mb-10 shadow-lg shadow-white"
          />
          <div className="about-text">
            <div className="flex flex-col mb-6">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-5xl text-white tracking-widest celestraHeroFont"
              >
                Our Trust
              </motion.h1>
              <div className="h-1  ml-1 w-[30%] sm:w-[16%] lg:w-[40%]  bg-red-500 rounded-full"></div>
            </div>
            <motion.h5
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-2xl mb-4 tracking-widest text-white celestraHeroFont"
            >
              Good Samaritan
            </motion.h5>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mb-6 text-xl font-poppins text-slate-200"
            >
              The V. Rangasamy Naidu Educational Trust devoted to the cause of
              promoting technical and scientific literacy, established
              Coimbatore Institute of Technology (CIT) in Coimbatore, Tamil
              Nadu, South India in 1956. CIT is one of the most reputed and
              prestigious educational institutions in India. The Institute
              backed by World Class research and development over the years
              attained autonomous status in 1987.
            </motion.p>
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.4 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              href="https://www.cit.edu.in/"
              target="_blank"
              rel="noreferrer"
              class="relative inline-flex tracking-widest celestraHeroFont items-center justify-center px-6 py-3 text-lg font-medium  text-white bg-gray-800 rounded-md group"
            >
              <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-red-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-red-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span class="relative text-red-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Know more
              </span>
            </motion.a>
          </div>
        </div>
      </div>
      {/* out Dept */}
      <div className="mt-44  lg:mt-60">
        <div className="about-content flex-row-reverse">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            src={ItBlock}
            alt="It Block"
            className="mb-10 lg:mb-0 shadow-lg shadow-[#e3b096]"
          />
          <div className="about-text">
            <div className="flex flex-col mb-6">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -120 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="text-5xl text-white tracking-widest celestraHeroFont"
              >
                Good Samaritan
              </motion.h1>
              <div className="h-1  ml-1   w-[30%] sm:w-[16%] lg:w-[40%]  bg-red-500 rounded-full"></div>
            </div>
            <motion.h5
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: -120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-2xl mb-4 tracking-widest text-white celestraHeroFont"
            >
              Department of Information Technology
            </motion.h5>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.3 }}
              variants={{
                hidden: { opacity: 0, x: -120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mb-6 text-xl font-poppins text-slate-200"
            >
              A Good samaritan is one who gives help and sympathy to the people
              who wants them. He never minds whether the needy is poor or rich. He
              even helps his enemies at their needs. Hence this name defines the "Quality of Helping"
              to all who wants it.
            </motion.p>
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.4 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              href="https://www.cit.edu.in/academics/information-technology-department/"
              target="_blank"
              rel="noreferrer"
              class="relative inline-flex tracking-widest celestraHeroFont items-center justify-center px-6 py-3 text-lg font-medium  text-white bg-gray-800 rounded-md group"
            >
              <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-red-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-red-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span class="relative text-red-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Know more
              </span>
            </motion.a>
          </div>
        </div>
      </div>
      {/* Staffs section */}

      <div className="bg-black mt-32 lg:mt-44 pb-10 ">
        <div className="border-t border-red-300 mx-10 md:mx-32 pb-14"></div>
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 mb-10">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1 }}
              variants={{
                hidden: { opacity: 0, x: -120 },
                visible: { opacity: 1, x: 0 },
              }}
              className=" celestraHeroFont tracking-widest  text-3xl font-bold mb-6  text-white sm:text-4xl"
            >
              Our Moto
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.3 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mt-4 text-xl text-white font-poppins tracking-wide"
            >
              Serving God through serving PUPIL
            </motion.p>
          </div>
          
          <div className="mx-auto max-w-4xl pt-14">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1 }}
              variants={{
                hidden: { opacity: 0, x: -120 },
                visible: { opacity: 1, x: 0 },
              }}
              className=" celestraHeroFont tracking-widest  text-3xl font-bold mb-6  text-white sm:text-4xl"
            >
              Vision Statement
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.3 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mt-4 text-xl text-white font-poppins tracking-wide"
            >
              To bring Optimistic World Through PUPIL
            </motion.p>
          </div>
          
          <div className="mx-auto max-w-4xl pt-14">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1 }}
              variants={{
                hidden: { opacity: 0, x: -120 },
                visible: { opacity: 1, x: 0 },
              }}
              className=" celestraHeroFont tracking-widest  text-3xl font-bold mb-6  text-white sm:text-4xl"
            >
              Mission Statement
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.3 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mt-4 text-xl text-white font-poppins tracking-wide"
            >
              To cultivate the quality of The Good Samaritan, The Good Pioneer,
              The Good Shepherd, The Good Saviour and The Good Patron in every student's
              heart
            </motion.p>
          </div>
{/* 
          <ul className="mx-auto px-2 font-poppins md:px-0 mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {teachers.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="bg-[#111111] rounded-xl pb-4 shadow-md hover:shadow-lg hover:shadow-slate-50 shadow-white"
              >
                <img
                  className="mx-auto mt-6 h-56 w-56 rounded-full"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-[18px] font-semibold leading-7 tracking-wider text-white">
                  {person.name}
                </h3>
                <p className="text-lg mt-2 leading-6 text-white">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul> */}
           
        </div>
      </div>
    </div>
  );
};

export default About;
