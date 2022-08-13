import React from "react";
import logo from "../assets/logo.png";
import teacher from "../assets/teacher.jpg";
import { Navbar } from "../components";

const Intro2 = () => {
  const a2e = [
    {
      letter: "Aa",
    },
    {
      letter: "Bb",
    },
    {
      letter: "Cc",
    },
    {
      letter: "Dd",
    },
    {
      letter: "Ee",
    },
  ];
  const f2k = [
    {
      letter: "Ff",
    },
    {
      letter: "Gg",
    },
    {
      letter: "Hh",
    },
    {
      letter: "Ii",
    },
    {
      letter: "Jj",
    },
    {
      letter: "Kk",
    },
  ];
  const l2p = [
    {
      letter: "Ll",
    },
    {
      letter: "Mm",
    },
    {
      letter: "Nn",
    },
    {
      letter: "Oo",
    },
    {
      letter: "Pp",
    },
  ];
  const q2u = [
    {
      letter: "Qq",
    },
    {
      letter: "Rr",
    },
    {
      letter: "Ss",
    },
    {
      letter: "Tt",
    },
    {
      letter: "Uu",
    },
  ];
  const v2z = [
    {
      letter: "Vv",
    },
    {
      letter: "Ww",
    },
    {
      letter: "Xx",
    },
    {
      letter: "Yy",
    },
    {
      letter: "Zz",
    },
  ];
  return (
    <>
      <Navbar position="fixed" />
      <div className="flex flex-col md:flex-row w-full h-screen px-5 md:px-10 lg:px-10 xl:px-40 pt-[100px] md:pt-0">
        <div className="w-full h-full flex justify-start items-center my-10 md:my-0">
          <div className="rounded-full shadow-lg p-2 md:w-[90%] lg:w-[80%]">
            <img src={teacher} alt="teacher" className="w-full rounded-full" />
          </div>
        </div>
        <div className="w-full h-full pb-10 md:pb-0 flex justify-start md:justify-center items-center md:items-end flex-col gap-4 md:gap-8 font-bold text-blue-900">
          {/* <img src={logo} alt="logo" className="w-30 md:w-[140px]" /> */}
          <div className="flex gap-5 text-2xl md:text-4xl xl:gap-14 xl:text-6xl lg:gap-8 lg:text-5xl intro-1 tshadow">
            {a2e.map((letter) => (
              <p>{letter.letter}</p>
            ))}
          </div>
          <div className="flex gap-5 text-2xl md:text-4xl xl:gap-14 xl:text-6xl lg:gap-8 lg:text-5xl intro-1 tshadow">
            {f2k.map((letter) => (
              <p>{letter.letter}</p>
            ))}
          </div>
          <div className="flex gap-5 text-2xl md:text-4xl xl:gap-14 xl:text-6xl lg:gap-8 lg:text-5xl intro-1 tshadow">
            {l2p.map((letter) => (
              <p>{letter.letter}</p>
            ))}
          </div>
          <div className="flex gap-5 text-2xl md:text-4xl xl:gap-14 xl:text-6xl lg:gap-8 lg:text-5xl intro-1 tshadow">
            {q2u.map((letter) => (
              <p>{letter.letter}</p>
            ))}
          </div>
          <div className="flex gap-5 text-2xl md:text-4xl xl:gap-14 xl:text-6xl lg:gap-8 lg:text-5xl intro-1 tshadow">
            {v2z.map((letter) => (
              <p>{letter.letter}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro2;
