import { useState, useEffect } from "react";
import Tutor from "./Tutor";
import GenerateKeyboard from "./GenerateKeyboard";

function TypingSession() {

    const [count, setCount] = useState(0);
    const [pressedCode, setPressedCode] = useState(null); // physical key, e.g. "KeyA" — for highlighting
    const [currentLetter, setCurrentLetter] = useState("");
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            setPressedCode(event.code);

            if (event.key === currentLetter) {
                setCount(c => c + 1);
                setHasError(false);
            }
            else {
                setHasError(true);

                setTimeout(() => {
                    setHasError(false);
                }, 500);
            }
        };

        const handleKeyUp = () => {
            setPressedCode(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [currentLetter]);

    return (
        <>
            <Tutor
                count={count}
                onCurrentLetter={setCurrentLetter}
                hasError={hasError}
            />
            <GenerateKeyboard pressedCode={pressedCode} />
        </>
    );
}

export default TypingSession;