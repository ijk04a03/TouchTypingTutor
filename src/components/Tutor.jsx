import { useState, useEffect } from "react";
import TrainingContent from "../Data/TrainingContent";

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


function Tutor({ typedChar }) {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
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
        async function run() {
            if (typedChar && typedChar === letter) {
                setCount(c => c + 1);
            } else {
                let box = document.querySelector(".TrainingBox");
                setInterval(() => { box.setAttribute("style", "border:10px solid red") }, 10000)
                box.setAttribute("style", "border:none");
            }
        }
        run();
    }, [typedChar, letter]);

    if (!trainingContent) {
        return (
            <div className="TrainingBox TrainingBox--loading">
                <span className="loading-caret" />
            </div>
        );
    }
    return (
        <>
            <div className="TrainingBox">
                <span id="before">{text.slice(0, count)}</span>
                <span id="current">{letter}</span>
                <span id="after">{text.slice(count + 1)}</span>
            </div>
        </>
    )

}



export default Tutor;