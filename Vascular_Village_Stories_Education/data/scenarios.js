// Stores all available scenarios
setup.scenarios = setup.scenarios || {};

// Scenario collection
setup.scenarios.bodyScenarios = {

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
            "redCellExpress",
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