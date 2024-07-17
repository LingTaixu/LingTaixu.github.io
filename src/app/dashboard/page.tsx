'use client';
import Connect from '@/components/connect';

const viewAddress = () => {
  const { address } = Connect();

  return (
    <div>
      <p> {address} </p>
    </div>
  );
};

export default viewAddress;
