// Stores all available scenarios
setup.scenarios = setup.scenarios || {};

// Scenario collection
setup.scenarios.bodyScenarios = {

    // Scenario 1: Sitting around all day
    sittingAllDay: {
        title: "We've Been Sitting Around All Day",
        description: "Ruby has spent most of the day sitting down. Let's discover how moving our bodies can help us stay healthy!",

        // Activities connected to this scenario
        activities: [
            "redCellRescue",
            "longPause",
            "brainControlCenter"
        ],

        // Lesson displayed after all three activities are completed
        lesson: {
            introduction: "Ruby has completed all three activities! Let's see how moving around can help different parts of the body.",
            characterName: "Ruby",
            characterLine: "I learned that moving our bodies helps different body systems work together!",
            remember: "Regular movement supports healthy circulation, breathing and brain function. Taking breaks from sitting and being active throughout the day can help keep our bodies healthy."
        }
    },

    // Scenario 2: Eating chips all day
    eatingChipsAllDay: {
        title: "We've Been Eating Chips All Day",
        description: "Ruby has spent most of the day eating chips. Let's discover how eating healthy foods can help us stay healthy!",

        activities: [
            "heartbeatHeroes",
            "breatheAndMove",
            "brainControlCenter"
        ],

        lesson: {
            introduction: "",
            characterName: "Ruby",
            characterLine: "",
            remember: ""
        }
    }

};