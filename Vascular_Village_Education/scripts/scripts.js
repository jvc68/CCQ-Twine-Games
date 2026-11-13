
/*
 * scripts.js
 * Reusable activity functions for SugarCube 2.30.0
 */

(function () {
    "use strict";

    // initialize our library collection
    setup.activityLibraries = setup.activityLibraries || {};

    
    // Find an activity in one of the activity dictionaries.
    // category: which dictionary to search
    // activityId: which activity to retrieve
    setup.getActivity = function (category, activityId) {
        // make library a reference to the existing dictionary
        var library = setup.activityLibraries[category];

        // if library doesnt exist OR given "menu" OR activity does not exist in library
        if (!library || activityId === "menu" || !library[activityId]) {
            // print error to user
            console.error(
                "Activity not found:",
                category,
                activityId
            );
            return null;
        }

        // return found activity
        return library[activityId];
    };


    // retrieves or creates players progress record for an activity
    setup.getActivityProgress = function (activityKey) {
        // create story-variable object
        var variables = State.variables;

        // activityProgress may not exist yet
        if (!variables.activityProgress) {
            variables.activityProgress = {};
        }

        // create record for requested activity
        if (!variables.activityProgress[activityKey]) {
            variables.activityProgress[activityKey] = {
                // stores correct choices
                // preserves existing record when the player revisits the activity
                correctChoices: []
            };
        }

        // return existing or newly created progress object
        return variables.activityProgress[activityKey];
        /*
        allows us to use in other functions like this:
        var progress = setup.getActivityProgress(
            "bloodVessels.longPause"
        );
        */
    };





    // displays popup window in game
    setup.showFeedback = function (title, message) {
        // set popup title
        Dialog.setup(title);
        // isert message into fiolog using SugarCubes WikiText parser
        Dialog.wiki(message);
        // display the popup
        Dialog.open();
    };
    // is styled using CSS .ui-dialog




    // responsible for displaying the players progress below the current activity
    // activity: activitys definition from dictionary
    // players recorded correct choices
    // HTML element where progress information should appear
    setup.renderProgress = function (
        activity,
        progress,
        container
    ) {
        // remove all existing children from progress container
        container.replaceChildren();

        // count correct choices
        var count = progress.correctChoices.length;

        // stores required number of correct choices
        var total = activity.requiredCorrect;

        // if player has completed activity
        if (count >= total) {
            // record completion of players progress
            progress.completed = true;
            // create HTML <h3> element
            var heading = document.createElement("h3");
            // set headings text to special completionHeading defined from dictionary OR go to fallback
            heading.textContent =
                activity.completionHeading ||
                "Activity completed!";

            // create continue HTML <button>
            var nextButton = document.createElement("button");
            nextButton.type = "button";
            
            // set button text to textContent from dictionary OR fallback
            nextButton.textContent =
                activity.continueLabel || "Continue";

            // apply shared button styling
            nextButton.classList.add("tutorial-button");

            // make button navigste to the next passage with eventListener
            nextButton.addEventListener("click", function () {
                Engine.play(activity.nextPassage);
            });

            // add heading and button to screen
            container.appendChild(heading);
            container.appendChild(nextButton);
        }
        // if activity isnt complete
        else 
        {
            // create HTML p block
            var hint = document.createElement("p");

            // calculate remaining number of correct choices needed before continuing
            hint.textContent =
                "Choose " + (total - count) +
                " more healthy action(s) to continue.";

            // display message to screen
            container.appendChild(hint);
        }
    };

    


    // prevents duplicate correct choice ID's from being added
    // activity: current activitys definition
    // choice: specific answer player clicked
    // progress: players existing progress record
    // progressContainer: element where progress display is rendered
    setup.checkAnswer = function (
        activity,
        choice,
        progress,
        progressContainer
    ) {
        // returns 0 if answer is already in array "correctChoices" or -1 if not in array
        // !== -1 makes alreadyChosen equal true or false
        var alreadyChosen = progress.correctChoices.indexOf(choice.id) !== -1;

        // if repeated correct answer
        if (choice.correct && alreadyChosen) {
            setup.showFeedback(
                "Already Completed",
                "You've already chosen that healthy action. Try another one!"
            );
            return;
        }

        // if correct and not in array, push to correctChoices array
        if (choice.correct) {
            progress.correctChoices.push(choice.id);
        }

        // display answers feedback using created function
        setup.showFeedback(
            choice.feedbackTitle,
            choice.feedback
        );

        // display current progress using created function
        setup.renderProgress(
            activity,
            progress,
            progressContainer
        );
    };

    // build activity interface dynamically from dictionary
    // here we use the activitys content in its dictionary and use this function to construct the screen
    setup.renderActivity = function (
        category,
        activityId,
        containerId
    ) {
        var activity = setup.getActivity(
            category,
            activityId
        );

        // find HTML container for activitys interface to be inserted
        var container = document.getElementById(containerId);

        // check if activity and container exist
        if (!activity || !container) {
            console.error(
                "Could not render activity:",
                activityId
            );
            return;
        }

        // create activitys progress key for retreieving players progress
        var activityKey = category + "." + activityId;

        // Remember which activity's lesson should be displayed
        State.variables.currentLessonActivity = activityKey;

        // retrieve players progress
        var progress = setup.getActivityProgress(activityKey);

        // clear activity container
        container.replaceChildren();

        // display intro with p HTML
        var intro = document.createElement("h4");
        intro.textContent = activity.introduction;
        container.appendChild(intro);

        // display Rubys dialogue with p HTML
        var character = document.createElement("p");
        var characterName = document.createElement("strong");

        characterName.textContent = activity.characterName || "";
        character.appendChild(characterName);

        if (activity.characterLine) {
            character.appendChild(
                document.createTextNode(" " + activity.characterLine)
            );
        }

        container.appendChild(character);

        // display mission with h3 HTML
        var mission = document.createElement("h4");
        mission.textContent = activity.mission;
        container.appendChild(mission);

        // display instructions with p HTML
        var instructions = document.createElement("p");
        instructions.textContent = activity.instructions;
        container.appendChild(instructions);

        // create answer-buttons container
        var buttons = document.createElement("div");
        buttons.className = "answer-buttons";
        // created using CSS .answer-buttons button {}

        // create progress container to display progress display
        var progressContainer = document.createElement("div");
        progressContainer.id = "activity-progress";

        // create a button for every choice by going through dictioonary
        /*
        choices: [
        {
            id: "stretch",
            label: "Stand up and stretch",
            correct: true
        }
        */
        activity.choices.forEach(function (choice)
        {
            // create button HTML
            var button = document.createElement("button");
            button.type = "button";
            // set visible answer from dictionary
            button.textContent = choice.label;

            // attatch click handler, call checkAnswer to verify answer clicked
            button.addEventListener("click", function () {
                setup.checkAnswer(
                    activity,
                    choice,
                    progress,
                    progressContainer
                );
            });

            // add button to container
            buttons.appendChild(button);
        });

        // add interface elements to the page
        container.appendChild(buttons);
        container.appendChild(document.createElement("hr"));
        container.appendChild(progressContainer);

        // display current progress
        setup.renderProgress(
            activity,
            progress,
            progressContainer
        );
                // Create a button to return to the scenario body map
        if (State.variables.selectedScenarioId) {

            var back = document.createElement("p");
            back.className = "back-link";

            var backButton = document.createElement("button");
            backButton.type = "button";
            backButton.textContent = "← Back to Scenario";
            backButton.classList.add("tutorial-button");

            backButton.addEventListener("click", function () {
                Engine.play("ScenarioBodyMap");
            });

            back.appendChild(backButton);
            container.appendChild(back);
        }
    };
    

  
    // Generates the menu for a body system
    setup.renderActivityMenu = function (category, containerId) {

        // Retrieve the activity dictionary and menu
        var library = setup.activityLibraries[category];
        var menu = library && library.menu;

        // Find the HTML container where the menu will appear
        var container = document.getElementById(containerId);

        if (!menu || !container) {
            console.error("Could not render activity menu:", category);
            return;
        }

        // Access SugarCube variables
        var variables = State.variables;

        // Variables for the selected tab, page, and passage
        var tabKey;
        var pageKey;
        var passageName;

        if (category === "lungs") {
            tabKey = "lungsTab";
            pageKey = "lungsPage";
            passageName = "Lungs";
        }
        else if (category === "bloodVessels") {
            tabKey = "bvTab";
            pageKey = "bvPage";
            passageName = "Blood Vessels";
        }
        else if (category === "bloodCells") {
            tabKey = "bloodCellsTab";
            pageKey = "bloodCellsPage";
            passageName = "Blood Cells";
        }
        else if (category === "brain") {
            tabKey = "brainTab";
            pageKey = "brainPage";
            passageName = "Brain";
        }
        else if (category === "heart") {
            tabKey = "heartTab";
            pageKey = "heartPage";
            passageName = "Heart";
        }
        else {
            console.error("Unknown activity category:", category);
            return;
        }

        // Set default tab and page values
        if (variables[tabKey] === undefined) {
            variables[tabKey] = "new";
        }

        if (variables[pageKey] === undefined) {
            variables[pageKey] = 1;
        }

        var tab = variables[tabKey];
        var page = variables[pageKey];

        // Retrieve the single list of activities
        var allItems = menu.activities || [];

        /*
        * Determine whether an activity has been completed.
        *
        * Dictionary entries marked completed: true remain completed
        * by default. Activities with an activityId can also be
        * completed through the player's saved progress.
        */
        function isCompleted(item) {
            if (item.completed === true) {
                return true;
            }

            if (!item.activityId) {
                return false;
            }

            var activityKey = category + "." + item.activityId;
            
            var progress = variables.activityProgress &&
                variables.activityProgress[activityKey];

            return !!(progress && progress.completed === true);
        }

        // Divide activities into New and Completed lists
        var newItems = [];
        var completedItems = [];

        allItems.forEach(function (item) {
            if (isCompleted(item)) {
                completedItems.push(item);
            }
            else {
                newItems.push(item);
            }
        });

        // Choose the list for the selected tab
        var items = tab === "completed" ? completedItems : newItems;

        // Calculate the number of pages (four activities per page)
        var itemsPerPage = 4;
        var pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));

        // Keep the selected page within the available range
        if (page < 1) {
            page = 1;
        }

        if (page > pageCount) {
            page = pageCount;
        }

        variables[pageKey] = page;

        // Select the activities to display on this page
        var start = (page - 1) * itemsPerPage;
        var visibleItems = items.slice(start, start + itemsPerPage);

        // Clear the existing menu
        container.replaceChildren();

        // Set menu CSS classes
        var wrapper = container;
        wrapper.className = "activity-page blood-vessels-menu";

        // Create the menu heading
        var heading = document.createElement("h1");
        heading.textContent = menu.title;
        wrapper.appendChild(heading);

        // Create the category description
        var message = document.createElement("p");
        message.className = "activity-message";
        message.textContent = menu.description;
        wrapper.appendChild(message);

        // Create Completed and New tabs
        var tabs = document.createElement("div");
        tabs.className = "activity-tabs";

        ["completed", "new"].forEach(function (tabName) {
            var link = document.createElement("a");
            link.href = "#";

            link.textContent =
                tabName === "completed" ? "Completed" : "New";

            // Highlight the currently selected tab
            if (tabName === tab) {
                link.classList.add("active");
            }

            link.addEventListener("click", function (event) {
                event.preventDefault();

                variables[tabKey] = tabName;
                variables[pageKey] = 1;

                Engine.play(passageName);
            });

            tabs.appendChild(link);
        });

        wrapper.appendChild(tabs);

        // Create the activity card list
        var list = document.createElement("div");
        list.className = "activity-list";

        visibleItems.forEach(function (item) {

            // Create the activity card
            var card = document.createElement("div");
            card.className = "activity-card";

            var itemCompleted = isCompleted(item);

            // Style completed activity cards
            if (itemCompleted) {
                card.classList.add("completed");
            }

            // Add the activity title
            var title = document.createElement("h3");
            title.textContent = item.title;
            card.appendChild(title);

            // Add the activity description
            var description = document.createElement("p");
            description.textContent = item.description;
            card.appendChild(description);

            // Display the completion status if the activity is completed
            if (itemCompleted) {
                var completedLabel = document.createElement("span");
                completedLabel.className = "completed-label";
                completedLabel.textContent = "✓ Completed  ";
                card.appendChild(completedLabel);
            }

            // If the activity is locked or has no passage, show "Coming soon!"
            if (item.locked || !item.passage) {
                var lockedLabel = document.createElement("span");
                lockedLabel.className = "activity-locked";
                lockedLabel.textContent = "Coming soon!";
                card.appendChild(lockedLabel);
            }
            else {
                // Allow both new and completed activities to be played
                var play = document.createElement("a");
                play.href = "#";

                // Display different link text depending on completion status
                play.textContent = itemCompleted
                    ? "↻ Replay Activity"
                    : "Play Activity →";

                // Navigate to the activity when the link is clicked
                play.addEventListener("click", function (event) {
                    event.preventDefault();

                    // Remember which activity the player selected
                    if (item.activityId) {
                        variables.selectedActivityId = item.activityId;
                    }

                    // Open the activity passage
                    Engine.play(item.passage);
                });

                card.appendChild(play);
            }

            // Add the card to the activity list
            list.appendChild(card);
        });


        wrapper.appendChild(list);

        // Create pagination controls
        var pagination = document.createElement("div");
        pagination.className = "activity-pagination";

        // Generate page buttons dynamically
        for (var pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
            (function (number) {
                var link = document.createElement("a");
                link.href = "#";
                link.textContent = String(number);

                // Highlight the current page
                if (number === page) {
                    link.classList.add("active");
                }

                link.addEventListener("click", function (event) {
                    event.preventDefault();

                    variables[pageKey] = number;
                    Engine.play(passageName);
                });

                pagination.appendChild(link);
            })(pageNumber);
        }

        wrapper.appendChild(pagination);

        // Create the button to return to the body map
        var back = document.createElement("p");
        back.className = "back-link";

        var backLink = document.createElement("button");
        backLink.type = "button";
        backLink.textContent = "← Body Map";
        backLink.classList.add("tutorial-button");

        backLink.addEventListener("click", function () {
            Engine.play("HomeScreen");
        });

        back.appendChild(backLink);
        wrapper.appendChild(back);
    };
    
    setup.renderLessonLearned = function (containerId) {

        // Find the container where the lesson will be displayed
        var container = document.getElementById(containerId);

        // If the container is not available yet, report the problem
        if (!container) {
            console.error("Lesson container not found:", containerId);
            return;
        }

        if (!container) {
            console.error("Lesson container not found:", containerId);
            return;
        }

        // Get the key for the current activity
        var activityKey = State.variables.currentLessonActivity;

        if (!activityKey) {
            container.textContent = "No lesson is available.";
            return;
        }

        // Separate the category and activity ID
        var separator = activityKey.indexOf(".");
        var category = activityKey.substring(0, separator);
        var activityId = activityKey.substring(separator + 1);

        // Retrieve the activity and its lesson content
        var activity = setup.getActivity(category, activityId);

        if (!activity || !activity.lesson) {
            container.textContent = "No lesson content is available for this activity.";
            return;
        }

        var lesson = activity.lesson;

        // Clear any previous lesson content
        container.replaceChildren();

        // Display the lesson heading
        var heading = document.createElement("h1");
        heading.textContent = "Lesson Learned!";
        container.appendChild(heading);

        // Display the introduction
        var introduction = document.createElement("p");
        introduction.textContent = lesson.introduction;
        container.appendChild(introduction);

        // Display the character's message
        var characterMessage = document.createElement("p");

        var characterName = document.createElement("strong");
        characterName.textContent = lesson.characterName + ": ";

        characterMessage.appendChild(characterName);
        characterMessage.appendChild(
            document.createTextNode('"' + lesson.characterLine + '"')
        );

        container.appendChild(characterMessage);

        // Display the key lesson to remember
        var rememberMessage = document.createElement("p");

        var rememberHeading = document.createElement("strong");
        rememberHeading.textContent = "Remember: ";

        rememberMessage.appendChild(rememberHeading);
        rememberMessage.appendChild(
            document.createTextNode(lesson.remember)
        );

        container.appendChild(rememberMessage);

        // Create the button to return to the body map
        var returnLink = document.createElement("button");
        returnLink.type = "button";
        returnLink.textContent = "← Return to the scenario";
        returnLink.classList.add("tutorial-button");

        returnLink.addEventListener("click", function () {

            // If the player is completing a scenario, return to its body map
            if (State.variables.selectedScenarioId) {
                Engine.play("ScenarioBodyMap");
            }
            else {
                // Otherwise, return to the normal home screen
                Engine.play("HomeScreen");
            }
        });

        container.appendChild(returnLink);
    };

    // Generates the menu for scenario selection
    setup.renderScenarioMenu = function (containerId) {

        // Retrieve the scenario dictionary
        var scenarios = setup.scenarios &&
            setup.scenarios.bodyScenarios;

        // Find the HTML container where the menu will appear
        var container = document.getElementById(containerId);

        if (!scenarios || !container) {
            console.error("Could not render scenario menu.");
            return;
        }

        // Access SugarCube variables
        var variables = State.variables;

        // Set the default selected tab
        if (variables.scenarioTab === undefined) {
            variables.scenarioTab = "new";
        }

        var tab = variables.scenarioTab;

        // Separate scenarios into New and Completed lists
        var newScenarios = [];
        var completedScenarios = [];

        Object.keys(scenarios).forEach(function (scenarioId) {

            var scenario = scenarios[scenarioId];

            // Check whether all activities in this scenario are completed
            var isCompleted =
                setup.checkScenarioCompletion(scenarioId) ||
                variables.replayingScenarioId === scenarioId;

            if (isCompleted) {
                completedScenarios.push({
                    id: scenarioId,
                    data: scenario
                });
            }
            else {
                newScenarios.push({
                    id: scenarioId,
                    data: scenario
                });
            }
        });

        // Choose the list for the selected tab
        var visibleScenarios =
            tab === "completed" ? completedScenarios : newScenarios;

        // Clear the existing menu
        container.replaceChildren();

        // Set menu CSS classes
        var wrapper = container;
        wrapper.className = "activity-page scenario-menu";

        // Create New and Completed tabs
        var tabs = document.createElement("div");
        tabs.className = "activity-tabs";

        ["completed", "new"].forEach(function (tabName) {

            var link = document.createElement("a");
            link.href = "#";

            link.textContent =
                tabName === "completed" ? "Completed" : "New";

            // Highlight the currently selected tab
            if (tabName === tab) {
                link.classList.add("active");
            }

            link.addEventListener("click", function (event) {
                event.preventDefault();

                variables.scenarioTab = tabName;

                // Return to the scenario menu to refresh the cards
                Engine.play("ScenarioMenu");
            });

            tabs.appendChild(link);
        });

        wrapper.appendChild(tabs);

        // Create the scenario card list
        var list = document.createElement("div");
        list.className = "activity-list";

        // Create a card for each scenario in the selected tab
        visibleScenarios.forEach(function (item) {

            var scenarioId = item.id;
            var scenario = item.data;

            // Create the scenario card
            var card = document.createElement("div");
            card.className = "activity-card";

            var isCompleted =
                setup.checkScenarioCompletion(scenarioId) ||
                variables.replayingScenarioId === scenarioId;

            // Style completed scenario cards
            if (isCompleted) {
                card.classList.add("completed");
            }

            // Add the scenario title
            var title = document.createElement("h3");
            title.textContent = scenario.title;
            card.appendChild(title);

            // Add the scenario description
            var description = document.createElement("p");
            description.textContent = scenario.description;
            card.appendChild(description);

            // Display completion status
            if (isCompleted) {
                var completedLabel = document.createElement("span");
                completedLabel.className = "completed-label";
                completedLabel.textContent = "✓ Completed  ";
                card.appendChild(completedLabel);
            }

            // Create the Choose or Replay Scenario link
            var choose = document.createElement("a");
            choose.href = "#";

            choose.textContent = isCompleted
                ? "↻ Replay Scenario"
                : "Choose Scenario →";

            choose.addEventListener("click", function (event) {
                event.preventDefault();

                // Remember which scenario the player selected
                variables.selectedScenarioId = scenarioId;

                // Check whether this scenario is already being replayed
                var replayAlreadyInProgress =
                    variables.replayingScenarioId === scenarioId;

                // Only reset progress when STARTING a new replay
                if (isCompleted && !replayAlreadyInProgress) {

                    // Remember that this scenario is being replayed
                    variables.replayingScenarioId = scenarioId;

                    // Reset all activities belonging to this scenario
                    scenario.activities.forEach(function (activityId) {

                        var result = setup.getScenarioActivity(activityId);

                        if (!result) {
                            return;
                        }

                        var activityKey =
                            result.category + "." + activityId;

                        if (variables.activityProgress &&
                            variables.activityProgress[activityKey]) {

                            variables.activityProgress[activityKey].completed = false;
                            variables.activityProgress[activityKey].correctChoices = [];
                        }
                    });
                }

                // Go to the scenario body map passage
                Engine.play("ScenarioBodyMap");
            });

            card.appendChild(choose);

            // Add the card to the scenario list
            list.appendChild(card);
        });

        wrapper.appendChild(list);
    };       

    
    // Generates the body map for the selected scenario
    setup.renderScenarioBodyMap = function (containerId) {

        // Find the HTML container
        var container = document.getElementById(containerId);

        if (!container) {
            console.error("Scenario body map container not found:", containerId);
            return;
        }

        // Retrieve the selected scenario
        var scenarioId = State.variables.selectedScenarioId;
        var scenario = setup.scenarios.bodyScenarios[scenarioId];

        if (!scenario) {
            console.error("Selected scenario not found:", scenarioId);
            return;
        }

        // Clear the existing content
        container.replaceChildren();

        // Create the page heading
        var heading = document.createElement("h1");
        heading.textContent = scenario.title;
        container.appendChild(heading);

        // Create the scenario description
        var description = document.createElement("p");
        description.textContent = scenario.description;
        container.appendChild(description);

        // Create the body map
        var bodyMap = document.createElement("div");
        bodyMap.className = "body-map";

        // Map activity categories to body map circles
        var bodySystems = {
            brain: {
                id: "brain",
                label: "🧠 Brain",
                className: "head"
            },
            bloodCells: {
                id: "bloodCells",
                label: "🩸 Blood Cells",
                className: "left"
            },
            heart: {
                id: "heart",
                label: "❤️ Heartbeat",
                className: "center"
            },
            bloodVessels: {
                id: "bloodVessels",
                label: "🩸 Blood Vessels",
                className: "right"
            },
            lungs: {
                id: "lungs",
                label: "🫁 Lungs",
                className: "legs"
            }
        };

        // Identify the body systems involved in the scenario
        var highlightedSystems = [];
        var activityByCategory = {};

        scenario.activities.forEach(function (activityId) {

             var result = setup.getScenarioActivity(activityId);

            if (!result) {
                console.error("Could not find scenario activity:", activityId);
                return;
            }

            // Build the global activity progress key
            var activityKey = result.category + "." + activityId;

            // Retrieve the global activity progress
            var activityProgress =
                State.variables.activityProgress &&
                State.variables.activityProgress[activityKey];

            // Skip activities that have already been completed
            if (activityProgress && activityProgress.completed === true) {
                return;
            }

            // Highlight only activities that are not yet completed
            if (bodySystems[result.category] &&
                highlightedSystems.indexOf(result.category) === -1) {

                highlightedSystems.push(result.category);
                activityByCategory[result.category] = activityId;
            }
        });

        // Create all five body map circles
        Object.keys(bodySystems).forEach(function (category) {

            var system = bodySystems[category];

            var circle = document.createElement("div");
            circle.className = "body-circle " + system.className;
            circle.id = system.id;
            circle.textContent = system.label;

            // Highlight systems connected to the selected scenario
            if (highlightedSystems.indexOf(category) !== -1) {
                circle.classList.add("scenario-highlighted");

                // Make the highlighted circle clickable
                circle.style.cursor = "pointer";
                circle.setAttribute("role", "button");
                circle.setAttribute("tabindex", "0");

                // Open the matching activity
                var activityId = activityByCategory[category];

                circle.addEventListener("click", function () {

                    var result = setup.getScenarioActivity(activityId);

                    if (!result) {
                        return;
                    }

                    var library = setup.activityLibraries[result.category];
                    var menuItem = null;

                    library.menu.activities.forEach(function (item) {
                        if (item.activityId === activityId) {
                            menuItem = item;
                        }
                    });

                    if (!menuItem || !menuItem.passage) {
                        console.error("Activity passage not found:", activityId);
                        return;
                    }

                    State.variables.selectedActivityId = activityId;
                    Engine.play(menuItem.passage);
                });

                // Allow keyboard users to activate the circle
                circle.addEventListener("keydown", function (event) {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        circle.click();
                    }
                });
            }
            else {
                circle.classList.add("scenario-dimmed");
            }

            bodyMap.appendChild(circle);
        });

        container.appendChild(bodyMap);

        
        // Check whether all scenario activities are completed
        var scenarioCompleted = setup.checkScenarioCompletion(scenarioId);

        // Clear replay status once the scenario is completed again
        if (scenarioCompleted &&
            State.variables.replayingScenarioId === scenarioId) {

            State.variables.replayingScenarioId = null;
        }

        // Display the scenario lesson button only when all activities are completed
        if (scenarioCompleted) {

            var lessonButton = document.createElement("button");
            lessonButton.type = "button";
            lessonButton.textContent = "View Scenario Lesson →";
            lessonButton.classList.add("tutorial-button");

            lessonButton.addEventListener("click", function () {
                Engine.play("ScenarioLesson");
            });

            container.appendChild(lessonButton);
        }

        // Create a button to return to the main scenario menu
        var menuButton = document.createElement("button");
        menuButton.type = "button";
        menuButton.textContent = "← Back to Scenario Menu";
        menuButton.classList.add("tutorial-button");

        menuButton.addEventListener("click", function () {
            Engine.play("ScenarioMenu");
        });

        container.appendChild(menuButton);

    };


    
    // Find an activity across all body-system dictionaries
    setup.getScenarioActivity = function (activityId) {

        // Go through each body-system dictionary
        for (var category in setup.activityLibraries) {

            var library = setup.activityLibraries[category];

            // Check whether the activity exists in this dictionary
            if (library && library[activityId]) {

                // Return the activity and its category
                return {
                    category: category,
                    activityId: activityId,
                    activity: library[activityId]
                };
            }
        }

        // Activity could not be found
        console.error("Scenario activity not found:", activityId);
        return null;
    };

    
    // Retrieves or creates progress for a scenario
    setup.getScenarioProgress = function (scenarioId) {

        if (!State.variables.scenarioProgress) {
            State.variables.scenarioProgress = {};
        }

        if (!State.variables.scenarioProgress[scenarioId]) {
            State.variables.scenarioProgress[scenarioId] = {
                activitiesCompleted: []
            };
        }

        return State.variables.scenarioProgress[scenarioId];
    };


    // Checks whether all activities in a scenario are completed
    setup.checkScenarioCompletion = function (scenarioId) {

        var scenario = setup.scenarios.bodyScenarios[scenarioId];

        if (!scenario) {
            return false;
        }

        var progress = setup.getScenarioProgress(scenarioId);

        return scenario.activities.every(function (activityId) {

            var result = setup.getScenarioActivity(activityId);

            if (!result) {
                return false;
            }

            var activityKey = result.category + "." + activityId;

            var activityProgress =
                State.variables.activityProgress &&
                State.variables.activityProgress[activityKey];

            if (activityProgress && activityProgress.completed === true) {

                // Record the completed activity for this scenario
                if (progress.activitiesCompleted.indexOf(activityId) === -1) {
                    progress.activitiesCompleted.push(activityId);
                }

                return true;
            }

            return false;
        });
    };

    // Renders the lesson for the completed scenario
    setup.renderScenarioLesson = function (containerId) {

        // Find the container where the lesson will be displayed
        var container = document.getElementById(containerId);

        if (!container) {
            console.error("Scenario lesson container not found:", containerId);
            return;
        }

        // Retrieve the currently selected scenario
        var scenarioId = State.variables.selectedScenarioId;
        var scenario = setup.scenarios.bodyScenarios[scenarioId];

        if (!scenario || !scenario.lesson) {
            container.textContent = "No scenario lesson is available.";
            return;
        }

        var lesson = scenario.lesson;

        // Clear any previous content
        container.replaceChildren();

        // Display the scenario heading
        var heading = document.createElement("h1");
        heading.textContent = "Scenario Lesson Learned!";
        container.appendChild(heading);

        // Display the introduction
        var introduction = document.createElement("p");
        introduction.textContent = lesson.introduction;
        container.appendChild(introduction);

        // Display Ruby's message
        var characterMessage = document.createElement("p");

        var characterName = document.createElement("strong");
        characterName.textContent = lesson.characterName + ": ";

        characterMessage.appendChild(characterName);
        characterMessage.appendChild(
            document.createTextNode('"' + lesson.characterLine + '"')
        );

        container.appendChild(characterMessage);

        // Display the key lesson to remember
        var rememberMessage = document.createElement("p");

        var rememberHeading = document.createElement("strong");
        rememberHeading.textContent = "Remember: ";

        rememberMessage.appendChild(rememberHeading);
        rememberMessage.appendChild(
            document.createTextNode(lesson.remember)
        );

        container.appendChild(rememberMessage);

        // Create a button to return to the scenario body map
        var returnButton = document.createElement("button");
        returnButton.type = "button";
        returnButton.textContent = "← Return to Scenario";
        returnButton.classList.add("tutorial-button");

        returnButton.addEventListener("click", function () {
            Engine.play("ScenarioBodyMap");
        });

        container.appendChild(returnButton);
    };


})();
