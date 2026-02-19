import { motion } from 'framer-motion';

const BlockchainVisual = () => {
  const blocks = Array.from({ length: 5 });

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {blocks.map((_, i) => (
        <div key={i} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-xl glass shadow-glow flex items-center justify-center relative group cursor-pointer hover:border-primary/50 transition-colors"
          >
            <span className="font-mono text-xs text-primary font-semibold">
              #{19284580 - (4 - i)}
            </span>
            <div className="absolute -bottom-5 text-[10px] text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              {Math.floor(Math.random() * 200) + 50} txns
            </div>
          </motion.div>
          {i < blocks.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.3 }}
              className="w-6 md:w-10 h-0.5 bg-gradient-blockchain origin-left"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BlockchainVisual;
