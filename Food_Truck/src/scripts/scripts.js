/* Every ingredient that can be picked for a day's menu */
var ingredientDatabase = [
    {
        id: "tortilla", name: "Tortilla", img: "🌮", category: "Grain",
        methods: { healthy: "Toast a whole-grain tortilla", unhealthy: "Deep-fry a flour tortilla" },
        reasons: { healthy: "Whole grains add fiber, a DASH staple.", unhealthy: "Frying a refined tortilla adds saturated fat and cuts the fiber." },
        action: { type: "hold", ms: 1000, icon: "🫓", label: "Press and hold to flatten the tortilla" }
    },
    {
        id: "rice", name: "Rice", img: "🍚", category: "Grain",
        methods: { healthy: "Steam brown rice", unhealthy: "Fry white rice in butter and soy sauce" },
        reasons: { healthy: "Brown rice is a whole grain with fiber and no added salt.", unhealthy: "Refined rice with butter and soy sauce adds saturated fat and lots of sodium." },
        action: { type: "scrub", count: 6, icon: "🍚", label: "Shake the strainer to rinse the rice" }
    },
    {
        id: "beans", name: "Black Beans", img: "🫘", category: "Protein",
        methods: { healthy: "Rinse canned beans, simmer with herbs", unhealthy: "Refry in lard with the canning liquid" },
        reasons: { healthy: "Rinsing cuts sodium, and beans give fiber, potassium and magnesium.", unhealthy: "The canning liquid is salty and lard is high in saturated fat." },
        action: { type: "scrub", count: 6, icon: "🫘", label: "Shake the colander to drain and rinse" }
    },
    {
        id: "turkey", name: "Turkey", img: "🍗", category: "Protein",
        methods: { healthy: "Grill skinless turkey breast", unhealthy: "Deep-fry turkey with the skin on" },
        reasons: { healthy: "Lean, skinless poultry keeps saturated fat low.", unhealthy: "The skin and frying oil pile on saturated fat." },
        action: { type: "tap", count: 4, icon: "🔪", label: "Tap to trim the fat" }
    },
    {
        id: "salmon", name: "Salmon", img: "🐟", category: "Protein",
        methods: { healthy: "Bake with lemon and dill", unhealthy: "Pan-fry in butter with a soy glaze" },
        reasons: { healthy: "Baked fish with herbs gives omega-3 fats without extra salt.", unhealthy: "Butter adds saturated fat and the glaze adds sodium." },
        action: { type: "swipe", count: 2, icon: "🔪", label: "Swipe across to slice the fillet" }
    },
    {
        id: "shrimp", name: "Shrimp", img: "🦐", category: "Protein",
        methods: { healthy: "Steam with lemon and garlic", unhealthy: "Batter and deep-fry" },
        reasons: { healthy: "Steaming adds flavor without salt or oil.", unhealthy: "Batter and fryer oil add refined carbs and saturated fat." },
        action: { type: "tap", count: 3, icon: "🦐", label: "Tap to peel the shell" }
    },
    {
        id: "egg", name: "Egg", img: "🥚", category: "Protein",
        methods: { healthy: "Poach in simmering water", unhealthy: "Fry in butter with bacon" },
        reasons: { healthy: "Poaching adds no extra fat.", unhealthy: "Butter and bacon add saturated fat and sodium." },
        action: { type: "tap", count: 2, icon: "🥚", label: "Tap to crack the egg" }
    },
    {
        id: "squash", name: "Squash", img: "🎃", category: "Vegetable",
        methods: { healthy: "Roast with a drizzle of olive oil", unhealthy: "Deep-fry in batter" },
        reasons: { healthy: "A little unsaturated olive oil keeps squash heart-friendly and rich in potassium.", unhealthy: "Frying adds saturated fat and extra calories." },
        action: { type: "tap", count: 3, icon: "🔪", label: "Tap to cut the squash" }
    },
    {
        id: "garlic", name: "Garlic", img: "🧄", category: "Vegetable",
        methods: { healthy: "Roast until soft", unhealthy: "Fry in butter and salt" },
        reasons: { healthy: "Garlic adds big flavor so you can skip the salt.", unhealthy: "Buttery, salted garlic adds saturated fat and sodium." },
        action: { type: "hold", ms: 1000, icon: "🧄", label: "Press and hold to crush the garlic" }
    },
    {
        id: "tomato", name: "Tomato", img: "🍅", category: "Vegetable",
        methods: { healthy: "Roast fresh tomatoes", unhealthy: "Simmer in salty jarred sauce" },
        reasons: { healthy: "Fresh tomatoes are high in potassium, which helps lower blood pressure.", unhealthy: "Jarred sauce is often loaded with sodium and added sugar." },
        action: { type: "swipe", count: 2, icon: "🔪", label: "Swipe across to slice the tomato" }
    },
    {
        id: "broccoli", name: "Broccoli", img: "🥦", category: "Vegetable",
        methods: { healthy: "Steam until bright green", unhealthy: "Smother in cheese sauce" },
        reasons: { healthy: "Steaming keeps the potassium, magnesium and fiber.", unhealthy: "Cheese sauce adds saturated fat and sodium." },
        action: { type: "tap", count: 3, icon: "🔪", label: "Tap to chop the florets" }
    },
    {
        id: "carrot", name: "Carrot", img: "🥕", category: "Vegetable",
        methods: { healthy: "Roast with herbs", unhealthy: "Glaze with butter and brown sugar" },
        reasons: { healthy: "Roasting brings out natural sweetness with no added sugar.", unhealthy: "Added sugar and butter work against DASH." },
        action: { type: "swipe", count: 3, icon: "🥕", label: "Swipe to peel the carrot" }
    },
    {
        id: "pepper", name: "Bell Pepper", img: "🫑", category: "Vegetable",
        methods: { healthy: "Grill until charred", unhealthy: "Stuff with sausage and fry" },
        reasons: { healthy: "Peppers are full of vitamin C and flavor with no salt.", unhealthy: "Processed sausage is high in sodium and saturated fat." },
        action: { type: "tap", count: 3, icon: "🔪", label: "Tap to seed and slice" }
    },
    {
        id: "corn", name: "Corn", img: "🌽", category: "Vegetable",
        methods: { healthy: "Roast on the cob with lime", unhealthy: "Slather in butter, mayo and salt" },
        reasons: { healthy: "Lime adds zing so you don't need salt or butter.", unhealthy: "Heavy butter, mayo and salt add saturated fat and sodium." },
        action: { type: "swipe", count: 2, icon: "🌽", label: "Swipe to strip the husk" }
    },
    {
        id: "spinach", name: "Spinach", img: "🥬", category: "Vegetable",
        methods: { healthy: "Wilt in a dry pan", unhealthy: "Cream with butter and cheese" },
        reasons: { healthy: "Spinach is rich in potassium and magnesium, and wilting adds no fat.", unhealthy: "Cream and cheese add saturated fat and sodium." },
        action: { type: "scrub", count: 6, icon: "🥬", label: "Shake the colander to rinse the leaves" }
    },
    {
        id: "avocado", name: "Avocado", img: "🥑", category: "Fruit",
        methods: { healthy: "Serve sliced fresh", unhealthy: "Deep-fry in batter" },
        reasons: { healthy: "Avocado's unsaturated fat is heart-friendly in small portions.", unhealthy: "Frying adds saturated fat and extra calories." },
        action: { type: "swipe", count: 2, icon: "🔪", label: "Swipe to slice around the pit" }
    },
    {
        id: "pineapple", name: "Pineapple", img: "🍍", category: "Fruit",
        methods: { healthy: "Grill fresh pineapple", unhealthy: "Candy in syrup" },
        reasons: { healthy: "Fresh fruit has natural sugar plus potassium and fiber.", unhealthy: "Syrup adds a lot of added sugar." },
        action: { type: "tap", count: 4, icon: "🔪", label: "Tap to cut off the skin" }
    },
    {
        id: "mango", name: "Mango", img: "🥭", category: "Fruit",
        methods: { healthy: "Serve fresh", unhealthy: "Dip in sweetened syrup" },
        reasons: { healthy: "Fresh mango brings fiber and vitamins with no added sugar.", unhealthy: "The sweet coating is added sugar." },
        action: { type: "swipe", count: 2, icon: "🔪", label: "Swipe to slice off the cheeks" }
    },
    {
        id: "sage", name: "Sage", img: "🌿", category: "Herb",
        methods: { healthy: "Use fresh leaves", unhealthy: "Fry in butter with salt" },
        reasons: { healthy: "Fresh herbs add flavor in place of salt.", unhealthy: "Frying in salted butter adds saturated fat and sodium." },
        action: { type: "tap", count: 3, icon: "🌿", label: "Tap to pluck the leaves" }
    },
    {
        id: "cheese", name: "Cheese", img: "🧀", category: "Dairy",
        methods: { healthy: "Grate a light sprinkle of low-fat cheese", unhealthy: "Melt a thick layer of full-fat cheese" },
        reasons: { healthy: "Low-fat dairy gives calcium with less saturated fat.", unhealthy: "Full-fat cheese is high in saturated fat and sodium." },
        action: { type: "scrub", count: 5, icon: "🧀", label: "Rub the cheese back and forth on the grater" }
    }
];

