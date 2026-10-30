setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.lungs = {
    menu: {
        title: "🫁 Lungs",
        description: "Help Ruby breathe easier and discover how to keep her lungs healthy!",

        activities: [
            {
                title: "🌬️ Breath by Breath",
                description: "Help Ruby learn how breathing brings air into her lungs.",
                activityId: "longPause",
                passage: "LungsActivity",
                completed: false
            },
            {
                title: "🏃 Breathe and Move",
                description: "Discover how breathing changes when you exercise.",
                activityId: "breatheAndMove",
                passage: "LungsActivity",
                completed: false
            },
            {
                title: "💨 Air Adventure",
                description: "Explore the journey air takes through your respiratory system.",
                activityId: "airAdventure",
                passage: "LungsActivity",
                completed: false
            },
            {
                title: "🌿 Lung Protectors",
                description: "Learn about everyday habits that help keep lungs healthy.",
                activityId: "lungProtectors",
                passage: "LungsActivity",
                completed: false
            },
            {
                title: "💧 Fresh Air Finder",
                description: "Discover why clean air matters for your lungs.",
                activityId: "freshAirFinder",
                passage: "LungsActivity",
                completed: false
            },
            {
                title: "🫁 Breathing Basics",
                description: "Learn how your lungs help your body get oxygen.",
                activityId: "breathingBasics",
                passage: "LungsActivity",
                completed: false
            },
            {
                title: "🏆 More Achievements",
                description: "Your future completed lung activities will appear here.",
                locked: true,
                completed: true
            },
            {
                title: "✨ Hidden Discoveries",
                description: "More lung health achievements are on their way.",
                locked: true,
                completed: true
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

    breatheAndMove: {
        title: "Breathe and Move",
        introduction: "Ruby notices that she breathes faster when she runs and plays.",
        characterName: "Ruby",
        characterLine: "Why do we breathe harder when we exercise?",
        mission: "Help Ruby understand how breathing responds to physical activity!",
        instructions: "Choose TWO correct facts about breathing and exercise.",
        requiredCorrect: 2,

        choices: [
            {
                id: "moreOxygen",
                label: "🌬️ Breathing faster helps bring more oxygen into the body",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "During exercise, the body needs more oxygen, so breathing usually becomes faster."
            },
            {
                id: "removeCarbonDioxide",
                label: "💨 Breathing helps remove carbon dioxide from the body",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "The lungs remove carbon dioxide, a waste gas produced by the body's cells."
            },
            {
                id: "stopBreathing",
                label: "⛔ The body does not need oxygen during exercise",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Working muscles need oxygen to help release energy."
            },
            {
                id: "lungsStop",
                label: "🛑 The lungs stop working when we run",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Your lungs continue working during exercise, usually with faster and deeper breathing."
            }
        ],

        lesson: {
            introduction: "Ruby discovers why breathing changes when the body is active.",
            characterName: "Ruby",
            characterLine: "You did it! During exercise, breathing helps supply oxygen and remove carbon dioxide.",
            remember: "During physical activity, muscles use more oxygen and produce more carbon dioxide. Breathing usually becomes faster and deeper to help meet these needs."
        },

        completionHeading: "Breathe and Move Complete!",
        completionMessage: "Ruby has learned how breathing supports exercise.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    airAdventure: {
        title: "Air Adventure",
        introduction: "Ruby is following a breath of air on its journey into the lungs.",
        characterName: "Ruby",
        characterLine: "Let's follow the path that air takes when we breathe in!",
        mission: "Help Ruby discover how air travels through the respiratory system!",
        instructions: "Choose TWO correct facts about the path of air.",
        requiredCorrect: 2,

        choices: [
            {
                id: "noseAndMouth",
                label: "👃 Air can enter the body through the nose or mouth",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "The nose and mouth provide routes for air to enter the respiratory system."
            },
            {
                id: "airways",
                label: "🫁 Air travels through airways toward the lungs",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Air passes through the throat and windpipe before moving into the branching airways in the lungs."
            },
            {
                id: "foodTube",
                label: "🍽️ Air normally travels to the lungs through the food pipe",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The food pipe carries food to the stomach. Air travels through the respiratory airways."
            },
            {
                id: "skin",
                label: "🧴 Air enters the lungs directly through the skin",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Air enters through the nose or mouth and travels through the respiratory system."
            }
        ],

        lesson: {
            introduction: "Ruby follows the route air takes when entering the respiratory system.",
            characterName: "Ruby",
            characterLine: "Amazing! Air travels through the airways to reach the lungs, where gas exchange takes place.",
            remember: "Air can enter through the nose or mouth, travel through the throat and trachea, and pass through branching airways to reach the lungs. Oxygen then moves into the blood at the gas-exchange surfaces."
        },

        completionHeading: "Air Adventure Complete!",
        completionMessage: "Ruby has discovered the route air takes into the lungs.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    lungProtectors: {
        title: "Lung Protectors",
        introduction: "Ruby wants to learn which everyday habits help keep her lungs healthy.",
        characterName: "Ruby",
        characterLine: "Let's discover how we can protect our lungs!",
        mission: "Help Ruby identify healthy habits for her respiratory system!",
        instructions: "Choose TWO healthy habits.",
        requiredCorrect: 2,

        choices: [
            {
                id: "avoidSmoking",
                label: "🚭 Avoid smoking and secondhand smoke",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Avoiding tobacco smoke helps reduce exposure to substances that damage the lungs."
            },
            {
                id: "cleanAir",
                label: "🌿 Reduce exposure to polluted air when possible",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Cleaner air can help reduce exposure to particles and gases that irritate the respiratory system."
            },
            {
                id: "startSmoking",
                label: "🚬 Start smoking to strengthen the lungs",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Smoking harms the lungs. It does not make them stronger."
            },
            {
                id: "ignoreIrritants",
                label: "⚠️ Ignore strong fumes and irritating smoke",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Some fumes and smoke can irritate or harm the respiratory system. Avoid exposure when possible."
            }
        ],

        lesson: {
            introduction: "Ruby learns that everyday choices can help protect respiratory health.",
            characterName: "Ruby",
            characterLine: "Wonderful! Avoiding smoke and reducing exposure to polluted air are helpful ways to protect our lungs.",
            remember: "Avoiding smoking and secondhand smoke, limiting exposure to harmful fumes, and reducing exposure to polluted air when possible can help protect lung health."
        },

        completionHeading: "Lung Protectors Complete!",
        completionMessage: "Ruby has discovered ways to help protect her lungs.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    freshAirFinder: {
        title: "Fresh Air Finder",
        introduction: "Ruby wants to understand why the quality of the air we breathe matters.",
        characterName: "Ruby",
        characterLine: "Is all the air around us equally healthy to breathe?",
        mission: "Help Ruby understand why cleaner air matters!",
        instructions: "Choose TWO correct facts about air quality.",
        requiredCorrect: 2,

        choices: [
            {
                id: "lessPollution",
                label: "💧 Cleaner air can reduce exposure to harmful pollutants",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Reducing exposure to harmful air pollutants can help protect the lungs."
            },
            {
                id: "avoidSmoke",
                label: "🌬️ Avoiding smoke can help protect the respiratory system",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Smoke can contain particles and chemicals that irritate and damage the lungs."
            },
            {
                id: "pollutionHealthy",
                label: "🌫️ Air pollution always makes breathing healthier",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Air pollution can irritate the airways and harm respiratory health."
            },
            {
                id: "smokeHarmless",
                label: "🧪 Smoke is harmless to the lungs",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Smoke can contain harmful substances that affect the lungs and airways."
            }
        ],

        lesson: {
            introduction: "Ruby discovers why the quality of the air we breathe matters.",
            characterName: "Ruby",
            characterLine: "Great discovery! Cleaner air and less exposure to smoke can help us protect our lungs.",
            remember: "Air pollution and smoke can contain particles and gases that harm respiratory health. Reducing exposure when possible can help protect the lungs."
        },

        completionHeading: "Fresh Air Finder Complete!",
        completionMessage: "Ruby has learned why clean air matters for her lungs.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    breathingBasics: {
        title: "Breathing Basics",
        introduction: "Ruby is ready to discover how the lungs help the body get the oxygen it needs.",
        characterName: "Ruby",
        characterLine: "Let's find out what happens when we breathe!",
        mission: "Help Ruby understand the basics of breathing!",
        instructions: "Choose TWO correct facts about the lungs.",
        requiredCorrect: 2,

        choices: [
            {
                id: "oxygenEnters",
                label: "🫁 Oxygen moves from the lungs into the blood",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Oxygen passes from the air in the lungs into nearby blood vessels."
            },
            {
                id: "carbonDioxideLeaves",
                label: "💨 Carbon dioxide moves from the blood into the lungs to be breathed out",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "The lungs help remove carbon dioxide from the body when we exhale."
            },
            {
                id: "lungsDigest",
                label: "🍽️ The lungs digest food",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The digestive system processes food. The lungs help the body exchange oxygen and carbon dioxide."
            },
            {
                id: "oxygenMade",
                label: "✨ The lungs create oxygen",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The lungs take oxygen from the air and transfer it into the blood; they do not create it."
            }
        ],

        lesson: {
            introduction: "Ruby discovers the main job of the lungs in gas exchange.",
            characterName: "Ruby",
            characterLine: "Fantastic! The lungs help oxygen enter the blood and carbon dioxide leave the body.",
            remember: "The lungs exchange gases with the blood. Oxygen moves from inhaled air into the blood, while carbon dioxide moves from the blood into the lungs to be exhaled."
        },

        completionHeading: "Breathing Basics Complete!",
        completionMessage: "Ruby has learned how the lungs help the body exchange gases.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }
};