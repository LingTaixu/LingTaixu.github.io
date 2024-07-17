'use client';
import Connect from '@/components/connect';

const viewAddress = () => {
  const { address, provider } = Connect();
  console.log(provider);

  return (
    <div>
      <p> {address} </p>
    </div>
  );
};

export default viewAddress;
