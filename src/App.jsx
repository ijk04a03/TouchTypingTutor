import './App.css'
import { useState, useCallback } from 'react';
import SideBar from './components/SideBar'
import TypingSession from './components/TypingSession'
import TrainingContent from './data/trainingContent';
import {
  loadPerformanceData,
  savePerformanceData,
  recordSession,
  advanceProgressPast,
  updateSettings,
} from './data/performance';

function App() {
  const [activeModuleNumber, setActiveModuleNumber] = useState(1);
  const [activeLessonNumber, setActiveLessonNumber] = useState(1);
  const [performanceData, setPerformanceData] = useState(loadPerformanceData);

  const activeModule =
    TrainingContent.modules[activeModuleNumber - 1] || TrainingContent.modules[0];
  const activeLesson =
    activeModule.lessons.find((l) => l.id === `lesson-${activeLessonNumber}`) ||
    activeModule.lessons[0];

  const handleContentChange = (moduleNumber, lessonNumber) => {
    const targetModule = TrainingContent.modules[moduleNumber - 1];
    if (!targetModule) return;
    const targetLesson = targetModule.lessons.find(
      (l) => l.id === `lesson-${lessonNumber}`
    );
    if (!targetLesson) return;

    const isManualSwitch =
      moduleNumber !== activeModuleNumber || lessonNumber !== activeLessonNumber;

    if (isManualSwitch) {
      setPerformanceData((current) => {
        const updated = advanceProgressPast(
          current,
          TrainingContent.modules,
          activeModuleNumber,
          activeLessonNumber
        );
        savePerformanceData(updated);
        return updated;
      });
    }

    setActiveModuleNumber(moduleNumber);
    setActiveLessonNumber(lessonNumber);
  };

  const handleTargetsChange = useCallback((settings) => {
    setPerformanceData((current) => {
      const updated = updateSettings(current, settings);
      savePerformanceData(updated);
      return updated;
    });
  }, []);

  const handleSessionComplete = useCallback(
    (stats) => {
      setPerformanceData((current) => {
        const updated = recordSession(current, {
          modules: TrainingContent.modules,
          moduleNumber: activeModuleNumber,
          lessonNumber: activeLessonNumber,
          ...stats,
        });
        savePerformanceData(updated);
        return updated;
      });
    },
    [activeModuleNumber, activeLessonNumber]
  );

  return (
    <>
      <div className="main-container">
        <h1>Active Lesson: {activeLesson.title}</h1>
        <TypingSession
          key={`${activeModuleNumber}-${activeLessonNumber}`}
          activeLesson={activeLesson}
          onSessionComplete={handleSessionComplete}
        />
      </div>
      <SideBar
        performanceData={performanceData}
        onSettingsSubmit={handleContentChange}
        onTargetsChange={handleTargetsChange}
      />
    </>
  );
}

export default App
