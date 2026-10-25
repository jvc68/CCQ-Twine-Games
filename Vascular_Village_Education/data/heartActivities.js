
setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.heart = {
    menu: {
        title: "❤️ Heart",
        description: "Help Ruby discover how the heart works and how to keep it healthy!",
        new: [
            {
                title: "❤️ Heartbeat Heroes",
                description: "Discover how the heart pumps blood around the body.",
                activityId: "heartbeatHeroes",
                passage: "HeartActivity"
            },
            {
                title: "🏃 Move for Your Heart",
                description: "Learn how physical activity helps the heart.",
                locked: true
            },
            {
                title: "💓 Pulse Detectives",
                description: "Explore how your heartbeat changes with activity.",
                locked: true
            },
            {
                title: "🥗 Heart-Healthy Habits",
                description: "Discover everyday ways to care for your heart.",
                locked: true
            }
        ],
        completed: [
            {
                title: "🩸 Blood Flow Journey",
                description: "Discover how the heart moves blood through the body.",
                completed: true
            },
            {
                title: "💗 Heart Care Basics",
                description: "Learn simple ways to support heart health.",
                completed: true
            },
            {
                title: "🏆 More Achievements",
                description: "Your future completed heart activities will appear here.",
                locked: true
            },
            {
                title: "✨ Heart Explorers",
                description: "More heart discoveries are on their way.",
                locked: true
            }
        ]
    },

    heartbeatHeroes: {
        title: "Heartbeat Heroes",
        introduction: "Help Ruby learn how the heart keeps blood moving around the body.",
        characterName: "Ruby",
        characterLine: "Let's discover why our heart is so important!",
        mission: "Help Ruby understand the heart's important job!",
        instructions: "Choose TWO correct facts about the heart.",
        requiredCorrect: 2,

        choices: [
            {
                id: "pumpsBlood",
                label: "The heart pumps blood around the body",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "The heart pumps blood, helping deliver oxygen and nutrients to the body's tissues."
            },
            {
                id: "exerciseHeart",
                label: "Physical activity can help keep the heart healthy",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Regular physical activity helps strengthen the heart and supports cardiovascular health."
            },
            {
                id: "makesOxygen",
                label: "The heart makes the oxygen we breathe",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The lungs bring oxygen into the body. The heart pumps blood that carries oxygen to tissues."
            },
            {
                id: "digestsFood",
                label: "The heart breaks down food for digestion",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The digestive system breaks down food. The heart's main job is to pump blood."
            }
        ],

        completionHeading: "Heart Heroes!",
        completionMessage: "Ruby has learned how the heart pumps blood and how activity supports heart health.",
        continueLabel: "Continue to the lesson",
        nextPassage: "HeartLesson"
    }
};
