import { useState, useEffect } from "react";
import KeyboardLayout from "../Data/keyBoardLayout";

const isMac = navigator.userAgentData?.platform === "macOS" || /Mac/i.test(navigator.platform);
const getKeyLabel = (key) => {
  if (key.id === "meta-left" || key.id === "meta-right") {
    return isMac ? "CMD" : "WIN";
  }

  if (key.id === "alt-left" || key.id === "alt-right") {
    return isMac ? "OPTION" : "ALT";
  }

  return key.label;
};


const GenerateKeyboard = function () {

  const [pressedKey, setPressedKey] = useState(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      setPressedKey(event.code);
      const virtualKey = document.querySelector(
        `[data-code="${event.code}"]`
      );

      virtualKey?.click();
    };

    const handleKeyUp = () => {
      setPressedKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [pressedKey]);
  return (
    <>
      <div className="KeyboardContainer">
        {KeyboardLayout.rows.map(row => {
          return (
            <div className="keyRow" id={row.id} key={row.id}>
              {row.keys.map(key => {
                if (isMac && key.id === "control-right") { return };
                return (
                  <button
                    type="button"
                    id={key.id}
                    key={key.id}
                    data-code={key.code}
                    className={`finger${key.finger || ""} keyboard-key ${pressedKey === key.code ? "pressed" : ""
                      }`}
                    style={{ width: `${(key.width || 1) * 50}px` }}>
                    {getKeyLabel(key)}
                  </button>)
              })
              }
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export { GenerateKeyboard as default };