import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import teacher from "../assets/teacher.jpg";
import { retakeProp, proceedProp } from "../assets/intros";

const Test2Completed = ({ restart, status }) => {
  useEffect(() => {
    if (status > 2) {
      const music = new Audio(retakeProp);
      music.playbackRate = 1;
      music.play();
    } else {
      const music = new Audio(proceedProp);
      music.playbackRate = 1;
      music.play();
    }
  }, [status]);

  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-screen px-5 md:px-10 lg:px-20 xl:px-40 pt-[120px] md:pt-0">
        <div className="w-full h-full flex justify-start items-center">
          <div className="rounded-full shadow-lg p-2 w-[100%] lg:w-[90%] xl:w-[80%]">
            <img src={teacher} alt="teacher" className="w-full rounded-full" />
          </div>
        </div>
        <div className="md:w-full md:pl-10 h-screen flex flex-col justify-center items-start text-blue-900 relative xl:pr-20">
          <h1 className="text-4xl lg:text-6xl font-bold pb-4 pt-4 md:pt-0">
            Good Job
          </h1>
          <p className="lg:text-xl leading-8 pb-7 xl:w-[470px]">
            {" "}
            You have made it to the end of the lesson. If you missed any of
            these words, please repeat the Lesson
          </p>
          <Link
            to="/test2"
            onClick={restart}
            className="text-center rounded-lg shadow-lg mb-5 tracking-widest bg-white text-blue-800 border-blue-800 border-2 text-2xl uppercase py-3 w-full md:1/2 lg:w-full pulse-blue xl:w-[470px]"
          >
            Re-Take Test
          </Link>
          <Link
            to="/test2"
            onClick={restart}
            className="text-center rounded-lg shadow-lg tracking-widest bg-blue-800 text-white text-2xl uppercase py-3 w-full md:1/2 lg:w-full pulse-blue xl:w-[470px]"
          >
            Done
          </Link>
        </div>
      </div>
    </>
  );
};

export default Test2Completed;
