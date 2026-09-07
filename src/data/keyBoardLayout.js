const KeyboardLayout = {
    name: "QWERTY",
    rows: [
        {
            id: "number",
            keys: [
                {
                    id: "backquote",
                    label: "`",
                    code: "Backquote",
                    finger: "LP",
                    other: {
                        id: "tilde",
                        label: "~",
                        code: "Backquote"
                    }
                },
                {
                    id: "1",
                    label: "1",
                    code: "Digit1",
                    finger: "LP",
                    other: {
                        id: "exclamation",
                        label: "!",
                        code: "Digit1"
                    }
                },
                {
                    id: "2",
                    label: "2",
                    code: "Digit2",
                    finger: "LR",
                    other: {
                        id: "at",
                        label: "@",
                        code: "Digit2"
                    }
                },
                {
                    id: "3",
                    label: "3",
                    code: "Digit3",
                    finger: "LM",
                    other: {
                        id: "hash",
                        label: "#",
                        code: "Digit3"
                    }
                },
                {
                    id: "4",
                    label: "4",
                    code: "Digit4",
                    finger: "LI",
                    other: {
                        id: "dollar",
                        label: "$",
                        code: "Digit4"
                    }
                },
                {
                    id: "5",
                    label: "5",
                    code: "Digit5",
                    finger: "LI",
                    other: {
                        id: "percent",
                        label: "%",
                        code: "Digit5"
                    }
                },
                {
                    id: "6",
                    label: "6",
                    code: "Digit6",
                    finger: "RI",
                    other: {
                        id: "caret",
                        label: "^",
                        code: "Digit6"
                    }
                },
                {
                    id: "7",
                    label: "7",
                    code: "Digit7",
                    finger: "RI",
                    other: {
                        id: "ampersand",
                        label: "&",
                        code: "Digit7"
                    }
                },
                {
                    id: "8",
                    label: "8",
                    code: "Digit8",
                    finger: "RM",
                    other: {
                        id: "asterisk",
                        label: "*",
                        code: "Digit8"
                    }
                },
                {
                    id: "9",
                    label: "9",
                    code: "Digit9",
                    finger: "RR",
                    other: {
                        id: "left-parenthesis",
                        label: "(",
                        code: "Digit9"
                    }
                },
                {
                    id: "0",
                    label: "0",
                    code: "Digit0",
                    finger: "RP",
                    other: {
                        id: "right-parenthesis",
                        label: ")",
                        code: "Digit0"
                    }
                },
                {
                    id: "minus",
                    label: "-",
                    code: "Minus",
                    finger: "RP",
                    other: {
                        id: "underscore",
                        label: "_",
                        code: "Minus"
                    }
                },
                {
                    id: "equal",
                    label: "=",
                    code: "Equal",
                    finger: "RP",
                    other: {
                        id: "plus",
                        label: "+",
                        code: "Equal"
                    }
                },
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

                {
                    id: "bracketleft",
                    label: "[",
                    code: "BracketLeft",
                    finger: "RP",
                    other: {
                        id: "brace-left",
                        label: "{",
                        code: "BracketLeft"
                    }
                },
                {
                    id: "bracketright",
                    label: "]",
                    code: "BracketRight",
                    finger: "RP",
                    other: {
                        id: "brace-right",
                        label: "}",
                        code: "BracketRight"
                    }
                },
                {
                    id: "backslash",
                    label: "\\",
                    code: "Backslash",
                    finger: "RP",
                    other: {
                        id: "pipe",
                        label: "|",
                        code: "Backslash"
                    }
                }
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

                {
                    id: "semicolon",
                    label: ";",
                    code: "Semicolon",
                    finger: "RP",
                    other: {
                        id: "colon",
                        label: ":",
                        code: "Semicolon"
                    }
                },
                {
                    id: "quote",
                    label: "'",
                    code: "Quote",
                    finger: "RP",
                    other: {
                        id: "double-quote",
                        label: "\"",
                        code: "Quote"
                    }
                },

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

                {
                    id: "comma",
                    label: ",",
                    code: "Comma",
                    finger: "RM",
                    other: {
                        id: "less-than",
                        label: "<",
                        code: "Comma"
                    }
                },
                {
                    id: "period",
                    label: ".",
                    code: "Period",
                    finger: "RR",
                    other: {
                        id: "greater-than",
                        label: ">",
                        code: "Period"
                    }
                },
                {
                    id: "slash",
                    label: "/",
                    code: "Slash",
                    finger: "RP",
                    other: {
                        id: "question",
                        label: "?",
                        code: "Slash"
                    }
                },

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