import React, { useState, useEffect } from "react";
import { ArrowBtns, Header, Exercise } from "../components";

const Test = () => {
  const exercise = "She is the President";
  const [isSpeaking, setIsSpeaking] = useState(false);

  // SPEECH RECOGNITION
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  if (isSpeaking) {
    recognition.start();
    recognition.continuous = true;
  } else {
    recognition.stop();
  }

  // START FUNCTION
  recognition.onstart = function () {
    // setIsSpeaking(true);
    // console.log("vr active");
  };
  // GET RESULT
  recognition.onresult = function (e) {
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
    let properResponse = response.substring(0, response.length - 1);
    let optimizedResponse = properResponse.toLowerCase();
    let optimizedExercise = exercise.toLowerCase();
    let answer = optimizedResponse.split(" ");
    let sentence = optimizedExercise.split(" ");
    // console.log(properResponse);
    // console.log(answer);
    // console.log(sentence);

    if (answer.length === sentence.length) {
      let wrongWord = [];
      for (let i = 0; i < answer.length; i++) {
        const ans = answer[i];
        if (ans !== sentence[i]) {
          wrongWord.push(i);
        }
      }
      if (wrongWord.length > 0) {
        ai_speak(`Try pronouncing this word as ${sentence[wrongWord[0]]}`);
        // setIsSpeaking(true);
      } else {
        ai_speak("That's correct, well done", false);
      }
    } else if (answer.length > sentence.length) {
      ai_speak("Try reading the sentence again, more gently this time");
    } else if (answer.length < sentence.length) {
      ai_speak("Try reading the sentence again, more audibly this time");
    }
  }

  useEffect(() => {
    ai_speak("Let's begin, pronounce this sentence");
  }, []);

  // AI SPEECH
  function ai_speak(message, respond = true) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    const allVoices = speechSynthesis.getVoices();
    // console.log(allVoices);
    speech.voice = allVoices[1];
    speech.volume = 0.8;
    speech.rate = 0.8;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    if (respond) {
      speech.onend = function (e) {
        setIsSpeaking(true);
      };
    }
    console.log(speech.text);
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
