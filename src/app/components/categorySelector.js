export default function CategorySelector({
  categoryKeys,
  selectedCategories,
  setSelectedCategories,
}) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-semibold text-white">Kategorien</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {categoryKeys.map((cat) => {
          const isChecked = selectedCategories.includes(cat);
          const disableUncheck = selectedCategories.length === 1 && isChecked;
          return (
            <button
              key={cat}
              onClick={() => {
                if (isChecked && !disableUncheck) {
                  setSelectedCategories((prev) =>
                    prev.filter((c) => c !== cat)
                  );
                } else if (!isChecked) {
                  setSelectedCategories((prev) => [...prev, cat]);
                }
              }}
              disabled={disableUncheck}
              className={`relative rounded-xl px-4 py-3 text-sm font-medium text-left transition-all duration-200 border w-full flex items-center justify-between
                ${
                  isChecked
                    ? "text-white border-black shadow-md"
                    : " text-white border-white/30"
                }
                disabled:opacity-50`}
            >
              <span>{cat}</span>
              {isChecked && (
                <span className="ml-2 text-lg text-green-800 font-bold">✓</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
