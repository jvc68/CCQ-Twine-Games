setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.brain = {
    menu: {
        title: "🧠 Brain",
        description: "Help Ruby discover how the brain controls the body and keeps us thinking!",

        activities: [
            {
                title: "🧠 Brain Control Center",
                description: "Discover how the brain sends messages throughout the body.",
                activityId: "brainControlCenter",
                passage: "BrainActivity",
                completed: false
            },

            {
                title: "🧠 Brain Defender Mission",
                description: "Discover how the brain helps the body respond when we become unwell.",
                activityId: "brainDefenderMission",
                passage: "BrainActivity",
                completed: false
            }
        ]
    },

    // ACTIVITY 1: BRAIN CONTROL CENTER
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
                label: "🏃 The brain helps control body movements",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "The brain sends signals through nerves to help coordinate movement."
            },
            {
                id: "processesInformation",
                label: "🧠 The brain helps us think, learn, and remember",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Different parts of the brain work together to process information, learn, and form memories."
            },
            {
                id: "pumpsBlood",
                label: "❤️ The brain pumps blood for the body",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The heart pumps blood around the body. The brain helps control many body functions."
            },
            {
                id: "digestsFood",
                label: "🍎 The brain digests the food we eat",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The digestive system breaks down food. The brain helps regulate and coordinate many body processes."
            }
        ],

        completionHeading: "Brain Power!",
        completionMessage: "Ruby has learned some important jobs of the brain!",
        continueLabel: "Continue to the lesson",

        lesson: {
            introduction: "The brain is the body's control center. It helps us move, think, learn, remember, and respond to the world around us.",
            characterName: "Ruby",
            characterLine: "Now I understand how my brain helps me do so many things!",
            remember: "The brain processes information and sends signals through nerves to help coordinate many body functions."
        },

        nextPassage: "LessonLearned"
    },


    brainDefenderMission: {
        title: "Brain Defender Mission",
        introduction: "Ruby needs help learning how the brain responds to germs and illness.",
        characterName: "Ruby",
        characterLine: "My brain helps me recognise when something is wrong. Let's discover how!",
        mission: "Help Ruby understand how the brain responds when the body is unwell!",
        instructions: "Choose TWO correct facts about the brain and its role in protecting the body.",
        requiredCorrect: 2,

        choices: [
            {
                id: "recognisesSymptoms",
                label: "🧠 The brain helps us recognise symptoms and changes in how we feel",
                correct: true,
                feedbackTitle: "Great discovery!",
                feedback: "The brain processes information from the body, helping us notice when we feel unwell."
            },
            {
                id: "coordinatesResponse",
                label: "🧠 The brain helps coordinate the body's responses",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "The brain helps coordinate responses such as resting, moving and reacting when we feel unwell."
            },
            {
                id: "killsGerms",
                label: "🦠 The brain directly kills harmful germs",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The immune system helps fight harmful germs. The brain helps coordinate many body functions."
            },
            {
                id: "makesWhiteCells",
                label: "⚪ The brain produces all the white blood cells",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "White blood cells are produced mainly in the bone marrow. They help defend the body against infection."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how the brain helps the body respond when we become unwell.",
            characterName: "Ruby",
            characterLine: "I learned that my brain helps me notice changes in my body and coordinate my responses!",
            remember: "The brain processes information from the body and helps coordinate responses. The immune system, including white blood cells, is responsible for defending the body against harmful germs."
        },

        completionHeading: "Brain Defender Mission Complete!",
        completionMessage: "Ruby has discovered how the brain helps the body respond when it is unwell.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }

};
