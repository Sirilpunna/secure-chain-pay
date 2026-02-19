import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { Transaction, formatAddress, formatTime } from '@/lib/mockData';

interface TransactionListProps {
  transactions: Transaction[];
  limit?: number;
}

const statusConfig = {
  confirmed: { icon: CheckCircle2, className: 'text-success' },
  pending: { icon: Clock, className: 'text-warning' },
  failed: { icon: XCircle, className: 'text-destructive' },
};

const TransactionList = ({ transactions, limit }: TransactionListProps) => {
  const items = limit ? transactions.slice(0, limit) : transactions;

  return (
    <div className="space-y-2">
      {items.map((tx, i) => {
        const StatusIcon = statusConfig[tx.status].icon;
        return (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between p-4 rounded-xl glass hover:border-primary/30 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${tx.type === 'send' ? 'bg-destructive/10' : 'bg-success/10'}`}>
                {tx.type === 'send' ? (
                  <ArrowUpRight className="w-5 h-5 text-destructive" />
                ) : (
                  <ArrowDownLeft className="w-5 h-5 text-success" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {tx.type === 'send' ? 'Sent' : 'Received'}
                  </span>
                  <StatusIcon className={`w-3.5 h-3.5 ${statusConfig[tx.status].className}`} />
                </div>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">
                  {tx.type === 'send' ? `To: ${formatAddress(tx.to, 4)}` : `From: ${formatAddress(tx.from, 4)}`}
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className={`text-sm font-semibold font-mono ${tx.type === 'send' ? 'text-destructive' : 'text-success'}`}>
                {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.currency}
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">{formatTime(tx.timestamp)}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TransactionList;
