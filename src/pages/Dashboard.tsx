import { Link } from 'react-router-dom';
import { Activity, Blocks, ArrowUpRight, TrendingUp, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import WalletCard from '@/components/WalletCard';
import StatsCard from '@/components/StatsCard';
import TransactionList from '@/components/TransactionList';
import { mockTransactions } from '@/lib/mockData';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Overview of your blockchain activity</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <WalletCard />
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatsCard title="Total Transactions" value="1,284" subtitle="+12 this week" icon={Activity} delay={0.1} />
            <StatsCard title="Blocks Confirmed" value="19.2M" subtitle="Latest: #19284580" icon={Blocks} delay={0.15} />
            <StatsCard title="Gas Spent" value="0.0842 ETH" subtitle="≈ $215.30" icon={ArrowUpRight} delay={0.2} />
            <StatsCard title="Net Flow" value="+3.05 ETH" subtitle="30-day trend" icon={TrendingUp} delay={0.25} />
          </div>
        </div>

        <div className="rounded-xl glass shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recent Transactions</h2>
            <Link to="/transactions" className="text-sm text-primary flex items-center gap-1 hover:underline">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <TransactionList transactions={mockTransactions} limit={4} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
