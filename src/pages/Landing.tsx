import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Zap, Globe, ArrowRight, ChevronRight } from 'lucide-react';
import BlockchainVisual from '@/components/BlockchainVisual';

const features = [
  { icon: Shield, title: 'Military-Grade Security', desc: 'End-to-end encryption with SHA-256 hashing ensures every transaction is tamper-proof.' },
  { icon: Lock, title: 'Immutable Ledger', desc: 'Once confirmed, transactions are permanently recorded on the blockchain.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Sub-second transaction processing with instant confirmations on our network.' },
  { icon: Globe, title: 'Decentralized', desc: 'No single point of failure. Your transactions are distributed across the network.' },
];

const Landing = () => {
  return (
    <div className="min-h-screen relative">
      {/* Grid background */}
      <div className="fixed inset-0 grid-pattern opacity-50" />
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Network Active — 19,284,580 blocks
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              Secure Transactions
              <br />
              <span className="text-gradient">On The Blockchain</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              ChainVault delivers military-grade encrypted transactions with full transparency,
              immutability, and real-time verification on a decentralized ledger.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-blockchain text-primary-foreground font-semibold text-sm shadow-glow hover:opacity-90 transition-opacity"
              >
                Launch Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blocks"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass text-foreground font-semibold text-sm hover:border-primary/50 transition-colors"
              >
                Explore Blocks
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16"
          >
            <BlockchainVisual />
          </motion.div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for <span className="text-gradient">Trust & Speed</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every component engineered for maximum security and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl glass shadow-card p-6 group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats bar */}
        <section className="container mx-auto px-4 py-16">
          <div className="rounded-2xl glass shadow-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Transactions', value: '2.4M+' },
              { label: 'Active Wallets', value: '184K' },
              { label: 'Blocks Mined', value: '19.2M' },
              { label: 'Network Uptime', value: '99.99%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-blockchain flex items-center justify-center">
                <Shield className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-semibold text-sm text-foreground">ChainVault</span>
            </div>
            <p className="text-xs text-muted-foreground">© 2026 ChainVault. Secure blockchain transactions.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
