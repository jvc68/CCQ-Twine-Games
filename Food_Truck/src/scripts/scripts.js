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
var lastTickTime = 0;
var maxPrepTrayIngredients = 3;
var maxTickets = 3;

window.FoodTruck = {
    /* Function Description: Returns the ticket the player is currently
       preparing, or null if none is selected */
    getActiveOrder: function() {
        var state = SugarCube.State.variables;

        if (state.activeTicketId === null || !Array.isArray(state.tickets)) {
            return null;
        }

        return state.tickets.find(function(ticket) {
            return ticket.id === state.activeTicketId;
        }) || null;
    },

    /* Function Description: Adds new tickets until the ticket limit is reached
       or no more orders remain for the day (orders already on a ticket count
       toward the day's remaining orders) */
    fillTickets: function() {
        var state = SugarCube.State.variables;

        while (state.tickets.length < maxTickets &&
            state.numOrders - state.tickets.length > 0) {
            var order = this.pickOrder();

            if (!order) {
                break;
            }
            state.tickets.push(this.makeTicket(order));
        }
    },

    /* Function Description: Randomly picks an order for a new ticket, preferring
       customers not yet used today and never one already on a ticket (or in
       the optional exclude list). Returns null if no customer is available. */
    pickOrder: function(excludeNames) {
        var state = SugarCube.State.variables;
        var excluded = (excludeNames || []).concat(state.tickets.map(function(ticket) {
            return ticket.custName;
        }));

        if (state.availableOrders.length) {
            var index = Math.floor(Math.random() * state.availableOrders.length);

            return state.availableOrders.splice(index, 1)[0];
        }

        // every customer has been used today, so recycle ones not on a ticket
        var recyclable = orderOptions.filter(function(order) {
            return excluded.indexOf(order.custName) === -1;
        });

        return recyclable.length
            ? recyclable[Math.floor(Math.random() * recyclable.length)]
            : null;
    },

    /* Function Description: Builds a new ticket with a full timer from an order */
    makeTicket: function(order) {
        var state = SugarCube.State.variables;
        var time = this.orderTimeForDay();
        var ticket = {
            id: state.nextTicketId,
            custName: order.custName,
            dishName: order.dishName,
            requiredIngredients: order.requiredIngredients.slice(),
            timeLeft: time,
            timeTotal: time
        };

        state.nextTicketId += 1;
        return ticket;
    },

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
        state.tickets = [];
        state.activeTicketId = null;
        state.nextTicketId = 1;
        state.dayPreparationChoices = [];
        state.pendingIngredient = null;
        state.pendingMethod = null;
        state.cookingResult = null;
        if (state.tutorialMode) {
            state.numOrders = 1;
            state.availableOrders = [orderOptions[0]];
            state.tutorialStep = "take-order";
            state.tutorialIngredientIndex = 0;
        }
        this.fillTickets();
        this.startOrderTimer();
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
        this.stopOrderTimer();
        state.tickets = [];
        state.activeTicketId = null;
        // returning to the menu always restarts progress at day 1
        state.currentDay = 1;
    },

    advanceTutorialIngredient: function() {
        var state = SugarCube.State.variables;

        if (!state.tutorialMode || state.tutorialStep !== "result") {
            return;
        }

        state.tutorialIngredientIndex += 1;
        state.tutorialStep = state.tutorialIngredientIndex <
            this.getActiveOrder().requiredIngredients.length
            ? "ingredient"
            : "return-to-order";
    },

    startTutorialIngredients: function() {
        var state = SugarCube.State.variables;

        if (state.tutorialMode && state.tutorialStep === "assembly") {
            state.tutorialStep = "ingredient";
        }
    },

    restoreTutorialIngredient: function() {
        var state = SugarCube.State.variables;
        var activeOrder = this.getActiveOrder();
        var required = activeOrder && activeOrder.requiredIngredients;

        if (!state.tutorialMode || !Array.isArray(required)) {
            return;
        }

        var nextIndex = required.findIndex(function(ingredient) {
            return state.prepTray.indexOf(ingredient) === -1;
        });

        if (nextIndex === -1) {
            state.tutorialStep = "return-to-order";
            return;
        }

        state.tutorialIngredientIndex = nextIndex;
        state.tutorialStep = "ingredient";
    },

    returnToAssembly: function() {
        this.restoreTutorialIngredient();
    },

    finishTutorialPrep: function() {
        var state = SugarCube.State.variables;

        if (!state.tutorialMode) {
            return;
        }

        if (this.canFulfillOrder()) {
            state.tutorialStep = "fulfill";
        } else {
            state.tutorialStep = "assembly";
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
        document.querySelectorAll(".ingredient-button").forEach(function(button) {
            button.classList.remove("tutorial-disabled");
            button.disabled = false;
        });

        if (!state.tutorialMode) {
            return;
        }

        if (state.tutorialStep === "take-order") {
            targetText = "Take Order";
        } else if (state.tutorialStep === "assembly") {
            targetText = "Assembly Station";
        } else if (state.tutorialStep === "ingredient" && passage === "AssemblyStation") {
            targetText = this.getActiveOrder().requiredIngredients[state.tutorialIngredientIndex];
        } else if (state.tutorialStep === "method" && passage === "PrepareIngredient") {
            targetText = "(Healthy)";
        } else if (state.tutorialStep === "stop" && passage === "CookingMinigame") {
            targetText = "Stop Cooking";
        } else if (state.tutorialStep === "result" && passage === "CookingResult") {
            targetText = "Assembly Station";
        } else if (state.tutorialStep === "return-to-order" && passage === "AssemblyStation") {
            targetText = "Order Window";
        } else if (state.tutorialStep === "fulfill" &&
            passage === "TakeOrderScreen") {
            targetText = "Fulfill Order";
        } else if (state.tutorialStep === "fulfill" &&
            passage === "AssemblyStation") {
            targetText = "Order Window";
        }

        if (!targetText) {
            return;
        }

        Array.prototype.forEach.call(document.querySelectorAll("button"), function(button) {
            if (button.textContent.indexOf(targetText) !== -1) {
                button.classList.add("tutorial-target");
            }
        });

        if (passage === "AssemblyStation" &&
            state.tutorialStep === "ingredient") {
            document.querySelectorAll(".ingredient-button").forEach(function(button) {
                if (button.textContent.indexOf(targetText) === -1) {
                    button.classList.add("tutorial-disabled");
                    button.disabled = true;
                }
            });
        }
    },

    /* Function Description: Starts the next day by incrementing the current
       day and calling startDay */
    startNextDay: function() {
        SugarCube.State.variables.currentDay += 1;
        this.startDay();
    },

    /* Function Description: Removes the cooking choices made for a ticket that
       was cancelled or expired, so they no longer affect the day's scores */
    discardTicketChoices: function(ticketId) {
        var state = SugarCube.State.variables;

        state.dayPreparationChoices = state.dayPreparationChoices.filter(function(choice) {
            return choice.ticketId !== ticketId;
        });
    },

    /* Function Description: Immediately discards a ticket and replaces it in
       place with a different random ticket (fresh timer). The day's remaining
       order count is unchanged. */
    cancelTicket: function(ticketId) {
        var state = SugarCube.State.variables;
        var index = state.tickets.findIndex(function(t) {
            return t.id === ticketId;
        });

        if (index === -1) {
            return;
        }

        var ticket = state.tickets[index];
        var replacement = this.pickOrder([ticket.custName]) || ticket;

        this.discardTicketChoices(ticket.id);
        if (ticket.id === state.activeTicketId) {
            state.activeTicketId = null;
            state.prepTray = [];
            state.pendingIngredient = null;
            state.pendingMethod = null;
            state.cookingResult = null;
            if (state.tutorialMode) {
                state.tutorialStep = "take-order";
            }
        }
        state.tickets[index] = this.makeTicket(replacement);
    },

    /* Function Description: Takes the ticket with the given id as the order
       being prepared. Switching tickets clears the prep tray. */
    selectOrder: function(ticketId) {
        var state = SugarCube.State.variables;
        var ticket = state.tickets.find(function(t) {
            return t.id === ticketId;
        });

        if (!ticket || state.activeTicketId === ticketId) {
            return;
        }

        state.activeTicketId = ticketId;
        state.prepTray = [];
        state.pendingIngredient = null;
        state.pendingMethod = null;
        state.cookingResult = null;
        if (state.tutorialMode) {
            state.tutorialStep = "assembly";
        }
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

        if (!this.getActiveOrder()) {
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
            ticketId: state.activeTicketId,
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
        var state = SugarCube.State.variables;

        state.prepTray = [];
        if (state.tutorialMode && state.tutorialStep !== "assembly") {
            state.tutorialIngredientIndex = 0;
            state.tutorialStep = "ingredient";
        }
        state.pendingIngredient = null;
        state.pendingMethod = null;
        state.cookingResult = null;
        SugarCube.Engine.play("AssemblyStation");
    },

    /* Function Description: Checks if the prep tray matches the required
       ingredients for the active order, returning true if they match and false
       otherwise */
    canFulfillOrder: function() {
        var state = SugarCube.State.variables;
        var tray = state.prepTray;
        var activeOrder = this.getActiveOrder();
        var required = activeOrder && activeOrder.requiredIngredients;

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
        state.tickets = state.tickets.filter(function(ticket) {
            return ticket.id !== state.activeTicketId;
        });
        state.activeTicketId = null;
        state.prepTray = [];

        if (state.tutorialMode) {
            state.tutorialStep = "tally";
        }

        if (state.numOrders === 0) {
            this.finishDay();
        } else {
            this.fillTickets();
            SugarCube.Engine.play("TakeOrderScreen");
        }
    },

    /* Function Description: Starts the shared timer interval, which ticks every
       ticket down several times a second so the progress bars animate smoothly */
    startOrderTimer: function() {
        var self = this;

        this.stopOrderTimer();
        if (!SugarCube.State.variables.tickets.length) {
            return;
        }

        lastTickTime = Date.now();
        orderTimerInterval = setInterval(function() {
            self.tickOrders();
        }, 100);
    },

    /* Function Description: Ticks every ticket's timer down by the real time
       elapsed. A taken ticket that expires is cancelled (counting as a handled
       order) and a new ticket fills its slot if orders remain. A ticket that
       was never taken is instead swapped for a different random ticket with a
       fresh timer. The day ends once no orders are left. */
    tickOrders: function() {
        var state = SugarCube.State.variables;

        if (!state.tickets.length) {
            this.stopOrderTimer();
            return;
        }

        var now = Date.now();
        var elapsed = Math.min(1, (now - lastTickTime) / 1000);
        var self = this;
        var changed = false;
        var activeExpired = false;
        var remaining = [];

        lastTickTime = now;

        state.tickets.forEach(function(ticket) {
            ticket.timeLeft = Math.max(0, ticket.timeLeft - elapsed);
        });

        state.tickets.forEach(function(ticket) {
            if (ticket.timeLeft > 0) {
                remaining.push(ticket);
                return;
            }

            changed = true;
            self.discardTicketChoices(ticket.id);
            if (ticket.id === state.activeTicketId) {
                activeExpired = true;
                state.numOrders -= 1;
                return;
            }

            // untaken ticket: replace it with a different random customer
            var replacement = self.pickOrder([ticket.custName]) || ticket;
            remaining.push(self.makeTicket(replacement));
        });

        if (!changed) {
            this.updateTicketDisplays();
            return;
        }

        state.tickets = remaining;

        if (activeExpired) {
            state.activeTicketId = null;
            state.prepTray = [];
            state.pendingIngredient = null;
            state.pendingMethod = null;
            state.cookingResult = null;
        }

        if (state.numOrders <= 0) {
            this.finishDay();
            return;
        }

        this.fillTickets();

        if (activeExpired) {
            SugarCube.Engine.play("TakeOrderScreen");
        } else if (SugarCube.State.passage === "TakeOrderScreen") {
            SugarCube.Engine.show();
        } else {
            this.updateTicketDisplays();
        }
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
        var activeOrder = this.getActiveOrder();
        var seconds = Math.max(0, Math.ceil(activeOrder ? activeOrder.timeLeft : 0));
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;

        return String(minutes).padStart(2, "0") + ":" +
            String(remainingSeconds).padStart(2, "0");
    },

    /* Function Description: Returns a ticket's progress bar color, fading from
       green (full) through yellow to red (empty) */
    ticketColor: function(fraction) {
        return "hsl(" + Math.round(120 * fraction) + ", 80%, 42%)";
    },

    /* Function Description: Applies a ticket's remaining time to a progress bar
       fill element. When instant is true the width is set without animating. */
    applyTimerFill: function(fill, ticket, instant) {
        var fraction = Math.max(0, Math.min(1, ticket.timeLeft / ticket.timeTotal));

        if (instant) {
            fill.style.transition = "none";
        }
        fill.style.width = (fraction * 100) + "%";
        fill.style.backgroundColor = this.ticketColor(fraction);
        if (instant) {
            void fill.offsetWidth;
            fill.style.transition = "";
        }
    },

    /* Function Description: Updates the ticket cards, their progress bars, and
       the active ticket timer on the assembly station in the UI */
    updateTicketDisplays: function(instant) {
        var self = this;
        var state = SugarCube.State.variables;
        var cards = document.querySelectorAll(".ticket-card");

        if (cards.length === state.tickets.length) {
            state.tickets.forEach(function(ticket, index) {
                var fill = cards[index].querySelector(".ticket-timer-fill");

                cards[index].classList.toggle("ticket-active", ticket.id === state.activeTicketId);
                if (fill) {
                    self.applyTimerFill(fill, ticket, instant);
                }
            });
        }

        var activeOrder = this.getActiveOrder();
        var timerElement = document.getElementById("order-timer");
        var barFill = document.getElementById("order-bar-fill");

        if (timerElement) {
            timerElement.textContent = this.orderTimerDisplay();
        }
        if (barFill && activeOrder) {
            this.applyTimerFill(barFill, activeOrder, instant);
        }
    }
};

window.jQuery(document).on(":passagedisplay", function() {
    var state = SugarCube.State.variables;

    // resume ticking if tickets exist but the timer isn't running (e.g. after loading a save)
    if (state.tickets && state.tickets.length && !orderTimerInterval) {
        window.FoodTruck.startOrderTimer();
    }
    window.FoodTruck.updateTicketDisplays(true);
    document.querySelectorAll(".ingredient-button").forEach(function(button) {
        button.addEventListener("click", function() {
            var ingredientButtons = document.querySelectorAll(".ingredient-button");
            var ingredientIndex = Array.prototype.indexOf.call(ingredientButtons, button);

            window.FoodTruck.selectIngredient(ingredientIndex);
            SugarCube.Engine.play("PrepareIngredient");
        });
    });
    window.FoodTruck.updateTutorialHighlights();
});