"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CATEGORIES } from "./categories";
import SetupSection from "./components/setupSection";
import GameSection from "./components/gameSection";
import StartAnimation from "./components/startAnimation";

// helper functions
function getRandomImposter(players) {
  return Math.floor(Math.random() * players.length);
}

function getRandomWord(selectedCategories) {
  const allWords = selectedCategories.flatMap((cat) => CATEGORIES[cat]);
  return allWords[Math.floor(Math.random() * allWords.length)];
}

export default function Home() {
  // setup states
  const [players, setPlayers] = useState([
    { name: "" },
    { name: "" },
    { name: "" },
  ]);
  const categoryKeys = Object.keys(CATEGORIES);
  const [selectedCategories, setSelectedCategories] = useState(categoryKeys);
  const [started, setStarted] = useState(false);

  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [imposterIndex, setImposterIndex] = useState(null);
  const [word, setWord] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [cardKey, setCardKey] = useState(0);
  const [showStartAnimation, setShowStartAnimation] = useState(false);

  const addPlayer = () => setPlayers([...players, { name: "" }]);
  const removePlayer = (idx) => setPlayers(players.filter((_, i) => i !== idx));
  const updatePlayerName = (idx, name) => {
    setPlayers(players.map((p, i) => (i === idx ? { name } : p)));
  };

  const startGame = () => {
    const imp = getRandomImposter(players);
    const chosen = getRandomWord(selectedCategories);
    setImposterIndex(imp);
    setWord(chosen);
    setCurrentPlayer(0);
    setStarted(true);
    setShowCard(false);
    setCardKey(0);
  };

  const nextPlayer = () => {
    if (currentPlayer < players.length - 1) {
      setCurrentPlayer((c) => c + 1);
      setShowCard(false);
      setCardKey((k) => k + 1);
    } else {
      setShowStartAnimation(true);
      setTimeout(() => {
        setShowStartAnimation(false);
        setStarted(false);
      }, 1200);
    }
  };

  return (
    <div className="relative min-h-screen bg-red-500 flex flex-col text-white">
      <header className="pt-safe px-4 h-16 flex items-center justify-center relative">
        <h1 className="text-lg font-bold">Imposter</h1>
      </header>

      <StartAnimation show={showStartAnimation} />

      <AnimatePresence mode="wait" initial={false}>
        {!started ? (
          <SetupSection
            players={players}
            updatePlayerName={updatePlayerName}
            removePlayer={removePlayer}
            addPlayer={addPlayer}
            categoryKeys={categoryKeys}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            startGame={startGame}
          />
        ) : (
          <GameSection
            players={players}
            currentPlayer={currentPlayer}
            imposterIndex={imposterIndex}
            word={word}
            showCard={showCard}
            setShowCard={setShowCard}
            cardKey={cardKey}
            nextPlayer={nextPlayer}
          />
        )}
      </AnimatePresence>

      {started && (
        <div className=" px-6 text-center text-white/80 text-sm">
          Ziehe deine Karte nach oben, um das Wort zu sehen. Achte darauf, dass
          niemand sonst es sieht.
        </div>
      )}
    </div>
  );
}
