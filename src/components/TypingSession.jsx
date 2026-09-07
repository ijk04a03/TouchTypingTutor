import { useState, useEffect, useRef } from "react";
import Tutor from "./Tutor";
import GenerateKeyboard from "./GenerateKeyboard";
import KeyboardLayout from "../data/keyBoardLayout";


function TypingSession({ activeLesson, onSessionComplete }) {

    const [count, setCount] = useState(0);
    const [pressedCode, setPressedCode] = useState(null);
    const [currentLetter, setCurrentLetter] = useState("");
    const [hasError, setHasError] = useState(false);
    const [shiftPressed, setShiftPressed] = useState(false);

    const text = activeLesson?.exercises || "";
    const startTimeRef = useRef(null);
    const errorCountRef = useRef(0);
    const reportedRef = useRef(false);

    const getExpectedCodes = (letter) => {
        const leftShiftChars = '^&*()_+{}|:"<>?BHUIJNMKOPL';

        for (const row of KeyboardLayout.rows) {
            for (const key of row.keys) {
                const isBaseMatch = (!shiftPressed ? key.label.toLowerCase() : key.label) === letter;
                const isOtherMatch = key.other?.label === letter;

                if (isBaseMatch || isOtherMatch) {
                    if (!isOtherMatch && (!shiftPressed || key.label.toLowerCase() === key.label)) {
                        return [key.code];
                    }

                    const appropriateShift = leftShiftChars.includes(letter)
                        ? "ShiftLeft"
                        : "ShiftRight";

                    return [key.code, appropriateShift];
                }
            }
        }
        return [];
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            setPressedCode(event.code);
            if (event.key === "Shift") {
                setShiftPressed(true);
                return;
            }
            if (startTimeRef.current === null) {
                startTimeRef.current = Date.now();
            }
            if (event.key === currentLetter) {
                setCount(c => c + 1);
                setHasError(false);
            }
            else {
                errorCountRef.current += 1;
                setHasError(true);

                setTimeout(() => {
                    setHasError(false);
                }, 500);
            }
        };

        const handleKeyUp = (event) => {
            setPressedCode(null);
            if (event.key === "Shift") {
                setShiftPressed(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [currentLetter]);

    useEffect(() => {
        if (!text || reportedRef.current || count === 0 || count < text.length) {
            return;
        }
        reportedRef.current = true;

        const elapsedMs = startTimeRef.current ? Date.now() - startTimeRef.current : 0;
        const elapsedMinutes = Math.max(elapsedMs / 60000, 1 / 60);
        const wordsTyped = text.trim().split(/\s+/).filter(Boolean).length;
        const wpm = Math.round((text.length / 5) / elapsedMinutes);
        const totalKeystrokes = count + errorCountRef.current;
        const accuracy = totalKeystrokes > 0
            ? Math.round((count / totalKeystrokes) * 100)
            : 100;

        onSessionComplete?.({
            wpm,
            accuracy,
            errors: errorCountRef.current,
            charactersTyped: text.length,
            wordsTyped,
        });
    }, [count, text, onSessionComplete]);

    return (
        <>
            <Tutor
                count={count}
                onCurrentLetter={setCurrentLetter}
                hasError={hasError}
                activeLesson={activeLesson}
            />
            <GenerateKeyboard
                pressedCode={pressedCode}
                shiftPressed={shiftPressed}
                expectedCodes={getExpectedCodes(currentLetter)} />
        </>
    );
}

export default TypingSession;