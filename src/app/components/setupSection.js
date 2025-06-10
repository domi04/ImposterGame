import { motion } from "framer-motion";
import PlayerInputList from "./playerInputList";
import CategorySelector from "./categorySelector";

export default function SetupSection({
  players,
  updatePlayerName,
  removePlayer,
  addPlayer,
  categoryKeys,
  selectedCategories,
  setSelectedCategories,
  startGame,
}) {
  return (
    <motion.section
      key="setup"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex-1 px-6 pt-4 overflow-auto"
    >
      <PlayerInputList
        players={players}
        updatePlayerName={updatePlayerName}
        removePlayer={removePlayer}
        addPlayer={addPlayer}
      />
      <CategorySelector
        categoryKeys={categoryKeys}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <button
        disabled={
          players.some((p) => !p.name.trim()) || selectedCategories.length === 0
        }
        onClick={startGame}
        className="w-full py-3 bg-black rounded-xl text-center text-xl font-bold disabled:opacity-50"
      >
        Spiel starten
      </button>
    </motion.section>
  );
}
