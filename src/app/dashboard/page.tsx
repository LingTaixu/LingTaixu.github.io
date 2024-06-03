"use client";
import { useState, useEffect } from 'react';
import { BrowserProvider, ethers } from 'ethers';

const MyComponent =  () => {
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [address, setAddress] = useState<string>('')

  useEffect(() => {
    async function fetchBlock() {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider)
        setAddress((await provider.getSigner()).address)
      }
    }
    fetchBlock()
  }, []);

  return (
    <div>
      <p> {address} </p>
    </div>
  );
}

export default MyComponent;