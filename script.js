// ==================== GAME DATA By Prince Ram ====================
const questions = {
    physics: [
        { question: "What is the SI unit of force?", options: ["Watt", "Newton", "Joule", "Pascal"], correct: 1, difficulty: "easy" },
        { question: "What is the speed of light in vacuum?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], correct: 0, difficulty: "medium" },
        { question: "Which particle has no electric charge?", options: ["Proton", "Electron", "Neutron", "Positron"], correct: 2, difficulty: "easy" },
        { question: "What is the formula for kinetic energy?", options: ["E = mc²", "KE = ½mv²", "F = ma", "P = mv"], correct: 1, difficulty: "medium" },
        { question: "What phenomenon explains why the sky is blue?", options: ["Refraction", "Reflection", "Rayleigh scattering", "Diffraction"], correct: 2, difficulty: "hard" },
        { question: "What is the unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 2, difficulty: "easy" }
    ],
    chemistry: [
        { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2, difficulty: "easy" },
        { question: "What is the pH of pure water?", options: ["0", "7", "14", "1"], correct: 1, difficulty: "easy" },
        { question: "Which element has the atomic number 6?", options: ["Oxygen", "Nitrogen", "Carbon", "Helium"], correct: 2, difficulty: "medium" },
        { question: "What type of bond shares electrons?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], correct: 1, difficulty: "medium" },
        { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correct: 2, difficulty: "easy" },
        { question: "What is Avogadro's number approximately?", options: ["6.02 × 10²³", "3.14 × 10⁸", "9.81 × 10¹⁰", "1.38 × 10⁻²³"], correct: 0, difficulty: "hard" }
    ],
    biology: [
        { question: "What organelle is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], correct: 2, difficulty: "easy" },
        { question: "What molecule carries genetic information?", options: ["RNA", "Protein", "DNA", "ATP"], correct: 2, difficulty: "easy" },
        { question: "How many chambers does the human heart have?", options: ["2", "3", "4", "5"], correct: 2, difficulty: "easy" },
        { question: "What is the largest organ in the human body?", options: ["Liver", "Brain", "Skin", "Lungs"], correct: 2, difficulty: "medium" },
        { question: "What process do plants use to make food?", options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], correct: 1, difficulty: "easy" },
        { question: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Organ"], correct: 2, difficulty: "easy" }
    ],
    astronomy: [
        { question: "What is the closest star to Earth?", options: ["Proxima Centauri", "The Sun", "Sirius", "Betelgeuse"], correct: 1, difficulty: "easy" },
        { question: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correct: 1, difficulty: "easy" },
        { question: "What is the largest planet in our solar system?", options: ["Saturn", "Neptune", "Jupiter", "Uranus"], correct: 2, difficulty: "easy" },
        { question: "What galaxy do we live in?", options: ["Andromeda", "Milky Way", "Triangulum", "Sombrero"], correct: 1, difficulty: "easy" },
        { question: "What causes a solar eclipse?", options: ["Earth blocks the Sun", "Moon blocks the Sun", "Sun blocks the Moon", "Planets align"], correct: 1, difficulty: "medium" },
        { question: "What is a light-year?", options: ["Time unit", "Distance unit", "Speed unit", "Mass unit"], correct: 1, difficulty: "medium" }
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