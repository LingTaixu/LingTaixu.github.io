'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    // 使用路由对象进行页面跳转
    router.push('/dashboard');
  };

  return (
    <div>
      <button onClick={handleClick}>点击前往web3</button>
    </div>
  );
}
