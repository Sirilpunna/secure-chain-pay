import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send as SendIcon, AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { myWallet } from '@/lib/mockData';
import { useToast } from '@/hooks/use-toast';

const Send = () => {
  const { toast } = useToast();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const isValid = recipient.startsWith('0x') && recipient.length >= 10 && parseFloat(amount) > 0 && parseFloat(amount) <= myWallet.balance;

  const handleSend = async () => {
    if (!isValid) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 2000));
    setSending(false);
    setSent(true);
    toast({ title: 'Transaction Submitted', description: `Sent ${amount} ETH successfully. Awaiting confirmation.` });
    setTimeout(() => {
      setSent(false);
      setRecipient('');
      setAmount('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl glass shadow-card p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-blockchain flex items-center justify-center">
              <SendIcon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Send Transaction</h1>
              <p className="text-xs text-muted-foreground">Transfer ETH securely on-chain</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Recipient Address</label>
              <input
                type="text"
                placeholder="0x..."
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Amount (ETH)</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.001"
                  placeholder="0.00"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <button
                  onClick={() => setAmount(myWallet.balance.toString())}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-primary font-semibold hover:underline"
                >
                  MAX
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Balance: {myWallet.balance} ETH</p>
            </div>

            {parseFloat(amount) > myWallet.balance && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertTriangle className="w-4 h-4" />
                Insufficient balance
              </div>
            )}

            <div className="rounded-lg bg-secondary/50 p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Network Fee</span>
                <span className="text-foreground font-mono">~0.002 ETH</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total</span>
                <span className="text-foreground font-mono font-semibold">
                  {amount ? (parseFloat(amount) + 0.002).toFixed(4) : '0.0020'} ETH
                </span>
              </div>
            </div>

            <button
              onClick={handleSend}
              disabled={!isValid || sending || sent}
              className="w-full py-3.5 rounded-xl bg-gradient-blockchain text-primary-foreground font-semibold text-sm shadow-glow disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              {sending ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
              ) : sent ? (
                <><CheckCircle2 className="w-4 h-4" /> Transaction Sent!</>
              ) : (
                <><SendIcon className="w-4 h-4" /> Send Transaction</>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Send;
