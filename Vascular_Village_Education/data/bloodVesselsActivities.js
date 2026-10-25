setup.activityLibraries.bloodVessels = {
    menu: {
        title: "🩸 Blood Vessels",
        description: "Help Ruby keep blood flowing and discover healthy habits!",
        new: [
            {
                title: "🩸 The Long Pause",
                description: "Help Ruby make healthy choices after sitting too long.",
                activityId: "longPause",
                passage: "BloodVesselsActivity"
            },
            {
                title: "🏃 Keep the Blood Moving",
                description: "Discover how movement supports circulation.",
                locked: true
            },
            {
                title: "💓 Heartbeat Heroes",
                description: "Discover how your heart keeps blood moving.",
                locked: true
            },
            {
                title: "🩸 Vessel Voyage",
                description: "Explore how blood travels around the body.",
                locked: true
            }
        ],
        completed: [
            {
                title: "💧 Hydration Station",
                description: "Learn why drinking enough water matters.",
                completed: true
            },
            {
                title: "🥗 Fuel Your Flow",
                description: "Explore healthy food choices for your circulation.",
                completed: true
            },
            {
                title: "🏆 More Achievements",
                description: "Your future completed activities will appear here.",
                locked: true
            },
            {
                title: "✨ Hidden Discoveries",
                description: "More achievements are on their way.",
                locked: true
            }
        ]
    },
    
    longPause: {
        title: "The Long Pause",
        introduction: "Help Ruby get moving after sitting for a long time.",
        characterName: "Ruby",
        characterLine: "Let's choose some healthy actions!",
        mission: "Help Ruby's person!",
        instructions: "Choose TWO healthy actions.",
        requiredCorrect: 2,
        choices: [
            {
                id: "stretch",
                label: "Stand up and stretch",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Taking a movement break is a healthy choice."
            },
            {
                id: "walk",
                label: "Take a short walk",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Walking helps you stay active."
            },
            {
                id: "keepSitting",
                label: "Keep sitting for hours",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Take a movement break instead."
            },
            {
                id: "chips",
                label: "Eat high-sodium chips",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Too much sodium can make blood pressure harder to manage."
            }
        ],
        completionHeading: "Both choices completed!",
        completionMessage: "Ruby is ready to continue.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LongPauseLesson"
    }
};