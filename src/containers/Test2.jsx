import React, { useState, useEffect } from "react";
import { AlphabetTest, Intro1, Intro2, Intro3 } from "../test2";
import { intro1, intro2, intro3 } from "../assets/intros";

const Test2 = () => {
  const [showIntro, setShowIntro] = useState(true);
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
    setTimeout(() => {
      playAudio(intro1);
      setShowIntro(true);
      setShowIntro1(true);
      setShowIntro2(false);
      setShowIntro3(false);
    }, 500);

    setTimeout(() => {
      setShowIntro(true);
      setShowIntro1(false);
      setShowIntro2(true);
      setShowIntro3(false);
    }, 3500);

    setTimeout(() => {
      playAudio(intro2);
    }, 4000);

    setTimeout(() => {
      setShowIntro(true);
      setShowIntro1(false);
      setShowIntro2(false);
      setShowIntro3(true);
    }, 30000);
    setTimeout(() => {
      playAudio(intro3);
    }, 30500);
    setTimeout(() => {
      setShowIntro(false);
      setShowIntro1(false);
      setShowIntro2(false);
      setShowIntro3(false);
    }, 45000);
  };

  useEffect(() => {
    playIntro();
  }, []);

  return (
    <div>
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
