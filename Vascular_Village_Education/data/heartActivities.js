setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.heart = {
    menu: {
        title: "❤️ Heart",
        description: "Help Ruby discover how the heart works and how to keep it healthy!",

        activities: [
            {
                title: "❤️ Heartbeat Heroes",
                description: "Discover how the heart pumps blood around the body.",
                activityId: "heartbeatHeroes",
                passage: "HeartActivity",
                completed: false
            },
            {
                title: "🏃 Move for Your Heart",
                description: "Learn how physical activity helps the heart.",
                activityId: "moveForYourHeart",
                passage: "HeartActivity",
                completed: false
            },
            {
                title: "💓 Pulse Detectives",
                description: "Explore how your heartbeat changes with activity.",
                activityId: "pulseDetectives",
                passage: "HeartActivity",
                completed: false
            },
            {
                title: "🥗 Heart-Healthy Habits",
                description: "Discover everyday ways to care for your heart.",
                activityId: "heartHealthyHabits",
                passage: "HeartActivity",
                completed: false
            },
            {
                title: "🩸 Blood Flow Journey",
                description: "Discover how the heart moves blood through the body.",
                activityId: "bloodFlowJourney",
                passage: "HeartActivity",
                completed: false
            },
            {
                title: "💗 Heart Care Basics",
                description: "Learn simple ways to support heart health.",
                activityId: "heartCareBasics",
                passage: "HeartActivity",
                completed: false
            },
            {
                title: "🏆 More Achievements",
                description: "Your future completed heart activities will appear here.",
                locked: true,
                completed: true
            },
            {
                title: "✨ Heart Explorers",
                description: "More heart discoveries are on their way.",
                locked: true,
                completed: true
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

    moveForYourHeart: {
        title: "Move for Your Heart",
        introduction: "Ruby wants to discover how moving her body can support her heart.",
        characterName: "Ruby",
        characterLine: "Let's get moving and learn how exercise helps our heart!",
        mission: "Help Ruby identify healthy ways to support her heart through movement!",
        instructions: "Choose TWO correct facts about exercise and the heart.",
        requiredCorrect: 2,

        choices: [
            {
                id: "regularActivity",
                label: "🏃 Regular physical activity supports heart health",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Regular physical activity can improve cardiovascular fitness and support overall health."
            },
            {
                id: "heartWorksHarder",
                label: "💓 The heart usually beats faster during exercise",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Working muscles need more oxygen during exercise, so the heart usually pumps faster."
            },
            {
                id: "neverMove",
                label: "🛋️ Sitting all day is the best way to strengthen the heart",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Breaking up long periods of sitting and being regularly active can support heart health."
            },
            {
                id: "exerciseStopsHeart",
                label: "🌙 The heart stops working when we exercise",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The heart continues pumping during exercise and usually beats faster to supply working muscles."
            }
        ],

        lesson: {
            introduction: "Ruby learns how physical activity affects the heart.",
            characterName: "Ruby",
            characterLine: "Fantastic! Moving regularly helps support a healthy heart, and your heart works harder when your body needs more oxygen.",
            remember: "During exercise, muscles need more oxygen, so the heart usually beats faster and pumps more blood. Regular physical activity supports cardiovascular fitness."
        },

        completionHeading: "Move for Your Heart Complete!",
        completionMessage: "Ruby has discovered how physical activity supports heart health.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    pulseDetectives: {
        title: "Pulse Detectives",
        introduction: "Ruby has noticed that her heartbeat changes after running and resting.",
        characterName: "Ruby",
        characterLine: "Can you help me investigate my pulse?",
        mission: "Help Ruby understand what the pulse tells us about the heart!",
        instructions: "Choose TWO correct facts about pulse and heartbeat.",
        requiredCorrect: 2,

        choices: [
            {
                id: "pulseHeartbeat",
                label: "💓 Your pulse reflects your heartbeat",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Each heartbeat sends a wave of blood through arteries that can be felt as a pulse."
            },
            {
                id: "exercisePulse",
                label: "🏃 Your pulse usually increases during exercise",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "The heart usually beats faster during activity to help deliver more oxygen to working muscles."
            },
            {
                id: "noPulseChange",
                label: "🛌 Your pulse can never change",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Pulse can change with activity, emotions, illness, and other factors."
            },
            {
                id: "pulseLungs",
                label: "🫁 Your pulse measures how quickly your lungs digest food",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Pulse gives information about your heartbeat, not digestion."
            }
        ],

        lesson: {
            introduction: "Ruby discovers how the pulse helps us notice the heartbeat.",
            characterName: "Ruby",
            characterLine: "You solved the mystery! Your pulse reflects your heartbeat and often changes with activity.",
            remember: "The pulse is the pressure wave produced as the heart pumps blood through the arteries. Pulse rate usually rises during exercise and slows again during recovery."
        },

        completionHeading: "Pulse Detectives Complete!",
        completionMessage: "Ruby has learned how the pulse relates to the heartbeat.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    heartHealthyHabits: {
        title: "Heart-Healthy Habits",
        introduction: "Ruby wants to discover everyday habits that can help care for her heart.",
        characterName: "Ruby",
        characterLine: "Small healthy choices can make a difference. Let's explore them!",
        mission: "Help Ruby identify habits that support heart health!",
        instructions: "Choose TWO heart-healthy habits.",
        requiredCorrect: 2,

        choices: [
            {
                id: "balancedFood",
                label: "🥗 Eat a balanced variety of nutritious foods",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "A balanced eating pattern can support cardiovascular health."
            },
            {
                id: "activeLifestyle",
                label: "🚶 Make regular physical activity part of your routine",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Regular movement supports heart health and overall well-being."
            },
            {
                id: "avoidAllActivity",
                label: "🛋️ Avoid all physical activity to keep your heart healthy",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Regular, appropriate physical activity supports cardiovascular health."
            },
            {
                id: "onlySugaryDrinks",
                label: "🥤 Choose sugary drinks all the time instead of water",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Water is a good everyday drink choice, and limiting sugary drinks can support a healthy eating pattern."
            }
        ],

        lesson: {
            introduction: "Ruby discovers that everyday choices can help support her heart.",
            characterName: "Ruby",
            characterLine: "Well done! Eating a balanced variety of foods and staying active are helpful habits for heart health.",
            remember: "Heart health is supported by a combination of habits, including regular physical activity, a balanced eating pattern, avoiding tobacco, and getting enough sleep."
        },

        completionHeading: "Heart-Healthy Habits Complete!",
        completionMessage: "Ruby has discovered everyday ways to support her heart.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    bloodFlowJourney: {
        title: "Blood Flow Journey",
        introduction: "Ruby is ready to follow the blood as the heart pumps it around the body.",
        characterName: "Ruby",
        characterLine: "Let's follow the blood on its journey!",
        mission: "Help Ruby understand how the heart and blood vessels work together!",
        instructions: "Choose TWO correct facts about blood flow.",
        requiredCorrect: 2,

        choices: [
            {
                id: "heartPumps",
                label: "❤️ The heart pumps blood through blood vessels",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "The heart creates the pressure that moves blood through the circulatory system."
            },
            {
                id: "bodyDelivery",
                label: "🩸 Blood helps deliver oxygen to body tissues",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Blood transports oxygen and nutrients to tissues throughout the body."
            },
            {
                id: "bloodOnlyLungs",
                label: "🫁 Blood only travels between the heart and lungs",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Blood travels through the heart and lungs and also circulates to the rest of the body."
            },
            {
                id: "veinsPump",
                label: "🛣️ Blood vessels do not carry blood anywhere",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Blood vessels form a network of pathways that carry blood throughout the body."
            }
        ],

        lesson: {
            introduction: "Ruby follows the journey of blood through the circulatory system.",
            characterName: "Ruby",
            characterLine: "Amazing! The heart pumps blood, and blood vessels carry it to the lungs and the rest of the body.",
            remember: "The heart, blood, and blood vessels work together as the circulatory system. Blood travels to the lungs for gas exchange and to body tissues to deliver oxygen and nutrients."
        },

        completionHeading: "Blood Flow Journey Complete!",
        completionMessage: "Ruby has discovered how the heart moves blood through the body.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    heartCareBasics: {
        title: "Heart Care Basics",
        introduction: "Ruby wants to put her heart-health knowledge into practice.",
        characterName: "Ruby",
        characterLine: "Let's review some simple ways to care for our hearts!",
        mission: "Help Ruby recognize habits that support long-term heart health!",
        instructions: "Choose TWO helpful heart-care habits.",
        requiredCorrect: 2,

        choices: [
            {
                id: "regularCheckups",
                label: "🩺 Get appropriate health checkups",
                correct: true,
                feedbackTitle: "Good choice!",
                feedback: "Health checkups can help identify concerns and provide guidance suited to a person's needs."
            },
            {
                id: "healthyRoutine",
                label: "🌱 Build healthy routines with activity and balanced meals",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Regular activity and balanced eating habits can support cardiovascular health."
            },
            {
                id: "ignoreSymptoms",
                label: "🤒 Always ignore unusual or concerning symptoms",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "New, persistent, or concerning symptoms should not be ignored. Seek appropriate medical advice."
            },
            {
                id: "tobaccoHealthy",
                label: "🚬 Tobacco smoke makes the heart healthier",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Tobacco smoke harms cardiovascular health. Avoiding smoking and secondhand smoke is beneficial."
            }
        ],

        lesson: {
            introduction: "Ruby reviews practical ways to care for her heart.",
            characterName: "Ruby",
            characterLine: "Great job! Healthy routines and appropriate health checkups can help us look after our hearts.",
            remember: "Heart care includes regular physical activity, balanced eating habits, avoiding tobacco, and seeking appropriate health advice and checkups."
        },

        completionHeading: "Heart Care Basics Complete!",
        completionMessage: "Ruby has learned several ways to support heart health.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }
};
