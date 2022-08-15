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
  const [isTesting, setIsTesting] = useState(false);
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
    window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition ||
    window.oSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.onstart = function (e) {
    recognition.continuous = false;
    recognition.interimResults = true;
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

    let special_phrase_function = (
      p1 = "kfkfkfkfkkndndjdhdd",
      p2 = "kfkfkfkfkkndndjdhdd",
      p3 = "kfkfkfkfkkndndjdhdd",
      p4 = "kfkfkfkfkkndndjdhdd",
      p5 = "kfkfkfkfkkndndjdhdd",
      p6 = "kfkfkfkfkkndndjdhdd",
      p7 = "kfkfkfkfkkndndjdhdd"
    ) => {
      let count = 0;
      let phrase1 = phonemify(p1);
      let phrase2 = phonemify(p2);
      let phrase3 = phonemify(p3);
      let phrase4 = phonemify(p4);
      let phrase5 = phonemify(p5);
      let phrase6 = phonemify(p6);
      let phrase7 = phonemify(p7);
      for (let i = 0; i < phonemifyTranscript.length; i++) {
        const letter = phonemifyTranscript[i];
        if (phrase1.includes(letter)) {
          count += 1;
        }
      }
      if (
        count >= phrase1.length &&
        phonemifyTranscript.length === phrase1.length
      ) {
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
      if (
        count >= phrase2.length &&
        phonemifyTranscript.length === phrase2.length
      ) {
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
      if (
        count >= phrase3.length &&
        phonemifyTranscript.length === phrase3.length
      ) {
        special_phrase_score = count;
      } else {
        count = 0;
        for (let i = 0; i < phonemifyTranscript.length; i++) {
          const letter = phonemifyTranscript[i];
          if (phrase4.includes(letter)) {
            count += 1;
          }
        }
      }
      if (
        count >= phrase4.length &&
        phonemifyTranscript.length === phrase4.length
      ) {
        special_phrase_score = count;
      } else {
        count = 0;
        for (let i = 0; i < phonemifyTranscript.length; i++) {
          const letter = phonemifyTranscript[i];
          if (phrase5.includes(letter)) {
            count += 1;
          }
        }
      }
      if (
        count >= phrase5.length &&
        phonemifyTranscript.length === phrase5.length
      ) {
        special_phrase_score = count;
      } else {
        count = 0;
        for (let i = 0; i < phonemifyTranscript.length; i++) {
          const letter = phonemifyTranscript[i];
          if (phrase6.includes(letter)) {
            count += 1;
          }
        }
      }
      if (
        count >= phrase6.length &&
        phonemifyTranscript.length === phrase6.length
      ) {
        special_phrase_score = count;
      } else {
        count = 0;
        for (let i = 0; i < phonemifyTranscript.length; i++) {
          const letter = phonemifyTranscript[i];
          if (phrase7.includes(letter)) {
            count += 1;
          }
        }
      }
      if (
        count >= phrase7.length &&
        phonemifyTranscript.length === phrase7.length
      ) {
        special_phrase_score = count;
      }
    };

    let score = 0;

    if (letterIndex === 0) {
      special_phrase_function(
        "He says ah",
        "A says ah",
        "A says uh",
        "He says",
        "SSS",
        "ace sa",
        "SSR"
      );
    } else if (letterIndex === 1) {
      special_phrase_function("B says", "BTS", "BCS", "BS", "BSS", "bisas");
    } else if (letterIndex === 2) {
      special_phrase_function("see says", "C says", "CSS", "recess");
    } else if (letterIndex === 3) {
      special_phrase_function("D says", "DSS", "this is");
    } else if (letterIndex === 4) {
      special_phrase_function("he says", "it's sa", "it says", "SSS");
    } else if (letterIndex === 5) {
      special_phrase_function("f says", "xx", "abscess", "obsessed");
    } else if (letterIndex === 6) {
      special_phrase_function(
        "g says good",
        "jesus",
        "jesus good",
        "jesus group"
      );
    } else if (letterIndex === 7) {
      special_phrase_function("each says", "page says", "age says", "hcs");
    } else if (letterIndex === 8) {
      special_phrase_function("i says he", "i said y", "i said it");
    } else if (letterIndex === 10) {
      special_phrase_function(
        "OK, says",
        "cases",
        "cases says",
        "KZ",
        "OK, says",
        "cases",
        "cases says"
      );
    } else if (letterIndex === 11) {
      special_phrase_function("else says", "else SE", "elsa's");
    } else if (letterIndex === 12) {
      special_phrase_function("m says hm", "m says hmm", "m says um", "MSS");
    } else if (letterIndex === 13) {
      special_phrase_function("and says", "nss", "answers", "n says");
    } else if (letterIndex === 14) {
      special_phrase_function("o says ah", "o SSR", "o SAR", "ulcers");
    } else if (letterIndex === 15) {
      special_phrase_function("peace says", "pieces");
    } else if (letterIndex === 16) {
      special_phrase_function("q says", "cute desk", "cutest");
    } else if (letterIndex === 17) {
      special_phrase_function(
        "are says",
        "are says are",
        "our says",
        "Authur's room",
        "RSS",
        "arce's ru"
      );
    } else if (letterIndex === 18) {
      special_phrase_function(
        "Access",
        "Assess",
        "Access",
        "Assess",
        "Assess",
        "Access",
        "Assess"
      );
    } else if (letterIndex === 19) {
      special_phrase_function(
        "see says T",
        "tee says T",
        "speed test",
        "incest",
        "recessed",
        "pieces"
      );
    } else if (letterIndex === 20) {
      special_phrase_function(
        "you says ah",
        "you says uh",
        "uses",
        "you said",
        "uses her"
      );
    } else if (letterIndex === 21) {
      special_phrase_function("v says", "visas", "recess", "b cells");
    } else if (letterIndex === 22) {
      special_phrase_function("w says what", "wcsv", "WCS");
    } else if (letterIndex === 24) {
      special_phrase_function(
        "y says yeah",
        "weiss SJ",
        "y says you",
        "why says"
      );
    } else if (letterIndex === 25) {
      special_phrase_function("z says", "recess", "Jesus", "ZZ");
    }

    if (phonemifyTranscript.length === fullPhrase.length) {
      for (let i = 0; i < phonemifyTranscript.length; i++) {
        const letter = phonemifyTranscript[i];
        if (fullPhrase.includes(letter)) {
          score += 1;
        }
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
