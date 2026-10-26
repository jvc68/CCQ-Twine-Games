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
    }
    // Add more orders as needed
];

var orderTimerInterval = null;
var maxPrepTrayIngredients = 3;

window.FoodTruck = {
    ordersForDay: function() {
        var day = SugarCube.State.variables.currentDay;
        return Math.min(20, 2 + 2 * (day - 1));
        /* return Math.min(20, 2 + Math.pow(day - 1, 2)); */
    },

    orderTimeForDay: function() {
        var day = SugarCube.State.variables.currentDay;
        return Math.max(50, 120 - 5 * (day - 1));
        /* return Math.max(40, Math.round(40 + 80 / day)); */
    },

    updateCookingMarkerSpeed: function() {
        var day = SugarCube.State.variables.currentDay;
        var speed = Math.min(3, 1 + (day - 1) * 0.25);
        var duration = 3.2 / speed;

        document.documentElement.style.setProperty("skill-marker-duration", duration + "s");
    },

    /* Function Description: Initializes the food truck for a new day */
    startDay: function() {
        var state = SugarCube.State.variables;
        this.stopOrderTimer();
        state.numOrders = this.ordersForDay();
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
    },

    /* Function Description: Starts the next day by incrementing the current day and calling startDay */
    startNextDay: function() {
        SugarCube.State.variables.currentDay += 1;
        this.startDay();
    },

    /* Function Description: Randomly selects an order from the orderOptions array and sets it as the active order */
    takeOrder: function() {
        var state = SugarCube.State.variables;

        if (state.numOrders < 1 || state.activeOrder) {
            return;
        }

        state.activeOrder = orderOptions[Math.floor(Math.random() * orderOptions.length)];
        state.orderTimer = this.orderTimeForDay();
        this.startOrderTimer();
    },

    /* Function Description: Returns a string representation of the ingredient at the specified index, including its image and name */
    ingredientLabel: function(index) {
        var ingredients = SugarCube.State.variables.menuIngredients;
        var ingredient = ingredients[index];

        if (!ingredient) {
            throw new RangeError("Unknown ingredient index: " + index);
        }

        return ingredient.img + "\n" + ingredient.name;
    },

    methodLabel: function(type) {
        var ingredient = SugarCube.State.variables.pendingIngredient;

        if (!ingredient || !ingredient.methods || !ingredient.methods[type]) {
            throw new Error("Cannot display a preparation method without a valid ingredient and method.");
        }

        return (type === "healthy" ? "A. " : "B. ") + ingredient.methods[type] +
            (type === "healthy" ? " (Healthy)" : " (Unhealthy)");
    },

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
    },

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
    },

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
    },

    clearTray: function() {
        SugarCube.State.variables.prepTray = [];
        window.jQuery("#tray").html("<em>Tap ingredients to add them to the tray.</em>");
    },

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

    starRating: function(score) {
        var filledStars = Math.max(0, Math.min(5, Math.round(score || 0)));

        return "★".repeat(filledStars) + "☆".repeat(5 - filledStars);
    },

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

    finishDay: function() {
        this.stopOrderTimer();
        this.calculateDayScores();
        SugarCube.Engine.play("DayTally");
    },

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

        if (state.numOrders === 0) {
            this.finishDay();
        } else {
            SugarCube.Engine.play("TakeOrderScreen");
        }
    },

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

    stopOrderTimer: function() {
        if (orderTimerInterval !== null) {
            clearInterval(orderTimerInterval);
            orderTimerInterval = null;
        }
    },

    orderTimerDisplay: function() {
        var seconds = Math.max(0, SugarCube.State.variables.orderTimer || 0);
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;

        return String(minutes).padStart(2, "0") + ":" +
            String(remainingSeconds).padStart(2, "0");
    },

    updateOrderTimerDisplay: function() {
        var timerElement = document.getElementById("order-timer");

        if (timerElement) {
            timerElement.textContent = this.orderTimerDisplay();
        }
    }
};