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
                title: "⚪ White Cell Defenders",
                description: "Discover how white blood cells help fight germs.",
                activityId: "whiteCellDefenders",
                passage: "BloodCellActivity",
                completed: false
            },
            {
                title: "🩹 Platelet Power",
                description: "Explore how platelets help stop bleeding.",
                activityId: "plateletPower",
                passage: "BloodCellActivity",
                completed: false
            },
            {
                title: "🩸 Cell Teamwork",
                description: "See how different blood cells work together.",
                activityId: "cellTeamwork",
                passage: "BloodCellActivity",
                completed: false
            },
            {
                title: "🫁 Oxygen Delivery",
                description: "Discover how oxygen travels to the body's cells.",
                activityId: "oxygenDelivery",
                passage: "BloodCellActivity",
                completed: false
            },
            {
                title: "🛡️ Germ Fighters",
                description: "Learn how the body defends itself against germs.",
                activityId: "germFighters",
                passage: "BloodCellActivity",
                completed: false
            },
            {
                title: "✨ Tiny Heroes",
                description: "More blood cell discoveries are on their way.",
                locked: true,
                completed: true
            },
            {
                title: "🛡️ White Cell Warriors",
                description: "Learn how white blood cells help protect the body against germs.",
                activityId: "whiteCellWarriors",
                passage: "BloodCellsActivity",
                completed: false
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

    whiteCellDefenders: {
        title: "White Cell Defenders",
        introduction: "Ruby has discovered some tiny defenders that help protect the body.",
        characterName: "Ruby",
        characterLine: "Let's find out how white blood cells help protect us!",
        mission: "Help Ruby identify the jobs of white blood cells!",
        instructions: "Choose TWO correct facts about white blood cells.",
        requiredCorrect: 2,

        choices: [
            {
                id: "fightInfections",
                label: "🛡️ White blood cells help defend against infections",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "White blood cells are important parts of the body's immune defenses."
            },
            {
                id: "recognizeThreats",
                label: "🔎 Some white blood cells recognize and respond to harmful germs",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Different types of white blood cells help the body recognize and respond to threats."
            },
            {
                id: "carryOxygen",
                label: "🔴 White blood cells carry most of the body's oxygen",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Red blood cells carry most of the oxygen in the blood."
            },
            {
                id: "stopAllBleeding",
                label: "🩹 White blood cells form the main plug that stops bleeding",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Platelets help form plugs at damaged blood vessels to help stop bleeding."
            }
        ],

        lesson: {
            introduction: "Ruby has met some of the body's tiny defenders.",
            characterName: "Ruby",
            characterLine: "Fantastic! White blood cells help your immune system recognize and fight infections.",
            remember: "White blood cells are part of the immune system. Different types help recognize, attack, or coordinate defenses against harmful germs."
        },

        completionHeading: "White Cell Defenders Complete!",
        completionMessage: "Ruby has learned how white blood cells help protect the body.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    plateletPower: {
        title: "Platelet Power",
        introduction: "Ruby has found a tiny helper that helps the body respond when a blood vessel is damaged.",
        characterName: "Ruby",
        characterLine: "Let's discover how platelets help stop bleeding!",
        mission: "Help Ruby understand how platelets support blood clotting!",
        instructions: "Choose TWO correct facts about platelets.",
        requiredCorrect: 2,

        choices: [
            {
                id: "formPlugs",
                label: "🩹 Platelets help form plugs at damaged blood vessels",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Platelets gather at damaged areas and help form a plug."
            },
            {
                id: "helpClotting",
                label: "🩸 Platelets help the blood clot",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Platelets help start the process that forms a blood clot and limits bleeding."
            },
            {
                id: "carryOxygen",
                label: "🔴 Platelets carry most of the oxygen in the blood",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Red blood cells carry most of the oxygen in the blood."
            },
            {
                id: "fightAllGerms",
                label: "⚪ Platelets are the main cells that fight all infections",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "White blood cells are key parts of the body's immune defenses."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how platelets help protect the body when blood vessels are damaged.",
            characterName: "Ruby",
            characterLine: "Well done! Platelets help the body form clots that limit bleeding.",
            remember: "Platelets are small blood components that gather at damaged blood vessels and help blood clot. This process helps limit blood loss."
        },

        completionHeading: "Platelet Power Complete!",
        completionMessage: "Ruby understands how platelets help stop bleeding.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    cellTeamwork: {
        title: "Cell Teamwork",
        introduction: "Ruby is ready to discover how different blood components work together.",
        characterName: "Ruby",
        characterLine: "Every team member has a job. Let's match each blood component to its role!",
        mission: "Help Ruby understand how blood cells work together!",
        instructions: "Choose TWO correct facts about blood components.",
        requiredCorrect: 2,

        choices: [
            {
                id: "redCells",
                label: "🔴 Red blood cells carry oxygen",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Red blood cells carry oxygen from the lungs to tissues throughout the body."
            },
            {
                id: "whiteCells",
                label: "⚪ White blood cells help defend against infections",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "White blood cells help the immune system respond to harmful germs."
            },
            {
                id: "plateletsOxygen",
                label: "🩸 Platelets carry most of the oxygen around the body",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Red blood cells carry most of the oxygen in the blood."
            },
            {
                id: "redCellsClot",
                label: "🩹 Red blood cells are the main component responsible for blood clotting",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Platelets and clotting proteins help the blood clot."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how different blood components have different jobs.",
            characterName: "Ruby",
            characterLine: "Amazing teamwork! Each blood component contributes to keeping the body working properly.",
            remember: "Red blood cells carry oxygen, white blood cells help defend against infections, and platelets help blood clot. Together, they support important body functions."
        },

        completionHeading: "Cell Teamwork Complete!",
        completionMessage: "Ruby has learned how blood components work together.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    oxygenDelivery: {
        title: "Oxygen Delivery",
        introduction: "Ruby is following oxygen on its journey from the lungs to the body's tissues.",
        characterName: "Ruby",
        characterLine: "Let's discover how oxygen reaches the cells that need it!",
        mission: "Help Ruby follow the path of oxygen!",
        instructions: "Choose TWO correct facts about oxygen delivery.",
        requiredCorrect: 2,

        choices: [
            {
                id: "lungsOxygen",
                label: "🫁 Oxygen enters the blood through the lungs",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Oxygen moves from the air in the lungs into the blood."
            },
            {
                id: "redCellsDeliver",
                label: "🔴 Red blood cells help carry oxygen to body tissues",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "Hemoglobin in red blood cells binds oxygen and helps transport it around the body."
            },
            {
                id: "stomachOxygen",
                label: "🍎 Most oxygen enters the blood from the stomach",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Oxygen enters the blood through gas exchange in the lungs."
            },
            {
                id: "plateletsDeliver",
                label: "🩸 Platelets carry most oxygen to the body's tissues",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Red blood cells carry most of the oxygen in the blood."
            }
        ],

        lesson: {
            introduction: "Ruby has followed oxygen from the lungs to the body's tissues.",
            characterName: "Ruby",
            characterLine: "You did it! The lungs, heart, blood vessels, and red blood cells work together to deliver oxygen.",
            remember: "Oxygen passes from the lungs into the blood. The heart pumps blood through the circulatory system, and red blood cells help deliver oxygen to tissues."
        },

        completionHeading: "Oxygen Delivery Complete!",
        completionMessage: "Ruby has discovered how oxygen travels through the body.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },

    germFighters: {
        title: "Germ Fighters",
        introduction: "Ruby is learning how the body responds to germs that can cause infections.",
        characterName: "Ruby",
        characterLine: "Let's discover how the immune system helps protect us!",
        mission: "Help Ruby identify ways the body defends itself!",
        instructions: "Choose TWO correct facts about immune defenses.",
        requiredCorrect: 2,

        choices: [
            {
                id: "whiteCells",
                label: "⚪ White blood cells help fight infections",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "White blood cells help the immune system respond to harmful germs."
            },
            {
                id: "immuneResponse",
                label: "🛡️ The immune system uses different defenses to protect the body",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "The immune system uses many kinds of cells and processes to help protect the body."
            },
            {
                id: "redCellsFight",
                label: "🔴 Red blood cells are the main cells that destroy germs",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Red blood cells mainly carry oxygen. White blood cells help defend against infections."
            },
            {
                id: "plateletsImmune",
                label: "🩹 Platelets are the only part of the immune system",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The immune system includes many cells, tissues, and processes."
            }
        ],

        lesson: {
            introduction: "Ruby has discovered how the body's defenses help protect against infections.",
            characterName: "Ruby",
            characterLine: "Great job! The immune system has many defenders working together to help keep us healthy.",
            remember: "The immune system uses different cells and processes to recognize and respond to harmful germs. White blood cells play important roles in these defenses."
        },

        completionHeading: "Germ Fighters Complete!",
        completionMessage: "Ruby has learned how the body helps defend itself against germs.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    },
    whiteCellWarriors: {
        title: "White Cell Warriors",
        introduction: "Ruby has encountered some germs! Help her understand how white blood cells protect her body.",
        characterName: "Ruby",
        characterLine: "I didn't know my blood had tiny defenders!",
        mission: "Help Ruby understand how her body fights germs!",
        instructions: "Choose TWO correct answers.",
        requiredCorrect: 2,

        choices: [
            {
                id: "fightGerms",
                label: "🛡️ White blood cells help fight infections",
                correct: true,
                feedbackTitle: "Great choice!",
                feedback: "White blood cells are part of the immune system and help defend the body against germs."
            },
            {
                id: "immuneSystem",
                label: "🦠 White blood cells help protect the body from harmful germs",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "White blood cells recognise and help fight harmful microorganisms that can cause illness."
            },
            {
                id: "carryOxygen",
                label: "🫁 White blood cells carry oxygen around the body",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Red blood cells carry oxygen around the body. White blood cells help defend against infection."
            },
            {
                id: "pumpBlood",
                label: "❤️ White blood cells pump blood around the body",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The heart pumps blood around the body. White blood cells help protect us from germs."
            }
        ],

        lesson: {
            introduction: "Ruby discovers that white blood cells are important defenders of her body.",
            characterName: "Ruby",
            characterLine: "I learned that white blood cells help my body fight germs and infections!",
            remember: "White blood cells are part of the immune system. They help recognise and fight harmful germs, protecting the body from infections."
        },

        completionHeading: "White Cell Warriors!",
        completionMessage: "Ruby has discovered how white blood cells help protect her body.",
        continueLabel: "Continue to the lesson",
        nextPassage: "LessonLearned"
    }
};