/* Customers who can place an order; each customer is used once per day */
var customerNames = [
    "Alice", "Jordan", "Sam", "Jesse", "Tyler", "Anna", "Rique", "Morgan",
    "Casey", "Riley", "Avery", "Quinn", "Drew", "Jamie", "Parker", "Cameron",
    "Reese", "Robin", "Devon", "Pavan"
];

/* Words used to name a generated dish */
var dishTypes = ["Bowl", "Wrap", "Taco", "Stir Fry", "Medley", "Plate", "Skillet", "Salad"];

/* The fixed tutorial order and the ingredient ids on the tutorial's menu */
var tutorialOrder = {
    custName: "Alice",
    dishName: "Black Bean Taco",
    requiredIngredients: ["Tortilla", "Black Beans", "Garlic"]
};
var tutorialMenuIds = ["tortilla", "beans", "squash", "turkey", "garlic", "sage"];

var menuPickCount = 3;
var menuRandomCount = 3;

/* Returns a shuffled copy of an array */
function shuffled(items) {
    var copy = items.slice();

    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];

        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
}

var orderTimerInterval = null;
var lastTickTime = 0;
var maxPrepTrayIngredients = 3;
var maxTickets = 3;

// audio paths are relative to FoodTruck.html
var audioFilePaths = {
    navigation: "audio/Navigation.mp3",
    gameMusic: "audio/FoodTruckBG.mp3",
    cookingMusic: "audio/CookingMusic.mp3",
    stopCooking: "audio/StopCooking.mp3",
    cookingComplete: "audio/CookingComplete.mp3",
    ingredientAdded: "audio/IngredientSelect.mp3",
    takeOrder: "",
    tallyBad: "audio/BadDayJingle.mp3",
    tallyMedium: "audio/GoodDayJingle.mp3",
    tallyGood: "audio/GreatDayJingle.mp3",
    fulfillOrder: "audio/Fulfill.mp3",
    prepTap: "audio/KnifeChop.mp3",
    prepSlide: "audio/Slice.mp3",
    prepShake: "audio/Shake.mp3",
    prepSquish: "audio/Squish.mp3"
};
var audioPlayers = {};
var gameMusicVolume = 1;
var cookingGameMusicVolume = 0.2;

