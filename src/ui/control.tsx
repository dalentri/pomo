import React from "react";

interface ControlProps {
  stopTimer: () => void;
  startTimer: () => void;
  restartTimer: () => void;
}

const Control: React.FC<ControlProps> = ({
  stopTimer,
  startTimer,
  restartTimer,
}) => {
  return (
    <>
      <ul className="menu menu-horizontal m-2 mb-5 rounded-lg bg-base-200">
        <li>
          <a
            onClick={() => {
              stopTimer();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-square-icon lucide-square"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
            </svg>
          </a>
        </li>
        <li>
          <a onClick={startTimer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-play-icon lucide-play"
            >
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
            </svg>
          </a>
        </li>
        <li>
          <a onClick={restartTimer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Control;
