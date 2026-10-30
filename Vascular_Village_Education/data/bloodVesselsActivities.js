setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.bloodVessels = {
    menu: {
        title: "🩸 Blood Vessels",
        description: "Help Ruby keep blood flowing and discover healthy habits!",

        activities: [
            {
                title: "🩸 The Long Pause",
                description: "Help Ruby make healthy choices after sitting too long.",
                activityId: "longPause",
                passage: "BloodVesselsActivity",
                completed: false
            },
            {
                title: "🏃 Keep the Blood Moving",
                description: "Discover how movement supports circulation.",
                activityId: "keepBloodMoving",
                passage: "BloodVesselsActivity",
                completed: false
            },
            {
                title: "💓 Heartbeat Heroes",
                description: "Discover how your heart keeps blood moving.",
                activityId: "heartbeatHeroes",
                passage: "BloodVesselsActivity",
                completed: false
            },
            {
                title: "🩸 Vessel Voyage",
                description: "Explore how blood travels around the body.",
                activityId: "vesselVoyage",
                passage: "BloodVesselsActivity",
                completed: false
            },
            {
                title: "💧 Hydration Station",
                description: "Learn why drinking enough water matters.",
                activityId: "hydrationStation",
                passage: "BloodVesselsActivity",
                completed: false
            },
            {
                title: "🥗 Fuel Your Flow",
                description: "Explore healthy food choices for your circulation.",
                activityId: "fuelYourFlow",
                passage: "BloodVesselsActivity",
                completed: false
            },
            {
                title: "🏆 More Achievements",
                description: "Your future completed activities will appear here.",
                locked: true,
                completed: true
            },
            {
                title: "✨ Hidden Discoveries",
                description: "More achievements are on their way.",
                locked: true,
                completed: true
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
                label: "🧘 Stand up and stretch",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Taking a movement break is a healthy choice."
            },
            {
                id: "walk",
                label: "🚶 Take a short walk",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Walking helps you stay active."
            },
            {
                id: "keepSitting",
                label: "🪑 Keep sitting for hours",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Taking movement breaks can help reduce long periods of sitting."
            },
            {
                id: "chips",
                label: "🍟 Eat high-sodium chips",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Too much sodium can make blood pressure harder to manage."
            }
        ],

        lesson: {
            introduction: "Ruby travels onward through the bloodstream.",
            characterName: "Ruby",
            characterLine: "You did it! Small choices can make a difference when we practice them regularly.",
            remember: "Break up long periods of sitting with movement. Regular physical activity and a balanced eating pattern can support overall cardiovascular health."
        },

        completionHeading: "Both choices completed!",
        completionMessage: "Ruby is ready to continue.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    keepBloodMoving: {
        title: "Keep the Blood Moving",
        introduction: "Ruby wants to discover how moving our bodies helps keep us healthy.",
        characterName: "Ruby",
        characterLine: "Let's find activities that get our bodies moving!",
        mission: "Help Ruby identify healthy ways to stay active!",
        instructions: "Choose TWO healthy movement activities.",
        requiredCorrect: 2,

        choices: [
            {
                id: "walking",
                label: "🚶 Go for a walk",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Walking is a physical activity that helps support cardiovascular health."
            },
            {
                id: "dancing",
                label: "💃 Dance to your favorite music",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Dancing is a fun way to be physically active."
            },
            {
                id: "sitAllDay",
                label: "🪑 Sit all day without movement breaks",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Try breaking up long periods of sitting with movement."
            },
            {
                id: "avoidMovement",
                label: "📺 Avoid physical activity whenever possible",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Regular physical activity supports overall health."
            }
        ],

        lesson: {
            introduction: "Ruby discovers that movement is an important part of a healthy routine.",
            characterName: "Ruby",
            characterLine: "Fantastic! Moving our bodies in different ways can help us care for our hearts and circulation.",
            remember: "Walking, dancing, and other physical activities can support cardiovascular health. Choose activities that are appropriate for your abilities and take breaks from sitting."
        },

        completionHeading: "Movement Mission Complete!",
        completionMessage: "Ruby has discovered ways to keep moving throughout the day.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    heartbeatHeroes: {
        title: "Heartbeat Heroes",
        introduction: "Ruby is ready to learn how the heart helps blood travel around the body.",
        characterName: "Ruby",
        characterLine: "Your heart is working hard! Let's discover how it helps you.",
        mission: "Help Ruby understand the heart's role in circulation!",
        instructions: "Choose TWO correct facts about the heart.",
        requiredCorrect: 2,

        choices: [
            {
                id: "pumpsBlood",
                label: "❤️ The heart pumps blood around the body",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "The heart contracts to pump blood through the circulatory system."
            },
            {
                id: "deliversOxygen",
                label: "🩸 Blood carries oxygen to body tissues",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Blood transports oxygen from the lungs to tissues throughout the body."
            },
            {
                id: "heartMakesOxygen",
                label: "🫁 The heart makes all the oxygen the body needs",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The lungs bring oxygen into the body. The heart pumps blood that carries it."
            },
            {
                id: "heartStopsBlood",
                label: "🛑 The heart stops blood from moving",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The heart's pumping action keeps blood moving through the circulatory system."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how the heart helps power circulation.",
            characterName: "Ruby",
            characterLine: "You got it! Your heart and blood vessels work together to move blood throughout your body.",
            remember: "The heart pumps blood through blood vessels. Blood carries oxygen and nutrients to tissues and helps transport waste products away."
        },

        completionHeading: "Heartbeat Heroes Complete!",
        completionMessage: "Ruby understands how the heart helps keep blood moving.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    vesselVoyage: {
        title: "Vessel Voyage",
        introduction: "Ruby is exploring the pathways that carry blood around the body.",
        characterName: "Ruby",
        characterLine: "Let's explore the amazing network of blood vessels!",
        mission: "Help Ruby learn how different blood vessels work!",
        instructions: "Choose TWO correct facts about blood vessels.",
        requiredCorrect: 2,

        choices: [
            {
                id: "arteries",
                label: "🔴 Arteries carry blood away from the heart",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Arteries carry blood away from the heart."
            },
            {
                id: "veins",
                label: "🔵 Veins carry blood toward the heart",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Veins return blood toward the heart."
            },
            {
                id: "vesselsDigest",
                label: "🍎 Blood vessels digest the food we eat",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Blood vessels transport blood. Digestion takes place in the digestive system."
            },
            {
                id: "allVesselsSame",
                label: "🔀 Every type of blood vessel has exactly the same job",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Arteries, veins, and capillaries have different structures and roles."
            }
        ],

        lesson: {
            introduction: "Ruby has traveled through the body's network of blood vessels.",
            characterName: "Ruby",
            characterLine: "Amazing exploring! Arteries, veins, and capillaries all help the circulatory system do its job.",
            remember: "Arteries carry blood away from the heart, veins return blood toward the heart, and tiny capillaries allow gases, nutrients, and other substances to be exchanged with tissues."
        },

        completionHeading: "Vessel Voyage Complete!",
        completionMessage: "Ruby has discovered how blood vessels transport blood.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    hydrationStation: {
        title: "Hydration Station",
        introduction: "Ruby is learning why staying hydrated is part of caring for the body.",
        characterName: "Ruby",
        characterLine: "Let's discover some healthy hydration habits!",
        mission: "Help Ruby choose good hydration habits!",
        instructions: "Choose TWO healthy hydration choices.",
        requiredCorrect: 2,

        choices: [
            {
                id: "drinkWater",
                label: "💧 Drink water regularly throughout the day",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Water helps the body maintain its normal functions."
            },
            {
                id: "bringBottle",
                label: "🚰 Bring a water bottle when appropriate",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Having water available can make it easier to stay hydrated."
            },
            {
                id: "neverDrink",
                label: "🥤 Avoid drinking fluids all day",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The body needs water to function properly."
            },
            {
                id: "onlySugaryDrinks",
                label: "🥤 Choose sugary drinks as your only source of fluids",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Water is a good everyday drink choice for many people."
            }
        ],

        lesson: {
            introduction: "Ruby discovers that hydration is one part of taking care of the body.",
            characterName: "Ruby",
            characterLine: "Well done! Drinking enough water helps your body carry out its everyday jobs.",
            remember: "Water supports many normal body functions. Fluid needs vary with factors such as activity, climate, and health."
        },

        completionHeading: "Hydration Station Complete!",
        completionMessage: "Ruby has learned about healthy hydration habits.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    fuelYourFlow: {
        title: "Fuel Your Flow",
        introduction: "Ruby is ready to discover how healthy food choices support the body.",
        characterName: "Ruby",
        characterLine: "Let's choose foods that help support a healthy heart and blood vessels!",
        mission: "Help Ruby choose healthy foods!",
        instructions: "Choose TWO healthy options.",
        requiredCorrect: 2,

        choices: [
            {
                id: "vegetables",
                label: "🥦 Eat a variety of vegetables",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Vegetables provide nutrients that support overall health."
            },
            {
                id: "wholeGrains",
                label: "🌾 Choose whole-grain foods",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Whole grains can be part of a balanced eating pattern."
            },
            {
                id: "saltySnacks",
                label: "🧂 Eat lots of salty snacks",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Eating too much sodium can make blood pressure harder to manage."
            },
            {
                id: "skipMeals",
                label: "🍽️ Skip meals instead of eating a balanced diet",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Regular, balanced meals can help you get a variety of nutrients."
            }
        ],

        lesson: {
            introduction: "Ruby discovers that everyday food choices can support a healthy body.",
            characterName: "Ruby",
            characterLine: "Great work! Making balanced food choices is one way to care for your body.",
            remember: "A balanced eating pattern that includes vegetables, whole grains, and other nutritious foods can support overall health. Choosing foods lower in sodium can help manage blood pressure."
        },

        completionHeading: "Fuel Your Flow completed!",
        completionMessage: "Ruby has discovered some healthy food choices.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }
};