window.FoodTruckAudio = {
    playEffect: function (name) {
        var path = audioFilePaths[name];

        if (!path) {
            return;
        }

        var player = this.getPlayer(name, path);
        player.loop = false;
        player.pause();
        player.currentTime = 0;
        this.reportPlaybackFailure(name, player.play());
    },

    playEffectThen: function (name, nextName) {
        var path = audioFilePaths[name];

        if (!path) {
            this.playEffect(nextName);
            return;
        }

        var player = this.getPlayer(name, path);
        var self = this;

        player.loop = false;
        player.pause();
        player.currentTime = 0;
        player.onended = function () {
            player.onended = null;
            self.playEffect(nextName);
        };

        var playResult = player.play();

        if (playResult && typeof playResult.catch === "function") {
            playResult.catch(function (error) {
                player.onended = null;
                console.error("Could not play audio for " + name + ".", error);
            });
        }
    },

    startLoop: function (name, volume) {
        var path = audioFilePaths[name];

        if (!path) {
            return;
        }

        var player = this.getPlayer(name, path);
        player.loop = true;
        player.volume = volume;
        if (player.paused || player.ended) {
            player.currentTime = 0;
            this.reportPlaybackFailure(name, player.play());
        }
    },

    stopLoop: function (name) {
        var player = audioPlayers[name];

        if (player) {
            player.pause();
            player.currentTime = 0;
        }
    },

    setLoopVolume: function (name, volume) {
        if (audioPlayers[name]) {
            audioPlayers[name].volume = volume;
        }
    },

    getPlayer: function (name, path) {
        if (!audioPlayers[name]) {
            var player = new Audio(path);

            player.preload = "auto";
            player.addEventListener("error", function () {
                console.error("Could not load audio file for " + name + ": " + path);
            });
            audioPlayers[name] = player;
        }

        return audioPlayers[name];
    },

    reportPlaybackFailure: function (name, playResult) {
        if (playResult && typeof playResult.catch === "function") {
            playResult.catch(function (error) {
                console.error("Could not play audio for " + name + ".", error);
            });
        }
    },

    syncPassage: function () {
        var state = SugarCube.State.variables;
        var passage = SugarCube.State.passage;

        if (passage === "DayTally") {
            this.stopLoop("cookingMusic");
            this.stopLoop("gameMusic");
            var averageScore = (state.satisfactionScore + state.healthinessScore) / 2;
            var tallySound = averageScore <= 2
                ? "tallyBad"
                : averageScore >= 4 ? "tallyGood" : "tallyMedium";

            this.playEffect(tallySound);
            return;
        }

        if (passage === "Start" || passage === "ChooseMenu") {
            return;
        }

        if (state.numOrders > 0) {
            this.startLoop("gameMusic", gameMusicVolume);
        }

        if (passage === "CookingMinigame") {
            this.setLoopVolume("gameMusic", cookingGameMusicVolume);
            this.startLoop("cookingMusic", 1);
        } else {
            this.stopLoop("cookingMusic");
            this.setLoopVolume("gameMusic", gameMusicVolume);
        }
    }
};

