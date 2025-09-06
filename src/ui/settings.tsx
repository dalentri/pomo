import React from "react";

// Define an interface for the component's props
interface SettingsProps {
  focusTime: number;
  setFocusTime: React.Dispatch<React.SetStateAction<number>>;
  breakTime: number;
  setBreakTime: React.Dispatch<React.SetStateAction<number>>;
  longBreakTime: number;
  setLongBreakTime: React.Dispatch<React.SetStateAction<number>>;
  restartTimer: () => void;
}
const Settings: React.FC<SettingsProps> = ({
  focusTime,
  setFocusTime,
  breakTime,
  setBreakTime,
  longBreakTime,
  setLongBreakTime,
  restartTimer,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <button
        className="btn mt-4"
        onClick={() => {
          (
            document.getElementById("settings") as HTMLDialogElement
          )?.showModal();
          restartTimer();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-settings-icon lucide-settings"
        >
          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
      <dialog id="settings" className="modal">
        <div className="modal-box max-w-80">
          <form onSubmit={handleSubmit}>
            <h2 className="font-bold text-xl mb-5">Settings</h2>
            <div className="flex gap-5 m-1 flex-col">
              <label className="input">
                <span className="label">Focus</span>
                <input
                  type="number"
                  placeholder="time"
                  value={focusTime}
                  onChange={(e) => setFocusTime(parseInt(e.target.value))}
                  required
                />
              </label>
              <label className="input">
                <span className="label">Break</span>
                <input
                  type="number"
                  placeholder="time"
                  value={breakTime}
                  onChange={(e) => setBreakTime(parseInt(e.target.value))}
                  required
                />
              </label>
              <label className="input">
                <span className="label">Long Break</span>
                <input
                  type="number"
                  placeholder="time"
                  value={longBreakTime}
                  onChange={(e) => setLongBreakTime(parseInt(e.target.value))}
                  required
                />
              </label>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="mt-5" type="submit">
                  Save
                </button>
              </form>
            </div>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button onClick={restartTimer}>Save</button>
        </form>
      </dialog>
    </>
  );
};

export default Settings;
