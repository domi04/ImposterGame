export default function PlayerInputList({
  players,
  updatePlayerName,
  removePlayer,
  addPlayer,
}) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Spieler</h2>
      {players.map((p, idx) => (
        <div key={idx} className="flex items-center mb-3 gap-2">
          <input
            type="text"
            placeholder={`Spieler ${idx + 1}`}
            value={p.name}
            onChange={(e) => updatePlayerName(idx, e.target.value)}
            className="flex-1 bg-white text-black rounded-lg px-4 py-2 placeholder-gray-400"
          />
          {players.length > 3 && (
            <button
              onClick={() => removePlayer(idx)}
              className="text-white text-xl"
            >
              ✕
            </button>
          )}
        </div>
      ))}
      <button
        onClick={addPlayer}
        className="mt-1 mb-6 flex items-center justify-center gap-2 text-white font-medium"
      >
        + Spieler hinzufügen
      </button>
    </>
  );
}
