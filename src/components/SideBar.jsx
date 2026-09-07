import { useState } from "react";
import TrainingContent from "../data/trainingContent";

const { modules } = TrainingContent;
const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);

function getCompletedLessons(progress) {
  const moduleIndex = progress.module - 1;
  let completed = 0;
  for (let i = 0; i < moduleIndex; i++) {
    completed += modules[i]?.lessons.length || 0;
  }
  completed += Math.max(progress.lesson - 1, 0);
  return completed;
}

function isLessonComplete(moduleNumber, lessonNumber, progress) {
  return (
    moduleNumber < progress.module ||
    (moduleNumber === progress.module && lessonNumber < progress.lesson)
  );
}

function isModuleComplete(moduleNumber, progress) {
  return moduleNumber < progress.module;
}

const SideBar = ({ onSettingsSubmit, performanceData, onTargetsChange }) => {
  const [currentModuleNum, setCurrentModuleNum] = useState(performanceData.progress.module);
  const [currentLessonNum, setCurrentLessonNum] = useState(performanceData.progress.lesson);
  const [targetAccuracy, setTargetAccuracy] = useState(performanceData.settings.targetAccuracy);
  const [targetSpeed, setTargetSpeed] = useState(performanceData.settings.targetSpeed);

  const activeModuleIndex = currentModuleNum - 1;
  const activeModule = TrainingContent.modules[activeModuleIndex] || TrainingContent.modules[0];

  const { progress, overallStats } = performanceData;
  const progressModule = modules[progress.module - 1] || modules[0];
  const completedLessons = getCompletedLessons(progress);
  const percentComplete = totalLessons
    ? Math.round((completedLessons / totalLessons) * 100)
    : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSettingsSubmit(currentModuleNum, currentLessonNum);
  };

  const commitTargets = (overrides = {}) => {
    const accuracy = Math.min(100, Math.max(1, Number(overrides.targetAccuracy ?? targetAccuracy) || 0));
    const speed = Math.max(1, Number(overrides.targetSpeed ?? targetSpeed) || 0);
    onTargetsChange({ targetAccuracy: accuracy, targetSpeed: speed });
  };

  return (
    <div className="SideBar">
      <section className="ProgressPanel" aria-label="Your progress">
        <h2 className="ProgressPanel-title">Your Progress</h2>
        <div
          className="ProgressPanel-track"
          role="progressbar"
          aria-valuenow={percentComplete}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="ProgressPanel-fill"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
        <div className="ProgressPanel-meta">
          <span>{percentComplete}% complete</span>
          <span>
            {completedLessons}/{totalLessons} lessons
          </span>
        </div>
        <p className="ProgressPanel-current">
          Module {progress.module}: {progressModule.title} &middot; Lesson{" "}
          {progress.lesson}
        </p>
        <dl className="ProgressPanel-stats">
          <div>
            <dt>Best WPM</dt>
            <dd>{overallStats.bestWpm || "—"}</dd>
          </div>
          <div>
            <dt>Accuracy</dt>
            <dd>
              {overallStats.averageAccuracy
                ? `${overallStats.averageAccuracy}%`
                : "—"}
            </dd>
          </div>
          <div>
            <dt>Streak</dt>
            <dd>{overallStats.currentStreak || 0}</dd>
          </div>
        </dl>
      </section>

      <form onSubmit={handleSubmit} id="settings">
        <div className="targets-row">
          <label htmlFor="targetAccuracy">
            Target Accuracy
            <div className="target-input">
              <input
                type="number"
                id="targetAccuracy"
                min="1"
                max="100"
                value={targetAccuracy}
                onChange={(e) => setTargetAccuracy(e.target.value)}
                onBlur={() => commitTargets()}
              />
              <span>%</span>
            </div>
          </label>
          <label htmlFor="targetSpeed">
            Target Speed
            <div className="target-input">
              <input
                type="number"
                id="targetSpeed"
                min="1"
                value={targetSpeed}
                onChange={(e) => setTargetSpeed(e.target.value)}
                onBlur={() => commitTargets()}
              />
              <span>WPM</span>
            </div>
          </label>
        </div>

        <label htmlFor="module">Module</label>
        <select
          name="module"
          id="module"
          value={`m${currentModuleNum}`}
          onChange={(e) => {
            setCurrentModuleNum(parseInt(e.target.value.replace("m", ""), 10));
            setCurrentLessonNum(1);
          }}
        >
          {TrainingContent.modules.map((module, index) => (
            <option key={module.id} value={module.id}>
              {isModuleComplete(index + 1, progress) ? "✓ " : ""}
              {module.id}
            </option>
          ))}
        </select>
        <label htmlFor="lesson">Lesson</label>
        <select
          name="lesson"
          id="lesson"
          value={`lesson-${currentLessonNum}`}
          onChange={(e) => setCurrentLessonNum(parseInt(e.target.value.replace("lesson-", ""), 10))}
        >
          {activeModule.lessons.map((lesson, index) => (
            <option key={lesson.id} value={lesson.id}>
              {isLessonComplete(currentModuleNum, index + 1, progress) ? "✓ " : ""}
              {lesson.id}
            </option>
          ))}
        </select>
        <button type="submit">Load Content</button>
      </form>
    </div>
  );
};

export default SideBar;
