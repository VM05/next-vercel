import Link from 'next/link';
import { MainLayout } from '@/layouts/MainLayout';

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className={'title'}>
        Ir a <Link href={'/about'}> About </Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className={'code'}>pages/index.tsx</code>
      </p>
    </MainLayout>
  );
}
