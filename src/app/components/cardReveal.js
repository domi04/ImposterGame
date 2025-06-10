import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function CardReveal({
  players,
  currentPlayer,
  imposterIndex,
  word,
  showCard,
  setShowCard,
  cardKey,
}) {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-start relative">
      {/* Back of card */}
      <div className="w-80 h-56 bg-white rounded-2xl overflow-hidden shadow-lg flex ">
        <div className="flex-1 flex flex-col items-center justify-center">
          <span className="text-sm uppercase text-gray-500 mb-2">
            Geheimes Wort
          </span>
          <span
            className={`text-3xl font-bold ${
              currentPlayer === imposterIndex ? "text-red-500" : "text-black"
            }`}
          >
            {currentPlayer === imposterIndex ? "Imposter" : word}
          </span>
        </div>
      </div>
      {/* Front of card */}
      {!showCard && (
        <motion.div
          key={cardKey}
          drag="y"
          dragConstraints={{ top: -200, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => info.point.y < -100 && setShowCard(true)}
          className="absolute top-0 w-80 h-56 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center cursor-grab"
        >
          <span className="text-base text-gray-600 mb-1">Nächster Spieler</span>
          <span className="text-2xl font-bold mb-2 text-black">
            {players[currentPlayer].name}
          </span>
          <div className="flex items-center gap-1 text-gray-400">
            <ArrowUp size={16} />
            <span className="text-sm">Ziehe hoch</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
