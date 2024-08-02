'use client';
import { useState, useEffect } from 'react';
import { BrowserProvider, ethers } from 'ethers';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { addAddress } from '@/store/slices/userAddressSlice';
const Connect = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    async function fetchBlock() {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        const userAddress = (await provider.getSigner()).address;
        setAddress(userAddress);
        dispatch(addAddress(userAddress)); // redux 添加地址
      }
    }
    fetchBlock();
  }, [setProvider, setAddress, dispatch]);

  return { address, provider };
};

export default Connect;