window.FoodTruck = {
    ingredientDatabase: ingredientDatabase,

    /* Function Description: Returns the ticket the player is currently
       preparing, or null if none is selected */
    getActiveOrder: function () {
        var state = SugarCube.State.variables;

        if (state.activeTicketId === null || !Array.isArray(state.tickets)) {
            return null;
        }

        return state.tickets.find(function (ticket) {
            return ticket.id === state.activeTicketId;
        }) || null;
    },

    /* Function Description: Adds new tickets until the ticket limit is reached
       or no more orders remain for the day (orders already on a ticket count
       toward the day's remaining orders) */
    fillTickets: function () {
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
    pickOrder: function (excludeNames) {
        var state = SugarCube.State.variables;
        var excluded = (excludeNames || []).concat(state.tickets.map(function (ticket) {
            return ticket.custName;
        }));

        var name;

        if (state.tutorialMode) {
            return excluded.indexOf(tutorialOrder.custName) === -1
                ? {
                    custName: tutorialOrder.custName,
                    dishName: tutorialOrder.dishName,
                    requiredIngredients: tutorialOrder.requiredIngredients.slice()
                }
                : null;
        }

        if (state.availableCustomers.length) {
            var index = Math.floor(Math.random() * state.availableCustomers.length);

            name = state.availableCustomers.splice(index, 1)[0];
        } else {
            // every customer has been used today, so recycle ones not on a ticket
            var recyclable = customerNames.filter(function (customer) {
                return excluded.indexOf(customer) === -1;
            });

            if (!recyclable.length) {
                return null;
            }
            name = recyclable[Math.floor(Math.random() * recyclable.length)];
        }

        return this.buildOrder(name);
    },

    /* Function Description: Builds a dish for a customer from three different
       ingredients on today's menu */
    buildOrder: function (customerName) {
        var state = SugarCube.State.variables;
        var chosen = shuffled(state.todaysMenu).slice(0, 3);
        var type = dishTypes[Math.floor(Math.random() * dishTypes.length)];

        return {
            custName: customerName,
            dishName: chosen[0].name + " & " + chosen[1].name + " " + type,
            requiredIngredients: chosen.map(function (ingredient) {
                return ingredient.name;
            })
        };
    },

    /* Function Description: Clears the menu picks before the player chooses
       the ingredients for a new day */
    beginMenuSelection: function () {
        SugarCube.State.variables.menuPicks = [];
    },

    /* Function Description: Selects or deselects the ingredient at the given
       database index as one of the player's menu picks (limit 3) */
    toggleMenuPick: function (index) {
        var state = SugarCube.State.variables;
        var ingredient = ingredientDatabase[index];

        if (!ingredient) {
            return;
        }
        if (!Array.isArray(state.menuPicks)) {
            state.menuPicks = [];
        }

        var pickIndex = state.menuPicks.indexOf(ingredient.id);
        var added = false;

        if (pickIndex !== -1) {
            state.menuPicks.splice(pickIndex, 1);
        } else if (state.menuPicks.length < menuPickCount) {
            state.menuPicks.push(ingredient.id);
            added = true;
        }
        if (added) {
            FoodTruckAudio.playEffect("ingredientAdded");
        }
        this.refreshMenuSelection();
    },

    /* Function Description: Updates the ChooseMenu screen to show which
       ingredients are picked and enables Start Day once three are chosen */
    refreshMenuSelection: function () {
        var state = SugarCube.State.variables;
        var buttons = document.querySelectorAll(".menu-pick-button");
        var count = document.getElementById("menu-count");
        var start = document.getElementById("menu-start");

        if (!Array.isArray(state.menuPicks)) {
            state.menuPicks = [];
        }
        buttons.forEach(function (button, index) {
            var ingredient = ingredientDatabase[index];
            var picked = state.menuPicks.indexOf(ingredient.id) !== -1;

            button.classList.toggle("menu-picked", picked);
            button.setAttribute("aria-pressed", picked ? "true" : "false");
            button.disabled = !picked && state.menuPicks.length >= menuPickCount;
        });
        if (count) {
            count.textContent = state.menuPicks.length;
        }
        if (start) {
            start.disabled = state.menuPicks.length !== menuPickCount;
        }
    },

    /* Function Description: Sets todaysMenu to the player's picks plus randomly
       chosen ingredients from the rest of the database */
    buildTodaysMenu: function () {
        var state = SugarCube.State.variables;
        var database = ingredientDatabase;

        if (state.tutorialMode) {
            state.todaysMenu = tutorialMenuIds.map(function (id) {
                return database.find(function (ingredient) {
                    return ingredient.id === id;
                });
            });
            return;
        }

        var picks = database.filter(function (ingredient) {
            return state.menuPicks.indexOf(ingredient.id) !== -1;
        });
        var others = shuffled(database.filter(function (ingredient) {
            return state.menuPicks.indexOf(ingredient.id) === -1;
        }));

        // if fewer than 3 were picked, random ingredients make up the difference
        state.todaysMenu = picks.concat(others.slice(0, menuPickCount + menuRandomCount - picks.length));
    },

    /* Function Description: Builds a new ticket with a full timer from an order */
    makeTicket: function (order) {
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
    ordersForDay: function () {
        if (SugarCube.State.variables.debugMode) {
            return 1;
        }

        var day = SugarCube.State.variables.currentDay;
        return Math.min(20, 2 + 2 * (day - 1));
        /* return Math.min(20, 2 + Math.pow(day - 1, 2)); */
    },

    /* Function Description: Returns the time limit for fulfilling an order for
       the current day, calculated based on current day number */
    orderTimeForDay: function () {
        var day = SugarCube.State.variables.currentDay;
        return Math.max(50, 120 - 5 * (day - 1));
        /* return Math.max(40, Math.round(40 + 80 / day)); */
    },

    /* Function Description: Updates the speed of the cooking skill-check marker
       based on the cyrrent day number */
    updateCookingMarkerSpeed: function () {
        var day = SugarCube.State.variables.currentDay;
        var speed = Math.min(3, 1 + (day - 1) * 0.25);
        var duration = 3.2 / speed;

        document.documentElement.style.setProperty("--skill-marker-duration", duration + "s");
    },

    /* Function Description: Toggles debug mode, which limits new days to one
       order */
    toggleDebugMode: function () {
        var state = SugarCube.State.variables;
        state.debugMode = !state.debugMode;
    },

    /* Function Description: Initializes the food truck for a new day */
    startDay: function () {
        var state = SugarCube.State.variables;
        this.stopOrderTimer();
        state.numOrders = this.ordersForDay();
        state.availableCustomers = customerNames.slice();
        this.buildTodaysMenu();
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
            state.tutorialStep = "take-order";
            state.tutorialIngredientIndex = 0;
        }
        this.fillTickets();
        this.startOrderTimer();
    },

    startTutorial: function () {
        var state = SugarCube.State.variables;
        state.tutorialMode = true;
        this.startDay();
    },

    endTutorial: function () {
        var state = SugarCube.State.variables;
        state.tutorialMode = false;
        state.tutorialStep = null;
        state.tutorialIngredientIndex = 0;
        FoodTruckAudio.stopLoop("gameMusic");
        FoodTruckAudio.stopLoop("cookingMusic");
        this.stopOrderTimer();
        state.tickets = [];
        state.activeTicketId = null;
        // returning to the menu always restarts progress at day 1
        state.currentDay = 1;
    },

    advanceTutorialIngredient: function () {
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

    startTutorialIngredients: function () {
        var state = SugarCube.State.variables;

        if (state.tutorialMode && state.tutorialStep === "assembly") {
            state.tutorialStep = "ingredient";
        }
    },

    restoreTutorialIngredient: function () {
        var state = SugarCube.State.variables;
        var activeOrder = this.getActiveOrder();
        var required = activeOrder && activeOrder.requiredIngredients;

        if (!state.tutorialMode || !Array.isArray(required)) {
            return;
        }

        var nextIndex = required.findIndex(function (ingredient) {
            return state.prepTray.indexOf(ingredient) === -1;
        });

        if (nextIndex === -1) {
            state.tutorialStep = "return-to-order";
            return;
        }

        state.tutorialIngredientIndex = nextIndex;
        state.tutorialStep = "ingredient";
    },

    returnToAssembly: function () {
        this.restoreTutorialIngredient();
    },

    finishTutorialPrep: function () {
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

    updateTutorialHighlights: function () {
        var state = SugarCube.State.variables;
        var buttons = document.querySelectorAll("button.tutorial-target");
        var passage = SugarCube.State.passage;
        var targetText = null;

        buttons.forEach(function (button) {
            button.classList.remove("tutorial-target");
        });
        document.querySelectorAll(".ingredient-button").forEach(function (button) {
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
            // the healthy method's button moves around, so find it by position
            var optionButtons = document.querySelectorAll(".method-options button");
            var healthyButton = optionButtons[(state.methodOrder || []).indexOf("healthy")];

            if (healthyButton) {
                healthyButton.classList.add("tutorial-target");
            }
            return;
        } else if (state.tutorialStep === "stop" && passage === "PrepareIngredient") {
            targetText = "Continue to Cooking";
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

        Array.prototype.forEach.call(document.querySelectorAll("button"), function (button) {
            if (button.textContent.indexOf(targetText) !== -1) {
                button.classList.add("tutorial-target");
            }
        });

        if (passage === "AssemblyStation" &&
            state.tutorialStep === "ingredient") {
            document.querySelectorAll(".ingredient-button").forEach(function (button) {
                if (button.textContent.indexOf(targetText) === -1) {
                    button.classList.add("tutorial-disabled");
                    button.disabled = true;
                }
            });
        }
    },

    /* Function Description: Advances to the next day and resets the menu picks.
       The day itself begins from the ChooseMenu screen via startDay. */
    startNextDay: function () {
        SugarCube.State.variables.currentDay += 1;
        this.beginMenuSelection();
    },

    /* Function Description: Removes the cooking choices made for a ticket that
       was cancelled or expired, so they no longer affect the day's scores */
    discardTicketChoices: function (ticketId) {
        var state = SugarCube.State.variables;

        state.dayPreparationChoices = state.dayPreparationChoices.filter(function (choice) {
            return choice.ticketId !== ticketId;
        });
    },

    /* Function Description: Immediately discards a ticket and replaces it in
       place with a different random ticket (fresh timer). The day's remaining
       order count is unchanged. */
    cancelTicket: function (ticketId) {
        var state = SugarCube.State.variables;
        var index = state.tickets.findIndex(function (t) {
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
    selectOrder: function (ticketId) {
        var state = SugarCube.State.variables;
        var ticket = state.tickets.find(function (t) {
            return t.id === ticketId;
        });

        if (!ticket || state.activeTicketId === ticketId) {
            return;
        }

        FoodTruckAudio.playEffect("takeOrder");
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
    ingredientLabel: function (index) {
        var ingredients = SugarCube.State.variables.todaysMenu;
        var ingredient = ingredients[index];

        if (!ingredient) {
            throw new RangeError("Unknown ingredient index: " + index);
        }

        return ingredient.img + "\n" + ingredient.name;
    },

    /* Function Description: Returns the button label for a preparation method of
       the pending ingredient. The label deliberately doesn't say whether the
       method is healthy; position is the button's slot (0 = A, 1 = B). */
    methodLabel: function (type, position) {
        var ingredient = SugarCube.State.variables.pendingIngredient;

        if (!ingredient || !ingredient.methods || !ingredient.methods[type]) {
            throw new Error("Cannot display a preparation method without a valid ingredient and method.");
        }

        return (position === 1 ? "B. " : "A. ") + ingredient.methods[type];
    },

    /* Function Description: Selects an ingredient from the menu by its index,
       adding it to the prep tray if there's space and resetting any pending
       preparation method or cooking result */
    selectIngredient: function (index) {
        var state = SugarCube.State.variables;
        var ingredient = state.todaysMenu[index];

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
        state.prepActionDone = false;
        // shuffle which button holds the healthy method so position gives nothing away
        state.methodOrder = shuffled(["healthy", "unhealthy"]);
        if (state.tutorialMode) {
            state.tutorialStep = "method";
        }
    },

    /* Function Description: Selects a preparation method for the pending
     ingredient, resetting any previous cooking result */
    chooseMethod: function (type) {
        var state = SugarCube.State.variables;
        var ingredient = state.pendingIngredient;

        if (!ingredient || !ingredient.methods || !ingredient.methods[type]) {
            throw new Error("Cannot choose a preparation method without a valid ingredient and method.");
        }

        state.pendingMethod = {
            type: type,
            label: ingredient.methods[type],
            reason: ingredient.reasons[type]
        };
        state.cookingResult = null;
        state.prepActionDone = false;
        if (state.tutorialMode) {
            state.tutorialStep = "micro";
        }
    },

    /* Function Description: Marks the ingredient's preparation action as done,
       which unlocks the cooking minigame */
    completePrepAction: function () {
        var state = SugarCube.State.variables;

        state.prepActionDone = true;
        if (state.tutorialMode) {
            state.tutorialStep = "stop";
        }
        this.updateTutorialHighlights();
    },

    /* Function Description: Builds the preparation micro-action for the pending
       ingredient (tap, hold, scrub or swipe) on the PrepareIngredient screen */
    initPrepAction: function () {
        var self = this;
        var host = document.getElementById("prep-action");
        var next = document.getElementById("prep-continue");
        var state = SugarCube.State.variables;

        if (!host || !next) {
            return;
        }
        next.addEventListener("click", function () {
            if (SugarCube.State.variables.prepActionDone) {
                SugarCube.Engine.play("CookingMinigame");
            }
        });

        var action = state.pendingIngredient && state.pendingIngredient.action;

        if (!action) {
            return;
        }
        if (state.prepActionDone) {
            host.textContent = "\u2713 Prepared!";
            next.disabled = false;
            return;
        }

        var label = host.querySelector(".prep-action-label");
        var pad = host.querySelector(".prep-action-pad");
        var icon = host.querySelector(".prep-action-icon");
        var fill = host.querySelector(".prep-action-fill");
        var finished = false;

        if (!label || !pad || !icon || !fill) {
            throw new Error("The preparation action controls are unavailable.");
        }
        label.textContent = action.label;
        icon.textContent = action.icon;
        // long-press (hold) and drag (scrub) must not open the mobile context menu
        pad.addEventListener("contextmenu", function (event) {
            event.preventDefault();
        });

        function setProgress(fraction) {
            fill.style.width = Math.min(100, fraction * 100) + "%";
        }

        function moveIcon(event) {
            var bounds = pad.getBoundingClientRect();
            icon.style.setProperty("--icon-x", (event.clientX - bounds.left - bounds.width / 2) + "px");
            icon.style.setProperty("--icon-y", (event.clientY - bounds.top - bounds.height / 2) + "px");
        }

        function resetIconPosition() {
            icon.style.removeProperty("--icon-x");
            icon.style.removeProperty("--icon-y");
        }

        function bump() {
            pad.classList.remove("prep-action-bump");
            void pad.offsetWidth;
            pad.classList.add("prep-action-bump");
        }

        function animateKnife() {
            pad.classList.remove("prep-action-knife");
            void icon.offsetWidth;
            pad.classList.add("prep-action-knife");
        }

        // capture can throw if the pointer is already gone (fast taps on touch)
        function capture(event) {
            try {
                pad.setPointerCapture(event.pointerId);
            } catch (e) { /* ignore */ }
        }

        // gesture distances scale with the pad so narrow phones stay easy
        function padWidth() {
            return pad.getBoundingClientRect().width || 300;
        }

        function finish() {
            if (finished) {
                return;
            }
            finished = true;
            setProgress(1);
            label.textContent = "\u2713 Prepared!";
            pad.disabled = true;
            next.disabled = false;
            self.completePrepAction();
        }

        // count-based actions: each completed tap/swipe/scrub reversal calls step()
        var steps = 0;

        function step() {
            if (finished) {
                return;
            }
            var actionSound = action.type === "tap"
                ? "prepTap"
                : action.type === "swipe" ? "prepSlide"
                    : action.type === "scrub" ? "prepShake" : null;

            if (actionSound) {
                FoodTruckAudio.playEffect(actionSound);
            }
            steps += 1;
            bump();
            if (action.icon === "\uD83D\uDD2A" && action.type === "tap") {
                animateKnife();
            }
            setProgress(steps / action.count);
            if (steps >= action.count) {
                finish();
            }
        }

        if (action.type === "tap") {
            pad.addEventListener("click", step);
        } else if (action.type === "hold") {
            var timer = null;
            var startTime = 0;

            var stopHold = function () {
                if (timer !== null) {
                    clearInterval(timer);
                    timer = null;
                }
                FoodTruckAudio.stopLoop("prepSquish");
                if (!finished) {
                    setProgress(0);
                    icon.style.removeProperty("--icon-scale-x");
                    icon.style.removeProperty("--icon-scale-y");
                }
                pad.classList.remove("prep-action-held");
            };
            var startHold = function () {
                if (timer !== null || finished) {
                    return;
                }
                FoodTruckAudio.startLoop("prepSquish", 1);
                pad.classList.add("prep-action-held");
                startTime = performance.now();
                timer = setInterval(function () {
                    var fraction = (performance.now() - startTime) / action.ms;

                    setProgress(fraction);
                    if (fraction >= 1) {
                        icon.style.setProperty("--icon-scale-x", 1.3);
                        icon.style.setProperty("--icon-scale-y", 0.6);
                        clearInterval(timer);
                        timer = null;
                        FoodTruckAudio.stopLoop("prepSquish");
                        pad.classList.remove("prep-action-held");
                        finish();
                    } else {
                        icon.style.setProperty("--icon-scale-x", 1 + fraction * 0.3);
                        icon.style.setProperty("--icon-scale-y", 1 - fraction * 0.4);
                    }
                }, 30);
            };

            pad.addEventListener("pointerdown", function (event) {
                capture(event);
                startHold();
            });
            ["pointerup", "pointercancel", "lostpointercapture"].forEach(function (name) {
                pad.addEventListener(name, stopHold);
            });
            pad.addEventListener("pointerleave", function (event) {
                // a finger slipping a few px off the edge must not cancel a hold
                if (event.pointerType === "mouse") {
                    stopHold();
                }
            });
            pad.addEventListener("keydown", function (event) {
                if ((event.key === " " || event.key === "Enter") && !event.repeat) {
                    event.preventDefault();
                    startHold();
                }
            });
            pad.addEventListener("keyup", stopHold);

        } else if (action.type === "scrub") {
            var dragging = false;
            var direction = 0;
            var extreme = 0;
            var lastKey = null;
            var activeInput = null;
            var activeTouchId = null;

            var minTravel = Math.max(14, Math.min(25, padWidth() * 0.08));

            // Shared movement and progress logic for mouse and touch
            function updateScrub(x, y) {
                moveIcon({
                    clientX: x,
                    clientY: y
                });

                if (direction === 0) {
                    if (Math.abs(x - extreme) >= minTravel) {
                        direction = x > extreme ? 1 : -1;
                        extreme = x;
                    }
                } else if (direction > 0) {
                    if (x > extreme) {
                        extreme = x;
                    } else if (extreme - x >= minTravel) {
                        direction = -1;
                        extreme = x;
                        step();
                    }
                } else if (x < extreme) {
                    extreme = x;
                } else if (x - extreme >= minTravel) {
                    direction = 1;
                    extreme = x;
                    step();
                }
            }

            function endScrub() {
                dragging = false;
                activeInput = null;
                activeTouchId = null;
                pad.classList.remove("prep-action-dragging");
                resetIconPosition();
            }

            // Desktop mouse / pointer handling
            pad.addEventListener("pointerdown", function (event) {
                if (event.pointerType === "touch" || finished) {
                    return;
                }

                dragging = true;
                activeInput = "pointer";
                direction = 0;
                extreme = event.clientX;

                pad.classList.add("prep-action-dragging");
                capture(event);
                moveIcon(event);
            });

            pad.addEventListener("pointermove", function (event) {
                if (!dragging || activeInput !== "pointer") {
                    return;
                }

                updateScrub(event.clientX, event.clientY);
            });

            ["pointerup", "pointercancel", "lostpointercapture"].forEach(function (name) {
                pad.addEventListener(name, function (event) {
                    if (activeInput !== "pointer") {
                        return;
                    }

                    endScrub();
                });
            });

            // Mobile touch handling (Android and iOS)
            pad.addEventListener("touchstart", function (event) {
                if (dragging || finished || event.changedTouches.length === 0) {
                    return;
                }

                event.preventDefault();

                var touch = event.changedTouches[0];

                dragging = true;
                activeInput = "touch";
                activeTouchId = touch.identifier;
                direction = 0;
                extreme = touch.clientX;

                pad.classList.add("prep-action-dragging");
                moveIcon(touch);
            }, { passive: false });

            pad.addEventListener("touchmove", function (event) {
                if (!dragging || activeInput !== "touch") {
                    return;
                }

                var touch = null;

                for (var i = 0; i < event.touches.length; i++) {
                    if (event.touches[i].identifier === activeTouchId) {
                        touch = event.touches[i];
                        break;
                    }
                }

                if (!touch) {
                    return;
                }

                event.preventDefault();

                updateScrub(touch.clientX, touch.clientY);
            }, { passive: false });

            function handleTouchEnd(event) {
                if (!dragging || activeInput !== "touch") {
                    return;
                }

                for (var i = 0; i < event.changedTouches.length; i++) {
                    if (event.changedTouches[i].identifier === activeTouchId) {
                        event.preventDefault();
                        endScrub();
                        return;
                    }
                }
            }

            pad.addEventListener("touchend", handleTouchEnd, { passive: false });
            pad.addEventListener("touchcancel", handleTouchEnd, { passive: false });

            // Keyboard fallback: alternate left and right arrow keys
            pad.addEventListener("keydown", function (event) {
                if ((event.key === "ArrowLeft" || event.key === "ArrowRight") &&
                    event.key !== lastKey) {
                    lastKey = event.key;
                    step();
                }
            });
        } else if (action.type === "swipe") {
            var startX = null;

            pad.addEventListener("pointerdown", function (event) {
                startX = event.clientX;
                capture(event);
                moveIcon(event);
            });
            pad.addEventListener("pointermove", function (event) {
                if (startX !== null) {
                    moveIcon(event);
                }
            });
            pad.addEventListener("pointerup", function (event) {
                if (startX !== null && Math.abs(event.clientX - startX) >= Math.min(50, padWidth() * 0.15)) {
                    step();
                }
                startX = null;
                resetIconPosition();
            });
            pad.addEventListener("pointercancel", function () {
                startX = null;
                resetIconPosition();
            });
            // keyboard fallback: Enter or Space counts as a swipe
            pad.addEventListener("click", function (event) {
                if (event.detail === 0) {
                    step();
                }
            });
        }
    },

    /* Function Description: Stops the cooking skill-check, calculates the
       doneness of the ingredient based on the marker's position, and adds the
       result to the day's preparation choices and prep tray */
    stopCooking: function () {
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

        FoodTruckAudio.playEffectThen("stopCooking", "cookingComplete");
        FoodTruckAudio.playEffect("ingredientAdded");
        FoodTruckAudio.stopLoop("cookingMusic");

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
    clearTray: function () {
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
    canFulfillOrder: function () {
        var state = SugarCube.State.variables;
        var tray = state.prepTray;
        var activeOrder = this.getActiveOrder();
        var required = activeOrder && activeOrder.requiredIngredients;

        if (!Array.isArray(tray) || !Array.isArray(required) || tray.length !== required.length) {
            return false;
        }

        var counts = new Map();
        tray.forEach(function (ingredient) {
            counts.set(ingredient, (counts.get(ingredient) || 0) + 1);
        });

        return required.every(function (ingredient) {
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
    calculateDayScores: function () {
        var state = SugarCube.State.variables;
        var choices = state.dayPreparationChoices;
        var totalChoices = choices.length;
        var healthyChoices = 0;
        var perfectChoices = 0;

        choices.forEach(function (choice) {
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
    starRating: function (score) {
        var filledStars = Math.max(0, Math.min(5, Math.round(score || 0)));

        return "★".repeat(filledStars) + "☆".repeat(5 - filledStars);
    },

    /* Function Description: Returns a string of tips based on the day's
       satisfaction and healthiness scores, providing feedback for improvement */
    dayTips: function () {
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
    finishDay: function () {
        this.stopOrderTimer();
        this.calculateDayScores();
        SugarCube.Engine.play("DayTally");
    },

    /* Function Description: Fulfills the current order if the prep tray matches
       the required ingredients, updating scores and moving to the next order
       or finishing the day */
    fulfillOrder: function () {
        var state = SugarCube.State.variables;

        if (!this.canFulfillOrder()) {
            throw new Error("The prep tray does not match the active order.");
        }

        FoodTruckAudio.playEffect("fulfillOrder");
        state.ordersCompleted += 1;
        state.dayScore += 1;
        state.numOrders -= 1;
        state.tickets = state.tickets.filter(function (ticket) {
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
    startOrderTimer: function () {
        var self = this;

        this.stopOrderTimer();
        if (!SugarCube.State.variables.tickets.length) {
            return;
        }

        lastTickTime = Date.now();
        orderTimerInterval = setInterval(function () {
            self.tickOrders();
        }, 100);
    },

    /* Function Description: Ticks every ticket's timer down by the real time
       elapsed. A taken ticket that expires is cancelled (counting as a handled
       order) and a new ticket fills its slot if orders remain. A ticket that
       was never taken is instead swapped for a different random ticket with a
       fresh timer. The day ends once no orders are left. */
    tickOrders: function () {
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

        state.tickets.forEach(function (ticket) {
            ticket.timeLeft = Math.max(0, ticket.timeLeft - elapsed);
        });

        state.tickets.forEach(function (ticket) {
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
    stopOrderTimer: function () {
        if (orderTimerInterval !== null) {
            clearInterval(orderTimerInterval);
            orderTimerInterval = null;
        }
    },

    /* Function Description: Returns a string representation of the order timer
       in the format "MM:SS" */
    orderTimerDisplay: function () {
        var activeOrder = this.getActiveOrder();
        var seconds = Math.max(0, Math.ceil(activeOrder ? activeOrder.timeLeft : 0));
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;

        return String(minutes).padStart(2, "0") + ":" +
            String(remainingSeconds).padStart(2, "0");
    },

    /* Function Description: Returns a ticket's progress bar color, fading from
       green (full) through yellow to red (empty) */
    ticketColor: function (fraction) {
        return "hsl(" + Math.round(120 * fraction) + ", 80%, 42%)";
    },

    /* Function Description: Applies a ticket's remaining time to a progress bar
       fill element. When instant is true the width is set without animating. */
    applyTimerFill: function (fill, ticket, instant) {
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
    updateTicketDisplays: function (instant) {
        var self = this;
        var state = SugarCube.State.variables;
        var cards = document.querySelectorAll(".ticket-card");

        if (cards.length === state.tickets.length) {
            state.tickets.forEach(function (ticket, index) {
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

document.addEventListener("click", function (event) {
    var target = event.target;
    var button = target && target.closest ? target.closest("button") : null;

    if (!button || button.disabled) {
        return;
    }
    if (button.classList.contains("menu-pick-button") ||
        button.classList.contains("ingredient-button") ||
        button.classList.contains("prep-action-pad")) {
        return;
    }

    if (button.id === "menu-start") {
        if (SugarCube.State.variables.menuPicks.length === 3) {
            FoodTruckAudio.playEffect("navigation");
        }
        return;
    }
    if (button.id === "prep-continue") {
        if (SugarCube.State.variables.prepActionDone) {
            FoodTruckAudio.playEffect("navigation");
        }
        return;
    }

    var label = button.textContent.trim();

    if (label === "Take Order" || label === "Fulfill Order" || label === "Stop Cooking") {
        return;
    }
    if (button.hasAttribute("data-passage") || button.classList.contains("macro-button")) {
        FoodTruckAudio.playEffect("navigation");
    }
}, true);

window.jQuery(document).on(":passagedisplay", function () {
    var state = SugarCube.State.variables;

    // resume ticking if tickets exist but the timer isn't running (e.g. after loading a save)
    if (state.tickets && state.tickets.length && !orderTimerInterval) {
        window.FoodTruck.startOrderTimer();
    }
    window.FoodTruck.updateTicketDisplays(true);
    document.querySelectorAll(".ingredient-button").forEach(function (button) {
        button.addEventListener("click", function () {
            var ingredientButtons = document.querySelectorAll(".ingredient-button");
            var ingredientIndex = Array.prototype.indexOf.call(ingredientButtons, button);

            window.FoodTruck.selectIngredient(ingredientIndex);
            SugarCube.Engine.play("PrepareIngredient");
        });
    });
    document.querySelectorAll(".menu-pick-button").forEach(function (button, index) {
        button.addEventListener("click", function () {
            window.FoodTruck.toggleMenuPick(index);
        });
    });
    var menuStart = document.getElementById("menu-start");

    if (menuStart) {
        menuStart.addEventListener("click", function () {
            if (SugarCube.State.variables.menuPicks.length === 3) {
                window.FoodTruck.startDay();
                SugarCube.Engine.play("TakeOrderScreen");
            }
        });
    }
    if (document.querySelector(".menu-pick-button")) {
        window.FoodTruck.refreshMenuSelection();
    }
    window.FoodTruck.initPrepAction();
    window.FoodTruck.updateTutorialHighlights();
    window.FoodTruckAudio.syncPassage();
});