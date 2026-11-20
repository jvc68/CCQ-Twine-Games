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
            },
            {
                title: "⚖️ Blood Pressure Basics",
                description: "Discover what blood pressure is and how the heart helps keep it healthy.",
                activityId: "bloodPressureBasics",
                passage: "HeartActivity",
                completed: false
            },
            {
                title: "🧂 Salt Detective",
                description: "Discover how eating too much salt can affect blood pressure.",
                activityId: "saltDetective",
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
    },

    bloodPressureBasics: {
        title: "Blood Pressure Basics",
        introduction: "Ruby wants to understand what blood pressure means and why it matters.",
        characterName: "Ruby",
        characterLine: "Let's discover what happens when my heart pumps blood!",
        mission: "Help Ruby learn about blood pressure!",
        instructions: "Choose TWO correct facts",
        requiredCorrect: 2,

        choices: [
            {
                id: "bloodPressureForce",
                label: "❤️ Blood pressure is the force of blood pushing against blood vessel walls",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Blood pressure measures the force of blood pushing against the walls of blood vessels."
            },
            {
                id: "heartPumpsBlood",
                label: "🫀 The heart pumps blood around the body",
                correct: true,
                feedbackTitle: "Great work!",
                feedback: "The heart pumps blood through blood vessels to deliver oxygen and nutrients."
            },
            {
                id: "highPressureGood",
                label: "⚠️ Higher blood pressure is always healthier",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Blood pressure that stays too high can put extra strain on the heart and blood vessels."
            },
            {
                id: "heartMakesBlood",
                label: "🩸 The heart makes all the blood in the body",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The heart pumps blood, but blood cells are made mainly in the bone marrow."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered what blood pressure measures and why the heart is important.",
            characterName: "Ruby",
            characterLine: "Now I understand how my heart pumps blood around my body!",
            remember: "Blood pressure is the force of blood pushing against blood vessel walls. The heart pumps blood around the body. Blood pressure that stays too high can strain the heart."
        },

        completionHeading: "Blood Pressure Basics Complete!",
        completionMessage: "Ruby has learned what blood pressure means!",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    saltDetective: {
        title: "Salt Detective",
        introduction: "Ruby discovers how eating too much salt can affect blood pressure.",
        characterName: "Ruby",
        characterLine: "Let's investigate how salt affects my heart!",
        mission: "Help Ruby make sense of salt and blood pressure!",
        instructions: "Choose TWO correct facts",
        requiredCorrect: 2,

        choices: [
            {
                id: "tooMuchSalt",
                label: "🧂 Eating too much salt can contribute to high blood pressure",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Too much sodium can cause the body to hold onto extra water, which can raise blood pressure."
            },
            {
                id: "checkFoodLabels",
                label: "🥗 Checking food labels can help us spot salty foods",
                correct: true,
                feedbackTitle: "Great detective work!",
                feedback: "Food labels show how much sodium is in foods, helping us make informed choices."
            },
            {
                id: "saltLowersPressure",
                label: "💧 Eating lots of salt always lowers blood pressure",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Eating too much sodium can contribute to higher blood pressure, not lower it."
            },
            {
                id: "saltOnlyInChips",
                label: "🍟 Salt is only found in crisps and chips",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Sodium can also be found in foods like bread, sauces, soups and processed meals."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered why paying attention to salt is important.",
            characterName: "Ruby",
            characterLine: "I learned that checking food labels can help me make healthier choices!",
            remember: "Too much sodium can contribute to high blood pressure. Checking food labels and choosing foods with less sodium can help support healthy blood pressure."
        },

        completionHeading: "Salt Detective Complete!",
        completionMessage: "Ruby has solved the salt mystery!",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }

};
