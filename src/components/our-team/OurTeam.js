import Navbar from "../../common/Navbar";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import GradientAvatar from "../../assets/team-images/personAvatar1.png";
import { GiTimeBomb } from "react-icons/gi";
import { TiLocation } from "react-icons/ti";
import logo from "../../assets/logo.png";
import { HiOutlineHome } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaTeamspeak } from "react-icons/fa";
import { SiEventstore, SiRiotgames } from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";
import { TbUnlink } from "react-icons/tb";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { GiTimeSynchronization } from "react-icons/gi";

// Board Members
import arunprasathImg from "../../assets/team-images/arun_prasath.jpeg";
import dhanushImg from "../../assets/team-images/dhanush_pv.jpg";
import lithishImg from "../../assets/team-images/lithish_k.png";
import madhavanImg from "../../assets/team-images/madhavan.png";
import nithishImg from "../../assets/team-images/nithish.png";
import hemaVarshiniImg from "../../assets/team-images/hema_varshini.png";
import rajeshbabuImg from "../../assets/team-images/rajeshbabu_k.png";
import avatar from "../../assets/team-images/personAvatar.png";
import vinilImg from "../../assets/team-images/VINIL_KC.png";


const boardMembers = [
  {
    name: "LITHISH D",
    role: "PRESIDENT",
    imageUrl: lithishImg,
  },
  {
    name: "SURESH BABU",
    role: "PRESIDENT",
    imageUrl: avatar,
  },
  {
    name: "CHITTI BABU",
    role: "VICE PRESIDENT",
    imageUrl: avatar,
  },
  {
    name: "RAJESH BABU",
    role: "PRESIDENT",
    imageUrl: rajeshbabuImg,
  },
  {
    name: "ARUN PRASAD",
    role: "PRESIDENT",
    imageUrl: arunprasathImg,
  },
  {
    name: "SHRAVANTHI",
    role: "PRESIDENT",
    imageUrl: avatar,
  },
  {
    name: "SHRAVAN",
    role: "PRESIDENT",
    imageUrl: avatar,
  },
  {
    name: "GOKUL",
    role: "PRESIDENT",
    imageUrl: avatar,
  },
  {
    name: "HEMA VARSHINI",
    role: "PRESIDENT",
    imageUrl: hemaVarshiniImg,
  },
  {
    name: "NITHISH KUMAR",
    role: "PRESIDENT",
    imageUrl: nithishImg,
  },
  {
    name: "SAI PRIYA",
    role: "PRESIDENT",
    imageUrl: avatar,
  },
  {
    name: "VINIL",
    role: "PRESIDENT",
    imageUrl: vinilImg,
  },
  {
    name: "HARISH",
    role: "PRESIDENT",
    imageUrl: avatar,
  },
  {
    name: "MADHAVAN",
    role: "PRESIDENT",
    imageUrl: madhavanImg,
  },
  {
    name: "DHANUSH",
    role: "PRESIDENT",
    imageUrl: dhanushImg,
  },

];

// const webDevelopers = [
//   {
//     name: "Deepak V",
//     role: "Full Stack Developer - Team Head",
//     imageUrl: deepakImg,
//     githubUrl: "https://github.com/Iam-DeepakVel",
//     linkedinUrl: "https://www.linkedin.com/in/iamdeepakvel",
//   },
//   {
//     name: "Guna P",
//     role: "Frontend Developer / UI Designer",
//     imageUrl: gunaImg,
//     githubUrl: "https://github.com/guna-pandi",
//     linkedinUrl: "https://www.linkedin.com/in/guna-p-aa3357245",
//   },
//   {
//     name: "Khabilan S",
//     role: "Web & App Developer",
//     imageUrl: GradientAvatar,
//     githubUrl: "https://github.com/Khabilan1003",
//     linkedinUrl: "https://www.linkedin.com/in/khabilan-somasundaram-0335971b0/ ",
//   },
//   {
//     name: "Bharath S",
//     role: "Backend Developer",
//     imageUrl: barath,
//     githubUrl: "https://github.com/BarathOfficial",
//     linkedinUrl: "https://www.linkedin.com/in/barath-sreedharan-50a5a020a",
//   },
// ];

