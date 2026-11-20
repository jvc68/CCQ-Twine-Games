setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.heart = {
    menu: {
        title: "❤️ Heart",
        description: "Help Ruby discover how the heart works and how to keep it healthy!",

        activities: [
            {
                title: "❤️ Heartbeat Heroes",
                description: "Discover how the heart pumps blood and learn how physical activity supports heart health.",
                activityId: "heartbeatHeroes",
                passage: "HeartActivity",
                completed: false
            },
            {
                title: "❤️ Heart Pump Mission",
                description: "Learn how the heart pumps blood and delivers oxygen around the body.",
                activityId: "heartPumpMission",
                passage: "HeartActivity",
                completed: false
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
                label: "❤️ The heart pumps blood around the body",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "The heart pumps blood, helping deliver oxygen and nutrients to the body's tissues."
            },
            {
                id: "exerciseHeart",
                label: "🏃 Physical activity can help keep the heart healthy",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Regular physical activity supports heart health and cardiovascular fitness."
            },
            {
                id: "makesOxygen",
                label: "🫁 The heart makes the oxygen we breathe",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The lungs bring oxygen into the body. The heart pumps blood that carries oxygen to tissues."
            },
            {
                id: "digestsFood",
                label: "🍎 The heart breaks down food for digestion",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The digestive system breaks down food. The heart's main job is to pump blood."
            }
        ],

        lesson: {
            introduction: "Ruby discovers how the heart helps keep blood moving throughout the body.",
            characterName: "Ruby",
            characterLine: "Great work! Your heart pumps blood, helping deliver oxygen and nutrients to your body's tissues.",
            remember: "The heart is a muscular organ that pumps blood through the circulatory system. Blood carries oxygen and nutrients to tissues and helps transport waste products away."
        },

        completionHeading: "Heartbeat Heroes!",
        completionMessage: "Ruby has learned how the heart pumps blood around the body.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    heartPumpMission: {
        title: "Heart Pump Mission",
        introduction: "Ruby has reached the heart, where blood is being pumped around the body.",
        characterName: "Ruby",
        characterLine: "The heart is working so hard! Let's discover how it helps deliver oxygen!",
        mission: "Help Ruby understand how the heart pumps blood around the body!",
        instructions: "Choose TWO correct facts about the heart.",
        requiredCorrect: 2,

        choices: [
            {
                id: "heartPumpsBlood",
                label: "❤️ The heart pumps blood around the body",
                correct: true,
                feedbackTitle: "Fantastic!",
                feedback: "The heart is a muscular organ that pumps blood through the blood vessels."
            },
            {
                id: "heartSendsOxygen",
                label: "🩸 The heart helps send oxygen-rich blood to the body",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "The left side of the heart pumps oxygen-rich blood through the arteries to the body's tissues."
            },
            {
                id: "heartMakesOxygen",
                label: "🫁 The heart makes oxygen for the body",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Oxygen enters the blood through the lungs. The heart pumps blood to deliver it around the body."
            },
            {
                id: "heartFightsGerms",
                label: "🦠 The heart is the main organ that fights infections",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The immune system, including white blood cells, helps defend the body against infections."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how the heart helps circulate blood around the body.",
            characterName: "Ruby",
            characterLine: "I understand now! My heart pumps blood so oxygen can travel to all the cells that need it!",
            remember: "The heart is a muscular organ that pumps blood through the circulatory system. It sends oxygen-rich blood from the lungs to the body's tissues and helps return oxygen-poor blood to the lungs."
        },

        completionHeading: "Heart Pump Mission Complete!",
        completionMessage: "Ruby has learned how the heart helps deliver oxygen around the body.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }

};
