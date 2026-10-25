
/*
 * scripts.js
 * Reusable activity functions for SugarCube 2.30.0
 */

(function () {
    "use strict";

    setup.activityLibraries = setup.activityLibraries || {};

    
    // Find an activity in one of the activity dictionaries.
    
    setup.getActivity = function (category, activityId) {
    var library = setup.activityLibraries[category];

    if (!library || activityId === "menu" || !library[activityId]) {
        console.error(
            "Activity not found:",
            category,
            activityId
        );
        return null;
    }

    return library[activityId];
};

    
    //  Get or create the saved progress for an activity.
    //  Progress is stored in SugarCube's story variables.
    
    setup.getActivityProgress = function (activityKey) {
        var variables = State.variables;

        if (!variables.activityProgress) {
            variables.activityProgress = {};
        }

        if (!variables.activityProgress[activityKey]) {
            variables.activityProgress[activityKey] = {
                correctChoices: []
            };
        }

        return variables.activityProgress[activityKey];
    };

    /*
     * Show feedback in SugarCube's dialog popup.
     */
    setup.showFeedback = function (title, message) {
        Dialog.setup(title);
        Dialog.wiki(message);
        Dialog.open();
    };

    /*
     * Update the activity's progress display.
     */
    
    setup.renderProgress = function (
        activity,
        progress,
        container
    ) {
        container.replaceChildren();

        var count = progress.correctChoices.length;
        var total = activity.requiredCorrect;

        var summary = document.createElement("p");

        if (count >= total) {
            var heading = document.createElement("h3");
            heading.textContent =
                activity.completionHeading ||
                "Activity completed!";

            var nextButton = document.createElement("button");
            nextButton.type = "button";
            nextButton.textContent =
                activity.continueLabel || "Continue";

            nextButton.addEventListener("click", function () {
                Engine.play(activity.nextPassage);
            });

            container.appendChild(heading);
            container.appendChild(nextButton);
        } else {
            var hint = document.createElement("p");
            hint.textContent =
                "Choose " + (total - count) +
                " more healthy action(s) to continue.";

            container.appendChild(hint);
        }
    };


    /*
     * Process a player's answer.
     */
    setup.checkAnswer = function (
        activity,
        choice,
        progress,
        progressContainer
    ) {
        var alreadyChosen =
            progress.correctChoices.indexOf(choice.id) !== -1;

        if (choice.correct && alreadyChosen) {
            setup.showFeedback(
                "Already Completed",
                "You've already chosen that healthy action. Try another one!"
            );
            return;
        }

        if (choice.correct) {
            progress.correctChoices.push(choice.id);
        }

        setup.showFeedback(
            choice.feedbackTitle,
            choice.feedback
        );

        setup.renderProgress(
            activity,
            progress,
            progressContainer
        );
    };

    /*
     * Render an activity from its dictionary.
     */
    setup.renderActivity = function (
        category,
        activityId,
        containerId
    ) {
        var activity = setup.getActivity(
            category,
            activityId
        );

        var container = document.getElementById(containerId);

        if (!activity || !container) {
            console.error(
                "Could not render activity:",
                activityId
            );
            return;
        }

        var activityKey = category + "." + activityId;
        var progress = setup.getActivityProgress(activityKey);

        container.replaceChildren();

        var intro = document.createElement("p");
        intro.textContent = activity.introduction;
        container.appendChild(intro);

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

        var mission = document.createElement("h3");
        mission.textContent = activity.mission;
        container.appendChild(mission);

        var instructions = document.createElement("p");
        instructions.textContent = activity.instructions;
        container.appendChild(instructions);

        var buttons = document.createElement("div");
        buttons.className = "answer-buttons";

        var progressContainer = document.createElement("div");
        progressContainer.id = "activity-progress";

        activity.choices.forEach(function (choice) {
            var button = document.createElement("button");
            button.type = "button";
            button.textContent = choice.label;

            button.addEventListener("click", function () {
                setup.checkAnswer(
                    activity,
                    choice,
                    progress,
                    progressContainer
                );
            });

            buttons.appendChild(button);
        });

        container.appendChild(buttons);
        container.appendChild(document.createElement("hr"));
        container.appendChild(progressContainer);

        setup.renderProgress(
            activity,
            progress,
            progressContainer
        );
    };
    
setup.renderActivityMenu = function (category, containerId) {
    var library = setup.activityLibraries[category];
    var menu = library && library.menu;
    var container = document.getElementById(containerId);

    if (!menu || !container) {
        console.error("Could not render activity menu:", category);
        return;
    }

    var variables = State.variables;
    var tabKey;
    var pageKey;
    var passageName;

    if (category === "lungs") {
    tabKey = "lungsTab";
    pageKey = "lungsPage";
    passageName = "Lungs";
    } else if (category === "bloodVessels") {
        tabKey = "bvTab";
        pageKey = "bvPage";
        passageName = "Blood Vessels";
    } else if (category === "bloodCells") {
        tabKey = "bloodCellsTab";
        pageKey = "bloodCellsPage";
        passageName = "Blood Cells";
    } else if (category === "brain") {
        tabKey = "brainTab";
        pageKey = "brainPage";
        passageName = "Brain";
    } else if (category === "heart") {
    tabKey = "heartTab";
    pageKey = "heartPage";
    passageName = "Heart";
    }
    else {
        console.error("Unknown activity category:", category);
        return;
    }

    if (variables[tabKey] === undefined) variables[tabKey] = "new";
    if (variables[pageKey] === undefined) variables[pageKey] = 1;

    var tab = variables[tabKey];
    var page = variables[pageKey];
    var items = menu[tab] || [];
    var start = (page - 1) * 2;
    var visibleItems = items.slice(start, start + 2);

    container.replaceChildren();

    var wrapper = container;
    wrapper.className = "activity-page blood-vessels-menu";

    var heading = document.createElement("h1");
    heading.textContent = menu.title;
    wrapper.appendChild(heading);

    var message = document.createElement("p");
    message.className = "activity-message";
    message.textContent = menu.description;
    wrapper.appendChild(message);

    var tabs = document.createElement("div");
    tabs.className = "activity-tabs";

    ["completed", "new"].forEach(function (tabName) {
        var link = document.createElement("a");
        link.href = "#";
        link.textContent = tabName === "completed" ? "Completed" : "New";

        link.addEventListener("click", function (event) {
            event.preventDefault();
            variables[tabKey] = tabName;
            variables[pageKey] = 1;
            Engine.play(passageName);
        });

        tabs.appendChild(link);
    });

    wrapper.appendChild(tabs);

    var list = document.createElement("div");
    list.className = "activity-list";

    visibleItems.forEach(function (item) {
        var card = document.createElement("div");
        card.className = "activity-card";

        if (tab === "completed" && item.completed) {
            card.classList.add("completed");
        }

        var title = document.createElement("h3");
        title.textContent = item.title;
        card.appendChild(title);

        var description = document.createElement("p");
        description.textContent = item.description;
        card.appendChild(description);

        if (item.completed) {
            var completed = document.createElement("span");
            completed.className = "completed-label";
            completed.textContent = "✓ Completed";
            card.appendChild(completed);
        } else if (item.locked || !item.passage) {
            var locked = document.createElement("span");
            locked.className = "activity-locked";
            locked.textContent = "Coming soon!";
            card.appendChild(locked);
        } else {
            var play = document.createElement("a");
            play.href = "#";
            play.textContent = "Play Activity →";

            play.addEventListener("click", function (event) {
                event.preventDefault();
                Engine.play(item.passage);
            });

            card.appendChild(play);
        }

        list.appendChild(card);
    });

    wrapper.appendChild(list);

    var pagination = document.createElement("div");
    pagination.className = "activity-pagination";

    [1, 2].forEach(function (pageNumber) {
        var link = document.createElement("a");
        link.href = "#";
        link.textContent = String(pageNumber);

        link.addEventListener("click", function (event) {
            event.preventDefault();
            variables[pageKey] = pageNumber;
            Engine.play(passageName);
        });

        pagination.appendChild(link);
    });

    wrapper.appendChild(pagination);

    var back = document.createElement("p");
    back.className = "back-link";

    var backLink = document.createElement("button");
    backLink.type = "button";
    backLink.textContent = "← Body Map";

    backLink.addEventListener("click", function () {
        Engine.play("HomeScreen");
    });

    backLink.addEventListener("click", function (event) {
        event.preventDefault();
        Engine.play("HomeScreen");
    });

    back.appendChild(backLink);
    wrapper.appendChild(back);
};

})();
