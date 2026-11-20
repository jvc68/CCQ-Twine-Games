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
                title: "🛡️ Immune Team Rescue",
                description: "Discover how blood vessels help white blood cells travel around the body.",
                activityId: "immuneTeamRescue",
                passage: "BloodVesselsActivity",
                completed: false
            },
            {
                title: "🚨 Vessel Emergency",
                description: "Learn how blood vessels respond when they become damaged.",
                activityId: "vesselEmergency",
                passage: "BloodVesselsActivity",
                completed: false
            },
            {
                title: "🩹 Clotting Challenge",
                description: "Discover how platelets and clotting proteins help stop bleeding.",
                activityId: "clottingChallenge",
                passage: "BloodVesselsActivity",
                completed: false
            },
            {
                title: "🩸 Vessel Explorer",
                description: "Discover how blood vessels carry blood around the body.",
                activityId: "vesselExplorer",
                passage: "BloodVesselsActivity",
                completed: false
            },
            {
                title: "💓 Healthy Heart Choices",
                description: "Discover how everyday healthy habits help protect the heart and blood vessels.",
                activityId: "healthyHeartChoices",
                passage: "BloodVesselsActivity",
                completed: false
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

    immuneTeamRescue: {
        title: "Immune Team Rescue",
        introduction: "Ruby learns how immune cells travel through the blood to protect the body.",
        characterName: "Ruby",
        characterLine: "The defenders are travelling through the blood vessels! Let's follow them!",
        mission: "Help Ruby discover how blood vessels carry immune cells around the body!",
        instructions: "Choose TWO correct facts",
        requiredCorrect: 2,

        choices: [
            {
                id: "vesselsTransportBlood",
                label: "🩸 Blood vessels carry blood around the body",
                correct: true,
                feedbackTitle: "Great discovery!",
                feedback: "Blood vessels form a network of tubes that transport blood throughout the body."
            },
            {
                id: "vesselsTransportDefenders",
                label: "🛡️ Blood vessels help transport white blood cells around the body",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "White blood cells travel through the bloodstream and can move into tissues where they help respond to infection."
            },
            {
                id: "vesselsMakeWhiteCells",
                label: "⚪ Blood vessels make all the body's white blood cells",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "White blood cells are produced in blood-forming tissues, especially the bone marrow. Blood vessels transport them around the body."
            },
            {
                id: "vesselsCarryAir",
                label: "🫁 Blood vessels carry air directly from the lungs to the body",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Blood vessels carry blood, not air. Oxygen enters the blood in the lungs and is transported around the body."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how blood vessels help transport immune cells around the body.",
            characterName: "Ruby",
            characterLine: "Now I see! Blood vessels help my tiny defenders travel to places where they are needed!",
            remember: "Blood vessels form a network that carries blood throughout the body. White blood cells travel in the bloodstream and can move into body tissues to help defend against infections."
        },

        completionHeading: "Immune Team Rescue Complete!",
        completionMessage: "Ruby has learned how blood vessels help transport immune cells.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },


    vesselEmergency: {
        title: "Vessel Emergency",
        introduction: "Ruby has spotted a damaged blood vessel! Blood is escaping from the injured area, and the body needs to respond.",
        characterName: "Ruby",
        characterLine: "Oh no! There's a leak in the blood vessel! What happens when a blood vessel gets damaged?",
        mission: "Help Ruby understand what happens when a blood vessel is injured!",
        instructions: "Choose TWO correct facts about damaged blood vessels.",
        requiredCorrect: 2,

        choices: [
            {
                id: "vesselDamageBleeding",
                label: "🩸 Damage to a blood vessel can cause bleeding",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "When a blood vessel is damaged, blood can escape from the injured area."
            },
            {
                id: "vesselNarrows",
                label: "🩹 The injured blood vessel can narrow to help reduce blood loss",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "The damaged blood vessel can constrict, meaning it becomes narrower. This helps reduce blood flow to the injured area."
            },
            {
                id: "vesselsMakeClotsAlone",
                label: "❤️ The heart makes a blood clot whenever a vessel is damaged",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Platelets and clotting proteins help form a clot at the damaged area."
            },
            {
                id: "vesselDamageMakesOxygen",
                label: "🫁 A damaged blood vessel produces extra oxygen",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Blood vessels transport blood around the body. They do not produce oxygen."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how the body responds when a blood vessel is damaged.",
            characterName: "Ruby",
            characterLine: "I learned that a damaged blood vessel can narrow to reduce blood loss while the body begins repairing the injury!",
            remember: "When a blood vessel is damaged, it can constrict to reduce blood flow to the injured area. Platelets gather at the injury and clotting proteins help form a clot to limit bleeding."
        },

        completionHeading: "Vessel Emergency Solved!",
        completionMessage: "Ruby has learned how the body responds to blood vessel damage.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },


    clottingChallenge: {
        title: "Clotting Challenge",
        introduction: "Ruby has found platelets and clotting proteins working together to repair a damaged blood vessel.",
        characterName: "Ruby",
        characterLine: "The platelets are gathering together! Let's discover how a blood clot forms!",
        mission: "Help Ruby understand how platelets and clotting proteins work together to stop bleeding!",
        instructions: "Choose TWO correct facts about blood clotting.",
        requiredCorrect: 2,

        choices: [
            {
                id: "plateletsFormPlug",
                label: "🩹 Platelets gather together to help form a plug",
                correct: true,
                feedbackTitle: "Fantastic!",
                feedback: "Platelets stick to the damaged area and gather together to form an initial plug."
            },
            {
                id: "fibrinStrengthensClot",
                label: "🕸️ Fibrin forms a mesh that strengthens the blood clot",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Fibrin forms a mesh of tiny fibres that helps strengthen and stabilise the clot."
            },
            {
                id: "redCellsStartClot",
                label: "🔴 Red blood cells are the main components that start clotting",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Platelets and clotting proteins are the main components involved in forming a blood clot."
            },
            {
                id: "clottingAddsOxygen",
                label: "🫁 Blood clotting adds extra oxygen to the blood",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Blood clotting helps stop bleeding. Oxygen enters the blood through the lungs."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how platelets and clotting proteins work together to form a blood clot.",
            characterName: "Ruby",
            characterLine: "We did it! Platelets form a plug, and fibrin helps strengthen it into a clot!",
            remember: "When a blood vessel is damaged, platelets gather at the injury and help form a plug. Clotting proteins produce fibrin, which forms a mesh that strengthens the plug into a stable clot and helps limit blood loss."
        },

        completionHeading: "Clotting Challenge Complete!",
        completionMessage: "Ruby has learned how the body forms blood clots to help stop bleeding.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    vesselExplorer: {
        title: "Vessel Explorer",
        introduction: "Ruby discovers how blood vessels carry blood around the body.",
        characterName: "Ruby",
        characterLine: "Let's explore the pathways that carry my blood!",
        mission: "Help Ruby understand why healthy blood vessels matter!",
        instructions: "Choose TWO correct facts",
        requiredCorrect: 2,

        choices: [
            {
                id: "vesselsCarryBlood",
                label: "🩸 Blood vessels carry blood around the body",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Blood vessels form a network that carries blood throughout the body."
            },
            {
                id: "arteriesCarryAway",
                label: "❤️ Arteries carry blood away from the heart",
                correct: true,
                feedbackTitle: "Great work!",
                feedback: "Arteries carry blood away from the heart, while veins carry blood back."
            },
            {
                id: "vesselsMakeBlood",
                label: "🩸 Blood vessels make all the blood cells",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Most blood cells are made in the bone marrow, not inside blood vessels."
            },
            {
                id: "veinsCarryAway",
                label: "💙 Veins always carry blood away from the heart",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Veins carry blood towards the heart. Arteries carry blood away from it."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how blood vessels help blood travel around the body.",
            characterName: "Ruby",
            characterLine: "My blood vessels are important pathways that keep my blood moving!",
            remember: "Blood vessels carry blood throughout the body. Arteries carry blood away from the heart, while veins return blood to the heart. Healthy blood vessels help support good circulation."
        },

        completionHeading: "Vessel Explorer Complete!",
        completionMessage: "Ruby has discovered how blood vessels work!",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    healthyHeartChoices: {
        title: "Healthy Heart Choices",
        introduction: "Ruby discovers how everyday healthy habits help protect her heart and blood vessels.",
        characterName: "Ruby",
        characterLine: "Let's find healthy ways to look after my body!",
        mission: "Help Ruby choose habits that support healthy blood pressure!",
        instructions: "Choose TWO correct facts",
        requiredCorrect: 2,

        choices: [
            {
                id: "healthyEating",
                label: "🥦 Eating fruits and vegetables supports heart health",
                correct: true,
                feedbackTitle: "Excellent choice!",
                feedback: "Fruits and vegetables provide nutrients that support overall heart and blood vessel health."
            },
            {
                id: "regularCheckups",
                label: "🩺 Regular blood pressure checks help monitor health",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Blood pressure checks help identify high blood pressure, even when there are no symptoms."
            },
            {
                id: "ignorePressure",
                label: "⚠️ Blood pressure checks are only needed when we feel unwell",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "High blood pressure often has no symptoms, so regular checks are important."
            },
            {
                id: "unhealthyHabits",
                label: "🍟 Eating lots of salty foods every day protects blood vessels",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Too much sodium can contribute to high blood pressure and increase strain on blood vessels."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how everyday choices can support healthy blood pressure.",
            characterName: "Ruby",
            characterLine: "Small healthy choices can help protect my heart and blood vessels!",
            remember: "Eating a balanced diet, choosing foods with less sodium and staying active can support healthy blood pressure. Regular blood pressure checks are important because high blood pressure often has no symptoms."
        },

        completionHeading: "Healthy Heart Choices Complete!",
        completionMessage: "Ruby has discovered how to support her heart and blood vessels!",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }
    
};