// ==================== GAME DATA By Prince Ram ====================
const questions = {
    physics: [
        { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], correct: 1, difficulty: "easy" },
        { question: "Which object has kinetic energy?", options: ["A parked car", "A book on a table", "A moving bicycle", "A sleeping cat"], correct: 2, difficulty: "easy" },
        { question: "What force pulls objects toward Earth?", options: ["Magnetism", "Gravity", "Friction", "Tension"], correct: 1, difficulty: "easy" },
        { question: "Which device is used to measure temperature?", options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"], correct: 1, difficulty: "easy" },
        { question: "What form of energy comes from motion?", options: ["Potential", "Thermal", "Chemical", "Kinetic"], correct: 3, difficulty: "easy" },
        { question: "What unit is commonly used to measure the speed of light?", options: ["m/s", "kg", "N", "J"], correct: 0, difficulty: "easy" },
        { question: "What law states that for every action there is an equal and opposite reaction?", options: ["Newton’s First Law", "Newton’s Second Law", "Newton’s Third Law", "Law of Gravity"], correct: 2, difficulty: "medium" },
        { question: "What happens to speed if distance increases while time stays the same?", options: ["Speed decreases", "Speed increases", "Speed stays the same", "Speed becomes zero"], correct: 1, difficulty: "medium" },
        { question: "What type of energy is stored in a stretched rubber band?", options: ["Kinetic", "Thermal", "Elastic potential", "Electrical"], correct: 2, difficulty: "medium" },
        { question: "What does a concave mirror do to light?", options: ["Spreads it out", "Absorbs it", "Reflects it inward", "Stops it"], correct: 2, difficulty: "medium" },
        { question: "What is acceleration?", options: ["Distance traveled", "Speed", "Change in velocity over time", "Force applied"], correct: 2, difficulty: "hard" },
        { question: "Which equation represents Newton’s Second Law?", options: ["F = m/v", "F = ma", "F = mv", "F = m + a"], correct: 1, difficulty: "hard" },
        { question: "What happens to pressure when volume decreases at constant temperature?", options: ["Pressure decreases", "Pressure increases", "Pressure stays the same", "Pressure becomes zero"], correct: 1, difficulty: "hard" },
        { question: "What is the unit of power?", options: ["Joule", "Newton", "Watt", "Pascal"], correct: 2, difficulty: "hard" },
    ],

    chemistry: [
        { question: "What is the chemical symbol for water?", options: ["CO₂", "O₂", "H₂O", "NaCl"], correct: 2, difficulty: "easy" },
        { question: "Which state of matter has a fixed shape?", options: ["Gas", "Liquid", "Plasma", "Solid"], correct: 3, difficulty: "easy" },
        { question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correct: 0, difficulty: "easy" },
        { question: "What substance has a pH of 7?", options: ["Acid", "Base", "Neutral", "Salt"], correct: 2, difficulty: "easy" },
        { question: "What is the smallest unit of matter?", options: ["Molecule", "Atom", "Cell", "Compound"], correct: 1, difficulty: "easy" },
        { question: "Which element is required for rusting?", options: ["Hydrogen", "Nitrogen", "Oxygen", "Helium"], correct: 2, difficulty: "easy" },
        { question: "What is a chemical reaction?", options: ["Physical change", "Formation of new substances", "Change in size", "Melting"], correct: 1, difficulty: "medium" },
        { question: "Which bond involves sharing electrons?", options: ["Ionic", "Metallic", "Covalent", "Hydrogen"], correct: 2, difficulty: "medium" },
        { question: "What is NaCl commonly called?", options: ["Sugar", "Baking soda", "Salt", "Vinegar"], correct: 2, difficulty: "medium" },
        { question: "What happens during evaporation?", options: ["Solid to liquid", "Liquid to gas", "Gas to liquid", "Solid to gas"], correct: 1, difficulty: "medium" },
        { question: "What gas makes up most of Earth’s atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correct: 2, difficulty: "medium" },
        { question: "What is the pH of a strong acid?", options: ["7", "Above 7", "Below 7", "14"], correct: 2, difficulty: "hard" },
        { question: "Which law states that mass is conserved?", options: ["Law of Definite Proportions", "Law of Conservation of Mass", "Law of Multiple Proportions", "Boyle’s Law"], correct: 1, difficulty: "hard" },
        { question: "What is the unit of molar mass?", options: ["g", "kg", "g/mol", "mol/L"], correct: 2, difficulty: "hard" },
        { question: "What type of compound is CO₂?", options: ["Ionic", "Acid", "Covalent", "Base"], correct: 2, difficulty: "hard" }
    ],

    biology: [
        { question: "What is the basic unit of life?", options: ["Tissue", "Organ", "Cell", "System"], correct: 2, difficulty: "easy" },
        { question: "Which organ pumps blood throughout the body?", options: ["Lungs", "Brain", "Heart", "Liver"], correct: 2, difficulty: "easy" },
        { question: "How do plants make their own food?", options: ["Respiration", "Digestion", "Photosynthesis", "Transpiration"], correct: 2, difficulty: "easy" },
        { question: "What gas do humans breathe in?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 1, difficulty: "easy" },
        { question: "Which part of the plant absorbs water?", options: ["Leaf", "Stem", "Flower", "Root"], correct: 3, difficulty: "easy" },
        { question: "Which organ controls thinking and memory?", options: ["Heart", "Brain", "Stomach", "Lungs"], correct: 1, difficulty: "easy" },
        { question: "What carries genetic information?", options: ["RNA", "Protein", "DNA", "Enzyme"], correct: 2, difficulty: "medium" },
        { question: "What is the function of red blood cells?", options: ["Fight infection", "Carry oxygen", "Digest food", "Produce hormones"], correct: 1, difficulty: "medium" },
        { question: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Vacuole"], correct: 2, difficulty: "medium" },
        { question: "What type of reproduction involves one parent?", options: ["Sexual", "Asexual", "Binary", "Genetic"], correct: 1, difficulty: "medium" },
        { question: "What do enzymes do?", options: ["Destroy cells", "Speed up chemical reactions", "Store energy", "Transport oxygen"], correct: 1, difficulty: "medium" },
        { question: "Which part of DNA determines traits?", options: ["Base pairs", "Genes", "Chromosomes", "Nucleotides"], correct: 1, difficulty: "hard" },
        { question: "Which blood cells fight infection?", options: ["Red blood cells", "Platelets", "White blood cells", "Plasma"], correct: 2, difficulty: "hard" },
        { question: "Which level of organization comes after tissue?", options: ["Cell", "Organ", "Organ system", "Organism"], correct: 1, difficulty: "hard" },
        { question: "What is natural selection?", options: ["Random change", "Human choice", "Survival of the fittest", "Mutation only"], correct: 2, difficulty: "hard" }
    ],

    astronomy: [
        { question: "What is at the center of the solar system?", options: ["Earth", "Moon", "Sun", "Mars"], correct: 2, difficulty: "easy" },
        { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1, difficulty: "easy" },
        { question: "What do we call natural satellites?", options: ["Stars", "Comets", "Moons", "Asteroids"], correct: 2, difficulty: "easy" },
        { question: "What causes day and night on Earth?", options: ["Earth’s revolution", "Earth’s rotation", "Moon’s movement", "Sun’s movement"], correct: 1, difficulty: "easy" },
        { question: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], correct: 2, difficulty: "easy" },
        { question: "What shines at night by reflecting sunlight?", options: ["Star", "Sun", "Moon", "Planet"], correct: 2, difficulty: "easy" },
        { question: "What causes seasons on Earth?", options: ["Distance from the Sun", "Earth’s tilt", "Moon phases", "Earth’s speed"], correct: 1, difficulty: "medium" },
        { question: "Which planet is famous for its rings?", options: ["Mars", "Earth", "Saturn", "Mercury"], correct: 2, difficulty: "medium" },
        { question: "What is a galaxy?", options: ["A planet", "A solar system", "A large group of stars", "A comet"], correct: 2, difficulty: "medium" },
        { question: "What are comets mostly made of?", options: ["Rock and metal", "Ice and dust", "Gas only", "Lava"], correct: 1, difficulty: "medium" },
        { question: "What force keeps planets in orbit?", options: ["Magnetism", "Friction", "Gravity", "Energy"], correct: 2, difficulty: "medium" },
        { question: "What instrument is used to observe space?", options: ["Microscope", "Telescope", "Periscope", "Radar"], correct: 1, difficulty: "medium" },
        { question: "What is a light-year?", options: ["Time", "Speed", "Distance", "Energy"], correct: 2, difficulty: "hard" },
        { question: "What is a black hole?", options: ["Empty space", "Dead planet", "An extremely dense object", "Large star"], correct: 2, difficulty: "hard" },
        { question: "Which planet has the strongest gravity?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: 2, difficulty: "hard" },
        { question: "What is the Milky Way?", options: ["A star", "A planet", "A galaxy", "A nebula"], correct: 2, difficulty: "hard" },
    ]
};

const items = [
    { name: "Newton's Apple", icon: "🍎", rarity: "common", description: "A fruit that inspired gravity" },
    { name: "Test Tube", icon: "🧪", rarity: "common", description: "For chemical experiments" },
    { name: "Microscope", icon: "🔬", rarity: "uncommon", description: "See the tiny world" },
    { name: "Telescope", icon: "🔭", rarity: "uncommon", description: "Observe the stars" },
    { name: "DNA Helix", icon: "🧬", rarity: "rare", description: "The code of life" },
    { name: "Crystal Prism", icon: "💎", rarity: "rare", description: "Splits light beautifully" },
    { name: "Quantum Shard", icon: "⚛️", rarity: "epic", description: "Exists in superposition" },
    { name: "Philosopher's Stone", icon: "🔮", rarity: "legendary", description: "Legendary transmutation item" },
    { name: "Star Fragment", icon: "⭐", rarity: "epic", description: "Piece of a fallen star" },
    { name: "Ancient Fossil", icon: "🦴", rarity: "uncommon", description: "Millions of years old" }
];

// ==================== GAME STATE ====================
let gameState = {
    phase: 'menu', 
    player: {
        level: 1,
        hp: 100,
        maxHp: 100,
        mana: 50,
        maxMana: 50,
        xp: 0,
        xpToLevel: 100,
        gold: 0
    },
    inventory: [],
    currentQuestion: null,
    correctAnswers: 0,
    streak: 0
};

// ==================== GAME FUNCTIONS ====================
function startGame() {
    // 1. Reset stats completely
    gameState = {
        phase: 'playing',
        player: { level: 1, hp: 100, maxHp: 100, mana: 50, maxMana: 50, xp: 0, xpToLevel: 100, gold: 0 },
        inventory: [],
        currentQuestion: null,
        correctAnswers: 0,
        streak: 0
    };

    // 2. Force the UI back to "Category Select" mode
    document.getElementById('question-card').classList.add('hidden');
    document.getElementById('category-selector').classList.remove('hidden');

    // 3. Show game screen and update bars
    showScreen('game-screen');
    updateHUD();
    generateInventorySlots();
}

function goToMenu() {
    gameState.phase = 'menu';
    showScreen('main-menu');
}

function restartGame() {
    startGame();
}

function showScreen(screenId) {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('gameover-screen').classList.add('hidden');
    document.getElementById(screenId).classList.remove('hidden');
}

function toggleInventory() {
    const panel = document.getElementById('inventory-panel');
    panel.classList.toggle('hidden');
}

function generateInventorySlots() {
    const grid = document.getElementById('inventory-grid');
    grid.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot empty';
        if (gameState.inventory[i]) {
            const item = gameState.inventory[i];
            slot.className = `inventory-slot rarity-${item.rarity}`;
            slot.innerHTML = `
                ${item.icon}
                <div class="slot-tooltip">${item.name}</div>
            `;
        }
        grid.appendChild(slot);
    }
    document.getElementById('inventory-count').textContent = gameState.inventory.length;
}

function updateHUD() {
    const p = gameState.player;
    document.getElementById('player-level').textContent = p.level;
    document.getElementById('hp-current').textContent = p.hp;
    document.getElementById('hp-max').textContent = p.maxHp;
    document.getElementById('hp-bar').style.width = `${(p.hp / p.maxHp) * 100}%`;
    document.getElementById('mana-current').textContent = p.mana;
    document.getElementById('mana-max').textContent = p.maxMana;
    document.getElementById('mana-bar').style.width = `${(p.mana / p.maxMana) * 100}%`;
    document.getElementById('xp-current').textContent = p.xp;
    document.getElementById('xp-max').textContent = p.xpToLevel;
    document.getElementById('xp-bar').style.width = `${(p.xp / p.xpToLevel) * 100}%`;
    document.getElementById('gold-amount').textContent = p.gold;
}

function selectCategory(category) {
    const categoryQuestions = questions[category];
    const randomQ = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    gameState.currentQuestion = { ...randomQ, category };
    showQuestion();
}

function showQuestion() {
    document.getElementById('category-selector').classList.add('hidden');
    document.getElementById('question-card').classList.remove('hidden');
    
    const q = gameState.currentQuestion;
    document.getElementById('q-category').textContent = q.category.charAt(0).toUpperCase() + q.category.slice(1);
    document.getElementById('q-difficulty').textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
    document.getElementById('q-difficulty').className = `question-difficulty difficulty-${q.difficulty}`;
    document.getElementById('q-text').textContent = q.question;
    
    const optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-button';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsGrid.appendChild(btn);
    });
}

