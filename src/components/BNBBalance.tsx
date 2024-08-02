'use client'; // 确保这是一个客户端组件

import useBnbBalance from '@/hooks/useBnbBalance';

const AddressComponent = () => {
  const { address, balance, loading, error } = useBnbBalance();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User Address</h1>
      <p>Address: {address}</p>
      <p>BNB Balance: {balance !== null ? balance : 'N/A'}BNB</p>
    </div>
  );
};

export default AddressComponent;
