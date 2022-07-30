/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { ArrowBtns, Header, Exercise } from "../components";

const Test = () => {
  const [allowPrevBtn, setAllowPrevBtn] = useState(false);
  const [allowNextBtn, setAllowNextBtn] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [correction, setCorrection] = useState("");
  const [wrongSpeech, setWrongSpeech] = useState("");
  const [makeCorrection, setMakeCorrection] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionNo, setQuestionNo] = useState(1);
  const [tries, setTries] = useState(0);

  const exercises = [
    "She is the President",
    "He likes to play ball",
    "Get me the phone",
    "Sing me to sleep",
    "I like to dance",
    "Bring me that bag",
    "Let's go home now",
    "Do you like it",
    "Let's finish up",
    "I went to school yesterday",
  ];
  let exercise = exercises[questionNo - 1];

  // SPEECH RECOGNITION
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  // INITIATE QUESTIONING
  useEffect(() => {
    ai_speak("Let's begin, pronounce this sentence");
  }, []);

  // ACTIVATE AND DEACTIVATE ARROW BUTTONS
  useEffect(() => {
    if (questionNo === 1 || questionNo < 1) {
      setAllowPrevBtn(false);
      // console.log("dont allow prev");
    } else {
      setAllowPrevBtn(true);
      // console.log("allow prev");
    }
    if (questionNo === exercises.length || questionNo > exercises.length) {
      setAllowNextBtn(false);
      // console.log("dont allow next");
    } else {
      // console.log("allow next");
      setAllowNextBtn(true);
    }
  }, [questionNo]);

  // SPEAKING STATE
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
    // console.log("vr active");
  };
  // GET RESULT
  recognition.onresult = function (e) {
    setIsSpeaking(false);
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    // console.log(transcript);

    check_response(transcript, exercise);
  };

  // STOP FUNCTION
  recognition.onend = function () {
    setIsSpeaking(false);
    // console.log("vr deactivated");
  };

  // CHECK THE RESPONSE GIVEN BY STUDENT
  function check_response(response, exercise) {
    setTries((prevTries) => prevTries + 1);
    let properResponse = response.replace(".", "");
    // let properResponse = response;
    let optimizedResponse = properResponse.toLowerCase();
    let optimizedExercise = exercise.toLowerCase();
    let answer = optimizedResponse.split(" ");
    let sentence = optimizedExercise.split(" ");
    // console.log(answer);
    // console.log(sentence);

    // IF THE WORDS SPOKEN ARE THE SAME AMMOUNT AS THE EXERCISE
    if (answer.length === sentence.length) {
      let wrongWordIndex = [];
      let wrongWord = [];
      for (let i = 0; i < answer.length; i++) {
        const ans = answer[i];
        if (ans !== sentence[i]) {
          wrongWordIndex.push(i);
          wrongWord.push(ans);
        }
      }
      if (wrongWordIndex.length > 0) {
        // IF THERE IS A WRONG WORD SPOKEN BY STUDENT
        correctUser(sentence[wrongWordIndex[0]], wrongWord[0]);
      } else {
        ai_speak("That's correct, well done", false);
        // nextQuestion();
        setShowAnswer(true);
      }
    } else {
      // IF THE WORDS SPOKEN ARE LESS THAN OR GREATER THAN THE AMOUNT OF WORDS IN THE EXERCISE
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
    setIsSpeaking(false);
    if (respond) {
      speech.onend = function (e) {
        setIsSpeaking(true);
      };
    } else console.log("done");
    console.log(speech.text);
  }

  function correctUser(wrongWordIndex, wrongWord) {
    setCorrection(wrongWordIndex);
    setWrongSpeech(wrongWord);
    setMakeCorrection(true);
    ai_speak(`Try pronouncing the word as ${wrongWordIndex}`);
  }

  let nextQuestion = () => {
    exit();
    setQuestionNo((prevCount) => prevCount + 1);
    exercise = exercises[questionNo - 1];
    ai_speak("Now try the next one");
  };
  let prevQuestion = () => {
    exit();
    setQuestionNo((prevCount) => prevCount - 1);
    exercise = exercises[questionNo - 1];
    ai_speak("Try this one again");
  };

  let reload = () => {
    // setReloadInactive(true);
    // window.speechSynthesis.cancel();
    // recognition.stop();
    exit();
    ai_speak("Try pronouncing this sentence");
  };

  let exit = () => {
    setIsSpeaking(false);
    recognition.stop();
    window.speechSynthesis.cancel();
    setShowAnswer(false);
  };

  return (
    <>
      {/* The num variable is to get the ammount of excercises */}
      {/* The active_id variable is to get the index of the active/present excercise */}
      <Header exit={exit} reload={reload} />
      <Exercise
        text={exercise}
        recording={isSpeaking}
        showCorrection={makeCorrection}
        correction={correction}
        wrong_word={wrongSpeech}
        showAnswer={showAnswer}
      />

      {/* "reloadInactive" CHECKS IF IS SPEEAKING IS TRUE AND MAKES THE RELOAD BUTTON INACTIVE */}
      <ArrowBtns
        prev={prevQuestion}
        next={nextQuestion}
        allowPrev={allowPrevBtn}
        allowNext={allowNextBtn}
        noOfQuestions={exercises.length}
        noOfTries={tries}
      />
    </>
  );
};

export default Test;
