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

const GenerateKeyboard = function ({ pressedCode }) {
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
                    className={`finger${key.finger || ""} keyboard-key ${pressedCode === key.code ? "pressed" : ""
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