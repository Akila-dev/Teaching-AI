/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { ArrowBtns, Header, Exercise } from "../components";

const Test = () => {
  const exercise = "She is the President";
  let displayText = exercise;
  // let correction = "";
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [correction, setCorrection] = useState("");
  const [makeCorrection, setMakeCorrection] = useState(false);

  // SPEECH RECOGNITION
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  useEffect(() => {
    ai_speak("Let's begin, pronounce this sentence");
  }, []);

  useEffect(() => {
    if (isSpeaking) {
      recognition.start();
      setMakeCorrection(false);
    } else {
      recognition.stop();
    }
  }, [isSpeaking]);

  // START FUNCTION
  recognition.onstart = function () {
    // recognition.continuous = true;
    // setIsSpeaking(true);
    console.log("vr active");
  };
  // GET RESULT
  recognition.onresult = function (e) {
    setIsSpeaking(false);
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    console.log(transcript);

    check_response(transcript, exercise);
  };

  // STOP FUNCTION
  recognition.onend = function () {
    setIsSpeaking(false);
    console.log("vr deactivated");
  };

  function check_response(response, exercise) {
    let properResponse =
      response.substring(0, response.length - 1) || response.splice(0, -1);
    let optimizedResponse = properResponse.toLowerCase();
    let optimizedExercise = exercise.toLowerCase();
    let answer = optimizedResponse.split(" ");
    let sentence = optimizedExercise.split(" ");
    console.log(properResponse);
    console.log(answer);
    console.log(sentence);

    if (answer.length === sentence.length) {
      let wrongWord = [];
      for (let i = 0; i < answer.length; i++) {
        const ans = answer[i];
        if (ans !== sentence[i]) {
          wrongWord.push(i);
        }
      }
      if (wrongWord.length > 0) {
        // correction = sentence[wrongWord[0]];
        // ai_speak(`Try pronouncing this word as ${sentence[wrongWord[0]]}`);
        correctUser(sentence[wrongWord[0]]);
      } else {
        ai_speak("That's correct, well done", false);
      }
    } else {
      ai_speak("Make sure you start speaking after the mic is active");
    }
  }

  // AI SPEECH
  function ai_speak(message, respond = true) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    const allVoices = speechSynthesis.getVoices();
    // console.log(allVoices);
    speech.voice = allVoices[0];
    speech.volume = 0.5;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    if (respond) {
      speech.onend = function (e) {
        setIsSpeaking(true);
      };
    } else console.log("done");
    console.log(speech.text);
  }

  function correctUser(wrongWord) {
    setCorrection(wrongWord);
    setMakeCorrection(true);
    ai_speak(`Try pronouncing the word as ${wrongWord}`);
  }

  // function exit() {
  //   setMakeCorrection(false);
  //   setIsSpeaking(false);
  //   ai_speak.stop = true;
  // }

  return (
    <>
      {/* The num variable is to get the ammount of excercises */}
      {/* The active_id variable is to get the index of the active/present excercise */}
      <Header />
      <Exercise
        text={displayText}
        recording={isSpeaking}
        showCorrection={makeCorrection}
        correction={correction}
      />
      <ArrowBtns />
    </>
  );
};

export default Test;
