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
            },
            {
                title: "🏃 Breathe and Move",
                description: "Discover how breathing supports the body during activity.",
                activityId: "breatheAndMove",
                passage: "LungsActivity",
                completed: false
            },
            {
                title: "🏃 Movement Mission",
                description: "Discover how physical activity supports a healthy heart and lungs.",
                activityId: "movementMission",
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
    },

    breatheAndMove: {
        title: "Breathe and Move",
        introduction: "Ruby discovers how breathing helps bring oxygen into the body during activity.",
        characterName: "Ruby",
        characterLine: "Let's see how my lungs help me stay active!",
        mission: "Help Ruby discover how the lungs support the body!",
        instructions: "Choose TWO correct facts",
        requiredCorrect: 2,

        choices: [
            {
                id: "lungsBringOxygen",
                label: "🌬️ The lungs bring oxygen into the body",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "When we breathe in, oxygen enters the lungs and moves into the blood."
            },
            {
                id: "exerciseBreathing",
                label: "🏃 Breathing usually becomes faster during exercise",
                correct: true,
                feedbackTitle: "Great job!",
                feedback: "During exercise, the body needs more oxygen, so breathing usually becomes faster."
            },
            {
                id: "lungsPumpBlood",
                label: "❤️ The lungs pump blood around the body",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The heart pumps blood, while the lungs help bring oxygen into the blood."
            },
            {
                id: "oxygenMadeInLungs",
                label: "🫁 The lungs make all the oxygen we need",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Oxygen comes from the air we breathe. The lungs help move it into the bloodstream."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how breathing supports the body during activity.",
            characterName: "Ruby",
            characterLine: "My lungs bring oxygen into my body so I can keep moving!",
            remember: "The lungs bring oxygen into the body and move it into the blood. During exercise, breathing usually becomes faster to help meet the body's increased oxygen needs."
        },

        completionHeading: "Breathe and Move Complete!",
        completionMessage: "Ruby has learned how breathing supports the body!",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    movementMission: {
        title: "Movement Mission",
        introduction: "Ruby discovers how moving her body helps keep her heart and lungs healthy.",
        characterName: "Ruby",
        characterLine: "Let's get moving and discover how exercise helps my body!",
        mission: "Help Ruby discover why physical activity matters!",
        instructions: "Choose TWO correct facts",
        requiredCorrect: 2,

        choices: [
            {
                id: "exerciseStrengthensHeart",
                label: "🏃 Regular physical activity helps keep the heart healthy",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Regular physical activity helps strengthen the heart and supports cardiovascular health."
            },
            {
                id: "exerciseIncreasesBreathing",
                label: "🌬️ Breathing usually gets faster during exercise",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "During activity, muscles need more oxygen, so breathing usually becomes faster."
            },
            {
                id: "exerciseAlwaysRaisesPressure",
                label: "⚠️ Exercise always causes blood pressure to stay high",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Blood pressure can rise temporarily during exercise, but regular activity supports healthy blood pressure over time."
            },
            {
                id: "restOnlyHealthy",
                label: "🛋️ Staying still all day is best for the heart",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Regular movement is important for heart health. Sitting for long periods can reduce daily activity."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how physical activity supports a healthy heart and lungs.",
            characterName: "Ruby",
            characterLine: "Moving my body helps keep my heart and lungs working well!",
            remember: "Regular physical activity supports heart and lung health. During exercise, breathing and heart rate usually increase to deliver more oxygen to working muscles. Activity can also help support healthy blood pressure."
        },

        completionHeading: "Movement Mission Complete!",
        completionMessage: "Ruby has discovered why staying active matters!",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }

};