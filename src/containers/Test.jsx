import React from "react";
import { ArrowBtns, Header, Exercise } from "../components";

const Test = () => {
  // const exercises = [
  //   {
  //     objective: "She is the president",
  //     active: false,
  //   },
  // ];
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onstart = function () {
    console.log("vr active");
  };
  recognition.onend = function () {
    console.log("vr deactivated");
  };
  // recognition.start();
  // recognition.stop();
  // recognition.continuous = true

  return (
    <>
      {/* The num variable is to get the ammount of excercises */}
      {/* The active_id variable is to get the index of the active/present excercise */}
      <Header />
      <Exercise />
      <ArrowBtns />
    </>
  );
};

export default Test;
