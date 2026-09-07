let UserPerformanceData = {
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
    },

    settings: {
        targetAccuracy: 90,
        targetSpeed: 30
    }
};

export default UserPerformanceData;