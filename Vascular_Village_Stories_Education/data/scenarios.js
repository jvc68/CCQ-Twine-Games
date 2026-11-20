// Stores all available scenarios
setup.scenarios = setup.scenarios || {};

// Scenario collection
setup.scenarios.bodyScenarios = {

    // Hypertension related scenario
    heartUnderPressure: {
        title: "Heart Under Pressure",
        description: "Ruby discovers that blood pressure is too high! Let's explore how the heart pumps blood and why healthy blood pressure matters!",

        activities: [
            "bloodPressureBasics",
            "brainController",
            "breatheAndMove"
        ],

        lesson: {
            introduction: "Ruby has discovered why healthy blood pressure is important for the heart and body.",
            characterName: "Ruby",
            characterLine: "I learned that blood pressure helps move blood around my body, but too much pressure can strain my heart!",
            remember: "Blood pressure is the force of blood pushing against blood vessel walls. When blood pressure stays too high, the heart has to work harder. Regular blood pressure checks help us keep track of our health."
        }
    },

    // hypertension related scenario
    vesselTrouble: {
        title: "Vessel Trouble",
        description: "Ruby discovers that blood vessels are under pressure! Let's explore how healthy blood vessels help blood flow around the body!",

        activities: [
            "vesselExplorer",
            "redCellJourney",
            "pressureDetective"
        ],

        lesson: {
            introduction: "Ruby has discovered why healthy blood vessels are important for blood flow and blood pressure.",
            characterName: "Ruby",
            characterLine: "I learned that healthy blood vessels help blood flow smoothly around my body!",
            remember: "Blood vessels carry blood throughout the body. Flexible, healthy arteries help blood flow. Stiff or narrowed arteries can contribute to high blood pressure, which can damage blood vessels over time."
        }
    },

    // hypertension related scenario
    healthyChoicesChallenge: {
        title: "Ruby's Healthy Choices Challenge",
        description: "Ruby wants to keep her heart healthy! Let's discover how food, exercise and everyday habits can help manage blood pressure!",

        activities: [
            "saltDetective",
            "movementMission",
            "healthyHeartChoices"
        ],

        lesson: {
            introduction: "Ruby has discovered how everyday healthy choices can support healthy blood pressure.",
            characterName: "Ruby",
            characterLine: "I learned that small healthy choices can help protect my heart and blood vessels!",
            remember: "Eating less salt, enjoying healthy foods, staying active, getting enough sleep and managing stress can support healthy blood pressure. Regular blood pressure checks are also important."
        }
    },
    
    // Scenario 1: Sitting around all day
    sittingAllDay: {
        title: "We've Been Sitting Around All Day",
        description: "Our body has spent most of the day sitting down. Let's discover how moving our bodies can help us stay healthy!",

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

    // scenario 2: The Great Oxygen Rescue
    greatOxygenRescue: {
        title: "The Great Oxygen Rescue",
        description: "Some body cells aren't getting enough oxygen! Let's discover how the lungs, heart and blood work together to deliver oxygen around the body!",
        activities: [
            "oxygenAdventure",
            "redCellJourney",
            "heartPumpMission"
        ],

        lesson: {
            introduction: "Ruby has completed the Great Oxygen Rescue! Let's discover how the body works together to deliver oxygen to every cell.",
            characterName: "Ruby",
            characterLine: "We did it! I discovered that my lungs, heart, blood vessels and red blood cells all work together to deliver oxygen around my body!",
            remember: "Oxygen enters the blood through the lungs. Red blood cells carry oxygen, while the heart pumps blood through blood vessels to deliver it to the body's cells. Every part plays an important role in keeping us alive and healthy."
        }
    },


    // scenario 3: The Mystery of the Missing Defenders
    missingDefenders: {
        title: "The Mystery of the Missing Defenders",
        description: "Oh no! Harmful germs have entered the body! Let's discover how our immune system helps protect us and fight infections!",
        activities: [
            "germDetective",
            "brainDefenderMission",
            "immuneTeamRescue"
        ],

        lesson: {
            introduction: "Ruby has solved the Mystery of the Missing Defenders! Let's discover how the immune system helps protect the body from harmful germs.",
            characterName: "Ruby",
            characterLine: "Mystery solved! I discovered that white blood cells are amazing defenders that help my body recognise and fight harmful germs!",
            remember: "The immune system protects the body against harmful germs. White blood cells play important roles in recognising, attacking and responding to infections. Different immune cells work together to help keep the body healthy."
        }
    },


    // scenario 4: The Great Blood Vessel Repair Mission
    vesselRepairMission: {
        title: "The Great Blood Vessel Repair Mission",
        description: "Oh no! A blood vessel has been damaged! Let's discover how platelets and clotting help stop bleeding and protect the body!",
        activities: [
            "vesselEmergency",
            "plateletRescue",
            "clottingChallenge"
        ],

        lesson: {
            introduction: "Ruby has completed the Great Blood Vessel Repair Mission! Let's discover how the body works to stop bleeding and repair damaged blood vessels.",
            characterName: "Ruby",
            characterLine: "We saved the day! I learned that platelets rush to damaged blood vessels and help form a clot to stop the bleeding!",
            remember: "When a blood vessel is damaged, platelets gather at the injury and help form a plug. Clotting proteins strengthen this plug by forming a clot. This process helps limit blood loss and allows the damaged area to heal."
        }
    }

};