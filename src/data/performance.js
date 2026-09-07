import defaultPerformanceData from "./userPerformanceData";

const STORAGE_KEY = "touchTypingTutor.performance";

export function loadPerformanceData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.warn("Could not read saved progress, starting fresh.", err);
  }
  return JSON.parse(JSON.stringify(defaultPerformanceData));
}

export function savePerformanceData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn("Could not save progress.", err);
  }
}

function getNextPosition(modules, moduleNumber, lessonNumber) {
  const moduleIndex = moduleNumber - 1;
  const currentModule = modules[moduleIndex];
  if (!currentModule) return { module: moduleNumber, lesson: lessonNumber };

  if (lessonNumber < currentModule.lessons.length) {
    return { module: moduleNumber, lesson: lessonNumber + 1 };
  }
  if (moduleIndex + 1 < modules.length) {
    return { module: moduleNumber + 1, lesson: 1 };
  }
  return { module: moduleNumber, lesson: lessonNumber };
}

export function recordSession(
  current,
  { modules, moduleNumber, lessonNumber, wpm, accuracy, errors, charactersTyped, wordsTyped }
) {
  const stats = current.overallStats;
  const totalSessions = stats.totalSessions + 1;

  const averageWpm = Math.round(
    (stats.averageWpm * stats.totalSessions + wpm) / totalSessions
  );
  const averageAccuracy = Math.round(
    (stats.averageAccuracy * stats.totalSessions + accuracy) / totalSessions
  );

  const { targetAccuracy, targetSpeed } = current.settings;
  const passed = accuracy >= targetAccuracy && wpm >= targetSpeed;
  const currentStreak = passed ? stats.currentStreak + 1 : 0;

  const newStats = {
    totalSessions,
    totalWords: stats.totalWords + wordsTyped,
    totalCharacters: stats.totalCharacters + charactersTyped,
    averageWpm,
    bestWpm: Math.max(stats.bestWpm, wpm),
    averageAccuracy,
    bestAccuracy: Math.max(stats.bestAccuracy, accuracy),
    totalErrors: stats.totalErrors + errors,
    currentStreak,
    bestStreak: Math.max(stats.bestStreak, currentStreak),
  };

  const newProgress = passed
    ? advanceIfAtOrAheadOfProgress(current.progress, modules, moduleNumber, lessonNumber)
    : current.progress;

  return {
    ...current,
    overallStats: newStats,
    progress: newProgress,
  };
}

function advanceIfAtOrAheadOfProgress(progress, modules, moduleNumber, lessonNumber) {
  const isAtOrAheadOfProgress =
    moduleNumber > progress.module ||
    (moduleNumber === progress.module && lessonNumber >= progress.lesson);

  return isAtOrAheadOfProgress
    ? getNextPosition(modules, moduleNumber, lessonNumber)
    : progress;
}

// Called when the user manually navigates away from a lesson (via the
// module/lesson selects) instead of finishing it by hitting their targets.
// Only advances progress if the lesson they were leaving is exactly the
// one their progress pointer is currently sitting on — browsing or
// skipping ahead to explore future lessons must never mark anything
// in between as complete.
export function advanceProgressPast(current, modules, moduleNumber, lessonNumber) {
  const { progress } = current;
  const isCurrentProgressLesson =
    moduleNumber === progress.module && lessonNumber === progress.lesson;

  if (!isCurrentProgressLesson) {
    return current;
  }

  return {
    ...current,
    progress: getNextPosition(modules, moduleNumber, lessonNumber),
  };
}

export function updateSettings(current, settings) {
  return {
    ...current,
    settings: { ...current.settings, ...settings },
  };
}
