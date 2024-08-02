'use client';
import Connect from '@/components/connect';
import { useRouter } from 'next/navigation';
const viewAddress = () => {
  const { address } = Connect();
  const router = useRouter();

  const handleClick = () => {
    // 使用路由对象进行页面跳转
    router.push('/balance');
  };
  return (
    <div>
      <p> {address} </p>

      <p onClick={handleClick}>to Balance</p>
    </div>
  );
};

export default viewAddress;