function selectAnswer(index) {
    const q = gameState.currentQuestion;
    const isCorrect = index === q.correct;
    const buttons = document.querySelectorAll('.option-button');
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) btn.classList.add('correct');
        else if (i === index && !isCorrect) btn.classList.add('incorrect');
    });

    setTimeout(() => {
        if (isCorrect) {
            handleCorrectAnswer();
        } else {
            handleWrongAnswer();
        }
    }, 1000);
}

function handleCorrectAnswer() {
    gameState.correctAnswers++;
    gameState.streak++;
    
    const difficulty = gameState.currentQuestion.difficulty;
    const xpGain = difficulty === 'easy' ? 15 : difficulty === 'medium' ? 25 : 40;
    const goldGain = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 10 : 20;
    
    const streakBonus = Math.floor(gameState.streak / 3);
    gameState.player.xp += xpGain + (streakBonus * 5);
    gameState.player.gold += goldGain + (streakBonus * 2);
    gameState.player.mana = Math.min(gameState.player.mana + 5, gameState.player.maxMana);
    
    // Check level up
    while (gameState.player.xp >= gameState.player.xpToLevel) {
        gameState.player.xp -= gameState.player.xpToLevel;
        gameState.player.level++;
        gameState.player.xpToLevel = Math.floor(gameState.player.xpToLevel * 1.5);
        gameState.player.maxHp += 10;
        gameState.player.hp = gameState.player.maxHp;
        gameState.player.maxMana += 5;
        gameState.player.mana = gameState.player.maxMana;
    }
    
    // Maybe get item
    let itemFound = null;
    if (Math.random() < 0.4) {
        itemFound = getRandomItem();
        if (gameState.inventory.length < 20) {
            gameState.inventory.push(itemFound);
        }
    }
    
    updateHUD();
    generateInventorySlots();
    showFeedback(true, `+${xpGain} XP, +${goldGain} Gold${streakBonus > 0 ? ` (${gameState.streak} streak!)` : ''}`, itemFound);
}

