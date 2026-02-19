export interface Transaction {
  id: string;
  hash: string;
  from: string;
  to: string;
  amount: number;
  currency: string;
  status: 'confirmed' | 'pending' | 'failed';
  timestamp: Date;
  blockNumber: number;
  confirmations: number;
  gasUsed: number;
  type: 'send' | 'receive';
}

export interface Block {
  number: number;
  hash: string;
  timestamp: Date;
  transactions: number;
  miner: string;
  gasUsed: number;
  size: number;
}

export interface Wallet {
  address: string;
  balance: number;
  currency: string;
  name: string;
}

const generateHash = () => '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
const generateAddr = () => '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

export const myWallet: Wallet = {
  address: '0x7a3B...F9e2',
  balance: 12.4583,
  currency: 'ETH',
  name: 'Main Wallet',
};

export const mockTransactions: Transaction[] = [
  { id: '1', hash: generateHash(), from: myWallet.address, to: generateAddr(), amount: 0.5, currency: 'ETH', status: 'confirmed', timestamp: new Date(Date.now() - 120000), blockNumber: 19284561, confirmations: 24, gasUsed: 21000, type: 'send' },
  { id: '2', hash: generateHash(), from: generateAddr(), to: myWallet.address, amount: 2.1, currency: 'ETH', status: 'confirmed', timestamp: new Date(Date.now() - 3600000), blockNumber: 19284520, confirmations: 65, gasUsed: 21000, type: 'receive' },
  { id: '3', hash: generateHash(), from: myWallet.address, to: generateAddr(), amount: 0.05, currency: 'ETH', status: 'pending', timestamp: new Date(Date.now() - 30000), blockNumber: 19284580, confirmations: 2, gasUsed: 21000, type: 'send' },
  { id: '4', hash: generateHash(), from: generateAddr(), to: myWallet.address, amount: 1.25, currency: 'ETH', status: 'confirmed', timestamp: new Date(Date.now() - 86400000), blockNumber: 19283200, confirmations: 1200, gasUsed: 32000, type: 'receive' },
  { id: '5', hash: generateHash(), from: myWallet.address, to: generateAddr(), amount: 0.75, currency: 'ETH', status: 'failed', timestamp: new Date(Date.now() - 172800000), blockNumber: 19281800, confirmations: 0, gasUsed: 21000, type: 'send' },
  { id: '6', hash: generateHash(), from: generateAddr(), to: myWallet.address, amount: 5.0, currency: 'ETH', status: 'confirmed', timestamp: new Date(Date.now() - 259200000), blockNumber: 19280500, confirmations: 3400, gasUsed: 21000, type: 'receive' },
];

export const mockBlocks: Block[] = Array.from({ length: 10 }, (_, i) => ({
  number: 19284580 - i,
  hash: generateHash(),
  timestamp: new Date(Date.now() - i * 12000),
  transactions: Math.floor(Math.random() * 200) + 50,
  miner: generateAddr(),
  gasUsed: Math.floor(Math.random() * 15000000) + 5000000,
  size: Math.floor(Math.random() * 50000) + 20000,
}));

export const formatAddress = (addr: string, chars = 6) => {
  if (addr.length <= chars * 2 + 2) return addr;
  return `${addr.slice(0, chars + 2)}...${addr.slice(-chars)}`;
};

export const formatTime = (date: Date) => {
  const diff = Date.now() - date.getTime();
  if (diff < 60000) return `${Math.floor(diff / 1000)}s ago`;
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  return `${Math.floor(diff / 86400000)}d ago`;
};
