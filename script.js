// Mock API function to simulate fetching player's cards
function mockGetPlayerCards(playerName) {
  const mockResponse = {
      player: playerName,
      cards: ["A♥", "7♠", "10♦", "K♣"]
  };

  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(mockResponse);
      }, 1000);
  });
}

// Mock API function to simulate fetching played cards from all players
function mockGetPlayedCards() {
  const mockResponse = {
      playedCards: [
          { player: "Player 1", card: "3♦" },
          { player: "Player 2", card: "8♣" },
          { player: "Player 3", card: "J♠" },
          { player: "Player 4", card: "Q♥" }
      ]
  };

  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(mockResponse);
      }, 1000);
  });
}

// Function to fetch and display player's own cards
async function getPlayerCards(playerName) {
  try {
      const data = await mockGetPlayerCards(playerName);
      displayPlayerCards(data.cards, playerName);
  } catch (error) {
      console.error('Error fetching player cards:', error);
  }
}

// Function to fetch and display cards played in the play area
async function getPlayedCards() {
  try {
      const data = await mockGetPlayedCards();
      displayPlayedCards(data.playedCards);
  } catch (error) {
      console.error('Error fetching played cards:', error);
  }
}

// Function to display player's cards
function displayPlayerCards(cards, playerName) {
  const playerCardsContainer = document.getElementById('player-cards');
  const playerNameElement = document.getElementById('player-name');

  playerNameElement.textContent = playerName;
  playerCardsContainer.innerHTML = '';

  cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.textContent = card;
      playerCardsContainer.appendChild(cardElement);
  });
}

// Function to display played cards in the play area
function displayPlayedCards(playedCards) {
  const playedCardsContainer = document.getElementById('played-cards');
  playedCardsContainer.innerHTML = '';

  playedCards.forEach(entry => {
      const playedCardElement = document.createElement('div');
      playedCardElement.className = 'played-card';
      playedCardElement.textContent = `${entry.player}: ${entry.card}`;
      playedCardsContainer.appendChild(playedCardElement);
  });
}

// On page load, fetch and display both the player's cards and the played cards
document.addEventListener('DOMContentLoaded', () => {
  const playerName = 'player1';  // Replace with dynamic player name if needed
  getPlayerCards(playerName);
  getPlayedCards();
});
