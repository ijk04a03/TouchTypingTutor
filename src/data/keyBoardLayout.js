const KeyboardLayout = {
    name: "QWERTY",

    rows: [
        {
            id: "number",
            keys: [
                { id: "backquote", label: "`", code: "Backquote", finger: "LP" },
                { id: "1", label: "1", code: "Digit1", finger: "LP" },
                { id: "2", label: "2", code: "Digit2", finger: "LR" },
                { id: "3", label: "3", code: "Digit3", finger: "LM" },
                { id: "4", label: "4", code: "Digit4", finger: "LI" },
                { id: "5", label: "5", code: "Digit5", finger: "LI" },
                { id: "6", label: "6", code: "Digit6", finger: "RI" },
                { id: "7", label: "7", code: "Digit7", finger: "RI" },
                { id: "8", label: "8", code: "Digit8", finger: "RM" },
                { id: "9", label: "9", code: "Digit9", finger: "RR" },
                { id: "0", label: "0", code: "Digit0", finger: "RP" },
                { id: "minus", label: "-", code: "Minus", finger: "RP" },
                { id: "equal", label: "=", code: "Equal", finger: "RP" },
                {
                    id: "backspace",
                    label: "Backspace",
                    code: "Backspace",
                    width: 2
                }
            ]
        },

        {
            id: "qwerty",
            keys: [
                { id: "tab", label: "Tab", code: "Tab", width: 1.5 },

                { id: "q", label: "Q", code: "KeyQ", finger: "LP" },
                { id: "w", label: "W", code: "KeyW", finger: "LR" },
                { id: "e", label: "E", code: "KeyE", finger: "LM" },
                { id: "r", label: "R", code: "KeyR", finger: "LI" },
                { id: "t", label: "T", code: "KeyT", finger: "LI" },

                { id: "y", label: "Y", code: "KeyY", finger: "RI" },
                { id: "u", label: "U", code: "KeyU", finger: "RI" },
                { id: "i", label: "I", code: "KeyI", finger: "RM" },
                { id: "o", label: "O", code: "KeyO", finger: "RR" },
                { id: "p", label: "P", code: "KeyP", finger: "RP" },

                { id: "bracketleft", label: "[", code: "BracketLeft", finger: "RP" },
                { id: "bracketright", label: "]", code: "BracketRight", finger: "RP" },
                { id: "backslash", label: "\\", code: "Backslash", finger: "RP" }
            ]
        },

        {
            id: "home",
            keys: [
                { id: "capslock", label: "Caps", code: "CapsLock", width: 1.75 },

                { id: "a", label: "A", code: "KeyA", finger: "LP" },
                { id: "s", label: "S", code: "KeyS", finger: "LR" },
                { id: "d", label: "D", code: "KeyD", finger: "LM" },
                { id: "f", label: "F", code: "KeyF", finger: "LI" },

                { id: "g", label: "G", code: "KeyG", finger: "LI" },

                { id: "h", label: "H", code: "KeyH", finger: "RI" },

                { id: "j", label: "J", code: "KeyJ", finger: "RI" },
                { id: "k", label: "K", code: "KeyK", finger: "RM" },
                { id: "l", label: "L", code: "KeyL", finger: "RR" },
                { id: "semicolon", label: ";", code: "Semicolon", finger: "RP" },
                { id: "quote", label: "'", code: "Quote", finger: "RP" },

                {
                    id: "enter",
                    label: "Enter",
                    code: "Enter",
                    width: 2.25
                }
            ]
        },

        {
            id: "bottom",
            keys: [
                {
                    id: "shift-left",
                    label: "Shift",
                    code: "ShiftLeft",
                    width: 2.25
                },

                { id: "z", label: "Z", code: "KeyZ", finger: "LP" },
                { id: "x", label: "X", code: "KeyX", finger: "LR" },
                { id: "c", label: "C", code: "KeyC", finger: "LM" },
                { id: "v", label: "V", code: "KeyV", finger: "LI" },
                { id: "b", label: "B", code: "KeyB", finger: "LI" },

                { id: "n", label: "N", code: "KeyN", finger: "RI" },
                { id: "m", label: "M", code: "KeyM", finger: "RI" },
                { id: "comma", label: ",", code: "Comma", finger: "RM" },
                { id: "period", label: ".", code: "Period", finger: "RR" },
                { id: "slash", label: "/", code: "Slash", finger: "RP" },

                {
                    id: "shift-right",
                    label: "Shift",
                    code: "ShiftRight",
                    width: 2.75
                }
            ]
        },

        {
            id: "spacerow",
            keys: [
                {
                    id: "control-left",
                    label: "CTRL",
                    code: "ControlLeft",
                    finger: "thumb",
                    width: 2
                },
                {
                    id: "alt-left",
                    label: "ALT",
                    code: "AltLeft",
                    finger: "thumb",
                    width: 2
                },
                {
                    id: "meta-left",
                    label: "CMD",
                    code: "MetaLeft",
                    finger: "thumb",
                    width: 2
                },
                {
                    id: "space",
                    label: "Space",
                    code: "Space",
                    finger: "thumb",
                    width: 6
                },
                {
                    id: "meta-right",
                    label: "CMD",
                    code: "MetaRight",
                    finger: "thumb",
                    width: 2
                },
                {
                    id: "alt-right",
                    label: "ALT",
                    code: "AltRight",
                    finger: "thumb",
                    width: 2
                },
                {
                    id: "control-right",
                    label: "CTRL",
                    code: "ControlRight",
                    finger: "thumb",
                    width: 2
                }
            ]
        }
    ]
};


export default KeyboardLayout;