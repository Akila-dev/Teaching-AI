import React, { useState, useEffect } from "react";
import {
  soundA,
  soundB,
  soundC,
  soundD,
  soundE,
  soundF,
  soundG,
  soundH,
  soundI,
  soundJ,
  soundK,
  soundL,
  soundM,
  soundN,
  soundO,
  soundP,
  soundQ,
  soundR,
  soundS,
  soundT,
  soundU,
  soundV,
  soundW,
  soundX,
  soundY,
  soundZ,
} from "../assets/letters";
import Test2Completed from "./Test2Completed";
import { Navbar } from "../components";
import { BsFillMicFill } from "react-icons/bs";

const AlphabetTest = () => {
  const [letterIndex, setletterIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const alphabets = [
    { letter: "Aa", sound: soundA, example: "ax", phrase: "a says" },
    { letter: "Bb", sound: soundB, example: "bag", phrase: "b says" },
    { letter: "Cc", sound: soundC, example: "cab", phrase: "c says" },
    { letter: "Dd", sound: soundD, example: "dig", phrase: "d says" },
    { letter: "Ee", sound: soundE, example: "egg", phrase: "e says" },
    { letter: "Ff", sound: soundF, example: "fish", phrase: "f says" },
    { letter: "Gg", sound: soundG, example: "go", phrase: "g says" },
    { letter: "Hh", sound: soundH, example: "hi", phrase: "h says" },
    { letter: "Ii", sound: soundI, example: "it", phrase: "i says" },
    { letter: "Jj", sound: soundJ, example: "jot", phrase: "j says" },
    { letter: "Kk", sound: soundK, example: "kite", phrase: "k says" },
    { letter: "Ll", sound: soundL, example: "lip", phrase: "l says" },
    { letter: "Mm", sound: soundM, example: "map", phrase: "m says" },
    { letter: "Nn", sound: soundN, example: "nap", phrase: "n says" },
    { letter: "Oo", sound: soundO, example: "ox", phrase: "o says" },
    { letter: "Pp", sound: soundP, example: "pig", phrase: "p says" },
    { letter: "Qq", sound: soundQ, example: "queen", phrase: "q says" },
    { letter: "Rr", sound: soundR, example: "rat", phrase: "r says" },
    { letter: "Ss", sound: soundS, example: "set", phrase: "s says" },
    { letter: "Tt", sound: soundT, example: "top", phrase: "t says" },
    { letter: "Uu", sound: soundU, example: "up", phrase: "u says" },
    { letter: "Vv", sound: soundV, example: "vast", phrase: "v says" },
    { letter: "Ww", sound: soundW, example: "we", phrase: "w says" },
    { letter: "Xx", sound: soundX, example: "x-ray", phrase: "x says" },
    { letter: "Yy", sound: soundY, example: "yell", phrase: "y says" },
    { letter: "Zz", sound: soundZ, example: "zip", phrase: "z says" },
  ];

  // SPEECH RECOGNITION
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  // recognition.interimResults = true;

  // SPEAKING STATE
  useEffect(() => {
    if (isSpeaking) {
      recognition.start();
    } else {
      recognition.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpeaking]);

  recognition.onstart = function () {
    // recognition.continuous = true;
    console.log("vr active");
  };

  // function checkPhrase(transcript, phrase) {
  //   let response = transcript.toLowerCase();
  //   let spoken_phrase = response.replace(".", "");
  //   let expected_phrase = phrase.toLowerCase();

  //   console.log(spoken_phrase);
  //   console.log(expected_phrase);

  //   if (expected_phrase === spoken_phrase) {
  //     console.log("You are corrects");
  //   }
  // }

  // @after listening to users speech
  recognition.onresult = function (e) {
    setIsSpeaking(false);
    // let current = e.resultIndex;
    // let transcript = e.results[current][0].transcript;
    // checkPhrase(transcript, alphabets[letterIndex].phrase);

    if (letterIndex + 1 < alphabets.length) {
      setTimeout(() => {
        setletterIndex((pres) => pres + 1);
      }, 500);
    } else {
      setletterIndex(alphabets.length);
      setCompleted(true);
    }
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
    if (completed) {
    } else {
      setTimeout(() => {
        playAudio(alphabets[letterIndex].sound);
      }, 700);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letterIndex]);

  let restart = () => {
    setletterIndex(0);
    setCompleted(false);
  };

  return (
    <div className="relative">
      <Navbar position="fixed" />
      {completed ? (
        <Test2Completed restart={restart} />
      ) : (
        <>
          <div className="p-5 lg:p-7 cursor-pointer bg-white rounded-full center-text z-1000 shadow-lg">
            <BsFillMicFill
              className="text-blue-800 text-[45px] lg:text-[55px]"
              onClick={() => playAudio(alphabets[letterIndex].sound)}
            />
          </div>
          <div className="flex md:flex-row flex-col w-full h-screen alphabet-font">
            <div className="w-full flex-1 h-full bg-white relative">
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
        </>
      )}
    </div>
  );
};

export default AlphabetTest;
