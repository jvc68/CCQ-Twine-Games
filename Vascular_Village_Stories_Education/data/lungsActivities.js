setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.lungs = {
    menu: {
        title: "🫁 Lungs",
        description: "Help Ruby breathe easier and discover how to keep her lungs healthy!",

        activities: [
            {
                title: "🌬️ Breathe Easy",
                description: "Help Ruby make healthy choices to protect her lungs.",
                activityId: "longPause",
                passage: "LungsActivity",
                completed: false
            },
            {
                title: "🫁 Oxygen Adventure",
                description: "Discover how oxygen enters the lungs and moves into the bloodstream.",
                activityId: "oxygenAdventure",
                passage: "LungsActivity",
                completed: false
            }
        ]
    },

    longPause: {
        title: "Breathe Easy",
        introduction: "Help Ruby make healthy choices to keep her lungs working well.",
        characterName: "Ruby",
        characterLine: "Let's take care of our lungs!",
        mission: "Help Ruby protect her respiratory system!",
        instructions: "Choose TWO healthy actions.",
        requiredCorrect: 2,

        choices: [
            {
                id: "exercise",
                label: "🏃 Go for a walk outside in clean air",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Physical activity helps your lungs and heart work together."
            },
            {
                id: "avoidSmoke",
                label: "🚭 Stay away from cigarette smoke",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Avoiding cigarette smoke helps protect your lungs from harmful substances."
            },
            {
                id: "smoke",
                label: "🚬 Spend time breathing in cigarette smoke",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Cigarette smoke contains harmful substances that can damage your lungs."
            },
            {
                id: "ignoreAir",
                label: "🌫️ Ignore smoky or polluted air",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Avoiding polluted air when possible helps protect your respiratory system."
            }
        ],

        lesson: {
            introduction: "Ruby discovers how everyday choices can help protect her lungs.",
            characterName: "Ruby",
            characterLine: "Great work! Staying active and avoiding cigarette smoke can help keep our lungs healthy.",
            remember: "Regular physical activity supports respiratory health. Avoiding cigarette smoke and reducing exposure to polluted air when possible can help protect the lungs."
        },

        completionHeading: "Breathe Easy!",
        completionMessage: "Ruby has made two healthy choices to help protect her lungs.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    oxygenAdventure: {
        title: "Oxygen Adventure",
        introduction: "Ruby is exploring the lungs to discover how oxygen enters the blood.",
        characterName: "Ruby",
        characterLine: "I can see oxygen entering my lungs! But how does it get into my blood?",
        mission: "Help Ruby discover how the lungs bring oxygen into the bloodstream!",
        instructions: "Choose TWO correct facts about the lungs and oxygen.",
        requiredCorrect: 2,

        choices: [
            {
                id: "oxygenEntersLungs",
                label: "🫁 Oxygen enters the body when we breathe in",
                correct: true,
                feedbackTitle: "Great discovery!",
                feedback: "When we breathe in, air containing oxygen travels into the lungs."
            },
            {
                id: "oxygenIntoBlood",
                label: "🩸 Oxygen moves from the tiny air sacs into the blood",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Tiny air sacs called alveoli allow oxygen to move from the lungs into nearby blood vessels."
            },
            {
                id: "lungsPumpBlood",
                label: "❤️ The lungs pump blood around the body",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The heart pumps blood around the body. The lungs help oxygen enter the blood."
            },
            {
                id: "oxygenFromStomach",
                label: "🍎 Oxygen enters the bloodstream through the stomach",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Oxygen enters the bloodstream through gas exchange in the lungs, not through the stomach."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how oxygen enters the bloodstream through the lungs.",
            characterName: "Ruby",
            characterLine: "I did it! Oxygen travels into my lungs and moves into my blood through tiny air sacs!",
            remember: "When we breathe in, oxygen enters the lungs. In tiny air sacs called alveoli, oxygen moves into nearby blood vessels and enters the bloodstream. The blood can then carry oxygen around the body."
        },

        completionHeading: "Oxygen Explorer!",
        completionMessage: "Ruby has discovered how oxygen enters the blood.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }

};