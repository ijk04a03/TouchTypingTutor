import { useState, useEffect } from "react";
import Tutor from "./Tutor";
import GenerateKeyboard from "./GenerateKeyboard";

function TypingSession() {
    const [pressedCode, setPressedCode] = useState(null); // physical key, e.g. "KeyA" — for highlighting
    const [typedChar, setTypedChar] = useState(null);      // actual character, e.g. "a" — for comparison

    useEffect(() => {
        const handleKeyDown = (event) => {
            setPressedCode(event.code);
            setTypedChar(event.key);
        };
        const handleKeyUp = () => {
            setPressedCode(null);
            setTypedChar(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return (
        <>
            <Tutor typedChar={typedChar} />
            <GenerateKeyboard pressedCode={pressedCode} />
        </>
    );
}

export default TypingSession;