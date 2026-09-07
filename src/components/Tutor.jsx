import { useState, useEffect } from "react";
import TrainingContent from "../data/trainingContent";

let UserPerformance = {
    userId: "user-001",

    profile: {
        name: "User",
        joinedAt: null
    },

    overallStats: {
        totalSessions: 0,

        totalWords: 0,
        totalCharacters: 0,

        averageWpm: 0,
        bestWpm: 0,

        averageAccuracy: 0,
        bestAccuracy: 0,

        totalErrors: 0,
        currentStreak: 0,
        bestStreak: 0
    },

    progress: {
        module: 8,
        lesson: 1,
    }
};


function Tutor({ count, onCurrentLetter, hasError }) {
    const [text, setText] = useState("");
    const [trainingContent, setTrainingContent] = useState(null);
    let currentModule = UserPerformance.progress.module;
    let currentLesson = UserPerformance.progress.lesson;

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
                const content = trainingContent.modules[currentModule - 1]?.lessons[currentLesson - 1]?.exercises;
                setText(content);
            }
        }
        run();
    }, [trainingContent, currentModule, currentLesson]);


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