'use client'; // 确保这是一个客户端组件

import { ethers, isAddress } from 'ethers';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const provider = new ethers.JsonRpcProvider(
  'https://data-seed-prebsc-1-s3.binance.org:8545'
); // BNB 测试 RPC

const useBnbBalance = () => {
  const address = useSelector((state: RootState) => state.userAddress.address);
  const [balance, setBalance] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (!isAddress(address)) {
          throw new Error('Invalid address');
        }
        const balanceBigNumber = await provider.getBalance(address);
        const balanceInEth = ethers.formatEther(balanceBigNumber); // 转换为以 BNB 为单位的字符串
        setBalance(balanceInEth);
      } catch (error) {
        console.error('Error fetching BNB balance:', error);
        setError('Failed to fetch balance');
      } finally {
        setLoading(false);
      }
    };

    if (address) {
      fetchBalance();
    } else {
      setLoading(false); // 地址为空时不再加载
    }
  }, [address]);

  return { address, balance, loading, error };
};

export default useBnbBalance;
