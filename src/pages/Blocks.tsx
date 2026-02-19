import { motion } from 'framer-motion';
import { Blocks as BlocksIcon, Clock, Cpu, HardDrive } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { mockBlocks, formatAddress, formatTime } from '@/lib/mockData';

const Blocks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">Block Explorer</h1>
          <p className="text-sm text-muted-foreground mt-1">Browse the latest blocks on the chain</p>
        </div>

        <div className="space-y-3">
          {mockBlocks.map((block, i) => (
            <motion.div
              key={block.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl glass shadow-card p-5 hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BlocksIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-semibold text-primary">#{block.number}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" /> {formatTime(block.timestamp)}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-muted-foreground mt-1 hidden sm:block">
                      {formatAddress(block.hash, 12)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{block.transactions} txns</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{(block.size / 1000).toFixed(1)} KB</span>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground hidden md:block">
                    Miner: {formatAddress(block.miner, 4)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blocks;
