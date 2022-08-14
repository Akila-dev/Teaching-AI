import React, { useState, useEffect } from "react";
import phonemify from "phonemify";
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
import { BsFillMicFill } from "react-icons/bs";

const AlphabetTest = ({ isExited }) => {
  const [isTesting, setIsTesting] = useState(true);
  useEffect(() => {
    setIsTesting(false);
  }, []);

  const [letterIndex, setletterIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [yourWords, setYourWords] = useState("");
  const [yourPhonemes, setYourPhonemes] = useState("");
  const [expectedPhonemes, setExpectedPhonemes] = useState("");
  const [totalWrong, setTotalWrong] = useState(0);
  const [wrong, setWrong] = useState(0);
  const alphabets = [
    { letter: "Aa", sound: soundA, example: "ax", phrase: ["a says", "AE"] },
    { letter: "Bb", sound: soundB, example: "bag", phrase: ["b says", "B"] },
    { letter: "Cc", sound: soundC, example: "cab", phrase: ["c says", "K"] },
    { letter: "Dd", sound: soundD, example: "dig", phrase: ["d says", "D"] },
    { letter: "Ee", sound: soundE, example: "egg", phrase: ["e says", "EH"] },
    { letter: "Ff", sound: soundF, example: "fish", phrase: ["f says", "F"] },
    { letter: "Gg", sound: soundG, example: "go", phrase: ["g says", "G"] },
    { letter: "Hh", sound: soundH, example: "hi", phrase: ["h says", "HH"] },
    { letter: "Ii", sound: soundI, example: "it", phrase: ["i says", "IH"] },
    { letter: "Jj", sound: soundJ, example: "jot", phrase: ["j says", "JH"] },
    { letter: "Kk", sound: soundK, example: "kite", phrase: ["k says", "K"] },
    { letter: "Ll", sound: soundL, example: "lip", phrase: ["l says", "L"] },
    { letter: "Mm", sound: soundM, example: "map", phrase: ["m says", "M"] },
    { letter: "Nn", sound: soundN, example: "nap", phrase: ["n says", "N"] },
    { letter: "Oo", sound: soundO, example: "ox", phrase: ["o says", "AA"] },
    { letter: "Pp", sound: soundP, example: "pig", phrase: ["p says", "P"] },
    { letter: "Qq", sound: soundQ, example: "queen", phrase: ["q says", "K"] },
    { letter: "Rr", sound: soundR, example: "rat", phrase: ["r says", "R"] },
    { letter: "Ss", sound: soundS, example: "set", phrase: ["s says", "S"] },
    { letter: "Tt", sound: soundT, example: "top", phrase: ["t says", "T"] },
    { letter: "Uu", sound: soundU, example: "up", phrase: ["u says", "AH"] },
    { letter: "Vv", sound: soundV, example: "vast", phrase: ["v says", "V"] },
    { letter: "Ww", sound: soundW, example: "we", phrase: ["w says", "W"] },
    { letter: "Xx", sound: soundX, example: "x-ray", phrase: ["x says", "KS"] },
    { letter: "Yy", sound: soundY, example: "yell", phrase: ["y says", "Y"] },
    { letter: "Zz", sound: soundZ, example: "zip", phrase: ["z says", "Z"] },
  ];

  const bg_color = [
    "bg-blue-800",
    "bg-indigo-800",
    "bg-fuchsia-800",
    "bg-purple-800",
    "bg-blue-700",
    "bg-indigo-700",
    "bg-fuchsia-700",
    "bg-purple-700",
    "bg-blue-800",
    "bg-fuchsia-600",
    "bg-purple-600",
    "bg-indigo-600",
    "bg-blue-600",
    "bg-indigo-500",
    "bg-fuchsia-500",
    "bg-purple-500",
    "bg-blue-500",
    "bg-indigo-800",
    "bg-fuchsia-800",
    "bg-purple-800",
    "bg-blue-700",
    "bg-indigo-700",
    "bg-fuchsia-700",
    "bg-purple-700",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-800",
  ];
  const color = [
    "text-blue-800",
    "text-indigo-800",
    "text-fuchsia-800",
    "text-purple-800",
    "text-blue-700",
    "text-indigo-700",
    "text-fuchsia-700",
    "text-purple-700",
    "text-blue-800",
    "text-fuchsia-600",
    "text-purple-600",
    "text-indigo-600",
    "text-blue-600",
    "text-indigo-500",
    "text-fuchsia-500",
    "text-purple-500",
    "text-blue-500",
    "text-indigo-800",
    "text-fuchsia-800",
    "text-purple-800",
    "text-blue-700",
    "text-indigo-700",
    "text-fuchsia-700",
    "text-purple-700",
    "text-blue-700",
    "text-blue-800",
    "text-blue-800",
  ];

  // SPEECH RECOGNITION
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.onstart = function (e) {
    recognition.continuous = false;
    recognition.interimResults = false;
  };

  useEffect(() => {
    setIsSpeaking(false);
    recognition.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExited]);

  // SPEAKING STATE
  useEffect(() => {
    if (isSpeaking) {
      recognition.start();
    } else {
      recognition.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpeaking]);

  // @after listening to users speech
  recognition.onresult = function (e) {
    setIsSpeaking(false);
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    let noDotTranscript = transcript.replace(".", "");

    let phrase1 = phonemify(alphabets[letterIndex].phrase[0]);
    let fullPhrase = phrase1 + " " + alphabets[letterIndex].phrase[1];
    let phonemifyTranscript = phonemify(noDotTranscript);

    setYourPhonemes(phonemifyTranscript);
    setExpectedPhonemes(fullPhrase);
    setYourWords(transcript);

    // @ REMOVE SPACES FROM THE PHRASE AND TRANSCRIPT
    let noSpacePhrase = fullPhrase.replace(" ", "");
    let noSpaceTranscript = phonemifyTranscript.replace(" ", "");

    let correct = 0;
    let score = 0;
    let perc = 1;

    if (letterIndex === 2) {
    }

    // @ CHECK IF ALL LETTERS IN THE EXPECTED PHRASE ARE IN THE WORDS SPOKEN BY USER
    for (let i = 0; i < noSpaceTranscript.length; i++) {
      const word = noSpaceTranscript[i];
      if (new RegExp(word).test(noSpacePhrase)) {
        score += 1;
      }
    }

    //@ IF 80% OF THE WORDS IN THE EXPECTED PHRASE ARE IN THE SPOKEN WORDS, THEN SET THE CORRECT VALUE TO 1
    if (score + perc >= noSpaceTranscript.length) {
      console.log("correct");
      console.log(score);
      correct += 1;
    }
    console.log(correct);

    if (correct > 0) {
      setWrong(0);
      if (letterIndex + 1 < alphabets.length) {
        setTimeout(() => {
          setletterIndex((pres) => pres + 1);
        }, 500);
      } else {
        setletterIndex(alphabets.length);
        setCompleted(true);
      }
    } else {
      console.log("less than 75% correct");
      setWrong((prev) => prev + 1);
      if (wrong >= 3) {
        setTotalWrong((prev) => prev + 1);
        setWrong(0);
        console.log("exceeded");
        if (letterIndex + 1 < alphabets.length) {
          setTimeout(() => {
            setletterIndex((pres) => pres + 1);
          }, 500);
        } else {
          setletterIndex(alphabets.length);
          setCompleted(true);
        }
      } else {
        playAudio(alphabets[letterIndex].sound);
      }
    }
  };

  recognition.onend = function () {
    setIsSpeaking(false);
  };

  const playAudio = (audio) => {
    setIsSpeaking(false);
    const music = new Audio(audio);
    music.playbackRate = 1;
    music.play();
    music.onended = function (e) {
      setIsSpeaking(true);
    };
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
      {completed ? (
        <Test2Completed restart={restart} status={totalWrong} />
      ) : (
        <>
          <div className="center-text z-1000">
            {isSpeaking ? (
              <div className="p-5 lg:p-7 cursor-pointer bg-white rounded-full shadow-lg pulse-blue border-[1px]">
                <BsFillMicFill
                  className={`${color[letterIndex]} text-[45px] lg:text-[55px]`}
                  onClick={() => setIsSpeaking(false)}
                />
              </div>
            ) : (
              <div className="p-5 lg:p-7 cursor-pointer bg-white rounded-full shadow-lg border-[1px]">
                <BsFillMicFill
                  className={`${color[letterIndex]} text-[45px] lg:text-[55px]`}
                  onClick={() => playAudio(alphabets[letterIndex].sound)}
                />
              </div>
            )}
          </div>
          <div className="flex md:flex-row flex-col w-full h-screen alphabet-font">
            <div className="w-full flex-1 h-full bg-white relative">
              <h1 className={`font-black center-text ${color[letterIndex]}`}>
                {alphabets[letterIndex].example}
              </h1>
            </div>
            <div
              className={`w-full flex-1 h-full ${bg_color[letterIndex]} relative`}
            >
              <h1 className="font-black center-text text-white">
                {alphabets[letterIndex].letter}
              </h1>
            </div>
          </div>

          {/* TEST PURPOSE ONLY */}
          {isTesting && (
            <div className="w-full py-20 fixed bottom-0 left-0 flex flex-col justify-center items-center text-3xl bg-white">
              <h1 className={`text-black ${color[letterIndex]} pb-5`}>
                Here is what the computer thinks you are saying
              </h1>
              <p className="text-bold">{yourWords}</p>
              <p className="text-bold py-3">{yourPhonemes}</p>
              <p className="text-bold">{expectedPhonemes}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AlphabetTest;