// const designTeam = [
//   {
//     name: "Thurkaraman R",
//     role: "Team Head",
//     imageUrl: thurka,
//   },
//   {
//     name: "Arun Kumar S",
//     role: "Member",
//     imageUrl: arun,
//   },
//   {
//     name: "Narendran S",
//     role: "Member",
//     imageUrl: narendaran,
//   },
//   {
//     name: "Ashwin S",
//     role: "Member",
//     imageUrl: GradientAvatar,
//   },
//   {
//     name: "Jananitharan",
//     role: "Member",
//     imageUrl: tharan,
//   },
//   {
//     name: "Hareesh Ram",
//     role: "Member",
//     imageUrl: hareeshRam,
//   },
//   {
//     name: "Kavikumar C",
//     role: "Member",
//     imageUrl: kavi,
//   },
//   {
//     name: "Vikram",
//     role: "Member",
//     imageUrl: GradientAvatar,
//   },
//   {
//     name: "Sajeev",
//     role: "Member",
//     imageUrl: GradientAvatar,
//   },
//   {
//     name: "Pratheep",
//     role: "Member",
//     imageUrl: pradeep,
//   },
//   {
//     name: "Sakthivel",
//     role: "Member",
//     imageUrl: sakthivel,
//   },
//   {
//     name: "Harshavardhan",
//     role: "Member",
//     imageUrl: harsha,
//   },
//   {
//     name: "Karthikeyan",
//     role: "Member",
//     imageUrl: karthikeyan,
//   },
// ];

export default function OurTeam() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-black py-6 sm:py-10 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>GOOD SAMARITAN MISSION | Team</title>
      </Helmet>
      {/* Navbar */}
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
                    <VscOrganization size={20} />{" "}
                    <div className="text-red-500 text-2xl ">
                      L<span className="text-black text-xl">aws</span>{" "}
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
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-3xl font-bold tracking-widest celestraHeroFont  text-white sm:text-4xl"
          >
            <span className="text-5xl text-red-600">M</span>eet{" "}
            <span className="text-5xl text-red-600">O</span>ur{" "}
            <span className="text-5xl text-red-600">T</span>eam
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-4 text-lg tracking-widest  text-gray-400 celestraHeroFont"
          >
            We're a powerhouse of enthusiastic individuals who are absolutely
            lit about what we do!
          </motion.p>
        </div>

        {/*Board Members*/}
        <div className="mt-14 mb-40">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">B</span>oard{" "}
            <span className="text-5xl text-red-600">M</span>embers
          </motion.h2>
          <ul className="mx-auto px-4 mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {boardMembers.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-500  shadow-red-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl font-semibold leading-7 celestraHeroFont tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 font-semibold tracking-wider font-poppins text-gray-400">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Special Thanks to  */}
        {/* <div className="mt-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">S</span>pecial{" "}
            <span className="text-5xl text-red-600">T</span>hanks to
          </motion.h2>
          <ul className="mx-auto px-4 mt-10 grid max-w-full sm:max-w-md gap-8">
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              key="Haresh"
              className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-500  shadow-red-400 bg-[#111111] py-10 px-8"
            >
              <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                src={hareshV}
                alt="Haresh"
              />
              <h3 className="mt-6 text-xl font-semibold leading-7 celestraHeroFont tracking-widest text-white">
                Haresh V
              </h3>
              <p className="text-md leading-6 font-semibold tracking-wider font-poppins text-gray-400">
                Joint Secretary of IT / Treasurer
              </p>
            </motion.li>
          </ul>
        </div> */}

        {/* Web Development Team */}
        {/* <div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">W</span>eb{" "}
            <span className="text-5xl text-red-600">D</span>evelopers
          </motion.h2>
          <ul className="mx-auto px-4 mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {webDevelopers.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-500 shadow-red-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl font-semibold leading-7 celestraHeroFont tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 font-semibold tracking-wider font-poppins text-gray-400">
                  {person.role}
                </p>
                <ul className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={person.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <AiFillGithub size={22} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <AiFillLinkedin size={22} />
                    </a>
                  </li>
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Design Team *
        <div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 120 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl text-white celestraHeroFont tracking-widest"
          >
            <span className="text-5xl text-red-600">D</span>esign{" "}
            <span className="text-5xl text-red-600">T</span>eam
          </motion.h2>
          <ul className="mx-auto mt-10 px-4 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {designTeam.map((person) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: 120 },
                  visible: { opacity: 1, x: 0 },
                }}
                key={person.name}
                className="rounded-2xl transition-shadow ease-in-out duration-300 shadow-md hover:shadow-lg hover:shadow-red-500 shadow-red-400 bg-[#111111] py-10 px-8"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl celestraHeroFont font-semibold leading-7 tracking-widest text-white">
                  {person.name}
                </h3>
                <p className="text-md leading-6 tracking-wider font-semibold font-poppins text-gray-400">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}
