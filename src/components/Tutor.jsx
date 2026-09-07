import { useState, useEffect } from "react";
import TrainingContent from "../data/trainingContent";

function Tutor({ count, onCurrentLetter, hasError, activeLesson }) {
    const [text, setText] = useState("");
    const [trainingContent, setTrainingContent] = useState(null);

    useEffect(() => {
        async function loadTrainingContent() {
            const data = TrainingContent;
            setTrainingContent(data);
        }
        loadTrainingContent();
    }, []);

    useEffect(() => {
        async function run() {
            if (trainingContent) {
                const content = activeLesson.exercises;
                setText(content);
            }
        }
        run();
    }, [trainingContent, activeLesson]);


    const letter = text[count];

    useEffect(() => {
        if (letter) {
            onCurrentLetter(letter);
        }
    }, [letter, onCurrentLetter]);


    if (!trainingContent) {
        return (
            <div className="TrainingBox TrainingBox--loading">
                <span className="loading-caret" />
            </div>
        );
    }
    return (
        <>
            <div className={`TrainingBox ${hasError ? "error" : ""}`}>
                <span id="before">{text.slice(0, count)}</span>
                <span id="current">{letter}</span>
                <span id="after">{text.slice(count + 1)}</span>
            </div>
        </>
    )

}

export { Tutor as default };