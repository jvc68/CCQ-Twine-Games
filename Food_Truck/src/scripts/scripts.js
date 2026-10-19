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

window.FoodTruck = {
    startDay: function() {
        var state = SugarCube.State.variables;
        state.numOrders = 5;
        state.dayScore = 0;
        state.ordersCompleted = 0;
        state.prepTray = [];
        state.activeOrder = null;
        state.dayPreparationChoices = [];
        state.pendingIngredient = null;
        state.pendingMethod = null;
        state.cookingResult = null;
    },

    takeOrder: function() {
        var state = SugarCube.State.variables;

        if (state.numOrders < 1 || state.activeOrder) {
            return;
        }

        state.activeOrder = orderOptions[Math.floor(Math.random() * orderOptions.length)];
    },

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
    }
};