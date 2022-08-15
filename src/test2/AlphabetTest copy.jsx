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
    setIsTesting(true);
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
    { letter: "Aa", sound: soundA, example: "ax", phrase: ["a says", "AA1"] },
    { letter: "Bb", sound: soundB, example: "bag", phrase: ["b says", ""] },
    { letter: "Cc", sound: soundC, example: "cab", phrase: ["see says", ""] },
    { letter: "Dd", sound: soundD, example: "dig", phrase: ["d says", ""] },
    { letter: "Ee", sound: soundE, example: "egg", phrase: ["he says", ""] },
    { letter: "Ff", sound: soundF, example: "fish", phrase: ["f says", ""] },
    {
      letter: "Gg",
      sound: soundG,
      example: "go",
      phrase: ["g says", "G UH1 D"],
    },
    {
      letter: "Hh",
      sound: soundH,
      example: "hi",
      phrase: ["each says", ""],
    },
    {
      letter: "Ii",
      sound: soundI,
      example: "it",
      phrase: ["i says", "HE IY1"],
    },
    { letter: "Jj", sound: soundJ, example: "jot", phrase: ["j says", ""] },
    {
      letter: "Kk",
      sound: soundK,
      example: "kite",
      phrase: ["cases says", "K"],
    },
    { letter: "Ll", sound: soundL, example: "lip", phrase: ["else says", ""] },
    {
      letter: "Mm",
      sound: soundM,
      example: "map",
      phrase: ["m says", "AH1 M"],
    },
    { letter: "Nn", sound: soundN, example: "nap", phrase: ["and says", ""] },
    { letter: "Oo", sound: soundO, example: "ox", phrase: ["o says", "AA1"] },
    {
      letter: "Pp",
      sound: soundP,
      example: "pig",
      phrase: ["peace says", ""],
    },
    { letter: "Qq", sound: soundQ, example: "queen", phrase: ["q says", ""] },
    { letter: "Rr", sound: soundR, example: "rat", phrase: ["r says", "R"] }, //@r ooo
    { letter: "Ss", sound: soundS, example: "set", phrase: ["assess", ""] },
    { letter: "Tt", sound: soundT, example: "top", phrase: ["see says", "T"] },
    { letter: "Uu", sound: soundU, example: "up", phrase: ["You says", "AA1"] },
    { letter: "Vv", sound: soundV, example: "vast", phrase: ["v says", ""] },
    {
      letter: "Ww",
      sound: soundW,
      example: "we",
      phrase: ["w says", "W AH1 T"],
    },
    { letter: "Xx", sound: soundX, example: "x-ray", phrase: ["Excess", ""] },
    {
      letter: "Yy",
      sound: soundY,
      example: "yell",
      phrase: ["y says", "Y AE1"],
    },
    { letter: "Zz", sound: soundZ, example: "zip", phrase: ["z says", ""] },
  ];

  const bg_color = [
    "bg-blue-800",
    "bg-indigo-800",
    "bg-fuchsia-800",
    "bg-blue-700",
    "bg-indigo-700",
    "bg-fuchsia-700",
    "bg-blue-800",
    "bg-fuchsia-600",
    "bg-indigo-600",
    "bg-blue-600",
    "bg-indigo-500",
    "bg-fuchsia-500",
    "bg-blue-500",
    "bg-indigo-800",
    "bg-fuchsia-800",
    "bg-blue-700",
    "bg-indigo-700",
    "bg-fuchsia-700",
    "bg-blue-700",
    "bg-indigo-800",
    "bg-fuchsia-800",
    "bg-blue-700",
    "bg-indigo-700",
    "bg-fuchsia-700",
    "bg-blue-700",
    "bg-blue-800",
  ];
  const color = [
    "text-blue-800",
    "text-indigo-800",
    "text-fuchsia-800",
    "text-blue-700",
    "text-indigo-700",
    "text-fuchsia-700",
    "text-blue-800",
    "text-fuchsia-600",
    "text-indigo-600",
    "text-blue-600",
    "text-indigo-500",
    "text-fuchsia-500",
    "text-blue-500",
    "text-indigo-800",
    "text-fuchsia-800",
    "text-blue-700",
    "text-indigo-700",
    "text-fuchsia-700",
    "text-blue-700",
    "text-indigo-800",
    "text-fuchsia-800",
    "text-blue-700",
    "text-indigo-700",
    "text-fuchsia-700",
    "text-blue-700",
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

  // @after listening to users speech
  recognition.onresult = function (e) {
    setIsSpeaking(false);
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    let noDotTranscript = transcript.replace(".", "");

    let phrase1 = phonemify(alphabets[letterIndex].phrase[0]);
    let fullPhrase = phrase1 + alphabets[letterIndex].phrase[1];
    let phonemifyTranscript = phonemify(noDotTranscript);

    setYourPhonemes(phonemifyTranscript);
    setExpectedPhonemes(fullPhrase);
    setYourWords(transcript);

    let special_phrase_score = 0;

    let special_phrase_function = (p1, p2, p3) => {
      let count = 0;
      let phrase1 = phonemify(p1);
      let phrase2 = phonemify(p2);
      let phrase3 = phonemify(p3);
      for (let i = 0; i < phonemifyTranscript.length; i++) {
        const letter = phonemifyTranscript[i];
        if (phrase1.includes(letter)) {
          count += 1;
        }
      }
      if (count >= phrase1.length) {
        special_phrase_score = count;
      } else {
        count = 0;
        for (let i = 0; i < phonemifyTranscript.length; i++) {
          const letter = phonemifyTranscript[i];
          if (phrase2.includes(letter)) {
            count += 1;
          }
        }
      }
      if (count >= phrase2.length) {
        special_phrase_score = count;
      } else {
        count = 0;
        for (let i = 0; i < phonemifyTranscript.length; i++) {
          const letter = phonemifyTranscript[i];
          if (phrase3.includes(letter)) {
            count += 1;
          }
        }
      }
      if (count >= phrase3.length) {
        special_phrase_score = count;
      }
    };

    let score = 0;

    if (letterIndex === 1) {
      special_phrase_function("He says ah", "A says ah", "A says uh");
    } else if (letterIndex === 10) {
      special_phrase_function("OK, says", "cases", "cases says");
    } else if (letterIndex === 17) {
      special_phrase_function("are says", "are says are", "our says");
    } else if (letterIndex === 18) {
      special_phrase_function("Access", "Assess", "Access");
    }

    for (let i = 0; i < phonemifyTranscript.length; i++) {
      const letter = phonemifyTranscript[i];
      if (fullPhrase.includes(letter)) {
        score += 1;
      }
    }

    console.log(score);

    if (score >= fullPhrase.length || special_phrase_score > 0) {
      console.log("correct");
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
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letterIndex]);

  // SPEAKING STATE
  useEffect(() => {
    if (isSpeaking) {
      recognition.start();
    } else {
      recognition.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpeaking]);

  let restart = () => {
    setletterIndex(0);
    setCompleted(false);
  };

  useEffect(() => {
    setIsSpeaking(false);
    recognition.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExited]);

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
              <h1
                className={`font-black center-text w-full text-center ${color[letterIndex]}`}
              >
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
