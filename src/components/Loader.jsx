import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
      >
        {/* Container for perfectly stacked M */}
        <div className="relative w-fit h-[100px]">
          {/* Base Gray M */}
          <span className="block text-[100px] font-bold text-gray-400 leading-none select-none relative z-10">
            M
          </span>

          {/* White fill animation mask */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-full overflow-hidden z-20"
          >
            <span className="block text-[100px] font-bold text-white leading-none select-none">
              M
            </span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
