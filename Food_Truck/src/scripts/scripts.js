var orderOptions = [
    {
        custName: "Alice",
        dishName: "Black Bean Taco",
        requiredIngredients: ["Tortilla", "Black Beans", "Garlic"]
    },
    {
        custName: "Jordan",
        dishName: "Sage Turkey Taco",
        requiredIngredients: ["Tortilla", "Turkey", "Sage"]
    },
    {
        custName: "Sam",
        dishName: "Squash and Black Bean Bowl",
        requiredIngredients: ["Squash", "Black Beans", "Garlic"]
    },
    {
        custName: "Jesse",
        dishName: "Turkey and Squash Bowl",
        requiredIngredients: ["Turkey", "Squash", "Sage"]
    },
    {
        custName: "Tyler",
        dishName: "Garlic and Sage Medley",
        requiredIngredients: ["Garlic", "Sage", "Black Beans"]
    },
    {
        custName: "Anna",
        dishName: "Turkey and Garlic Delight",
        requiredIngredients: ["Turkey", "Garlic", "Squash"]
    },
    {
        custName: "Rique",
        dishName: "Sage and Squash Stir Fry",
        requiredIngredients: ["Sage", "Squash", "Garlic"]
    },
    {
        custName: "Morgan",
        dishName: "Turkey Bean Taco",
        requiredIngredients: ["Tortilla", "Turkey", "Black Beans"]
    },
    {
        custName: "Casey",
        dishName: "Garlic Squash Bowl",
        requiredIngredients: ["Squash", "Garlic", "Black Beans"]
    },
    {
        custName: "Riley",
        dishName: "Sage Bean Wrap",
        requiredIngredients: ["Tortilla", "Black Beans", "Sage"]
    },
    {
        custName: "Avery",
        dishName: "Turkey Sage Bowl",
        requiredIngredients: ["Turkey", "Sage", "Squash"]
    },
    {
        custName: "Quinn",
        dishName: "Garlic Turkey Taco",
        requiredIngredients: ["Tortilla", "Turkey", "Garlic"]
    },
    {
        custName: "Drew",
        dishName: "Squash Sage Wrap",
        requiredIngredients: ["Tortilla", "Squash", "Sage"]
    },
    {
        custName: "Jamie",
        dishName: "Black Bean Turkey Bowl",
        requiredIngredients: ["Black Beans", "Turkey", "Garlic"]
    },
    {
        custName: "Parker",
        dishName: "Sage Garlic Taco",
        requiredIngredients: ["Tortilla", "Sage", "Garlic"]
    },
    {
        custName: "Cameron",
        dishName: "Squash Turkey Medley",
        requiredIngredients: ["Squash", "Turkey", "Black Beans"]
    },
    {
        custName: "Reese",
        dishName: "Garlic Bean Wrap",
        requiredIngredients: ["Tortilla", "Garlic", "Black Beans"]
    },
    {
        custName: "Robin",
        dishName: "Sage Squash Turkey Bowl",
        requiredIngredients: ["Sage", "Squash", "Turkey"]
    },
    {
        custName: "Devon",
        dishName: "Black Bean Squash Taco",
        requiredIngredients: ["Tortilla", "Black Beans", "Squash"]
    },
    {
        custName: "Skyler",
        dishName: "Sage Garlic Turkey Bowl",
        requiredIngredients: ["Sage", "Garlic", "Turkey"]
    }
];

var orderTimerInterval = null;
var maxPrepTrayIngredients = 3;

