
setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.brain = {
    menu: {
        title: "🧠 Brain",
        description: "Help Ruby discover how the brain controls the body and keeps us thinking!",
        new: [
            {
                title: "🧠 Brain Control Center",
                description: "Discover how the brain sends messages throughout the body.",
                activityId: "brainControlCenter",
                passage: "BrainActivity"
            },
            {
                title: "⚡ Message Mission",
                description: "Explore how the brain and nerves send signals.",
                locked: true
            },
            {
                title: "🧩 Memory Masters",
                description: "Learn how the brain helps us remember and learn.",
                locked: true
            },
            {
                title: "😴 Brain Recharge",
                description: "Discover why sleep helps the brain work well.",
                locked: true
            }
        ],
        completed: [
            {
                title: "💡 Thinking Power",
                description: "Explore how the brain helps us think and solve problems.",
                completed: true
            },
            {
                title: "🛡️ Brain Protector",
                description: "Learn why protecting your head is important.",
                completed: true
            },
            {
                title: "🏆 More Achievements",
                description: "Your future completed brain activities will appear here.",
                locked: true
            },
            {
                title: "✨ Mind Explorers",
                description: "More brain discoveries are on their way.",
                locked: true
            }
        ]
    },

    brainControlCenter: {
        title: "Brain Control Center",
        introduction: "Help Ruby discover how the brain helps the body move, think, and respond.",
        characterName: "Ruby",
        characterLine: "Let's find out how my brain helps me every day!",
        mission: "Help Ruby identify the brain's important jobs!",
        instructions: "Choose TWO correct facts about the brain.",
        requiredCorrect: 2,

        choices: [
            {
                id: "controlsMovement",
                label: "The brain helps control body movements",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "The brain sends signals through nerves to help coordinate movement."
            },
            {
                id: "processesInformation",
                label: "The brain helps us think, learn, and remember",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Different parts of the brain work together to process information, learn, and form memories."
            },
            {
                id: "pumpsBlood",
                label: "The brain pumps blood around the body",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The heart pumps blood around the body. The brain helps control many body functions."
            },
            {
                id: "digestsFood",
                label: "The brain directly digests the food we eat",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The digestive system breaks down food. The brain helps regulate and coordinate many body processes."
            }
        ],

        completionHeading: "Brain Power!",
        completionMessage: "Ruby has learned some important jobs of the brain.",
        continueLabel: "Continue to the lesson",
        nextPassage: "BrainLesson"
    }
};
