import { motion } from "framer-motion";
import CardReveal from "./cardReveal";

export default function GameSection({
  players,
  currentPlayer,
  imposterIndex,
  word,
  showCard,
  setShowCard,
  cardKey,
  nextPlayer,
}) {
  return (
    <motion.section
      key="game"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex-1 flex flex-col items-center justify-start pt-8"
    >
      <CardReveal
        players={players}
        currentPlayer={currentPlayer}
        imposterIndex={imposterIndex}
        word={word}
        showCard={showCard}
        setShowCard={setShowCard}
        cardKey={cardKey}
      />
      <button
        onClick={nextPlayer}
        className="w-3/4 py-3 bg-black rounded-xl text-center text-xl font-bold"
      >
        Weitergeben
      </button>
      <div className=" my-4 text-sm text-white/75">
        Spieler {currentPlayer + 1} von {players.length}
      </div>
    </motion.section>
  );
}
