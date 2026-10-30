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
                title: "⚡ Message Mission",
                description: "Explore how the brain and nerves send signals.",
                activityId: "messageMission",
                passage: "BrainActivity",
                completed: false
            },
            {
                title: "🧩 Memory Masters",
                description: "Learn how the brain helps us remember and learn.",
                activityId: "memoryMasters",
                passage: "BrainActivity",
                completed: false
            },
            {
                title: "😴 Brain Recharge",
                description: "Discover why sleep helps the brain work well.",
                activityId: "brainRecharge",
                passage: "BrainActivity",
                completed: false
            },
            {
                title: "💡 Thinking Power",
                description: "Explore how the brain helps us think and solve problems.",
                activityId: "thinkingPower",
                passage: "BrainActivity",
                completed: false
            },
            {
                title: "🛡️ Brain Protector",
                description: "Learn why protecting your head is important.",
                activityId: "brainProtector",
                passage: "BrainActivity",
                completed: false
            },
            {
                title: "🏆 More Achievements",
                description: "Your future completed brain activities will appear here.",
                locked: true,
                completed: true
            },
            {
                title: "✨ Mind Explorers",
                description: "More brain discoveries are on their way.",
                locked: true,
                completed: true
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
                label: "❤️ The brain pumps blood around the body",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "The heart pumps blood around the body. The brain helps control many body functions."
            },
            {
                id: "digestsFood",
                label: "🍎 The brain directly digests the food we eat",
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

    // ACTIVITY 2: MESSAGE MISSION
    messageMission: {
        title: "Message Mission",
        introduction: "Join Ruby on a mission to discover how messages travel between the brain and the body.",
        characterName: "Ruby",
        characterLine: "How does my brain tell my body what to do?",
        mission: "Help Ruby discover how the brain and nerves communicate!",
        instructions: "Choose TWO correct facts about messages in the nervous system.",
        requiredCorrect: 2,

        choices: [
            {
                id: "nerveSignals",
                label: "⚡ Nerves carry signals between the brain and body",
                correct: true,
                feedbackTitle: "Signal received!",
                feedback: "Nerves carry information between the brain, spinal cord, and other parts of the body."
            },
            {
                id: "fastResponses",
                label: "🚀 Nerve signals help the body respond to information",
                correct: true,
                feedbackTitle: "Well done!",
                feedback: "The nervous system helps the body respond to changes inside and around us."
            },
            {
                id: "bloodMessages",
                label: "🩸 The brain sends every message only through blood",
                correct: false,
                feedbackTitle: "Keep exploring!",
                feedback: "The nervous system uses nerve signals to communicate information. Blood has other important jobs."
            },
            {
                id: "noCommunication",
                label: "🔇 The brain works without communicating with the body",
                correct: false,
                feedbackTitle: "Try another answer!",
                feedback: "The brain communicates with the body through the nervous system."
            }
        ],

        completionHeading: "Mission Accomplished!",
        completionMessage: "Ruby has discovered how the nervous system carries messages!",
        continueLabel: "Continue to the lesson",

        lesson: {
            introduction: "The brain, spinal cord, and nerves work together as the nervous system. They carry information that helps the body sense, think, move, and respond.",
            characterName: "Ruby",
            characterLine: "The brain and nerves work together like a communication team!",
            remember: "Nerves carry signals that help the brain and body communicate."
        },

        nextPassage: "LessonLearned"
    },

    // ACTIVITY 3: MEMORY MASTERS
    memoryMasters: {
        title: "Memory Masters",
        introduction: "Ruby wants to understand how the brain helps us learn new things and remember experiences.",
        characterName: "Ruby",
        characterLine: "How does my brain help me remember what I learn?",
        mission: "Help Ruby identify how the brain supports learning and memory!",
        instructions: "Choose TWO correct facts about memory.",
        requiredCorrect: 2,

        choices: [
            {
                id: "formsMemories",
                label: "💭 The brain helps us form and recall memories",
                correct: true,
                feedbackTitle: "Memory master!",
                feedback: "The brain helps us store information and bring it back to mind later."
            },
            {
                id: "practiceLearning",
                label: "📚 Practice and learning can help strengthen memories",
                correct: true,
                feedbackTitle: "Excellent!",
                feedback: "Reviewing and practising information can help us learn and remember it."
            },
            {
                id: "memoryInMuscles",
                label: "💪 All memories are stored only in our muscles",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "Memory depends on activity and connections among brain cells, not just the muscles."
            },
            {
                id: "instantLearning",
                label: "✨ We remember everything perfectly without learning or practice",
                correct: false,
                feedbackTitle: "Keep thinking!",
                feedback: "Memory can change over time. Learning, attention, and practice can help us remember information."
            }
        ],

        completionHeading: "Memory Masters!",
        completionMessage: "Ruby has learned how the brain helps us learn and remember!",
        continueLabel: "Continue to the lesson",

        lesson: {
            introduction: "The brain helps us learn new information, build skills, and recall experiences. Attention, practice, and sleep can all support learning and memory.",
            characterName: "Ruby",
            characterLine: "Practising what I learn can help me remember it!",
            remember: "The brain helps us learn and remember. Practice and enough sleep can support memory."
        },

        nextPassage: "LessonLearned"
    },

    // ACTIVITY 4: BRAIN RECHARGE
    brainRecharge: {
        title: "Brain Recharge",
        introduction: "Ruby is discovering why sleep is important for the brain and body.",
        characterName: "Ruby",
        characterLine: "Why do I feel better after a good night's sleep?",
        mission: "Help Ruby discover how sleep supports brain health!",
        instructions: "Choose TWO correct facts about sleep.",
        requiredCorrect: 2,

        choices: [
            {
                id: "supportsLearning",
                label: "📖 Sleep helps support learning and memory",
                correct: true,
                feedbackTitle: "Rest well!",
                feedback: "Sleep helps the brain process information and supports learning and memory."
            },
            {
                id: "restoresBody",
                label: "😴 Sleep helps the brain and body rest and recover",
                correct: true,
                feedbackTitle: "Correct!",
                feedback: "Getting enough sleep supports attention, mood, and overall health."
            },
            {
                id: "noSleepNeeded",
                label: "⏰ The brain never needs sleep to work well",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Sleep is important for healthy brain function and wellbeing."
            },
            {
                id: "sleepStopsBrain",
                label: "🔌 The brain completely switches off during sleep",
                correct: false,
                feedbackTitle: "Not quite!",
                feedback: "The brain remains active during sleep and carries out important processes."
            }
        ],

        completionHeading: "Recharge Complete!",
        completionMessage: "Ruby has discovered why sleep helps the brain work well!",
        continueLabel: "Continue to the lesson",

        lesson: {
            introduction: "Sleep supports healthy brain function. It helps with attention, learning, memory, mood, and the body's recovery.",
            characterName: "Ruby",
            characterLine: "A good night's sleep helps me feel ready to learn and explore!",
            remember: "Getting enough sleep is an important way to care for your brain and body."
        },

        nextPassage: "LessonLearned"
    },

    // ACTIVITY 5: THINKING POWER
    thinkingPower: {
        title: "Thinking Power",
        introduction: "Ruby is ready to explore how the brain helps us reason, make decisions, and solve problems.",
        characterName: "Ruby",
        characterLine: "My brain helps me think through challenges!",
        mission: "Help Ruby discover how the brain supports thinking and problem-solving!",
        instructions: "Choose TWO correct facts about thinking.",
        requiredCorrect: 2,

        choices: [
            {
                id: "solvesProblems",
                label: "🧩 The brain helps us solve problems and make decisions",
                correct: true,
                feedbackTitle: "Brilliant thinking!",
                feedback: "The brain helps us consider information and choose how to respond."
            },
            {
                id: "usesInformation",
                label: "👀 The brain processes information from our senses",
                correct: true,
                feedbackTitle: "Great discovery!",
                feedback: "The brain interprets information from senses such as sight, hearing, touch, taste, and smell."
            },
            {
                id: "thinkingHeartOnly",
                label: "❤️ The heart is the body's main organ for solving puzzles",
                correct: false,
                feedbackTitle: "Think it through!",
                feedback: "The heart pumps blood. The brain plays a major role in thinking and solving problems."
            },
            {
                id: "noLearning",
                label: "🔒 Thinking never changes as we learn new things",
                correct: false,
                feedbackTitle: "Try again!",
                feedback: "Learning and experience can change how we understand information and solve problems."
            }
        ],

        completionHeading: "Powerful Thinking!",
        completionMessage: "Ruby has explored how the brain helps us think and solve problems!",
        continueLabel: "Continue to the lesson",

        lesson: {
            introduction: "The brain helps us interpret sensory information, pay attention, reason, plan, make decisions, and solve problems.",
            characterName: "Ruby",
            characterLine: "Every new thing I learn gives me more to think about!",
            remember: "The brain processes information and helps us learn, reason, plan, and make decisions."
        },

        nextPassage: "LessonLearned"
    },

    // ACTIVITY 6: BRAIN PROTECTOR
    brainProtector: {
        title: "Brain Protector",
        introduction: "Ruby wants to learn how to protect the brain from injury.",
        characterName: "Ruby",
        characterLine: "What can I do to help keep my brain safe?",
        mission: "Help Ruby identify healthy ways to protect the brain!",
        instructions: "Choose TWO correct ways to protect your brain.",
        requiredCorrect: 2,

        choices: [
            {
                id: "wearHelmet",
                label: "⛑️ Wear a properly fitted helmet for activities that require one",
                correct: true,
                feedbackTitle: "Safety star!",
                feedback: "A properly fitted helmet can help reduce the risk of certain head injuries."
            },
            {
                id: "seatbelt",
                label: "🚗 Wear a seat belt when travelling in a vehicle",
                correct: true,
                feedbackTitle: "Smart choice!",
                feedback: "Seat belts help protect people from serious injury during a crash."
            },
            {
                id: "ignoreInjury",
                label: "🤕 Ignore a head injury even when you feel unwell",
                correct: false,
                feedbackTitle: "Stay safe!",
                feedback: "A head injury should be taken seriously. Tell a trusted adult and seek medical help when needed."
            },
            {
                id: "unsafePlay",
                label: "⚠️ Take unnecessary risks during sports and play",
                correct: false,
                feedbackTitle: "Think safety!",
                feedback: "Following safety rules and using suitable protective equipment can help reduce the risk of injury."
            }
        ],

        completionHeading: "Brain Protector!",
        completionMessage: "Ruby has learned some important ways to help protect the brain!",
        continueLabel: "Continue to the lesson",

        lesson: {
            introduction: "The brain is protected by the skull, but head injuries can still happen. Helmets, seat belts, and safe choices can help reduce the risk of injury.",
            characterName: "Ruby",
            characterLine: "Making safe choices is one way I can help protect my brain!",
            remember: "Use appropriate protective equipment, follow safety rules, and tell a trusted adult if you have a head injury."
        },

        nextPassage: "LessonLearned"
    }
};
