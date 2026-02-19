import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import TransactionList from '@/components/TransactionList';
import { mockTransactions } from '@/lib/mockData';

const filters = ['All', 'Sent', 'Received', 'Pending', 'Failed'] as const;

const Transactions = () => {
  const [active, setActive] = useState<typeof filters[number]>('All');

  const filtered = mockTransactions.filter(tx => {
    if (active === 'All') return true;
    if (active === 'Sent') return tx.type === 'send';
    if (active === 'Received') return tx.type === 'receive';
    if (active === 'Pending') return tx.status === 'pending';
    if (active === 'Failed') return tx.status === 'failed';
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">Transactions</h1>
          <p className="text-sm text-muted-foreground mt-1">Full history of your on-chain activity</p>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === f ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl glass shadow-card p-6"
        >
          {filtered.length > 0 ? (
            <TransactionList transactions={filtered} />
          ) : (
            <p className="text-center text-muted-foreground py-12">No transactions found.</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Transactions;
