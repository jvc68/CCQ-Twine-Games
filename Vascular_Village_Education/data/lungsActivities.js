setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.lungs = {
    menu: {
        title: "🫁 Lungs",
        description: "Help Ruby breathe easier and discover how to keep her lungs healthy!",
        new: [
            {
                title: "🌬️ Breath by Breath",
                description: "Help Ruby learn how breathing brings air into her lungs.",
                activityId: "longPause",
                passage: "LungsActivity"
            },
            {
                title: "🏃 Breathe and Move",
                description: "Discover how breathing changes when you exercise.",
                locked: true
            },
            {
                title: "💨 Air Adventure",
                description: "Explore the journey air takes through your respiratory system.",
                locked: true
            },
            {
                title: "🌿 Lung Protectors",
                description: "Learn about everyday habits that help keep lungs healthy.",
                locked: true
            }
        ],
        completed: [
            {
                title: "💧 Fresh Air Finder",
                description: "Discover why clean air matters for your lungs.",
                completed: true
            },
            {
                title: "🫁 Breathing Basics",
                description: "Learn how your lungs help your body get oxygen.",
                completed: true
            },
            {
                title: "🏆 More Achievements",
                description: "Your future completed lung activities will appear here.",
                locked: true
            },
            {
                title: "✨ Hidden Discoveries",
                description: "More lung health achievements are on their way.",
                locked: true
            }
        ]
    },
    
    longPause: {
        title: "Breathe Easy",
        introduction: "Help Ruby make healthy choices to keep their persons lungs working well.",
        characterName: "Ruby",
        characterLine: "Let's take care of our lungs!",
        mission: "Help Ruby protect their persons respiratory system!",
        instructions: "Choose TWO healthy actions.",
        requiredCorrect: 2,

        choices: [
            {
                id: "exercise",
                label: "Go for a walk outside in clean air",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Physical activity helps your lungs and heart work together."
            },
            {
                id: "avoidSmoke",
                label: "Stay away from cigarette smoke",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Avoiding smoke helps protect your lungs from harmful substances."
            },
            {
                id: "smoke",
                label: "Spend time breathing in cigarette smoke",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Cigarette smoke contains harmful substances that can damage your lungs."
            },
            {
                id: "ignoreAir",
                label: "Ignore smoky or polluted air",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Avoiding polluted air when possible helps protect your respiratory system."
            }
        ],

        completionHeading: "Breathe Easy!",
        completionMessage: "Ruby has made two healthy choices to help protect their lungs.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LungsLesson"
    }
};