window.FoodTruck = {
    /* Function Description: Returns the number of orders for the cuurent day,
       calculated based on current day number */
    ordersForDay: function() {
        if (SugarCube.State.variables.debugMode) {
            return 1;
        }

        var day = SugarCube.State.variables.currentDay;
        return Math.min(20, 2 + 2 * (day - 1));
        /* return Math.min(20, 2 + Math.pow(day - 1, 2)); */
    },

    /* Function Description: Returns the time limit for fulfilling an order for
       the current day, calculated based on current day number */
    orderTimeForDay: function() {
        var day = SugarCube.State.variables.currentDay;
        return Math.max(50, 120 - 5 * (day - 1));
        /* return Math.max(40, Math.round(40 + 80 / day)); */
    },

    /* Function Description: Updates the speed of the cooking skill-check marker
       based on the cyrrent day number */
    updateCookingMarkerSpeed: function() {
        var day = SugarCube.State.variables.currentDay;
        var speed = Math.min(3, 1 + (day - 1) * 0.25);
        var duration = 3.2 / speed;

        document.documentElement.style.setProperty("--skill-marker-duration", duration + "s");
    },

    /* Function Description: Toggles debug mode, which limits new days to one
       order */
    toggleDebugMode: function() {
        var state = SugarCube.State.variables;
        state.debugMode = !state.debugMode;
    },

    /* Function Description: Initializes the food truck for a new day */
    startDay: function() {
        var state = SugarCube.State.variables;
        this.stopOrderTimer();
        state.numOrders = this.ordersForDay();
        state.availableOrders = orderOptions.slice();
        state.dayScore = 0;
        state.ordersCompleted = 0;
        state.satisfactionScore = 0;
        state.healthinessScore = 0;
        state.prepTray = [];
        state.activeOrder = null;
        state.dayPreparationChoices = [];
        state.pendingIngredient = null;
        state.pendingMethod = null;
        state.cookingResult = null;
        state.orderTimer = this.orderTimeForDay();
        if (state.tutorialMode) {
            state.numOrders = 1;
            state.availableOrders = [orderOptions[0]];
            state.tutorialStep = "take-order";
            state.tutorialIngredientIndex = 0;
        }
    },

    startTutorial: function() {
        var state = SugarCube.State.variables;
        state.tutorialMode = true;
        this.startDay();
    },

    endTutorial: function() {
        var state = SugarCube.State.variables;
        state.tutorialMode = false;
        state.tutorialStep = null;
        state.tutorialIngredientIndex = 0;
    },

    advanceTutorialIngredient: function() {
        var state = SugarCube.State.variables;

        if (!state.tutorialMode || state.tutorialStep !== "result") {
            return;
        }

        state.tutorialIngredientIndex += 1;
        state.tutorialStep = state.tutorialIngredientIndex <
            state.activeOrder.requiredIngredients.length
            ? "ingredient"
            : "return-to-order";
    },

    startTutorialIngredients: function() {
        var state = SugarCube.State.variables;

        if (state.tutorialMode && state.tutorialStep === "assembly") {
            state.tutorialStep = "ingredient";
        }
    },

    finishTutorialPrep: function() {
        var state = SugarCube.State.variables;

        if (state.tutorialMode && state.tutorialStep === "return-to-order") {
            state.tutorialStep = "fulfill";
        }
    },

    updateTutorialHighlights: function() {
        var state = SugarCube.State.variables;
        var buttons = document.querySelectorAll("button.tutorial-target");
        var passage = SugarCube.State.passage;
        var targetText = null;

        buttons.forEach(function(button) {
            button.classList.remove("tutorial-target");
        });

        if (!state.tutorialMode) {
            return;
        }

        if (state.tutorialStep === "take-order") {
            targetText = "Take Order";
        } else if (state.tutorialStep === "assembly") {
            targetText = "Assembly Station";
        } else if (state.tutorialStep === "ingredient" && passage === "AssemblyStation") {
            targetText = state.activeOrder.requiredIngredients[state.tutorialIngredientIndex];
        } else if (state.tutorialStep === "method" && passage === "PrepareIngredient") {
            targetText = "(Healthy)";
        } else if (state.tutorialStep === "stop" && passage === "CookingMinigame") {
            targetText = "Stop Cooking";
        } else if (state.tutorialStep === "result" && passage === "CookingResult") {
            targetText = "Assembly Station";
        } else if (state.tutorialStep === "return-to-order" && passage === "AssemblyStation") {
            targetText = "Order Window";
        } else if (state.tutorialStep === "fulfill") {
            targetText = "Fulfill Order";
        }

        if (!targetText) {
            return;
        }

        Array.prototype.forEach.call(document.querySelectorAll("button"), function(button) {
            if (button.textContent.indexOf(targetText) !== -1) {
                button.classList.add("tutorial-target");
            }
        });
    },

    /* Function Description: Starts the next day by incrementing the current
       day and calling startDay */
    startNextDay: function() {
        SugarCube.State.variables.currentDay += 1;
        this.startDay();
    },

    /* Function Description: Randomly selects an order from today's remaining
       unique customers */
    takeOrder: function() {
        var state = SugarCube.State.variables;

        if (state.numOrders < 1 || state.activeOrder) {
            return;
        }
        if (!state.availableOrders.length) {
            throw new Error("No customers remain for today's orders (has to be a unique customer).");
        }

        var customerIndex = Math.floor(Math.random() * state.availableOrders.length);
        state.activeOrder = state.availableOrders.splice(customerIndex, 1)[0];
        state.orderTimer = this.orderTimeForDay();
        if (state.tutorialMode) {
            state.tutorialStep = "assembly";
        }
        this.startOrderTimer();
    },

    /* Function Description: Returns a string representation of the ingredient
       at the specified index, including its image and name */
    ingredientLabel: function(index) {
        var ingredients = SugarCube.State.variables.menuIngredients;
        var ingredient = ingredients[index];

        if (!ingredient) {
            throw new RangeError("Unknown ingredient index: " + index);
        }

        return ingredient.img + "\n" + ingredient.name;
    },

    /* Function Description: Returns a string representation of the preparation
       method for the pending ingredient, including its label and whether it's
       healthy or unhealthy */
    methodLabel: function(type) {
        var ingredient = SugarCube.State.variables.pendingIngredient;

        if (!ingredient || !ingredient.methods || !ingredient.methods[type]) {
            throw new Error("Cannot display a preparation method without a valid ingredient and method.");
        }

        return (type === "healthy" ? "A. " : "B. ") + ingredient.methods[type] +
            (type === "healthy" ? " (Healthy)" : " (Unhealthy)");
    },

    /* Function Description: Selects an ingredient from the menu by its index,
       adding it to the prep tray if there's space and resetting any pending
       preparation method or cooking result */
    selectIngredient: function(index) {
        var state = SugarCube.State.variables;
        var ingredient = state.menuIngredients[index];

        if (!state.activeOrder) {
            throw new Error("Cannot add an ingredient without an active order.");
        }
        if (!ingredient) {
            throw new RangeError("Unknown ingredient index: " + index);
        }
        if (state.prepTray.length >= maxPrepTrayIngredients) {
            state.pendingIngredient = null;
            state.pendingMethod = null;
            state.cookingResult = null;
            return;
        }

        state.pendingIngredient = ingredient;
        state.pendingMethod = null;
        state.cookingResult = null;
        if (state.tutorialMode) {
            state.tutorialStep = "method";
        }
    },

    /* Function Description: Selects a preparation method for the pending
     ingredient, resetting any previous cooking result */
    chooseMethod: function(type) {
        var state = SugarCube.State.variables;
        var ingredient = state.pendingIngredient;

        if (!ingredient || !ingredient.methods || !ingredient.methods[type]) {
            throw new Error("Cannot choose a preparation method without a valid ingredient and method.");
        }

        state.pendingMethod = {
            type: type,
            label: ingredient.methods[type]
        };
        state.cookingResult = null;
        if (state.tutorialMode) {
            state.tutorialStep = "stop";
        }
    },

    /* Function Description: Stops the cooking skill-check, calculates the
       doneness of the ingredient based on the marker's position, and adds the
       result to the day's preparation choices and prep tray */
    stopCooking: function() {
        var state = SugarCube.State.variables;
        var marker = document.getElementById("skill-marker");
        var track = document.querySelector(".skill-track");

        if (!state.pendingIngredient || !state.pendingMethod) {
            throw new Error("Cannot finish cooking without an ingredient and preparation method.");
        }
        if (state.cookingResult) {
            return;
        }
        if (state.prepTray.length >= maxPrepTrayIngredients) {
            return;
        }
        if (!marker || !track || track.getBoundingClientRect().width === 0) {
            throw new Error("The cooking skill-check track or marker is unavailable.");
        }

        var trackBounds = track.getBoundingClientRect();
        var markerBounds = marker.getBoundingClientRect();
        var markerCenter = markerBounds.left + markerBounds.width / 2;
        var position = Math.max(0, Math.min(100,
            ((markerCenter - trackBounds.left) / trackBounds.width) * 100
        ));
        var doneness = position < 42 ? "Raw" : position <= 58 ? "Perfect" : "Overcooked";
        var choice = {
            ingredient: state.pendingIngredient.name,
            method: state.pendingMethod.label,
            healthy: state.pendingMethod.type === "healthy",
            doneness: doneness,
            position: position
        };

        marker.style.animationPlayState = "paused";
        state.dayPreparationChoices.push(choice);
        state.prepTray.push(choice.ingredient);
        state.cookingResult = choice;
        if (state.tutorialMode) {
            state.tutorialStep = "result";
        }
    },

    /* Function Description: Clears the prep tray and resets the tray display in
       the UI */
    clearTray: function() {
        SugarCube.State.variables.prepTray = [];
        window.jQuery("#tray").html("<em>Tap ingredients to add them to the tray.</em>");
    },

    /* Function Description: Checks if the prep tray matches the required
       ingredients for the active order, returning true if they match and false
       otherwise */
    canFulfillOrder: function() {
        var state = SugarCube.State.variables;
        var tray = state.prepTray;
        var required = state.activeOrder && state.activeOrder.requiredIngredients;

        if (!Array.isArray(tray) || !Array.isArray(required) || tray.length !== required.length) {
            return false;
        }

        var counts = new Map();
        tray.forEach(function(ingredient) {
            counts.set(ingredient, (counts.get(ingredient) || 0) + 1);
        });

        return required.every(function(ingredient) {
            var count = counts.get(ingredient) || 0;

            if (count === 0) {
                return false;
            }

            counts.set(ingredient, count - 1);
            return true;
        });
    },

    /* Function Description: Calculates the healthiness and satisfaction scores
       for the day's preparation choices, returning an object with both scores */
    calculateDayScores: function() {
        var state = SugarCube.State.variables;
        var choices = state.dayPreparationChoices;
        var totalChoices = choices.length;
        var healthyChoices = 0;
        var perfectChoices = 0;

        choices.forEach(function(choice) {
            if (choice.healthy) {
                healthyChoices += 1;
            }
            if (choice.doneness === "Perfect") {
                perfectChoices += 1;
            }
        });

        state.healthinessScore = totalChoices === 0
            ? 0
            : Math.round(healthyChoices / totalChoices * 5);
        state.satisfactionScore = totalChoices === 0
            ? 0
            : Math.round(perfectChoices / totalChoices * 5);

        return {
            healthinessScore: state.healthinessScore,
            satisfactionScore: state.satisfactionScore
        };
    },

    /* Function Description: Returns a string representation of a star rating
       based on the provided score, with filled and empty stars */
    starRating: function(score) {
        var filledStars = Math.max(0, Math.min(5, Math.round(score || 0)));

        return "★".repeat(filledStars) + "☆".repeat(5 - filledStars);
    },

    /* Function Description: Returns a string of tips based on the day's
       satisfaction and healthiness scores, providing feedback for improvement */
    dayTips: function() {
        var state = SugarCube.State.variables;
        var tips = [];

        if (state.satisfactionScore <= 2) {
            tips.push("Aim for the green zone to serve more perfectly cooked ingredients.");
        } else if (state.satisfactionScore === 3) {
            tips.push("A little more precision in the cooking check can earn more satisfaction score.");
        } else {
            tips.push("Your ingredients were cooked just right, good job!");
        }

        tips.push("\n\n");

        if (state.healthinessScore <= 2) {
            tips.push("Try choosing healthier preparation methods more often to boost your healthiness score.");
        } else if (state.healthinessScore === 3) {
            tips.push("Try a few more healthy preparation methods to improve your healthiness score.");
        } else {
            tips.push("You made healthy choices throughout the day, good job!");
        }

        return tips.join(" ");
    },

    /* Function Description: Stops the order timer, calculates the day's scores,
       and transitions to the DayTally passage */
    finishDay: function() {
        this.stopOrderTimer();
        this.calculateDayScores();
        SugarCube.Engine.play("DayTally");
    },

    /* Function Description: Fulfills the current order if the prep tray matches
       the required ingredients, updating scores and moving to the next order
       or finishing the day */
    fulfillOrder: function() {
        var state = SugarCube.State.variables;

        if (!this.canFulfillOrder()) {
            throw new Error("The prep tray does not match the active order.");
        }

        state.ordersCompleted += 1;
        state.dayScore += 1;
        state.numOrders -= 1;
        state.activeOrder = null;
        state.prepTray = [];
        this.stopOrderTimer();

        if (state.tutorialMode) {
            state.tutorialStep = "tally";
        }

        if (state.numOrders === 0) {
            this.finishDay();
        } else {
            SugarCube.Engine.play("TakeOrderScreen");
        }
    },

    /* Function Description: Starts the order timer interval, which decrements
       the order timer every second and handles order expiration */
    startOrderTimer: function() {
        var self = this;

        this.stopOrderTimer();
        if (!SugarCube.State.variables.activeOrder) {
            return;
        }

        orderTimerInterval = setInterval(function() {
            var state = SugarCube.State.variables;

            if (!state.activeOrder) {
                self.stopOrderTimer();
                return;
            }

            state.orderTimer = Math.max(0, state.orderTimer - 1);
            self.updateOrderTimerDisplay();

            // clear all order details after reaching 0 on the timer
            if (state.orderTimer <= 0) {
                self.stopOrderTimer();
                state.activeOrder = null;
                state.prepTray = [];
                state.pendingIngredient = null;
                state.pendingMethod = null;
                state.cookingResult = null;
                state.numOrders -= 1;

                if (state.numOrders === 0) {
                    self.finishDay();
                } else {
                    SugarCube.Engine.play("TakeOrderScreen");
                }
            }
        }, 1000);
    },

    /* Function Description: Stops the order timer interval if it's running */
    stopOrderTimer: function() {
        if (orderTimerInterval !== null) {
            clearInterval(orderTimerInterval);
            orderTimerInterval = null;
        }
    },

    /* Function Description: Returns a string representation of the order timer
       in the format "MM:SS" */
    orderTimerDisplay: function() {
        var seconds = Math.max(0, SugarCube.State.variables.orderTimer || 0);
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;

        return String(minutes).padStart(2, "0") + ":" +
            String(remainingSeconds).padStart(2, "0");
    },

    /* Function Description: Updates the order timer display in the UI */
    updateOrderTimerDisplay: function() {
        var timerElement = document.getElementById("order-timer");

        if (timerElement) {
            timerElement.textContent = this.orderTimerDisplay();
        }
    }
};

window.jQuery(document).on(":passagedisplay", function() {
    window.FoodTruck.updateTutorialHighlights();
});