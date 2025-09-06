const MenuBar = ({ stopTimer, currentView, setCurrentView }) => {
  return (
    <>
      <div>
        <ul className="menu menu-horizontal bg-base-200 rounded-lg">
          <li>
            <a
              className={` ${currentView === "focus" ? "menu-active" : ""}`}
              onClick={() => {
                setCurrentView("focus");
                stopTimer();
              }}
            >
              Focus
            </a>
          </li>
          <li>
            <a
              className={` ${currentView === "break" ? "menu-active" : ""}`}
              onClick={() => {
                setCurrentView("break");
                stopTimer();
              }}
            >
              Short Break
            </a>
          </li>
          <li>
            <a
              className={` ${currentView === "long break" ? "menu-active" : ""}`}
              onClick={() => {
                setCurrentView("long break");
                stopTimer();
              }}
            >
              Long Break
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
