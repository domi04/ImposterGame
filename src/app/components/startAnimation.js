import { AnimatePresence, motion } from "framer-motion";

export default function StartAnimation({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="startAnim"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={({ duration: 2.5 }, { type: "spring", stiffness: 100 })}
          className="absolute inset-0 bg-red-500 flex items-center justify-center z-50"
        >
          <span className="text-white text-4xl font-bold">
            Los geht&apos;s!
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
