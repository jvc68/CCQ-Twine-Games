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
];

window.FoodTruck = {
    startDay: function() {
        var state = SugarCube.State.variables;
        state.numOrders = 5;
        state.dayScore = 0;
        state.ordersCompleted = 0;
        state.prepTray = [];
        state.activeOrder = null;
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

    addIngredient: function(index) {
        var state = SugarCube.State.variables;
        var ingredient = state.menuIngredients[index];

        if (!state.activeOrder) {
            throw new Error("Cannot add an ingredient without an active order.");
        }
        if (!ingredient) {
            throw new RangeError("Unknown ingredient index: " + index);
        }

        state.prepTray.push(ingredient.name);
        window.jQuery("#tray").text(state.prepTray.join(" + "));
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