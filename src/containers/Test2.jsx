import React, { useState, useEffect } from "react";
import { AlphabetTest, Intro1, Intro2, Intro3 } from "../test2";
import { intro1, intro2, intro3 } from "../assets/intros";
import { Header } from "../components";

const Test2 = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showIntro1, setShowIntro1] = useState(true);
  const [showIntro2, setShowIntro2] = useState(false);
  const [showIntro3, setShowIntro3] = useState(false);

  const playAudio = (audio) => {
    const music = new Audio(audio);
    music.playbackRate = 1;
    music.play();
    music.onended = function (e) {
      console.log("audio ended");
    };
    console.log("audio playing");
  };

  const playIntro = () => {
    // setTimeout(() => {
    //   playAudio(intro1);
    //   setShowIntro1(true);
    //   setShowIntro2(false);
    //   setShowIntro3(false);
    // }, 1500);

    setTimeout(() => {
      setShowIntro1(false);
      setShowIntro2(true);
      setShowIntro3(false);
    }, 500);

    setTimeout(() => {
      playAudio(intro2);
    }, 1000);

    setTimeout(() => {
      setShowIntro1(false);
      setShowIntro2(false);
      setShowIntro3(true);
    }, 27000);
    setTimeout(() => {
      playAudio(intro3);
    }, 27500);
    setTimeout(() => {
      setShowIntro(false);
      setShowIntro1(false);
      setShowIntro2(false);
      setShowIntro3(false);
    }, 42000);
  };

  const playIntro1 = () => {
    const music = new Audio(intro1);
    music.playbackRate = 1;
    music.play();
    music.onended = function (e) {
      playIntro();
    };
  };

  useEffect(() => {
    if (showIntro) {
      setTimeout(() => {
        playIntro1();
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  let exit = () => {
    recognition.stop();
  };

  let reload = () => {
    exit();
  };

  return (
    <div>
      <Header exit={exit} reload={reload} to="/" />
      {showIntro ? (
        <div>
          {showIntro1 && <Intro1 />} {showIntro2 && <Intro2 />}
          {showIntro3 && <Intro3 />}
        </div>
      ) : (
        <div>
          <AlphabetTest />
        </div>
      )}
    </div>
  );
};

export default Test2;
