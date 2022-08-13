import React, { useState, useEffect } from "react";
// import logo from "../assets/logo.png";
import { soundA } from "../assets/letters";
import Test2Completed from "./Test2Completed";
import { Navbar } from "../components";

const AlphabetTest = () => {
  const [letterIndex, setletterIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const alphabets = [
    { letter: "Aa", sound: soundA, example: "ax", phrase: "A says" },
    { letter: "Bb", sound: soundA, example: "bag", phrase: "B says" },
  ];

  // let wrongPronounciation = 0;
  // let takeNo = 0;

  // SPEECH RECOGNITION
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  // recognition.interimResults = true;

  recognition.onstart = function () {
    // recognition.continuous = true;
    console.log("vr active");
    setletterIndex((prev) => prev);
    setCompleted((prev) => prev);
  };

  const checkPhrase = (transcript, phrase) => {
    let spoken_phrase = transcript.toLowerCase();
    let expected_phrase = phrase.toLowerCase();

    console.log(spoken_phrase);
    console.log(expected_phrase);

    // let speech = transcript.toLowerCase;
    // let predictions = alphabets[letterIndex].phrase.toLowerCase;
    // let correct = 0;

    // for (let i = 0; i < speech.length; i++) {
    //   if (predictions.includes(speech[i]) === true) {
    //     console.log(speech);
    //     correct += 3;
    //   }
    // }

    // if (correct > 0) {
    //   console.log("correct");
    //   takeNo = 0;
    //   if (letterIndex < alphabets.length) {
    //     setletterIndex((prev) => prev + 1);
    //   } else {
    //     setCompleted(true);
    //   }
    // } else {
    //   wrongPronounciation += 1;
    //   takeNo += 1;
    //   if (takeNo >= 3) {
    //     if (letterIndex < alphabets.length) {
    //       takeNo = 0;
    //       setletterIndex((prev) => prev + 1);
    //     } else {
    //       setCompleted(true);
    //     }
    //   }
    // }
  };

  // @after listening to users speech
  recognition.onresult = function (e) {
    setIsSpeaking(false);
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    console.log(transcript);
    checkPhrase(transcript, alphabets[letterIndex].phrase);
  };

  recognition.onend = function () {
    setIsSpeaking(false);
    console.log("vr deactivated");
  };

  const playAudio = (audio) => {
    const music = new Audio(audio);
    music.playbackRate = 1;
    music.play();
    music.onended = function (e) {
      console.log("audio ended");
      setIsSpeaking(true);
    };
    console.log("audio playing");
  };

  useEffect(() => {
    setTimeout(() => {
      playAudio(alphabets[letterIndex].sound);
    }, 700);
  }, [letterIndex]);

  useEffect(() => {
    if (isSpeaking) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }, [isSpeaking]);

  return (
    <div>
      <Navbar position="fixed" />
      {completed ? (
        <Test2Completed />
      ) : (
        <div className="flex md:flex-row flex-col w-full h-screen alphabet-font">
          <div className="w-full flex-1 h-full bg-white relative">
            {/* <div className="md:pt-16 pl-20 ">
              <img src={logo} alt="logo" className="w-30 md:w-[140px]" />
            </div> */}
            <h1 className="font-black center-text text-blue-700">
              {alphabets[letterIndex].example}
            </h1>
          </div>
          <div className="w-full flex-1 h-full bg-blue-700 relative">
            <h1 className="font-black center-text text-white">
              {alphabets[letterIndex].letter}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlphabetTest;
