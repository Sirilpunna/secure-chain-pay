import { motion } from 'framer-motion';
import { Wallet, Copy, ExternalLink } from 'lucide-react';
import { myWallet } from '@/lib/mockData';
import { useToast } from '@/hooks/use-toast';

const WalletCard = () => {
  const { toast } = useToast();

  const copyAddress = () => {
    navigator.clipboard.writeText(myWallet.address);
    toast({ title: 'Address copied', description: 'Wallet address copied to clipboard' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl glass shadow-card p-6 relative overflow-hidden animate-pulse-glow"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-blockchain flex items-center justify-center">
            <Wallet className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{myWallet.name}</p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">{myWallet.address}</span>
              <button onClick={copyAddress} className="text-muted-foreground hover:text-primary transition-colors">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground" />
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">{myWallet.balance}</span>
          <span className="text-lg font-semibold text-primary">{myWallet.currency}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">≈ $31,892.45 USD</p>
      </div>
    </motion.div>
  );
};

export default WalletCard;
