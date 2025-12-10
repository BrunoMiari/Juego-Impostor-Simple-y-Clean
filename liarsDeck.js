/**
 * Lógica para el modo Liar's Deck
 */

window.LiarsDeck = (function () {
    const STATE = {
        deck: [],
        players: [], // { name: string, isAlive: boolean, id: number }
        hands: {}, // map playerIndex -> [] of cards
        activePlayers: [], // params of indices
        currentPlayerIndex: 0, // index in activePlayers
        tableType: '', // 'KING', 'QUEEN', 'ACE'
        tableValue: '', // 'K', 'Q', 'A'
        lastPlay: null, // { playerIndex, cards: [cardObj], claimedAmount: 0 }
        revolverChamber: 0,
        bulletChamber: 0,
        isChallengeActive: false,
        selectedCards: [],
        turnCount: 0
    };

    const CARDS = {
        KING: { type: 'KING', value: 'K', label: 'REY' },
        QUEEN: { type: 'QUEEN', value: 'Q', label: 'REINA' },
        ACE: { type: 'ACE', value: 'A', label: 'AS' },
        JOKER: { type: 'JOKER', value: 'J', label: 'JOKER' }
    };

    function init(playerNames) {
        console.log("Iniciando Liar's Deck con:", playerNames);

        // Inicializar jugadores
        STATE.players = playerNames.map((name, idx) => ({
            name: name,
            isAlive: true,
            id: idx,
            shotCount: 0
        }));

        STATE.activePlayers = STATE.players.map(p => p.id);

        // Resetear revolver
        resetRevolver();

        startNewRound();
    }

    function resetRevolver() {
        STATE.revolverChamber = Math.floor(Math.random() * 6);
        STATE.bulletChamber = Math.floor(Math.random() * 6);
        console.log(`Revolver cargado. Bala en cámara: ${STATE.bulletChamber}`); // Debug
    }

    function createDeck() {
        const deck = [];
        // 6 Reyes, 6 Reinas, 6 Ases
        for (let i = 0; i < 6; i++) deck.push({ ...CARDS.KING, id: `K${i}` });
        for (let i = 0; i < 6; i++) deck.push({ ...CARDS.QUEEN, id: `Q${i}` });
        for (let i = 0; i < 6; i++) deck.push({ ...CARDS.ACE, id: `A${i}` });
        // 2 Jokers
        for (let i = 0; i < 2; i++) deck.push({ ...CARDS.JOKER, id: `J${i}` });

        // Barajar (Fisher-Yates)
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        return deck;
    }

    function startNewRound() {
        STATE.deck = createDeck();
        STATE.hands = {};
        STATE.lastPlay = null;
        STATE.selectedCards = [];
        STATE.turnCount = 0;

        // Repartir cartas equitativamente
        // Si sobran cartas, se pueden descartar o dar extra?
        // En Liar's Bar original se reparten distinto, pero aquí repartiremos todo lo posible
        // 20 cartas. 
        // 3 jugadores: 6 c/u (sobran 2)
        // 4 jugadores: 5 c/u
        // 5 jugadores: 4 c/u

        const numPlayers = STATE.activePlayers.length;
        const cardsPerPlayer = Math.floor(20 / numPlayers);

        STATE.activePlayers.forEach(pid => {
            STATE.hands[pid] = STATE.deck.splice(0, cardsPerPlayer);
        });

        // Elegir mesa aleatoria
        const types = [CARDS.KING, CARDS.QUEEN, CARDS.ACE];
        const selected = types[Math.floor(Math.random() * types.length)];
        STATE.tableType = selected.type;
        STATE.tableValue = selected.value;

        // Primer jugador aleatorio o siguiente?
        // Empezamos con el primero de la lista de activos
        STATE.currentPlayerIndex = 0;

        updateTableInfo();

        updateTableInfo();

        const screen = document.getElementById('liars-deck-interstitial-screen');
        showScreen('liars-deck-interstitial-screen');
        // Forzar display flex por si el CSS falla
        if (screen) {
            screen.style.display = 'flex';
            screen.style.zIndex = '9999';
            screen.classList.add('active'); // Redundant but safe
        }
        updateInterstitial();
    }

    function updateTableInfo() {
        const typeSpan = document.getElementById('liars-table-type');
        let label = '';
        if (STATE.tableType === 'KING') label = 'REYES (K)';
        else if (STATE.tableType === 'QUEEN') label = 'REINAS (Q)';
        else if (STATE.tableType === 'ACE') label = 'ASES (A)';

        typeSpan.textContent = label;
        typeSpan.className = 'highlight-type ' + STATE.tableType.toLowerCase();
    }

    function updateInterstitial() {
        const pid = STATE.activePlayers[STATE.currentPlayerIndex];
        if (pid === undefined || !STATE.players[pid]) {
            console.error("Error: Jugador no encontrado", pid);
            return;
        }
        const player = STATE.players[pid];
        document.getElementById('liars-next-player-name').textContent = player.name;
    }

    function startTurn() {
        showScreen('liars-deck-turn-screen');
        renderHand();
        updateTurnUI();
    }

    function updateTurnUI() {
        const pid = STATE.activePlayers[STATE.currentPlayerIndex];
        const player = STATE.players[pid];
        document.getElementById('liars-current-player').textContent = player.name;
        document.getElementById('liars-selected-count').textContent = STATE.selectedCards.length;

        // Renderizar contador de disparos
        const counterContainer = document.getElementById('liars-shot-counter-container');
        if (counterContainer) {
            counterContainer.innerHTML = '';
            STATE.players.forEach(p => {
                if (!p.isAlive) return;

                const badge = document.createElement('div');
                badge.className = 'player-shot-badge';
                if (p.id === pid) badge.classList.add('current');

                badge.innerHTML = `
                    <span class="player-name">${p.name}</span>
                    <span class="shot-icon">🔫</span>
                    <span class="shot-count">${p.shotCount || 0}</span>
                `;
                counterContainer.appendChild(badge);
            });
        }

        const challengeBtn = document.getElementById('liars-challenge-btn');
        const playBtn = document.getElementById('liars-play-btn');

        // Lógica para mostrar botones
        // Si no hay jugada anterior, no se puede desafiar
        if (!STATE.lastPlay) {
            challengeBtn.classList.add('hidden');
        } else {
            challengeBtn.classList.remove('hidden');

            // Regla especial: 2 jugadores, si el anterior tiró todas sus cartas, OBLIGADO a levantar
            if (STATE.activePlayers.length === 2 && STATE.lastPlay.isLastCards) {
                playBtn.classList.add('hidden'); // No puede jugar, solo levantar
                // Podríamos añadir un mensaje explicando por qué
            } else {
                playBtn.classList.remove('hidden');
            }
        }
    }

    function renderHand() {
        const container = document.getElementById('liars-hand-container');
        container.innerHTML = '';

        const pid = STATE.activePlayers[STATE.currentPlayerIndex];
        const hand = STATE.hands[pid];

        if (!hand) {
            console.error("Error: Mano no encontrada para jugador", pid);
            return;
        }

        STATE.selectedCards = []; // Reset selection on render
        document.getElementById('liars-selected-count').textContent = '0';

        hand.forEach((card, idx) => {
            const cardEl = document.createElement('div');
            cardEl.className = `card ${card.type.toLowerCase()}`;
            cardEl.innerHTML = `
                <div class="card-value">${card.value}</div>
                <div class="card-suit">${getSuitIcon(card.type)}</div>
            `;
            cardEl.onclick = () => toggleCardSelection(idx, cardEl);
            container.appendChild(cardEl);
        });
    }

    function getSuitIcon(type) {
        if (type === 'KING') return '👑';
        if (type === 'QUEEN') return '👸';
        if (type === 'ACE') return '🅰️';
        if (type === 'JOKER') return '🃏';
        return '?';
    }

    function toggleCardSelection(cardIdx, element) {
        const indexInSelection = STATE.selectedCards.indexOf(cardIdx);

        if (indexInSelection >= 0) {
            // Deseleccionar
            STATE.selectedCards.splice(indexInSelection, 1);
            element.classList.remove('selected');
        } else {
            // Seleccionar (max 3)
            if (STATE.selectedCards.length < 3) {
                STATE.selectedCards.push(cardIdx);
                element.classList.add('selected');
            }
        }

        document.getElementById('liars-selected-count').textContent = STATE.selectedCards.length;
    }

    function playCards() {
        if (STATE.selectedCards.length === 0) {
            alert("Debes seleccionar al menos una carta.");
            return;
        }

        const pid = STATE.activePlayers[STATE.currentPlayerIndex];
        const hand = STATE.hands[pid];

        // Obtener objetos de carta y quitarlos de la mano (de atrás hacia adelante para no afectar índices)
        // Pero selectedCards tiene índices. Ordenamos desc
        STATE.selectedCards.sort((a, b) => b - a);

        const playedCards = [];
        STATE.selectedCards.forEach(idx => {
            playedCards.push(hand[idx]);
            hand.splice(idx, 1);
        });

        const isLastCards = hand.length === 0;

        // Registrar jugada
        STATE.lastPlay = {
            playerIndex: pid,
            cards: playedCards,
            claimedAmount: playedCards.length,
            isLastCards: isLastCards
        };

        // Si se quedó sin cartas, y NO es 1v1 final, ¿qué pasa?
        // En Liar's bar, sigues jugando hasta ser desafiado o ganar ronda.
        // Si ganas ronda (todos pasan sin desafiarte), ganas.

        nextTurn();
    }

    function nextTurn() {
        STATE.currentPlayerIndex = (STATE.currentPlayerIndex + 1) % STATE.activePlayers.length;

        // Reset selections
        STATE.selectedCards = [];

        // Si volvemos al jugador que jugó último (nadie desafío), la ronda termina y se descartan las cartas
        // Pero en Liar's Bar, el juego continúa hasta que alguien desafíe.

        showScreen('liars-deck-interstitial-screen');
        updateInterstitial();
    }

    function challenge() {
        if (!STATE.lastPlay) return;

        showScreen('liars-deck-roulette-screen');

        const lastPlayer = STATE.players[STATE.lastPlay.playerIndex];
        const resultArea = document.getElementById('challenge-result-area');

        // Verificar mentira
        let isLiar = false;

        // Son mentirosos si ALGUNA de las cartas NO coincide con la mesa Y NO es Joker
        // Joker cuenta como comodín (siempre valido)
        STATE.lastPlay.cards.forEach(card => {
            if (card.type !== 'JOKER' && card.type !== STATE.tableType) {
                isLiar = true;
            }
        });

        // HTML para mostrar las cartas
        let cardsHtml = STATE.lastPlay.cards.map(card => `
            <div class="card ${card.type.toLowerCase()} revealed">
                <div class="card-value">${card.value}</div>
                <div class="card-suit">${getSuitIcon(card.type)}</div>
            </div>
        `).join('');

        let resultText = '';
        let resultClass = '';
        let victimPlayer = null; // Quien recibe el disparo

        if (isLiar) {
            resultText = `¡${lastPlayer.name} MINTIÓ! 🤥`;
            resultClass = 'liar-detected';
            victimPlayer = lastPlayer;
        } else {
            resultText = `¡${lastPlayer.name} DIJO LA VERDAD! ✅`;
            resultClass = 'truth-confirmed';
            // El desafiante (jugador actual) recibe el disparo
            const currentPid = STATE.activePlayers[STATE.currentPlayerIndex];
            victimPlayer = STATE.players[currentPid];
        }

        resultArea.innerHTML = `
            <h3 class="${resultClass}">${resultText}</h3>
            <div class="cards-reveal-container">
                ${cardsHtml}
            </div>
            <p><strong>${victimPlayer.name}</strong> debe probar su suerte...</p>
        `;

        // Preparar revolver
        STATE.victimPlayerId = victimPlayer.id; // Guardamos quien va a disparar
        document.getElementById('revolver-area').classList.remove('hidden');
        document.getElementById('revolver-message').textContent = "Gira el tambor...";
        document.getElementById('liars-trigger-btn').disabled = false;
    }

    function pullTrigger() {
        const btn = document.getElementById('liars-trigger-btn');
        btn.disabled = true;

        const msg = document.getElementById('revolver-message');
        msg.textContent = "Girando...";

        // Simular retardo
        setTimeout(() => {
            // Lógica de disparo
            // STATE.revolverChamber
            // STATE.bulletChamber (fijo al inicio de partida/ronda?)
            // En la vida real gira cada vez? O es posición fija?
            // User requested: "De 6 balas que tiene el revolver 1 es live... En que camara esta la bala es aleatorio"
            // Vamos a simular que gira y cae en una aleatoria ahora.

            const currentChamber = Math.floor(Math.random() * 6);
            const isHit = (currentChamber === STATE.bulletChamber);

            if (isHit) {
                msg.textContent = "¡BANG! 💥";
                msg.className = "shot-fired";
                setTimeout(() => eliminatePlayer(STATE.victimPlayerId), 1500);
            } else {
                msg.textContent = "Click... (Vacío) 😅";
                msg.className = "shot-missed";

                // Incrementar contador de disparos sobrevivios
                const victim = STATE.players[STATE.victimPlayerId];
                victim.shotCount++;

                setTimeout(() => continueGame(), 1500);
            }

        }, 1000);
    }

    function eliminatePlayer(pid) {
        const player = STATE.players[pid];
        player.isAlive = false;

        // Remover de activos
        STATE.activePlayers = STATE.activePlayers.filter(id => id !== pid);

        // Verificar victoria
        if (STATE.activePlayers.length === 1) {
            const winnerId = STATE.activePlayers[0];
            const winner = STATE.players[winnerId];
            showWinScreen(winner);
        } else {
            // Empezar nueva ronda con los que quedan
            alert(`${player.name} ha sido eliminado.`);
            startNewRound();
        }
    }

    function continueGame() {
        // Si sobrevive, empieza nueva ronda (cartas nuevas, mesa nueva)
        // O sigue la ronda? En Liar's Bar, si sobrevives, la ronda termina y empieza otra?
        // Generalmente una "Mano" termina cuando se desafía.
        startNewRound();
    }

    function showWinScreen(winner) {
        // Reutilizar pantalla de resultados del main si es posible, o una custom
        const resultsDiv = document.getElementById('results-content');
        if (resultsDiv) {
            resultsDiv.innerHTML = `
                <div class="winner-announcement innocent-win">
                    <h1>👑 ¡GANADOR!</h1>
                    <h2>${winner.name}</h2>
                    <p>Ha sobrevivido al Liar's Deck</p>
                </div>
            `;
            showScreen('results-screen');
        }
    }

    return {
        init: init,
        startTurn: startTurn,
        playCards: playCards,
        challenge: challenge,
        pullTrigger: pullTrigger
    };

})();