function handleWrongAnswer() {
    gameState.streak = 0;
    const damage = 15 + (gameState.player.level * 2);
    gameState.player.hp = Math.max(0, gameState.player.hp - damage);
    
    updateHUD();
    
    if (gameState.player.hp <= 0) {
        showFeedback(false, 'You have been defeated!', null, true);
    } else {
        showFeedback(false, `Lost ${damage} HP. Be careful!`, null);
    }
}

function getRandomItem() {
    const roll = Math.random();
    let rarity;
    if (roll < 0.5) rarity = 'common';
    else if (roll < 0.75) rarity = 'uncommon';
    else if (roll < 0.9) rarity = 'rare';
    else if (roll < 0.98) rarity = 'epic';
    else rarity = 'legendary';
    
    const filtered = items.filter(i => i.rarity === rarity);
    return filtered[Math.floor(Math.random() * filtered.length)];
}

function showFeedback(isSuccess, message, item, isGameOver = false) {
    const modal = document.getElementById('feedback-modal');
    const icon = document.getElementById('modal-icon');
    const title = document.getElementById('modal-title');
    const msg = document.getElementById('modal-message');
    const itemDiv = document.getElementById('modal-item');
    
    icon.textContent = isSuccess ? '✅' : '❌';
    title.textContent = isSuccess ? 'Correct!' : 'Wrong!';
    title.className = `modal-title ${isSuccess ? 'success' : 'failure'}`;
    msg.textContent = message;
    
    if (item) {
        itemDiv.classList.remove('hidden');
        document.getElementById('item-icon').textContent = item.icon;
        document.getElementById('item-name').textContent = `Found: ${item.name}!`;
    } else {
        itemDiv.classList.add('hidden');
    }
    
    modal.classList.remove('hidden');
    modal.dataset.gameover = isGameOver;
}

function closeFeedback() {
    const modal = document.getElementById('feedback-modal');
    const isGameOver = modal.dataset.gameover === 'true';
    modal.classList.add('hidden');
    
    if (isGameOver) {
        showGameOver();
    } else {
        gameState.currentQuestion = null;
        document.getElementById('question-card').classList.add('hidden');
        document.getElementById('category-selector').classList.remove('hidden');
    }
}

function showGameOver() {
    document.getElementById('final-level').textContent = gameState.player.level;
    document.getElementById('final-gold').textContent = gameState.player.gold;
    document.getElementById('correct-answers').textContent = gameState.correctAnswers;
    document.getElementById('items-collected').textContent = gameState.inventory.length;
    showScreen('gameover-screen');
}