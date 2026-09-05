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
        module: 1,
        lesson: 1,
    }
};

function Tutor() {
    let currentModule = UserPerformance.progress.module;
    let currentLesson = UserPerformance.progress.lesson;
    const [trainingContent, setTrainingContent] = useState(null);


    useEffect(() => {
        async function loadTrainingContent() {
            const data = TrainingContent;
            setTrainingContent(data);
        }

        loadTrainingContent();
    }, []);

    if (!trainingContent) {
        return <div>Loading...</div>;
    }

    const currentTrainingContent =
        trainingContent.modules[currentModule - 1]
            ?.lessons[currentLesson - 1]
            ?.exercises;
    return (
        <>
            <div className="TrainingBox">
                {currentTrainingContent}
            </div>
        </>
    )

}



export default Tutor;