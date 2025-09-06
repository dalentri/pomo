import { useState, useEffect } from "react";
import "./App.css";
import useSound from "use-sound";

//Ui
import MenuBar from "./ui/menuBar.tsx";
import Control from "./ui/control.tsx";
import Settings from "./ui/settings.tsx";

// Timers
import TimerBox from "./views/timerBox.tsx";

// Sound FX
import daySFX from "../public/sounds/day.wav";

function App() {
  const [currentView, setCurrentView] = useState("focus");

  const [timerOn, setTimerOn] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [timer, setTimer] = useState("25:00");

  // Initial times
  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  const [focusCount, setFocusCount] = useState(0);
  const [play] = useSound(daySFX);

  const updateTimer = (newStartTime: number) => {
    const currentTime = Date.now();
    let tempElapsedTime = 0;

    if (currentView === "focus") {
      tempElapsedTime = newStartTime + focusTime * 60000 - currentTime;
    } else if (currentView === "break") {
      tempElapsedTime = newStartTime + breakTime * 60000 - currentTime;
    } else if (currentView === "long break") {
      tempElapsedTime = newStartTime + longBreakTime * 60000 - currentTime;
    }

    if (tempElapsedTime <= 0) {
      setTimerOn(false);
      play();

      if (
        currentView === "focus" &&
        (focusCount === 0 || focusCount % 3 !== 0)
      ) {
        setCurrentView("break");
        setFocusCount((prev) => prev + 1);
      } else if (currentView === "break") {
        setCurrentView("focus");
      } else if (currentView === "long break") {
        setCurrentView("focus");
      } else if (
        currentView === "focus" &&
        focusCount !== 0 &&
        focusCount % 3 === 0
      ) {
        setFocusCount((prev) => prev + 1);
        setCurrentView("long break");
      }
    } else {
      const mins = Math.floor((tempElapsedTime / (1000 * 60)) % 60);
      const secs = Math.floor((tempElapsedTime / 1000) % 60);

      const stringMins = mins.toString();
      const stringSecs = secs.toString().padStart(2, "0");

      setTimer(stringMins + ":" + stringSecs);
    }
  };

  // Sets the initial value everytime the view changes
  useEffect(() => {
    if (currentView === "focus") {
      const initialTime = focusTime.toString() + ":00";
      setTimer(initialTime);
    } else if (currentView === "break") {
      const initialTime = breakTime.toString() + ":00";
      setTimer(initialTime);
    } else if (currentView === "long break") {
      const initialTime = longBreakTime.toString() + ":00";
      setTimer(initialTime);
    }
  }, [currentView, focusTime, breakTime, longBreakTime]);

  // useEffect(() => {
  //   // If the view is focus when the timer ends, increment and switch to break
  //   if (
  //     timer === "0:00" &&
  //     currentView === "focus" &&
  //     (focusCount % 4 !== 0 || focusCount === 0)
  //   ) {
  //     setFocusCount((prev) => prev + 1);
  //     setCurrentView("break");
  //     // If the timer ends when the view is break, go back to focus
  //   } else if (timer === "0:00" && currentView === "break") {
  //     setCurrentView("focus");
  //     // If the timer ends when the timer is on focus after ever 4 count, go to long break
  //   } else if (
  //     timer === "0:00" &&
  //     currentView === "focus" &&
  //     focusCount % 4 === 0 &&
  //     focusCount !== 0
  //   ) {
  //     setFocusCount((prev) => prev + 1);
  //     setCurrentView("long break");
  //   }
  // }, [timer, focusCount]);

  //Starts the timer
  const startTimer = () => {
    if (!timerOn) {
      const newStartTime = Date.now();
      setStartTime(newStartTime);
      setTimerOn(true);
    }
  };

  //Stops the timer
  const stopTimer = () => {
    if (timerOn) {
      setTimerOn(false);
    }
  };

  const restartTimer = () => {
    setTimerOn(false);

    if (currentView === "focus") {
      const initialTime = focusTime.toString() + ":00";
      setTimer(initialTime);
    } else if (currentView === "break") {
      const initialTime = breakTime.toString() + ":00";
      setTimer(initialTime);
    } else if (currentView === "long break") {
      const initialTime = longBreakTime.toString() + ":00";
      setTimer(initialTime);
    }
  };

  // Updates the timer when the timer is on
  useEffect(() => {
    if (timerOn) {
      updateTimer(startTime);
      const id = setInterval(() => updateTimer(startTime), 1000);
      return () => clearInterval(id);
    }
  }, [timerOn, startTime]);

  return (
    <>
      <div>
        <h1 className="font-bold">Pomo</h1>
        <TimerBox timer={timer} />
        <div className="flex justify-center">
          <div className="font-bold p-3 w-40 bg-base-200 rounded-lg">
            Focus Count: {focusCount}
          </div>
        </div>
        <Control
          stopTimer={stopTimer}
          startTimer={startTimer}
          restartTimer={restartTimer}
        />
        <MenuBar
          currentView={currentView}
          setCurrentView={setCurrentView}
          stopTimer={stopTimer}
        />
        <Settings
          focusTime={focusTime}
          setFocusTime={setFocusTime}
          breakTime={breakTime}
          setBreakTime={setBreakTime}
          longBreakTime={longBreakTime}
          setLongBreakTime={setLongBreakTime}
          restartTimer={restartTimer}
        />
      </div>
    </>
  );
}

export default App;
