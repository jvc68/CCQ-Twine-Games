setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.bloodCells = {
    menu: {
        title: "🩸 Blood Cells",
        description: "Help Ruby discover how blood cells keep the body healthy!",

        activities: [
            {
                title: "🔴 Red Cell Rescue",
                description: "Learn how red blood cells carry oxygen around the body.",
                activityId: "redCellRescue",
                passage: "BloodCellActivity",
                completed: false
            },
            {
                title: "🔴 Red Cell Express",
                description: "Discover how red blood cells and haemoglobin transport oxygen.",
                activityId: "redCellExpress",
                passage: "BloodCellActivity",
                completed: false
            },
            {
                title: "🕵️ Germ Detective",
                description: "Investigate germs and discover how they can affect the body.",
                activityId: "germDetective",
                passage: "BloodCellActivity",
                completed: false
            },
            {
                title: "🩹 Platelet Rescue",
                description: "Learn how platelets help stop bleeding.",
                activityId: "plateletRescue",
                passage: "BloodCellActivity",
                completed: false
            },
            {
                title: "🔴 Red Cell Journey",
                description: "Discover how red blood cells carry oxygen through the bloodstream.",
                activityId: "redCellJourney",
                passage: "BloodCellActivity",
                completed: false
            }
        ]

    },

    redCellRescue: {
        title: "Red Cell Rescue",
        introduction: "Help Ruby learn how red blood cells deliver oxygen throughout the body.",
        characterName: "Ruby",
        characterLine: "Let's learn how our blood cells help us!",
        mission: "Help Ruby understand the important jobs of blood cells!",
        instructions: "Choose TWO correct facts about blood cells.",
        requiredCorrect: 2,

        choices: [
            {
                id: "carryOxygen",
                label: "🔴 Red blood cells carry oxygen around the body",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Red blood cells contain hemoglobin, which carries oxygen to body tissues."
            },
            {
                id: "fightGerms",
                label: "⚪ White blood cells help defend the body against germs",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "White blood cells help the immune system protect the body from infections."
            },
            {
                id: "redCellsFight",
                label: "🦠 Red blood cells are the main cells that fight infections",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "White blood cells play the main role in defending the body against infections."
            },
            {
                id: "plateletsCarry",
                label: "🩸 Platelets carry most of the oxygen in the blood",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Red blood cells carry most of the oxygen. Platelets help blood clot."
            }
        ],

        lesson: {
            introduction: "Ruby discovers how different blood cells help keep the body healthy.",
            characterName: "Ruby",
            characterLine: "Great work! Red blood cells carry oxygen, white blood cells help fight infections, and platelets help stop bleeding.",
            remember: "Red blood cells carry oxygen around the body. White blood cells help defend against infections, while platelets help blood clot and stop bleeding."
        },

        completionHeading: "Blood Cell Heroes!",
        completionMessage: "Ruby has discovered how blood cells help the body.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },


    redCellExpress: {
        title: "Red Cell Express",
        introduction: "Ruby has met some red blood cells that are ready to deliver oxygen around the body.",
        characterName: "Ruby",
        characterLine: "These red blood cells look like tiny delivery vehicles! What are they carrying?",
        mission: "Help Ruby discover how red blood cells transport oxygen!",
        instructions: "Choose TWO correct facts",
        requiredCorrect: 2,

        choices: [
            {
                id: "redCellsCarryOxygen",
                label: "🔴 Red blood cells carry oxygen around the body",
                correct: true,
                feedbackTitle: "Fantastic!",
                feedback: "Red blood cells carry oxygen from the lungs to tissues throughout the body."
            },
            {
                id: "haemoglobinOxygen",
                label: "🩸 Haemoglobin helps red blood cells carry oxygen",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Haemoglobin is a protein inside red blood cells that binds to oxygen."
            },
            {
                id: "redCellsFightGerms",
                label: "🦠 Red blood cells are the main cells that fight infections",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "White blood cells help defend the body against germs and infections."
            },
            {
                id: "redCellsStopBleeding",
                label: "🩹 Red blood cells form plugs to stop bleeding",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Platelets help form plugs at damaged blood vessels to limit bleeding."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how red blood cells help deliver oxygen around the body.",
            characterName: "Ruby",
            characterLine: "Now I understand! Red blood cells carry oxygen, and haemoglobin helps them do their important job!",
            remember: "Red blood cells contain haemoglobin, a protein that binds oxygen. They transport oxygen from the lungs to tissues throughout the body."
        },

        completionHeading: "Red Cell Express Complete!",
        completionMessage: "Ruby has learned how red blood cells deliver oxygen.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },


    plateletRescue: {
        title: "Platelet Rescue",
        introduction: "Ruby has found some tiny platelets rushing towards a damaged blood vessel.",
        characterName: "Ruby",
        characterLine: "These little helpers are in a hurry! I wonder what they're going to do!",
        mission: "Help Ruby discover how platelets help stop bleeding!",
        instructions: "Choose TWO correct facts about platelets.",
        requiredCorrect: 2,

        choices: [
            {
                id: "plateletsGather",
                label: "🩹 Platelets gather at damaged blood vessels",
                correct: true,
                feedbackTitle: "Great work!",
                feedback: "Platelets gather at the site of a damaged blood vessel to help begin forming a plug."
            },
            {
                id: "plateletsClot",
                label: "🩸 Platelets help the blood clot",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Platelets help start the clotting process, which helps limit blood loss."
            },
            {
                id: "plateletsCarryOxygen",
                label: "🔴 Platelets carry most of the oxygen in the blood",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Red blood cells carry most of the oxygen in the blood."
            },
            {
                id: "plateletsFightGerms",
                label: "🦠 Platelets are the main cells that fight infections",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "White blood cells play important roles in defending the body against infections."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how platelets help the body respond to damaged blood vessels.",
            characterName: "Ruby",
            characterLine: "Amazing! Platelets rush to the damaged area and help stop the bleeding!",
            remember: "Platelets are small blood components that gather at damaged blood vessels. They help form a plug and start the process of blood clotting, which limits blood loss."
        },

        completionHeading: "Platelet Rescue Complete!",
        completionMessage: "Ruby has learned how platelets help stop bleeding.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    germDetective: {
        title: "Germ Detective",
        introduction: "Ruby has spotted some unfamiliar germs! She needs to discover which ones could make the body unwell.",
        characterName: "Ruby",
        characterLine: "Something strange is happening in Vascular Village! Let's investigate these germs!",
        mission: "Help Ruby understand what germs are and how they can affect the body!",
        instructions: "Choose TWO correct facts",
        requiredCorrect: 2,

        choices: [
            {
                id: "germsCauseInfections",
                label: "🦠 Some germs can enter the body and cause infections",
                correct: true,
                feedbackTitle: "Good detective work!",
                feedback: "Some microorganisms, including certain bacteria and viruses, can cause infections."
            },
            {
                id: "immuneSystemDefends",
                label: "🛡️ The immune system helps protect the body against harmful germs",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "The immune system uses different cells and processes to recognise and respond to harmful germs."
            },
            {
                id: "allGermsHarmful",
                label: "⚠️ All germs are harmful to the body",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Not all microorganisms are harmful. Many live naturally in and on our bodies and can be helpful."
            },
            {
                id: "redCellsDestroyGerms",
                label: "🔴 Red blood cells are the main defenders against germs",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "White blood cells play important roles in defending the body against infections."
            }
        ],

        lesson: {
            introduction: "Ruby has completed her investigation and discovered more about germs and the immune system.",
            characterName: "Ruby",
            characterLine: "Mystery solved! Some germs can cause infections, but my immune system has amazing ways to help protect me!",
            remember: "Germs are microorganisms such as bacteria and viruses. Some can cause infections, while others are harmless or helpful. The immune system helps protect the body against harmful germs."
        },

        completionHeading: "Germ Detective Complete!",
        completionMessage: "Ruby has discovered how germs can affect the body.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    redCellJourney: {
        title: "Red Cell Journey",
        introduction: "Ruby discovers how red blood cells carry oxygen through the bloodstream.",
        characterName: "Ruby",
        characterLine: "Let's follow the red blood cells on their journey!",
        mission: "Help Ruby discover what red blood cells do!",
        instructions: "Choose TWO correct facts",
        requiredCorrect: 2,

        choices: [
            {
                id: "redCellsCarryOxygen",
                label: "🔴 Red blood cells carry oxygen around the body",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Red blood cells use a protein called haemoglobin to carry oxygen."
            },
            {
                id: "redCellsUseVessels",
                label: "🩸 Red blood cells travel through blood vessels",
                correct: true,
                feedbackTitle: "Great job!",
                feedback: "Red blood cells travel through blood vessels to deliver oxygen to body tissues."
            },
            {
                id: "redCellsFightGerms",
                label: "🛡️ Red blood cells are the main cells that fight germs",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "White blood cells help defend the body against harmful germs."
            },
            {
                id: "redCellsPumpBlood",
                label: "❤️ Red blood cells pump blood around the body",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The heart pumps blood. Red blood cells travel in the blood and carry oxygen."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how red blood cells help deliver oxygen around the body.",
            characterName: "Ruby",
            characterLine: "My red blood cells are busy carrying oxygen to where it is needed!",
            remember: "Red blood cells contain haemoglobin, which carries oxygen. They travel through blood vessels as the heart pumps blood around the body."
        },

        completionHeading: "Red Cell Express Complete!",
        completionMessage: "Ruby has learned about the important job of red blood cells!",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }
};