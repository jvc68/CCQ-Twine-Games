
setup.activityLibraries = setup.activityLibraries || {};

setup.activityLibraries.bloodCells = {
    menu: {
        title: "🩸 Blood Cells",
        description: "Help Ruby discover how blood cells keep the body healthy!",
        new: [
            {
                title: "🔴 Red Cell Rescue",
                description: "Learn how red blood cells carry oxygen around the body.",
                activityId: "redCellRescue",
                passage: "BloodCellActivity"
            },
            {
                title: "⚪ White Cell Defenders",
                description: "Discover how white blood cells help fight germs.",
                locked: true
            },
            {
                title: "🩹 Platelet Power",
                description: "Explore how platelets help stop bleeding.",
                locked: true
            },
            {
                title: "🩸 Cell Teamwork",
                description: "See how different blood cells work together.",
                locked: true
            }
        ],
        completed: [
            {
                title: "🫁 Oxygen Delivery",
                description: "Discover how oxygen travels to the body's cells.",
                completed: true
            },
            {
                title: "🛡️ Germ Fighters",
                description: "Learn how the body defends itself against germs.",
                completed: true
            },
            {
                title: "🏆 More Achievements",
                description: "Your future completed blood cell activities will appear here.",
                locked: true
            },
            {
                title: "✨ Tiny Heroes",
                description: "More blood cell discoveries are on their way.",
                locked: true
            }
        ]
    },

    redCellRescue: {
        title: "Red Cell Rescue",
        introduction: "Help Ruby learn how red blood cells deliver oxygen throughout the body.",
        characterName: "Ruby",
        characterLine: "Let's discover how our blood cells help us!",
        mission: "Help Ruby understand the important jobs of blood cells!",
        instructions: "Choose TWO correct facts about blood cells.",
        requiredCorrect: 2,

        choices: [
            {
                id: "carryOxygen",
                label: "Red blood cells carry oxygen around the body",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Red blood cells contain hemoglobin, which carries oxygen to body tissues."
            },
            {
                id: "fightGerms",
                label: "White blood cells help defend the body against germs",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "White blood cells help the immune system protect the body from infections."
            },
            {
                id: "redCellsFight",
                label: "Red blood cells are the main cells that fight infections",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "White blood cells play the main role in defending the body against infections."
            },
            {
                id: "plateletsCarry",
                label: "Platelets carry most of the oxygen in the blood",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Red blood cells carry most of the oxygen. Platelets help blood clot."
            }
        ],

        completionHeading: "Blood Cell Heroes!",
        completionMessage: "Ruby has discovered how blood cells help the body.",
        continueLabel: "Continue to the lesson",
        nextPassage: "BloodCellLesson"
    }
};
