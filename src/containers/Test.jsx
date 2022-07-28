import React, { useState, useEffect } from "react";
import { ArrowBtns, Header, Exercise } from "../components";

const Test = () => {
  const exercise = "She is the President";
  const [isSpeaking, setIsSpeaking] = useState(false);

  // SPEECH RECOGNITION
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // START FUNCTION
  recognition.onstart = function () {
    setIsSpeaking(true);
    console.log("vr active");
  };
  // GET RESULT
  recognition.onresult = function (e) {
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    console.log(transcript);
  };
  // STOP FUNCTION
  recognition.onend = function () {
    setIsSpeaking(false);
    console.log("vr deactivated");
  };

  useEffect(() => {
    startLesson(exercise);
    function startLesson(lesson) {
      setTimeout(ai_speak("Let's begin, pronounce this sentence"), 3000);
    }
  }, [exercise]);

  // AI SPEECH
  function ai_speak(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 0.8;
    speech.rate = 1;
    speech.pitch = 2;
    return window.speechSynthesis.speak(speech);
  }

  return (
    <>
      {/* The num variable is to get the ammount of excercises */}
      {/* The active_id variable is to get the index of the active/present excercise */}
      <Header />
      <Exercise exercise={exercise} recording={isSpeaking} />
      <ArrowBtns />
    </>
  );
};

export default Test;
